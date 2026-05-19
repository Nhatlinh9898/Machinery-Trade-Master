export interface VocabularyItem {
  id: string;
  jp: string;
  furigana: string;
  vn: string;
  en: string;
  category: string;
}

export interface PhraseItem {
  id: string;
  vn: string;
  jp: string;
  en: string;
  category: string;
}

export interface DialogueLine {
  role: 'buyer' | 'seller';
  jp: string;
  vn: string;
}

export interface Dialogue {
  id: string;
  title: string;
  lines: DialogueLine[];
}
