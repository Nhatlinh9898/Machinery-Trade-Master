/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  MessageSquare, 
  Languages, 
  Volume2, 
  Search, 
  ChevronRight, 
  Settings,
  Info,
  CheckCircle2,
  AlertCircle,
  PlayCircle,
  ArrowRight,
  RefreshCcw,
  Zap
} from 'lucide-react';
import { VOCABULARY, PHRASES, DIALOGUES } from './data/mockData';
import { VocabularyItem, PhraseItem, Dialogue, DialogueLine } from './types';

type Tab = 'vocab' | 'phrases' | 'dialogues' | 'practice';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('vocab');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFurigana, setShowFurigana] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('Tất cả');
  const [selectedVocab, setSelectedVocab] = useState<VocabularyItem | null>(null);

  // Marked Colors State (ID -> Color Class)
  const [markedColors, setMarkedColors] = useState<Record<string, string>>(() => {
    const saved = localStorage.getItem('markedColors');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('markedColors', JSON.stringify(markedColors));
  }, [markedColors]);

  const toggleMarkColor = (id: string, color: string) => {
    setMarkedColors(prev => ({
      ...prev,
      [id]: prev[id] === color ? '' : color
    }));
  };

  // Practice & Quiz Mode State
  const [practiceSession, setPracticeSession] = useState<{
    type: 'dialogue' | 'phrase' | 'vocab' | 'flashcard' | 'quiz';
    subType?: 'phrase' | 'vocab';
    dialogue?: Dialogue;
    items?: any[];
    questions?: QuizQuestion[];
    score?: number;
    title: string;
    currentStep: number;
    userRole: 'buyer' | 'seller';
    isComplete: boolean;
  } | null>(null);

  const startQuiz = useCallback(() => {
    // 1. Pick 20 vocab for Multiple Choice
    const quizVocab = [...VOCABULARY].sort(() => Math.random() - 0.5).slice(0, 20);
    
    // 2. Pick 15 phrases for Scramble
    const quizPhrases = [...PHRASES].sort(() => Math.random() - 0.5).slice(0, 15);
    
    // 3. Dialogue Response Questions (Dynamic from DIALOGUES pool)
    const dialogueQuestions: QuizQuestion[] = [];
    const shuffledDialogues = [...DIALOGUES].sort(() => Math.random() - 0.5);
    
    for (const d of shuffledDialogues) {
      if (dialogueQuestions.length >= 15) break;
      for (let i = 0; i < d.lines.length - 1; i++) {
        const q = d.lines[i];
        const r = d.lines[i + 1];
        
        const rJp = r.jp.replace(/[？。！]/g, '');
        const chunks: string[] = [];
        for (let j = 0; j < rJp.length; j += 4) {
          chunks.push(rJp.slice(j, j + 4));
        }

        dialogueQuestions.push({
          type: 'response',
          contextJp: q.jp,
          contextVn: q.vn,
          jp: rJp,
          vn: r.vn,
          words: chunks.sort(() => Math.random() - 0.5)
        });
        
        if (dialogueQuestions.length >= 15) break;
      }
    }

    const questions: QuizQuestion[] = [
      ...quizVocab.map(v => ({
        type: 'choice' as const,
        jp: v.jp,
        vn: v.vn,
        furigana: v.furigana,
        options: [...VOCABULARY]
          .filter(x => x.id !== v.id)
          .sort(() => Math.random() - 0.5)
          .slice(0, 3)
          .map(x => x.vn)
          .concat(v.vn)
          .sort(() => Math.random() - 0.5)
      })),
      ...quizPhrases.map(p => {
        const chunks: string[] = [];
        for (let i = 0; i < p.jp.length; i += 2) {
          chunks.push(p.jp.slice(i, i + 2));
        }
        return {
          type: 'scramble' as const,
          jp: p.jp,
          vn: p.vn,
          words: chunks.sort(() => Math.random() - 0.5)
        };
      }),
      ...dialogueQuestions
    ].sort(() => Math.random() - 0.5).slice(0, 50);

    setPracticeSession({
      type: 'quiz',
      questions,
      score: 0,
      title: 'Bài thi năng lực tổng hợp (50 câu - 30 phút)',
      currentStep: 0,
      userRole: 'buyer',
      isComplete: false
    });
    setActiveTab('practice');
  }, []);

  const getRelatedData = (category: string) => {
    const relatedVocab = VOCABULARY.filter(v => v.category === category || category === 'Tất cả').slice(0, 5);
    const relatedPhrases = PHRASES.filter(p => p.category === category || category === 'Tất cả').slice(0, 3);
    return { relatedVocab, relatedPhrases };
  };

  const phraseCategories = ['Tất cả', ...new Set(PHRASES.map(p => p.category))];

  const speak = (text: string, lang: 'ja-JP' | 'en-US') => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  const startPractice = (dialogue: Dialogue, role: 'buyer' | 'seller' = 'buyer') => {
    setPracticeSession({
      type: 'dialogue',
      dialogue,
      title: dialogue.title,
      currentStep: 0,
      userRole: role,
      isComplete: false
    });
    setActiveTab('practice');
  };

  const MARKER_COLORS = [
    { name: 'Xanh lá', class: 'bg-emerald-500', border: 'border-emerald-500', shadow: 'shadow-emerald-100', light: 'bg-emerald-50' },
    { name: 'Vàng', class: 'bg-amber-500', border: 'border-amber-500', shadow: 'shadow-amber-100', light: 'bg-amber-50' },
    { name: 'Đỏ', class: 'bg-rose-500', border: 'border-rose-500', shadow: 'shadow-rose-100', light: 'bg-rose-50' },
    { name: 'Xanh dương', class: 'bg-sky-500', border: 'border-sky-500', shadow: 'shadow-sky-100', light: 'bg-sky-50' },
  ];

  const startDrillPractice = (type: 'phrase' | 'vocab', category: string) => {
    const items = type === 'phrase' 
      ? PHRASES.filter(p => category === 'Tất cả' || p.category === category)
      : VOCABULARY.filter(v => category === 'Tất cả' || v.category === category);
    
    setPracticeSession({
      type,
      items: items.slice(0, 15), 
      title: `Luyện tập ${type === 'phrase' ? 'Mẫu câu' : 'Từ vựng'}: ${category}`,
      currentStep: 0,
      userRole: 'buyer',
      isComplete: false
    });
    setActiveTab('practice');
  };

  const startFlashcardPractice = (subType: 'phrase' | 'vocab') => {
    const pool = subType === 'phrase' ? PHRASES : VOCABULARY;
    // Shuffle and pick 10
    const items = [...pool].sort(() => Math.random() - 0.5).slice(0, 10);
    
    setPracticeSession({
      type: 'flashcard',
      subType,
      items,
      title: `Flashcards: ${subType === 'phrase' ? 'Mẫu câu' : 'Từ vựng'}`,
      currentStep: 0,
      userRole: 'buyer',
      isComplete: false
    });
    setActiveTab('practice');
  };

  const startReviewPractice = () => {
    const markedIds = Object.keys(markedColors).filter(id => markedColors[id]);
    const items = [...PHRASES, ...VOCABULARY].filter(item => markedIds.includes(item.id));
    
    if (items.length === 0) return;

    setPracticeSession({
      type: 'vocab', // Use vocab layout for mixed items
      items,
      title: 'Ôn tập các mục đã đánh dấu',
      currentStep: 0,
      userRole: 'buyer',
      isComplete: false
    });
    setActiveTab('practice');
  };

  const startPracticeFromPhrase = (phrase: PhraseItem) => {
    // Find a dialogue that matches the phrase category
    const relatedDialogue = DIALOGUES.find(d => 
      d.title.toLowerCase().includes(phrase.category.toLowerCase()) ||
      d.lines.some(l => l.jp.includes(phrase.jp.slice(0, 5)))
    ) || DIALOGUES[0];

    startPractice(relatedDialogue, 'buyer');
  };

  const nextStep = () => {
    if (!practiceSession) return;
    
    const totalSteps = practiceSession.type === 'dialogue' 
      ? practiceSession.dialogue!.lines.length 
      : practiceSession.items!.length;

    const isNextStepAvailable = practiceSession.currentStep < totalSteps - 1;

    if (isNextStepAvailable) {
      const nextIdx = practiceSession.currentStep + 1;
      
      setPracticeSession({
        ...practiceSession,
        currentStep: nextIdx
      });

      // Auto-play for dialogue mode if it's NOT the user's turn
      if (practiceSession.type === 'dialogue') {
        const nextLine = practiceSession.dialogue!.lines[nextIdx];
        if (nextLine.role !== practiceSession.userRole) {
          setTimeout(() => speak(nextLine.jp, 'ja-JP'), 500);
        }
      }
    } else {
      setPracticeSession({
        ...practiceSession,
        isComplete: true
      });
    }
  };

  const filteredVocab = VOCABULARY.filter(v => 
    v.vn.toLowerCase().includes(searchQuery.toLowerCase()) || 
    v.jp.toLowerCase().includes(searchQuery.toLowerCase()) ||
    v.en.toLowerCase().includes(searchQuery.toLowerCase())
  ).sort((a, b) => {
    if (!searchQuery) return 0;
    const q = searchQuery.toLowerCase();
    
    // Primary score: exact matches or starts with the query
    const aMatch = a.jp.toLowerCase().startsWith(q) || a.vn.toLowerCase().startsWith(q);
    const bMatch = b.jp.toLowerCase().startsWith(q) || b.vn.toLowerCase().startsWith(q);
    
    if (aMatch && !bMatch) return -1;
    if (!aMatch && bMatch) return 1;
    
    return 0;
  });

  const filteredPhrases = PHRASES.filter(p => {
    const matchesSearch = p.vn.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.jp.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'Tất cả' || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  }).sort((a, b) => {
    if (!searchQuery) return 0;
    const q = searchQuery.toLowerCase();
    
    // Bring matches to the top
    const aMatch = a.jp.toLowerCase().startsWith(q) || a.vn.toLowerCase().startsWith(q);
    const bMatch = b.jp.toLowerCase().startsWith(q) || b.vn.toLowerCase().startsWith(q);
    
    if (aMatch && !bMatch) return -1;
    if (!aMatch && bMatch) return 1;
    
    return 0;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-600 rounded-lg text-white">
              <Languages size={24} />
            </div>
            <div>
              <h1 className="font-bold text-xl tracking-tight">Machinery Trade Master</h1>
              <p className="text-xs text-slate-500 font-medium">JP - VN - EN Learning Tool</p>
            </div>
          </div>
          <button 
            onClick={() => setShowFurigana(!showFurigana)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
              showFurigana ? 'bg-indigo-100 text-indigo-700' : 'bg-slate-100 text-slate-600'
            }`}
          >
            {showFurigana ? 'Furigana: ON' : 'Furigana: OFF'}
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Search Bar */}
        {activeTab !== 'practice' && (
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Tìm kiếm từ vựng, mẫu câu..." 
              className="w-full bg-white border border-slate-200 rounded-2xl py-4 pl-12 pr-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        )}

        {/* Tab Navigation */}
        <div className="flex gap-2 p-1 bg-slate-200/50 rounded-xl mb-8">
          {[
            { id: 'vocab', label: 'Từ vựng', icon: BookOpen },
            { id: 'phrases', label: 'Mẫu câu', icon: Info },
            { id: 'dialogues', label: 'Hội thoại', icon: MessageSquare },
            { id: 'practice', label: 'Luyện tập', icon: Zap },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id as Tab);
              }}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-medium transition-all ${
                activeTab === tab.id 
                  ? 'bg-white text-indigo-600 shadow-sm' 
                  : 'text-slate-600 hover:bg-white/50'
              }`}
            >
              <tab.icon size={18} />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          {activeTab === 'vocab' && (
            <motion.div 
              key="vocab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {filteredVocab.map((item) => (
                <VocabCard 
                  key={item.id} 
                  item={item} 
                  showFurigana={showFurigana} 
                  onSpeak={speak} 
                  onSelect={() => setSelectedVocab(item)}
                  markedColor={markedColors[item.id]}
                  onMark={(color) => toggleMarkColor(item.id, color)}
                  markerColors={MARKER_COLORS}
                />
              ))}
            </motion.div>
          )}

          {activeTab === 'phrases' && (
            <motion.div 
              key="phrases"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {phraseCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                      selectedCategory === cat
                        ? 'bg-indigo-600 text-white shadow-md'
                        : 'bg-white text-slate-600 border border-slate-200 hover:border-indigo-300'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="space-y-4">
                {filteredPhrases.length > 0 ? (
                  filteredPhrases.map((phrase) => (
                    <PhraseCard 
                      key={phrase.id} 
                      phrase={phrase} 
                      onSpeak={speak} 
                      onPractice={() => startPracticeFromPhrase(phrase)}
                      markedColor={markedColors[phrase.id]}
                      onMark={(color) => toggleMarkColor(phrase.id, color)}
                      markerColors={MARKER_COLORS}
                    />
                  ))
                ) : (
                  <div className="text-center py-12 text-slate-400">
                    Không tìm thấy mẫu câu phù hợp
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {activeTab === 'dialogues' && (
            <motion.div 
              key="dialogues"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-8"
            >
              {DIALOGUES.map((dialogue) => (
                <div key={dialogue.id} className="relative group">
                  <button 
                    onClick={() => startPractice(dialogue)}
                    className="absolute top-0 right-0 p-2 bg-indigo-50 text-indigo-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-xs font-bold z-10"
                  >
                    <PlayCircle size={14} />
                    Luyện tập
                  </button>
                  <DialogueModule 
                    dialogue={dialogue} 
                    onSpeak={speak} 
                  />
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === 'practice' && (
            <motion.div 
              key="practice"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              {practiceSession?.type === 'quiz' ? (
                <QuizInterface 
                  session={practiceSession as any}
                  showFurigana={showFurigana}
                  onComplete={(score) => {
                    setPracticeSession({
                      ...practiceSession,
                      score,
                      isComplete: true
                    } as any);
                  }}
                  onExit={() => setPracticeSession(null)}
                  onSpeak={speak}
                  onRestart={startQuiz}
                />
              ) : practiceSession ? (
                <PracticeInterface 
                  session={practiceSession as any} 
                  showFurigana={showFurigana}
                  onNext={nextStep}
                  onRestart={() => {
                    if (practiceSession.type === 'dialogue') {
                      startPractice(practiceSession.dialogue!, practiceSession.userRole);
                    } else {
                      startDrillPractice(practiceSession.type as any, practiceSession.title.split(': ')[1]);
                    }
                  }}
                  onSpeak={speak}
                  relatedVocab={getRelatedData(practiceSession.title.includes('Bảo trì') ? 'Bảo trì' : practiceSession.title.includes('An toàn') ? 'An toàn' : 'Kỹ thuật').relatedVocab}
                  relatedPhrases={getRelatedData(practiceSession.title.includes('Bảo trì') ? 'Bảo trì' : practiceSession.title.includes('An toàn') ? 'An toàn' : 'Kỹ thuật').relatedPhrases}
                  onExit={() => setPracticeSession(null)}
                />
              ) : (
                <div className="space-y-8 pb-20">
                  <div className="text-center space-y-2">
                    <h2 className="text-3xl font-bold text-slate-800">Chọn chế độ học tập</h2>
                    <p className="text-slate-500">Sử dụng toàn bộ kho dữ liệu hàng trăm từ vựng và mẫu câu</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Mode: Quiz */}
                    <button 
                      onClick={startQuiz}
                      className="bg-indigo-600 p-6 rounded-3xl border border-indigo-500 shadow-xl shadow-indigo-100 hover:scale-[1.02] transition-all text-left flex flex-col group justify-between md:col-span-2 lg:col-span-1"
                    >
                      <div className="text-white">
                        <div className="p-3 bg-white/20 text-white rounded-xl w-fit mb-4">
                          <CheckCircle2 size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-1">Kiểm tra tổng hợp</h3>
                        <p className="text-sm opacity-80 mb-4">Kết hợp A, B, C: Trắc nghiệm & Ghép câu hội thoại.</p>
                      </div>
                      <div className="flex items-center gap-2 text-white font-bold text-sm">
                        Bắt đầu thi <ArrowRight size={14} />
                      </div>
                    </button>

                    {/* Mode: Dialogue */}
                    <button 
                      onClick={() => startPractice(DIALOGUES[0])}
                      className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xl shadow-slate-100 hover:border-indigo-500 transition-all text-left flex flex-col group justify-between"
                    >
                      <div>
                        <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl w-fit mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                          <MessageSquare size={24} />
                        </div>
                        <h3 className="text-lg font-bold text-slate-800 mb-1">Hội thoại</h3>
                        <p className="text-xs text-slate-500 mb-4">Luyện tập theo kịch bản thực tế Việt - Nhật.</p>
                      </div>
                      <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs">
                        Bắt đầu <ArrowRight size={14} />
                      </div>
                    </button>

                    {/* Mode: Flashcard */}
                    <button 
                      onClick={() => startFlashcardPractice('vocab')}
                      className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xl shadow-slate-100 hover:border-rose-500 transition-all text-left flex flex-col group justify-between"
                    >
                      <div>
                        <div className="p-3 bg-rose-50 text-rose-600 rounded-xl w-fit mb-4 group-hover:bg-rose-600 group-hover:text-white transition-colors">
                          <RefreshCcw size={24} />
                        </div>
                        <h3 className="text-lg font-bold text-slate-800 mb-1">Flashcards</h3>
                        <p className="text-xs text-slate-500 mb-4">Ghi nhớ nhanh từ vựng với thẻ lật mặt.</p>
                      </div>
                      <div className="flex items-center gap-2 text-rose-600 font-bold text-xs">
                        Bắt đầu <ArrowRight size={14} />
                      </div>
                    </button>

                    {/* Mode: Phrases */}
                    <button 
                      onClick={() => startDrillPractice('phrase', 'Tất cả')}
                      className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xl shadow-slate-100 hover:border-emerald-500 transition-all text-left flex flex-col group justify-between"
                    >
                      <div>
                        <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl w-fit mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                          <Zap size={24} />
                        </div>
                        <h3 className="text-lg font-bold text-slate-800 mb-1">Duyệt mẫu câu</h3>
                        <p className="text-xs text-slate-500 mb-4">Học 600+ câu kỹ thuật theo danh sách.</p>
                      </div>
                      <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs">
                        Học ngay <ArrowRight size={14} />
                      </div>
                    </button>

                    {/* Mode: Review Marked */}
                    <button 
                      onClick={startReviewPractice}
                      disabled={Object.values(markedColors).filter(v => v).length === 0}
                      className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xl shadow-slate-100 hover:border-amber-500 transition-all text-left flex flex-col group justify-between disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <div>
                        <div className="p-3 bg-amber-50 text-amber-600 rounded-xl w-fit mb-4 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                          <CheckCircle2 size={24} />
                        </div>
                        <h3 className="text-lg font-bold text-slate-800 mb-1">Ôn tập đánh dấu</h3>
                        <p className="text-xs text-slate-500 mb-4">Chỉ luyện tập các mục bạn đã tô màu ({Object.values(markedColors).filter(v => v).length} mục).</p>
                      </div>
                      <div className="flex items-center gap-2 text-amber-600 font-bold text-xs">
                        Ôn tập <ArrowRight size={14} />
                      </div>
                    </button>
                  </div>
                  
                  {/* Category Selection for Drills */}
                  <div className="bg-slate-100 p-8 rounded-[2.5rem] mt-12">
                     <h3 className="text-lg font-bold text-slate-700 mb-6 flex items-center gap-2">
                        <CheckCircle2 size={20} className="text-indigo-600" />
                        Luyện tập theo chuyên mục
                     </h3>
                     <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {phraseCategories.map(cat => (
                          <button 
                            key={cat}
                            onClick={() => startDrillPractice('phrase', cat)}
                            className="bg-white px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium text-slate-600 hover:border-indigo-500 hover:text-indigo-600 transition-all shadow-sm"
                          >
                            {cat}
                          </button>
                        ))}
                     </div>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer Info */}
      <footer className="max-w-4xl mx-auto px-4 py-12 text-center text-slate-400 text-sm">
        <p>© 2026 Machinery Trade Master • Thiết kế cho giao thương kỹ thuật</p>
      </footer>

      {/* Mind Map Overlay */}
      <AnimatePresence>
        {selectedVocab && (
          <MindMap 
            item={selectedVocab} 
            onClose={() => setSelectedVocab(null)} 
            onSpeak={speak}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function MindMap({ item, onClose, onSpeak }: { 
  item: VocabularyItem, 
  onClose: () => void,
  onSpeak: (text: string, lang: 'ja-JP' | 'en-US') => void
}) {
  // Find related phrases
  const relatedPhrases = PHRASES.filter(p => 
    p.jp.includes(item.jp) || 
    p.vn.toLowerCase().includes(item.vn.toLowerCase())
  ).slice(0, 3);

  // Find related dialogues
  const relatedDialogues = DIALOGUES.filter(d => 
    d.lines.some(l => l.jp.includes(item.jp))
  ).slice(0, 2);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="bg-slate-50 w-full max-w-4xl max-h-[90vh] rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-white px-8 py-6 border-b border-slate-200 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-indigo-600 rounded-2xl text-white shadow-lg shadow-indigo-200">
              <BookOpen size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                Sơ đồ tư duy: {item.jp}
              </h2>
              <p className="text-slate-500 font-medium">{item.vn}</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-full text-slate-400 transition-colors"
          >
            <AlertCircle size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 space-y-8 scrollbar-hide">
          {/* Central Node & Definition */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm col-span-1">
              <h4 className="text-[10px] font-black uppercase text-indigo-600 mb-4 tracking-widest">Từ vựng trung tâm</h4>
              <div className="space-y-2">
                <p className="text-3xl font-black text-slate-800">{item.jp}</p>
                <p className="text-sm text-slate-400 font-medium">{item.furigana}</p>
                <div className="pt-4 border-t border-slate-50">
                  <p className="text-slate-600 font-bold">{item.vn}</p>
                  <p className="text-sm text-slate-400 font-medium italic">{item.en}</p>
                </div>
              </div>
            </div>

            <div className="bg-indigo-600 p-6 rounded-3xl shadow-xl shadow-indigo-100 col-span-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Info size={120} />
              </div>
              <h4 className="text-[10px] font-black uppercase text-indigo-100 mb-4 tracking-widest">Lưu ý kỹ thuật & An toàn</h4>
              <ul className="space-y-3 relative z-10">
                <li className="flex items-start gap-3 text-white">
                  <div className="mt-1.5 w-1.5 h-1.5 bg-indigo-300 rounded-full shrink-0" />
                  <p className="text-sm font-medium leading-relaxed">
                    Đảm bảo hiểu rõ các quy định an toàn nâng hạ liên quan đến <strong>{item.vn}</strong> trước khi thi công.
                  </p>
                </li>
                <li className="flex items-start gap-3 text-white">
                  <div className="mt-1.5 w-1.5 h-1.5 bg-indigo-300 rounded-full shrink-0" />
                  <p className="text-sm font-medium leading-relaxed">
                    Sử dụng thuật ngữ này chính xác trong báo cáo kỹ thuật để tránh hiểu lầm giữa các bên (Buyer/Seller).
                  </p>
                </li>
                <li className="flex items-start gap-3 text-white">
                  <div className="mt-1.5 w-1.5 h-1.5 bg-indigo-300 rounded-full shrink-0" />
                  <p className="text-sm font-medium leading-relaxed">
                    Luôn kiểm tra trọng tâm và tải trọng khi xử lý các thiết bị thuộc nhóm {item.category}.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Related Content Nodes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            {/* Visual Connecting Lines (CSS based) */}
            <div className="absolute inset-0 pointer-events-none hidden md:block">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -z-10" />
            </div>

            {/* Practical Phrases */}
            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-widest flex items-center gap-2">
                <CheckCircle2 size={12} className="text-emerald-500" />
                Ứng dụng vào mẫu câu
              </h4>
              <div className="space-y-3">
                {relatedPhrases.length > 0 ? relatedPhrases.map((phrase) => (
                  <div key={phrase.id} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm hover:border-indigo-300 transition-colors">
                    <p className="text-sm font-bold text-slate-800 mb-1">{phrase.jp}</p>
                    <p className="text-xs text-slate-500">{phrase.vn}</p>
                  </div>
                )) : (
                  <p className="text-xs text-slate-400 italic">Chưa có mẫu câu ví dụ trực tiếp.</p>
                )}
              </div>
            </div>

            {/* Dialogue Context */}
            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-widest flex items-center gap-2">
                <MessageSquare size={12} className="text-indigo-500" />
                Bối cảnh hội thoại
              </h4>
              <div className="space-y-3">
                {relatedDialogues.length > 0 ? relatedDialogues.map((diag) => (
                  <div key={diag.id} className="bg-indigo-50 p-4 rounded-2xl border border-indigo-100 shadow-sm">
                    <p className="text-xs font-black text-indigo-600 mb-2">{diag.title}</p>
                    <div className="space-y-2">
                      {diag.lines.filter(l => l.jp.includes(item.jp)).slice(0, 1).map((l, i) => (
                        <div key={i} className="text-xs">
                          <p className="font-bold text-slate-700">{l.jp}</p>
                          <p className="text-slate-500">{l.vn}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )) : (
                  <p className="text-xs text-slate-400 italic">Từ vựng này thường dùng độc lập trong kỹ thuật.</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Action Bar */}
        <div className="bg-slate-100 px-8 py-4 flex justify-end gap-3 border-t border-slate-200">
          <button 
            onClick={() => onSpeak(item.jp, 'ja-JP')}
            className="flex items-center gap-2 px-6 py-2 bg-indigo-600 text-white rounded-xl font-bold shadow-lg shadow-indigo-200 hover:scale-105 transition-transform"
          >
            <Volume2 size={18} />
            Nghe phát âm Nhật
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

type QuizQuestion = {
  type: 'choice' | 'scramble' | 'response';
  jp: string;
  vn: string;
  furigana?: string;
  options?: string[];
  words?: string[];
  contextJp?: string;
  contextVn?: string;
};

function QuizInterface({ session, showFurigana, onComplete, onExit, onSpeak, onRestart }: {
  session: { questions: QuizQuestion[], currentStep: number, score: number, isComplete: boolean, title: string },
  showFurigana: boolean,
  onComplete: (score: number) => void,
  onExit: () => void,
  onSpeak: (text: string, lang: 'ja-JP' | 'en-US') => void,
  onRestart: () => void
}) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes in seconds
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [availableWords, setAvailableWords] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [isComplete, setIsComplete] = useState(false);

  const question = session.questions[currentIdx];

  useEffect(() => {
    if (isComplete) return;
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsComplete(true);
          onComplete(score);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isComplete, score, onComplete]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    if (question?.type === 'scramble' || question?.type === 'response') {
      setAvailableWords([...(question.words || [])].sort(() => Math.random() - 0.5));
      setSelectedWords([]);
    }
  }, [currentIdx, question]);

  const handleChoice = (choice: string) => {
    if (feedback) return;
    const isCorrect = choice === question.vn;
    setFeedback(isCorrect ? 'correct' : 'wrong');
    if (isCorrect) setScore(s => s + 1);
    
    setTimeout(() => {
      setFeedback(null);
      if (currentIdx < session.questions.length - 1) {
        setCurrentIdx(currentIdx + 1);
      } else {
        setIsComplete(true);
        onComplete(isCorrect ? score + 1 : score);
      }
    }, 1200);
  };

  const handleScrambleSubmit = () => {
    if (feedback) return;
    const answer = selectedWords.join('');
    const isCorrect = answer === question.jp;
    setFeedback(isCorrect ? 'correct' : 'wrong');
    if (isCorrect) setScore(s => s + 1);

    setTimeout(() => {
      setFeedback(null);
      if (currentIdx < session.questions.length - 1) {
        setCurrentIdx(currentIdx + 1);
      } else {
        setIsComplete(true);
        onComplete(isCorrect ? score + 1 : score);
      }
    }, 1200);
  };

  if (isComplete) {
    const percentage = Math.round((score / session.questions.length) * 100);
    return (
      <div className="bg-white rounded-[2.5rem] p-12 text-center shadow-xl border border-slate-200">
        <div className="w-24 h-24 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <Zap size={48} />
        </div>
        <h2 className="text-3xl font-black text-slate-800 mb-2">Kết quả bài thi</h2>
        <p className="text-slate-500 mb-8">Bạn đã hoàn thành bài kiểm tra năng lực tổng hợp</p>
        
        <div className="flex justify-center gap-8 mb-12">
          <div className="text-center">
            <p className="text-4xl font-black text-indigo-600">{score}</p>
            <p className="text-xs font-bold text-slate-400 uppercase">Câu đúng</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-black text-emerald-600">{percentage}%</p>
            <p className="text-xs font-bold text-slate-400 uppercase">Tỉ lệ</p>
          </div>
        </div>

        <div className="space-y-4">
          <button 
            onClick={onRestart}
            className="w-full py-4 bg-white border-2 border-indigo-600 text-indigo-600 rounded-2xl font-bold hover:bg-indigo-50 transition-colors"
          >
            Thử lại bài thi
          </button>
          <button 
            onClick={onExit}
            className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold shadow-lg shadow-indigo-100 hover:scale-105 transition-transform"
          >
            Quay lại trang chủ
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button onClick={onExit} className="p-2 hover:bg-slate-200 rounded-full text-slate-500">
            <ArrowRight size={20} className="rotate-180" />
          </button>
          <h2 className="text-2xl font-bold text-slate-800">Câu hỏi {currentIdx + 1}/{session.questions.length}</h2>
        </div>
        <div className="flex items-center gap-4">
          <div className={`px-4 py-2 border-2 rounded-full font-mono font-bold flex items-center gap-2 ${timeLeft < 300 ? 'border-rose-500 bg-rose-50 text-rose-600 animate-pulse' : 'border-slate-200 bg-white text-slate-600'}`}>
            <Zap size={16} /> {formatTime(timeLeft)}
          </div>
          <div className="px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-xs font-black">
            ĐIỂM: {score}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-[2rem] border border-slate-200 shadow-xl overflow-hidden p-8 min-h-[400px] flex flex-col justify-center relative">
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 h-1.5 bg-indigo-600 transition-all duration-500" style={{ width: `${((currentIdx) / session.questions.length) * 100}%` }} />

        <div className="text-center mb-12 space-y-4">
          <div className="inline-block p-2 px-4 bg-indigo-50 text-indigo-600 rounded-full text-xs font-bold mb-4">
            {question.type === 'choice' ? 'Chọn nghĩa đúng (Trắc nghiệm)' : 
             question.type === 'response' ? 'Phản hồi hội thoại (Interactive)' :
             'Ghép từ thành câu (Scramble)'}
          </div>
          
          {question.type === 'response' && (
            <div className="mb-8 p-6 bg-slate-50 border border-slate-200 rounded-2xl text-left relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <MessageSquare size={60} />
              </div>
              <p className="text-[10px] font-black text-indigo-400 uppercase mb-2 tracking-widest">Đối phương nói:</p>
              <p className="text-xl font-bold text-slate-800 mb-1">"{question.contextJp}"</p>
              <p className="text-sm text-slate-500">({question.contextVn})</p>
              
              <div className="mt-4 flex items-center gap-2 text-indigo-600 font-bold text-xs">
                <ArrowRight size={14} /> Bạn sẽ trả lời như thế nào?
              </div>
            </div>
          )}

          <div className="space-y-2">
            {showFurigana && question.furigana && (
              <p className="text-sm text-indigo-400 font-medium">{question.furigana}</p>
            )}
            {question.type === 'response' ? (
              <p className="text-xl text-slate-500 font-medium pt-4">Nghĩa câu trả lời bạn cần ghép: <span className="text-indigo-600 font-bold block mt-1">{question.vn}</span></p>
            ) : question.type === 'scramble' ? (
              <>
                <h3 className="text-4xl font-black text-slate-800">{question.jp}</h3>
                <p className="text-lg text-slate-500 font-medium pt-4">Nghĩa: {question.vn}</p>
              </>
            ) : (
              <h3 className="text-4xl font-black text-slate-800">{question.jp}</h3>
            )}
          </div>
          
          {question.type !== 'response' && (
            <button onClick={() => onSpeak(question.jp, 'ja-JP')} className="p-3 bg-slate-100 rounded-full text-slate-600 hover:bg-indigo-100 hover:text-indigo-600 transition-colors">
              <Volume2 size={24} />
            </button>
          )}
        </div>

        {question.type === 'choice' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {question.options?.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleChoice(opt)}
                disabled={!!feedback}
                className={`p-6 rounded-2xl border-2 text-lg font-bold transition-all text-left flex justify-between items-center ${
                  feedback === 'correct' && opt === question.vn ? 'bg-emerald-50 border-emerald-500 text-emerald-700' :
                  feedback === 'wrong' && opt === question.vn ? 'border-emerald-500 text-emerald-700' :
                  feedback === 'wrong' && opt !== question.vn ? 'opacity-50 grayscale' :
                  'bg-white border-slate-200 hover:border-indigo-500 hover:bg-indigo-50 shadow-sm'
                }`}
              >
                <span className="pr-4 leading-tight">{opt}</span>
                {feedback === 'correct' && opt === question.vn && <CheckCircle2 size={24} className="text-emerald-500 shrink-0" />}
              </button>
            ))}
          </div>
        ) : (
          <div className="space-y-12">
            {/* Answer Slots */}
            <div className="flex flex-wrap justify-center gap-3 min-h-[60px] p-4 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
               {selectedWords.map((word, i) => (
                 <button
                   key={i}
                   onClick={() => {
                     if (feedback) return;
                     setSelectedWords(selectedWords.filter((_, idx) => idx !== i));
                     setAvailableWords([...availableWords, word]);
                   }}
                   className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold shadow-md animate-in zoom-in"
                 >
                   {word}
                 </button>
               ))}
            </div>

            {/* Word Pool */}
            <div className="flex flex-wrap justify-center gap-2">
               {availableWords.map((word, i) => (
                 <button
                   key={i}
                   onClick={() => {
                     if (feedback) return;
                     setAvailableWords(availableWords.filter((_, idx) => idx !== i));
                     setSelectedWords([...selectedWords, word]);
                   }}
                   className="px-5 py-2.5 bg-white border border-slate-200 rounded-xl font-bold text-slate-600 shadow-sm hover:border-indigo-400 hover:text-indigo-600 transition-all"
                 >
                   {word}
                 </button>
               ))}
            </div>

            <div className="flex justify-center pt-4">
              <button
                onClick={handleScrambleSubmit}
                disabled={selectedWords.length === 0 || !!feedback}
                className="px-12 py-4 bg-slate-900 text-white rounded-2xl font-black shadow-xl hover:scale-105 transition-transform disabled:opacity-50"
              >
                Kiểm tra câu trả lời
              </button>
            </div>
          </div>
        )}

        <AnimatePresence>
          {feedback && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className={`absolute inset-0 flex items-center justify-center pointer-events-none z-50`}
            >
              <div className={`p-8 rounded-full shadow-2xl ${feedback === 'correct' ? 'bg-emerald-500' : 'bg-rose-500'} text-white`}>
                {feedback === 'correct' ? <CheckCircle2 size={80} /> : <AlertCircle size={80} />}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function VocabCard({ item, showFurigana, onSpeak, onSelect, markedColor, onMark, markerColors }: { 
  item: VocabularyItem, 
  showFurigana: boolean,
  onSpeak: (text: string, lang: 'ja-JP' | 'en-US') => void,
  onSelect?: () => void,
  markedColor?: string,
  onMark: (color: string) => void,
  markerColors: any[],
  key?: React.Key
}) {
  const activeColor = markerColors.find(c => c.class === markedColor);

  return (
    <motion.div 
      whileHover={{ y: -2 }}
      onClick={onSelect}
      className={`p-5 rounded-2xl border transition-all duration-300 group cursor-pointer ${
        activeColor ? `${activeColor.border} border-2 ${activeColor.shadow} shadow-lg ${activeColor.light}` : 'bg-white border-slate-200 shadow-sm hover:shadow-md'
      }`}
    >
      <div className="flex justify-between items-start mb-3">
        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
          activeColor ? activeColor.class + ' text-white' : 'text-slate-400 bg-slate-100'
        }`}>
          {item.category}
        </span>
        <div className="flex gap-2">
          <div className="flex gap-1 group-hover:opacity-100 transition-opacity">
            {markerColors.map(c => (
              <button
                key={c.class}
                onClick={(e) => {
                  e.stopPropagation();
                  onMark(c.class);
                }}
                className={`w-3 h-3 rounded-full transition-transform hover:scale-125 ${c.class} ${
                  markedColor === c.class ? 'ring-2 ring-offset-1 ring-slate-400' : 'opacity-20'
                }`}
              />
            ))}
          </div>
          <button 
            onClick={(e) => { e.stopPropagation(); onSpeak(item.jp, 'ja-JP'); }}
            className="p-1.5 rounded-full hover:bg-slate-100 text-indigo-600 transition-colors"
            title="Nghe tiếng Nhật"
          >
            <Volume2 size={16} />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); onSpeak(item.en, 'en-US'); }}
            className="p-1.5 rounded-full hover:bg-slate-100 text-emerald-600 transition-colors"
            title="Nghe tiếng Anh"
          >
            <Volume2 size={16} />
          </button>
        </div>
      </div>
      
      <div className="space-y-1">
        {showFurigana && item.furigana !== '-' && (
          <p className="text-xs text-indigo-500 font-medium ml-1">{item.furigana}</p>
        )}
        <h3 className="text-xl font-bold text-slate-800">{item.jp}</h3>
        <p className="text-md text-slate-600 font-medium border-t border-slate-50 pt-2 mt-2">
          {item.vn}
        </p>
        <p className="text-sm text-slate-400 italic font-medium">
          {item.en}
        </p>
      </div>
    </motion.div>
  );
}

function PhraseCard({ phrase, onSpeak, onPractice, markedColor, onMark, markerColors }: { 
  phrase: PhraseItem,
  onSpeak: (text: string, lang: 'ja-JP' | 'en-US') => void,
  onPractice: () => void,
  markedColor?: string,
  onMark: (color: string) => void,
  markerColors: any[],
  key?: React.Key
}) {
  const activeColor = markerColors.find(c => c.class === markedColor);

  return (
    <div className={`p-6 rounded-2xl border-2 transition-all duration-300 relative overflow-hidden ${
      activeColor ? `${activeColor.border} ${activeColor.shadow} shadow-xl ${activeColor.light}` : 'bg-white border-slate-200 shadow-sm'
    }`}>
      {activeColor && (
        <div className={`absolute top-0 right-0 w-24 h-24 -mr-12 -mt-12 rounded-full opacity-10 ${activeColor.class}`} />
      )}
      
      <div className="flex items-center justify-between mb-4 relative z-10">
        <div className="flex items-center gap-2">
          <CheckCircle2 size={16} className={activeColor ? 'text-slate-700' : 'text-indigo-500'} />
          <span className={`text-xs font-bold uppercase tracking-widest ${activeColor ? 'text-slate-600' : 'text-slate-400'}`}>
            {phrase.category}
          </span>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5 p-1 bg-slate-100/50 rounded-full">
            {markerColors.map(c => (
              <button
                key={c.class}
                onClick={() => onMark(c.class)}
                className={`w-3.5 h-3.5 rounded-full transition-all hover:scale-110 ${c.class} ${
                  markedColor === c.class ? 'ring-2 ring-offset-1 ring-white' : 'opacity-30 hover:opacity-100'
                }`}
              />
            ))}
          </div>
          <button 
            onClick={onPractice}
            className="flex items-center gap-1.5 px-3 py-1 bg-indigo-600 text-white rounded-full text-xs font-bold hover:bg-slate-900 transition-all shadow-sm"
          >
            <PlayCircle size={14} />
            Luyện tập
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-6">
        <div className="p-4 bg-slate-50 rounded-xl relative group">
          <p className="text-lg font-medium text-slate-800 pr-8">{phrase.vn}</p>
        </div>
        
        <div className="p-4 bg-indigo-50 rounded-xl relative group border border-indigo-100">
          <p className="text-lg font-bold text-indigo-900 pr-8">{phrase.jp}</p>
          <button 
            onClick={() => onSpeak(phrase.jp, 'ja-JP')}
            className="absolute right-4 top-4 p-2 bg-white rounded-full shadow-sm hover:shadow text-indigo-600"
          >
            <Volume2 size={18} />
          </button>
        </div>

        <div className="p-4 bg-emerald-50 rounded-xl relative group border border-emerald-100">
          <p className="text-lg font-medium text-emerald-900 italic pr-8">{phrase.en}</p>
          <button 
            onClick={() => onSpeak(phrase.en, 'en-US')}
            className="absolute right-4 top-4 p-2 bg-white rounded-full shadow-sm hover:shadow text-emerald-600"
          >
            <Volume2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

function PracticeInterface({ session, showFurigana, onNext, onRestart, onSpeak, relatedVocab, relatedPhrases, onExit }: {
  session: { 
    type: 'dialogue' | 'phrase' | 'vocab' | 'flashcard',
    subType?: 'phrase' | 'vocab',
    dialogue?: Dialogue, 
    items?: any[],
    title: string,
    currentStep: number, 
    userRole: 'buyer' | 'seller', 
    isComplete: boolean 
  },
  showFurigana: boolean,
  onNext: () => void,
  onRestart: () => void,
  onSpeak: (text: string, lang: 'ja-JP' | 'en-US') => void,
  relatedVocab: VocabularyItem[],
  relatedPhrases: PhraseItem[],
  onExit: () => void
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const currentItem = session.type === 'dialogue' 
    ? session.dialogue?.lines[session.currentStep]
    : session.items?.[session.currentStep];
  
  const isUserTurn = session.type === 'dialogue' && currentItem
    ? (currentItem as DialogueLine).role === session.userRole
    : true;

  if (!currentItem) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={onExit}
              className="p-2 hover:bg-slate-200 rounded-full text-slate-500 transition-colors"
            >
              <ArrowRight size={20} className="rotate-180" />
            </button>
            <div>
              <h2 className="text-2xl font-bold text-slate-800">{session.title}</h2>
              <div className="flex items-center gap-2 mt-1">
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                  session.type === 'dialogue' 
                    ? (session.userRole === 'buyer' ? 'bg-blue-100 text-blue-600' : 'bg-orange-100 text-orange-600')
                    : session.type === 'flashcard' ? 'bg-rose-100 text-rose-600' : 'bg-emerald-100 text-emerald-600'
                }`}>
                  {session.type === 'dialogue' 
                    ? `Vai: ${session.userRole === 'buyer' ? 'Người mua / Khách' : 'Người bán / Kỹ thuật'}`
                    : session.type === 'flashcard' ? 'Chế độ: Flashcards' : `Chế độ: ${session.type === 'phrase' ? 'Luyện mẫu câu' : 'Học thuật ngữ'}`}
                </span>
              </div>
            </div>
          </div>
          <button 
            onClick={() => {
              setIsFlipped(false);
              onRestart();
            }}
            className="p-2 text-slate-400 hover:text-indigo-600 transition-colors"
            title="Bắt đầu lại"
          >
            <RefreshCcw size={20} />
          </button>
        </div>

        <div className="bg-white rounded-[2rem] border border-slate-200 shadow-xl overflow-hidden flex flex-col h-[500px]">
          {/* Progress Bar */}
          <div className="bg-slate-100 h-1.5 w-full flex">
            {(session.type === 'dialogue' ? session.dialogue!.lines : session.items!).map((_, i) => (
              <div 
                key={i} 
                className={`flex-1 h-full transition-all duration-500 ${
                  i <= session.currentStep ? 'bg-indigo-600' : 'bg-slate-200'
                }`} 
              />
            ))}
          </div>

          {/* Main Area */}
          <div className="flex-1 p-6 space-y-4 overflow-y-auto flex flex-col">
            {session.type === 'flashcard' && !session.isComplete ? (
              <div className="flex-1 flex flex-col items-center justify-center">
                <motion.div 
                  initial={false}
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
                  onClick={() => setIsFlipped(!isFlipped)}
                  style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
                  className="w-full max-w-sm h-64 cursor-pointer relative"
                >
                   {/* Front Side */}
                   <div className={`absolute inset-0 bg-indigo-600 text-white rounded-3xl p-8 flex flex-col items-center justify-center text-center backface-hidden ${isFlipped ? 'invisible' : 'visible'}`}>
                      <p className="text-xs font-black opacity-50 uppercase mb-4 tracking-tighter">Tiếng Nhật</p>
                      
                      <div className="flex flex-col items-center gap-2">
                        {showFurigana && currentItem.furigana && currentItem.furigana !== '-' && (
                          <span className="text-xs font-medium text-indigo-200">{currentItem.furigana}</span>
                        )}
                        <h3 className="text-3xl font-bold">{currentItem.jp}</h3>
                        
                        <button 
                          onClick={(e) => { e.stopPropagation(); onSpeak(currentItem.jp, 'ja-JP'); }}
                          className="mt-6 p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                          title="Nghe phát âm"
                        >
                          <Volume2 size={24} />
                        </button>
                      </div>

                      <p className="mt-8 text-sm opacity-70">Nhấn để xem nghĩa...</p>
                   </div>
                   
                   {/* Back Side */}
                   <div className={`absolute inset-0 bg-white border-2 border-indigo-600 text-indigo-600 rounded-3xl p-8 flex flex-col items-center justify-center text-center backface-hidden [transform:rotateY(180deg)] ${!isFlipped ? 'invisible' : 'visible'}`}>
                      <p className="text-xs font-black opacity-30 uppercase mb-2 tracking-tighter">Nghĩa Việt</p>
                      <h3 className="text-2xl font-bold mb-6">{currentItem.vn}</h3>
                      
                      <div className="w-full h-px bg-slate-100 mb-6" />
                      
                      <div className="flex flex-col items-center">
                        {showFurigana && currentItem.furigana && currentItem.furigana !== '-' && (
                          <span className="text-xs font-medium text-slate-400">{currentItem.furigana}</span>
                        )}
                        <p className="text-lg font-bold text-slate-700">{currentItem.jp}</p>
                      </div>

                      <button 
                        onClick={(e) => { e.stopPropagation(); onSpeak(currentItem.jp, 'ja-JP'); }}
                        className="mt-6 p-4 bg-indigo-50 rounded-full hover:bg-indigo-100 transition-colors"
                      >
                        <Volume2 size={24} />
                      </button>
                   </div>
                </motion.div>
                <p className="mt-8 text-slate-400 text-sm italic">Mục {session.currentStep + 1} trên {session.items!.length}</p>
              </div>
            ) : session.type === 'dialogue' ? (
              // Dialogue Render
              session.dialogue!.lines.slice(0, session.currentStep + 1).map((line, idx) => (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  key={idx}
                  className={`flex items-end gap-2 ${line.role === session.userRole ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  <div className={`max-w-[80%] rounded-2xl p-4 shadow-sm ${
                    line.role === session.userRole 
                      ? 'bg-indigo-600 text-white rounded-tr-none' 
                      : 'bg-slate-100 text-slate-800 rounded-tl-none'
                  }`}>
                    <p className="font-bold mb-1">{line.jp}</p>
                    <p className={`text-sm ${line.role === session.userRole ? 'text-indigo-100' : 'text-slate-500'}`}>
                      {line.vn}
                    </p>
                  </div>
                  <button 
                    onClick={() => onSpeak(line.jp, 'ja-JP')}
                    className={`p-2 rounded-full hover:bg-slate-200 transition-colors ${
                      line.role === session.userRole ? 'text-indigo-400' : 'text-slate-400'
                    }`}
                  >
                    <Volume2 size={16} />
                  </button>
                </motion.div>
              ))
            ) : (
              // Drill Render (Phrases/Vocab)
              session.items!.slice(0, session.currentStep + 1).map((item, idx) => (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, x: -10 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  key={idx}
                  className="flex flex-col gap-1 items-start"
                >
                  <div className="w-full bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between group">
                    <div>
                      <p className="text-xs font-black text-slate-300 uppercase mb-1">MỤC {idx + 1}</p>
                      <p className="font-bold text-slate-800">{item.jp}</p>
                      <p className="text-sm text-slate-500">{item.vn}</p>
                    </div>
                    <button 
                      onClick={() => onSpeak(item.jp, 'ja-JP')}
                      className="p-3 bg-slate-50 text-indigo-600 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm"
                    >
                      <Volume2 size={20} />
                    </button>
                  </div>
                </motion.div>
              ))
            )}
            
            {session.isComplete && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex-1 flex flex-col items-center justify-center p-8 text-center"
              >
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Tuyệt vời!</h3>
                <p className="text-slate-500 max-w-xs">Bạn đã hoàn thành phiên luyện tập này. Hãy tiếp tục học các chủ đề khác nhé.</p>
              </motion.div>
            )}
          </div>

          {/* Controls */}
          <div className="p-6 bg-slate-50 border-t border-slate-200">
            {!session.isComplete ? (
              <div className="flex flex-col items-center gap-4">
                {session.type === 'flashcard' ? (
                  <div className="w-full flex gap-4">
                    <button 
                      onClick={() => {
                        setIsFlipped(false);
                        onNext();
                      }}
                      className="flex-1 py-4 bg-indigo-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-100"
                    >
                      Học câu tiếp theo
                      <ArrowRight size={20} />
                    </button>
                  </div>
                ) : isUserTurn ? (
                  <div className="w-full space-y-4">
                    <div className="flex items-center justify-between px-2">
                      <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest flex items-center gap-2">
                        <ArrowRight size={14} className="animate-pulse" />
                        {session.type === 'dialogue' ? 'Đến lượt bạn nói' : 'Luyện mẫu tiếp theo'}
                      </p>
                      <button 
                        onClick={() => onSpeak(currentItem.jp, 'ja-JP')}
                        className="flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-indigo-600"
                      >
                        <Volume2 size={14} />
                        Nghe mẫu
                      </button>
                    </div>
                    <button 
                      onClick={() => {
                        onNext();
                      }}
                      className="w-full group bg-white border-2 border-indigo-600 text-indigo-600 p-5 rounded-2xl font-bold flex items-center justify-between hover:bg-indigo-600 hover:text-white transition-all shadow-lg shadow-indigo-100"
                    >
                      <div className="text-left">
                        <p className="text-lg leading-tight mb-1">{currentItem.jp}</p>
                        <p className="text-sm opacity-70 group-hover:opacity-90">{currentItem.vn}</p>
                      </div>
                      <ArrowRight size={24} className="shrink-0" />
                    </button>
                  </div>
                ) : (
                  <button 
                    onClick={() => {
                      onNext();
                    }}
                    className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold flex items-center gap-3 hover:scale-105 transition-transform shadow-xl"
                  >
                    Tiếp tục hội thoại
                    <ArrowRight size={20} />
                  </button>
                )}
              </div>
            ) : (
              <div className="flex gap-4">
                <button 
                  onClick={onExit}
                  className="flex-1 py-4 bg-white border border-slate-200 text-slate-600 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-slate-50 transition-colors"
                >
                  Thoát
                </button>
                <button 
                  onClick={() => {
                    setIsFlipped(false);
                    onRestart();
                  }}
                  className="flex-[2] py-4 bg-indigo-600 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
                >
                  Luyện tập lại
                  <RefreshCcw size={20} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Sidebar with related info */}
      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
            <BookOpen size={14} />
            Từ vựng hữu ích
          </h3>
          <div className="grid gap-3">
            {relatedVocab.map((v) => (
              <div key={v.id} className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm hover:border-indigo-300 transition-colors cursor-pointer group" onClick={() => onSpeak(v.jp, 'ja-JP')}>
                <div className="flex justify-between items-start">
                  <div>
                    {showFurigana && v.furigana && v.furigana !== '-' && (
                      <p className="text-[10px] font-medium text-indigo-400 mb-0.5">{v.furigana}</p>
                    )}
                    <p className="font-bold text-slate-800 text-sm group-hover:text-indigo-600">{v.jp}</p>
                    <p className="text-xs text-slate-500">{v.vn}</p>
                  </div>
                  <Volume2 size={12} className="text-slate-300 group-hover:text-indigo-400" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
            <Zap size={14} />
            Mẫu câu áp dụng
          </h3>
          <div className="grid gap-3">
            {relatedPhrases.map((p) => (
              <div key={p.id} className="bg-indigo-50/50 p-3 rounded-xl border border-indigo-100 hover:bg-indigo-100 transition-colors cursor-pointer" onClick={() => onSpeak(p.jp, 'ja-JP')}>
                <p className="text-xs font-bold text-indigo-700 mb-1">{p.jp}</p>
                <p className="text-[10px] text-indigo-600/70 line-clamp-2">{p.vn}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function DialogueModule({ dialogue, onSpeak }: { 
  dialogue: Dialogue,
  onSpeak: (text: string, lang: 'ja-JP' | 'en-US') => void,
  key?: React.Key
}) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-slate-700 flex items-center gap-2">
        <div className="w-1.5 h-6 bg-indigo-600 rounded-full" />
        {dialogue.title}
      </h3>
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6">
        {dialogue.lines.map((line, idx) => (
          <div 
            key={idx} 
            className={`flex flex-col ${line.role === 'buyer' ? 'items-start' : 'items-end'}`}
          >
            <span className="text-[10px] font-black uppercase text-slate-400 mb-1 px-2">
              {line.role === 'buyer' ? 'Người mua' : 'Người bán'}
            </span>
            <div 
              className={`max-w-[85%] p-4 rounded-2xl relative ${
                line.role === 'buyer' 
                  ? 'bg-indigo-600 text-white rounded-tl-none shadow-indigo-200 shadow-lg' 
                  : 'bg-slate-100 text-slate-800 rounded-tr-none'
              }`}
            >
              <p className="font-bold mb-1">{line.jp}</p>
              <p className={`text-sm ${line.role === 'buyer' ? 'text-indigo-100' : 'text-slate-500'}`}>
                {line.vn}
              </p>
              <button 
                onClick={() => onSpeak(line.jp, 'ja-JP')}
                className={`absolute ${line.role === 'buyer' ? '-right-2' : '-left-2'} top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-md text-indigo-600 hover:scale-110 transition-transform`}
              >
                <Volume2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
