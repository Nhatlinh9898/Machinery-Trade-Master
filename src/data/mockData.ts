import { VocabularyItem, PhraseItem, Dialogue } from '../types';

export const VOCABULARY: VocabularyItem[] = [
  // 1.1 Tình trạng máy
  { id: 'v1', jp: '状態', furigana: 'じょうたい', vn: 'Tình trạng', en: 'condition', category: 'Tình trạng máy' },
  { id: 'v2', jp: '使用期間', furigana: 'しようきかん', vn: 'Thời gian sử dụng', en: 'usage period', category: 'Tình trạng máy' },
  { id: 'v3', jp: '稼働時間', furigana: 'かどうじかん', vn: 'Giờ hoạt động', en: 'operating hours', category: 'Tình trạng máy' },
  { id: 'v4', jp: '売却理由', furigana: 'ばいきゃくりゆう', vn: 'Lý do bán', en: 'reason for selling', category: 'Tình trạng máy' },
  { id: 'v5', jp: '付属品', furigana: 'ふぞくひん', vn: 'Phụ kiện đi kèm', en: 'accessories', category: 'Tình trạng máy' },
  { id: 'v6', jp: '故障', furigana: 'こしょう', vn: 'Hư hỏng', en: 'breakdown/failure', category: 'Tình trạng máy' },
  { id: 'v7', jp: '劣化', furigana: 'れっか', vn: 'Xuống cấp', en: 'deterioration', category: 'Tình trạng máy' },
  { id: 'v8', jp: '修理が必要', furigana: 'しゅうりひつよう', vn: 'Cần sửa chữa', en: 'needs repair', category: 'Tình trạng máy' },
  { id: 'v9', jp: '動作未確認', furigana: 'どうさみかくにん', vn: 'Chưa test', en: 'untested', category: 'Tình trạng máy' },
  { id: 'v10', jp: '現状品', furigana: 'げんじょうひん', vn: 'Hàng hiện trạng', en: 'as-is', category: 'Tình trạng máy' },
  { id: 'v11', jp: '美品', furigana: 'びひん', vn: 'Gần như mới', en: 'like new', category: 'Tình trạng máy' },
  { id: 'v12', jp: '中古', furigana: 'ちゅうこ', vn: 'Đã qua sử dụng', en: 'used', category: 'Tình trạng máy' },
  { id: 'v13', jp: 'ジャンク', furigana: '-', vn: 'Hỏng, bán xác', en: 'junk', category: 'Tình trạng máy' },
  { id: 'v14', jp: '整備済み', furigana: 'せいびずみ', vn: 'Đã bảo trì', en: 'refurbished', category: 'Tình trạng máy' },

  // 1.2 Bộ phận - linh kiện
  { id: 'v15', jp: 'モーター', furigana: '-', vn: 'Motor', en: 'motor', category: 'Linh kiện' },
  { id: 'v16', jp: 'コンプレッサー', furigana: '-', vn: 'Máy nén', en: 'compressor', category: 'Linh kiện' },
  { id: 'v17', jp: 'ベルト', furigana: '-', vn: 'Dây curoa', en: 'belt', category: 'Linh kiện' },
  { id: 'v18', jp: 'ギア', furigana: '-', vn: 'Bánh răng', en: 'gear', category: 'Linh kiện' },
  { id: 'v19', jp: '軸', furigana: 'じく', vn: 'Trục', en: 'shaft', category: 'Linh kiện' },
  { id: 'v20', jp: 'ベアリング', furigana: '-', vn: 'Vòng bi', en: 'bearing', category: 'Linh kiện' },
  { id: 'v21', jp: 'ファン', furigana: '-', vn: 'Quạt', en: 'fan', category: 'Linh kiện' },
  { id: 'v22', jp: '配線', furigana: 'はいせん', vn: 'Dây điện', en: 'wiring', category: 'Linh kiện' },
  { id: 'v23', jp: '基板', furigana: 'きばん', vn: 'Bo mạch', en: 'circuit board', category: 'Linh kiện' },
  { id: 'v24', jp: 'センサー', furigana: '-', vn: 'Cảm biến', en: 'sensor', category: 'Linh kiện' },
  { id: 'v25', jp: 'バルブ', furigana: '-', vn: 'Van', en: 'valve', category: 'Linh kiện' },
  { id: 'v26', jp: 'ポンプ', furigana: '-', vn: 'Bơm', en: 'pump', category: 'Linh kiện' },
  { id: 'v27', jp: 'タンク', furigana: '-', vn: 'Bình chứa', en: 'tank', category: 'Linh kiện' },
  { id: 'v28', jp: 'フィルター', furigana: '-', vn: 'Bộ lọc', en: 'filter', category: 'Linh kiện' },
  { id: 'v29', jp: '電源ユニット', furigana: 'でんげん', vn: 'Bộ nguồn', en: 'power unit', category: 'Linh kiện' },

  // 1.3 Hành động kiểm tra
  { id: 'v30', jp: '点検', furigana: 'てんけん', vn: 'Kiểm tra', en: 'inspection', category: 'Hành động kỹ thuật' },
  { id: 'v31', jp: '動作確認', furigana: 'どうさかくにん', vn: 'Test hoạt động', en: 'operation check', category: 'Hành động kỹ thuật' },
  { id: 'v32', jp: '試運転', furigana: 'しうんてん', vn: 'Chạy thử', en: 'test run', category: 'Hành động kỹ thuật' },
  { id: 'v33', jp: '清掃', furigana: 'せいそう', vn: 'Vệ sinh', en: 'cleaning', category: 'Hành động kỹ thuật' },
  { id: 'v34', jp: '調整', furigana: 'ちょうせい', vn: 'Điều chỉnh', en: 'adjustment', category: 'Hành động kỹ thuật' },
  { id: 'v35', jp: '交換', furigana: 'こうかん', vn: 'Thay thế', en: 'replacement', category: 'Hành động kỹ thuật' },
  { id: 'v36', jp: '分解', furigana: 'ぶんかい', vn: 'Tháo máy', en: 'disassembly', category: 'Hành động kỹ thuật' },
  { id: 'v37', jp: '組立', furigana: 'くみたて', vn: 'Lắp máy', en: 'assembly', category: 'Hành động kỹ thuật' },
  { id: 'v38', jp: '修理', furigana: 'しゅうり', vn: 'Sửa chữa', en: 'repair', category: 'Hành động kỹ thuật' },
  { id: 'v39', jp: '測定', furigana: 'そくてい', vn: 'Đo lường', en: 'measurement', category: 'Hành động kỹ thuật' },

  // 4.1 Tình trạng máy nâng cao
  { id: 'va1', jp: '動作安定', furigana: 'どうさあんてい', vn: 'Hoạt động ổn định', en: 'stable operation', category: 'Nâng cao' },
  { id: 'va2', jp: '動作不安定', furigana: 'どうさふあんてい', vn: 'Hoạt động không ổn định', en: 'unstable operation', category: 'Nâng cao' },
  { id: 'va3', jp: '経年劣化', furigana: 'けいねんれっか', vn: 'Xuống cấp theo thời gian', en: 'aging deterioration', category: 'Nâng cao' },
  { id: 'va4', jp: '異常振動', furigana: 'いじょうしんどう', vn: 'Rung bất thường', en: 'abnormal vibration', category: 'Nâng cao' },
  { id: 'va5', jp: '過負荷', furigana: 'かふか', vn: 'Quá tải', en: 'overload', category: 'Nâng cao' },
  { id: 'va6', jp: '腐食', furigana: 'ふしょく', vn: 'Ăn mòn', en: 'corrosion', category: 'Nâng cao' },
  { id: 'va7', jp: '亀裂', furigana: 'きれつ', vn: 'Nứt', en: 'crack', category: 'Nâng cao' },
  { id: 'va8', jp: 'ガタつき', furigana: '-', vn: 'Lỏng lẻo', en: 'loose/shaky', category: 'Nâng cao' },
  { id: 'va9', jp: 'オーバーヒート', furigana: '-', vn: 'Quá nhiệt', en: 'overheating', category: 'Nâng cao' },
  { id: 'va10', jp: 'エラー表示', furigana: 'ひょうじ', vn: 'Báo lỗi', en: 'error display', category: 'Nâng cao' },

  // 4.2 Linh kiện nâng cao - Thủy lực / Khí nén
  { id: 'vl1', jp: 'インバーター', furigana: '-', vn: 'Biến tần', en: 'inverter', category: 'Linh kiện nâng cao' },
  { id: 'vl2', jp: 'サーボモーター', furigana: '-', vn: 'Động cơ servo', en: 'servo motor', category: 'Linh kiện nâng cao' },
  { id: 'vl3', jp: 'PLC', furigana: 'ピーエルシー', vn: 'Bộ điều khiển lập trình', en: 'PLC', category: 'Linh kiện nâng cao' },
  { id: 'vl4', jp: '電磁弁', furigana: 'でんじべん', vn: 'Van điện từ', en: 'solenoid valve', category: 'Linh kiện nâng cao' },
  { id: 'vl5', jp: '油圧シリンダー', furigana: 'ゆあつ', vn: 'Xi lanh thủy lực', en: 'hydraulic cylinder', category: 'Linh kiện nâng cao' },
  { id: 'vl6', jp: '減速機', furigana: 'げんそくき', vn: 'Hộp giảm tốc', en: 'gear speed reducer', category: 'Linh kiện nâng cao' },
  { id: 'vl7', jp: 'トランス', furigana: '-', vn: 'Biến áp', en: 'transformer', category: 'Linh kiện nâng cao' },
  { id: 'vl8', jp: 'コンデンサー', furigana: '-', vn: 'Tụ điện', en: 'capacitor', category: 'Linh kiện nâng cao' },
  { id: 'vl9', jp: '潤滑油', furigana: 'じゅんかつゆ', vn: 'Dầu bôi trơn', en: 'lubricant oil', category: 'Linh kiện nâng cao' },
  { id: 'vl10', jp: 'グリス', furigana: '-', vn: 'Mỡ bôi trơn', en: 'grease', category: 'Linh kiện nâng cao' },

  // 4.5 Máy móc công nghiệp
  { id: 'vm1', jp: 'CNC旋盤', furigana: 'せんばん', vn: 'Máy tiện CNC', en: 'CNC lathe', category: 'Máy móc' },
  { id: 'vm2', jp: 'マシニングセンター', furigana: '-', vn: 'Trung tâm gia công', en: 'machining center', category: 'Máy móc' },
  { id: 'vm3', jp: '射出成形機', furigana: 'しゃしゅつせいけいき', vn: 'Máy ép nhựa', en: 'injection molding machine', category: 'Máy móc' },
  { id: 'vm4', jp: 'プレス機', furigana: '-', vn: 'Máy dập', en: 'press machine', category: 'Máy móc' },
  { id: 'vm5', jp: 'フォークリフト', furigana: '-', vn: 'Xe nâng', en: 'forklift', category: 'Máy móc' },
  { id: 'vm6', jp: 'コンベア', furigana: '-', vn: 'Băng tải', en: 'conveyor', category: 'Máy móc' },
  { id: 'vm7', jp: '溶接機', furigana: 'ようせつき', vn: 'Máy hàn', en: 'welder', category: 'Máy móc' },
  { id: 'vm8', jp: '集塵機', furigana: 'しゅうじんき', vn: 'Máy hút bụi công nghiệp', en: 'dust collector', category: 'Máy móc' },
  { id: 'vm9', jp: 'ボイラー', furigana: '-', vn: 'Nồi hơi', en: 'boiler', category: 'Máy móc' },
  { id: 'vm10', jp: '乾燥炉', furigana: 'かんそうろ', vn: 'Lò sấy', en: 'drying oven', category: 'Máy móc' },

  // 4.6 Thông số kỹ thuật
  { id: 'vs1', jp: '定格電圧', furigana: 'ていかくでんあつ', vn: 'Điện áp định mức', en: 'rated voltage', category: 'Thông số' },
  { id: 'vs2', jp: '定格電流', furigana: 'ていかくでんりゅう', vn: 'Dòng định mức', en: 'rated current', category: 'Thông số' },
  { id: 'vs3', jp: '周波数', furigana: 'しゅうはすう', vn: 'Tần số', en: 'frequency', category: 'Thông số' },
  { id: 'vs4', jp: '出力', furigana: 'しゅつりょく', vn: 'Công suất đầu ra', en: 'output', category: 'Thông số' },
  { id: 'vs5', jp: '回転数', furigana: 'かいてんすう', vn: 'Số vòng quay', en: 'RPM', category: 'Thông số' },
  { id: 'vs6', jp: '容量', furigana: 'ようりょう', vn: 'Dung tích/Công suất', en: 'capacity', category: 'Thông số' },
  { id: 'vs7', jp: '耐荷重', furigana: 'たいかじゅう', vn: 'Trọng tải chịu được', en: 'load capacity', category: 'Thông số' },
  { id: 'vs8', jp: '精度', furigana: 'せいど', vn: 'Độ chính xác', en: 'precision', category: 'Thông số' },

  // 4.9 Logistics & Giao nhận
  { id: 'vlo1', jp: '梱包', furigana: 'こんぽう', vn: 'Đóng gói', en: 'packaging', category: 'Logistics' },
  { id: 'vlo2', jp: '通関', furigana: 'つうかん', vn: 'Thông quan', en: 'customs clearance', category: 'Logistics' },
  { id: 'vlo3', jp: '代引き', furigana: 'だいびき', vn: 'COD (Giao hàng thu tiền)', en: 'cash on delivery', category: 'Logistics' },
  { id: 'vlo4', jp: '送料込み', furigana: 'そうりょうこみ', vn: 'Bao gồm phí ship', en: 'shipping included', category: 'Logistics' },
  { id: 'vlo5', jp: '着払い', furigana: 'ちゃくばらい', vn: 'Người nhận trả ship', en: 'freight collect', category: 'Logistics' },
  { id: 'vlo6', jp: '荷崩れ', furigana: 'にくずれ', vn: 'Đổ hàng/xê dịch hàng', en: 'cargo collapse', category: 'Logistics' },
  { id: 'vlo7', jp: '追跡番号', furigana: 'ついせきばんごう', vn: 'Mã tracking', en: 'tracking number', category: 'Logistics' },

  // 4.4 Thương mại
  { id: 'vtr1', jp: '商談', furigana: 'しょうだん', vn: 'Thương lượng', en: 'business negotiation', category: 'Thương mại' },
  { id: 'vtr2', jp: '見積書', furigana: 'みつもりしょ', vn: 'Bản báo giá', en: 'quotation', category: 'Thương mại' },
  { id: 'vtr3', jp: '領収書', furigana: 'りょうしゅうしょ', vn: 'Hóa đơn/Biên lai', en: 'receipt', category: 'Thương mại' },
  { id: 'vtr4', jp: '発注', furigana: 'はっちゅう', vn: 'Đặt hàng', en: 'ordering', category: 'Thương mại' },
  { id: 'vtr5', jp: '在庫', furigana: 'ざいこ', vn: 'Tồn kho', en: 'inventory/stock', category: 'Thương mại' },
  { id: 'vtr6', jp: '即決', furigana: 'そっけつ', vn: 'Chốt ngay', en: 'immediate decision', category: 'Thương mại' },
  { id: 'vtr7', jp: '相場', furigana: 'そうば', vn: 'Giá thị trường', en: 'market price', category: 'Thương mại' },
  { id: 'vtr8', jp: '値引き', furigana: 'ねびき', vn: 'Giảm giá', en: 'discount', category: 'Thương mại' },

  // 4.8 Sửa chữa - bảo trì
  { id: 'vmt1', jp: 'メンテナンス', furigana: '-', vn: 'Bảo trì', en: 'maintenance', category: 'Bảo trì' },
  { id: 'vmt2', jp: '定期点検', furigana: 'ていきてんけん', vn: 'Kiểm tra định kỳ', en: 'periodic inspection', category: 'Bảo trì' },
  { id: 'vmt3', jp: '予防保全', furigana: 'よぼうほぜん', vn: 'Bảo trì phòng ngừa', en: 'preventive maintenance', category: 'Bảo trì' },
  { id: 'vmt4', jp: '部品交換', furigana: 'ぶひんこうかん', vn: 'Thay thế linh kiện', en: 'parts replacement', category: 'Bảo trì' },
  { id: 'vmt5', jp: 'オーバーホール', furigana: '-', vn: 'Đại tu/Kiểm tra toàn bộ', en: 'overhaul', category: 'Bảo trì' },
  { id: 'vmt6', jp: 'グリスアップ', furigana: '-', vn: 'Tra mỡ', en: 'greasing', category: 'Bảo trì' },
  { id: 'vmt7', jp: '給油', furigana: 'きゅうゆ', vn: 'Bơm dầu', en: 'lubrication', category: 'Bảo trì' },
  { id: 'vmt8', jp: '清掃整備', furigana: 'せいそうせいび', vn: 'Vệ sinh bảo trì', en: 'cleaning and service', category: 'Bảo trì' },

  // 4.10 Quản lý kho
  { id: 'vwh1', jp: '在庫管理', furigana: 'ざいこかんり', vn: 'Quản lý tồn kho', en: 'inventory management', category: 'Kho vận' },
  { id: 'vwh2', jp: '棚卸', furigana: 'たなおろし', vn: 'Kiểm kê kho', en: 'stocktaking', category: 'Kho vận' },
  { id: 'vwh3', jp: '入庫', furigana: 'にゅうこ', vn: 'Nhập kho', en: 'warehousing', category: 'Kho vận' },
  { id: 'vwh4', jp: '出庫', furigana: 'しゅっこ', vn: 'Xuất kho', en: 'shipping from warehouse', category: 'Kho vận' },
  { id: 'vwh5', jp: '倉庫', furigana: 'そうこ', vn: 'Nhà kho', en: 'warehouse', category: 'Kho vận' },
  { id: 'vwh6', jp: 'パレット', furigana: '-', vn: 'Pallet (Kệ kê hàng)', en: 'pallet', category: 'Kho vận' },
  { id: 'vwh7', jp: 'ロット番号', furigana: '-', vn: 'Số lô hàng', en: 'lot number', category: 'Kho vận' },

  // An toàn lao động (Safety)
  { id: 'vsf1', jp: '安全第一', furigana: 'あんぜんだいいち', vn: 'An toàn là trên hết', en: 'safety first', category: 'An toàn' },
  { id: 'vsf2', jp: '保護具', furigana: 'ほごぐ', vn: 'Đồ bảo hộ', en: 'protective equipment', category: 'An toàn' },
  { id: 'vsf3', jp: '安全メガネ', furigana: '-', vn: 'Kính bảo hộ', en: 'safety glasses', category: 'An toàn' },
  { id: 'vsf4', jp: '安全靴', furigana: 'あんぜんぐつ', vn: 'Giày bảo hộ', en: 'safety shoes', category: 'An toàn' },
  { id: 'vsf5', jp: 'ヘルメット', furigana: '-', vn: 'Mũ bảo hiểm/Bảo hộ', en: 'helmet', category: 'An toàn' },
  { id: 'vsf6', jp: '非常停止', furigana: 'ひじょうていし', vn: 'Dừng khẩn cấp', en: 'emergency stop', category: 'An toàn' },
  { id: 'vsf7', jp: '消火器', furigana: 'しょうかき', vn: 'Bình chữa cháy', en: 'fire extinguisher', category: 'An toàn' },

  // Chi tiết Linh kiện điện & Công cụ
  { id: 'vet1', jp: 'ブレーカー', furigana: '-', vn: 'Aptomat/Cầu dao tự động', en: 'circuit breaker', category: 'Điện' },
  { id: 'vet2', jp: '端子台', furigana: 'たんしだい', vn: 'Cầu đấu dây', en: 'terminal block', category: 'Điện' },
  { id: 'vet3', jp: 'リレー', furigana: '-', vn: 'Rơ-le', en: 'relay', category: 'Điện' },
  { id: 'vet4', jp: 'マグネットスイッチ', furigana: '-', vn: 'Công tắc từ', en: 'magnetic switch', category: 'Điện' },
  { id: 'vto1', jp: 'ノギス', furigana: '-', vn: 'Thước cặp', en: 'caliper', category: 'Công cụ' },
  { id: 'vto2', jp: 'マイクロメーター', furigana: '-', vn: 'Thước đo pan-me', en: 'micrometer', category: 'Công cụ' },
  { id: 'vto3', jp: 'レンチ', furigana: '-', vn: 'Cờ lê', en: 'wrench', category: 'Công cụ' },
  { id: 'vto4', jp: 'ドライバー', furigana: '-', vn: 'Tô vít', en: 'screwdriver', category: 'Công cụ' },

  // Vật liệu (Materials)
  { id: 'vma1', jp: '鋼鉄', furigana: 'こうてつ', vn: 'Thép', en: 'steel', category: 'Vật liệu' },
  { id: 'vma2', jp: '鉄', furigana: 'てつ', vn: 'Sắt', en: 'iron', category: 'Vật liệu' },
  { id: 'vma3', jp: 'アルミニウム', furigana: '-', vn: 'Nhôm', en: 'aluminum', category: 'Vật liệu' },
  { id: 'vma4', jp: '銅', furigana: 'どう', vn: 'Đồng', en: 'copper', category: 'Vật liệu' },
  { id: 'vma5', jp: '真鍮', furigana: 'しんちゅう', vn: 'Đồng thau', en: 'brass', category: 'Vật liệu' },
  { id: 'vma6', jp: 'ステンレス', furigana: '-', vn: 'Inox/Thép không gỉ', en: 'stainless steel', category: 'Vật liệu' },
  { id: 'vma7', jp: 'プラスチック', furigana: '-', vn: 'Nhựa', en: 'plastic', category: 'Vật liệu' },
  { id: 'vma8', jp: 'ゴム', furigana: '-', vn: 'Cao su', en: 'rubber', category: 'Vật liệu' },

  // Xử lý bề mặt (Surface Treatment)
  { id: 'vst1', jp: '塗装', furigana: 'とそう', vn: 'Sơn', en: 'painting', category: 'Xử lý bề mặt' },
  { id: 'vst2', jp: 'メッキ', furigana: '-', vn: 'Mạ', en: 'plating', category: 'Xử lý bề mặt' },
  { id: 'vst3', jp: '防錆', furigana: 'ぼうせい', vn: 'Chống rỉ', en: 'anti-rust', category: 'Xử lý bề mặt' },
  { id: 'vst4', jp: '研磨', furigana: 'けんま', vn: 'Mài/Đánh bóng', en: 'polishing/grinding', category: 'Xử lý bề mặt' },
  { id: 'vst5', jp: '溶接', furigana: 'ようせつ', vn: 'Hàn', en: 'welding', category: 'Xử lý bề mặt' },

  // Linh kiện liên kết (Fasteners)
  { id: 'vfs1', jp: 'ボルト', furigana: '-', vn: 'Bu lông', en: 'bolt', category: 'Linh kiện liên kết' },
  { id: 'vfs2', jp: 'ナット', furigana: '-', vn: 'Đai ốc', en: 'nut', category: 'Linh kiện liên kết' },
  { id: 'vfs3', jp: 'ネジ', furigana: '-', vn: 'Vít', en: 'screw', category: 'Linh kiện liên kết' },
  { id: 'vfs4', jp: 'ワッシャー', furigana: '-', vn: 'Vòng đệm/Long đền', en: 'washer', category: 'Linh kiện liên kết' },
  { id: 'vfs5', jp: 'ピン', furigana: '-', vn: 'Chốt', en: 'pin', category: 'Linh kiện liên kết' },
  { id: 'vfs6', jp: 'スプリング', furigana: '-', vn: 'Lò xo', en: 'spring', category: 'Linh kiện liên kết' },

  // Thuật ngữ kỹ thuật cơ bản (Basic Tech Terms)
  { id: 'vbt1', jp: '厚い', furigana: 'あつい', vn: 'Dày', en: 'thick', category: 'Thông số cơ bản' },
  { id: 'vbt2', jp: '薄い', furigana: 'うすい', vn: 'Mỏng', en: 'thin', category: 'Thông số cơ bản' },
  { id: 'vbt3', jp: '広い', furigana: 'ひろい', vn: 'Rộng', en: 'wide', category: 'Thông số cơ bản' },
  { id: 'vbt4', jp: '狭い', furigana: 'せまい', vn: 'Hẹp', en: 'narrow', category: 'Thông số cơ bản' },
  { id: 'vbt5', jp: '重い', furigana: 'おもい', vn: 'Nặng', en: 'heavy', category: 'Thông số cơ bản' },
  { id: 'vbt6', jp: '軽い', furigana: 'かるい', vn: 'Nhẹ', en: 'light', category: 'Thông số cơ bản' },
  { id: 'vbt7', jp: '熱い', furigana: 'あつい', vn: 'Nóng', en: 'hot', category: 'Thông số cơ bản' },
  { id: 'vbt8', jp: '冷たい', furigana: 'つめたい', vn: 'Lạnh', en: 'cold', category: 'Thông số cơ bản' },
  { id: 'vbt9', jp: '硬い', furigana: 'かたい', vn: 'Cứng', en: 'hard', category: 'Thông số cơ bản' },
  { id: 'vbt10', jp: '柔らかい', furigana: 'やわらかい', vn: 'Mềm', en: 'soft', category: 'Thông số cơ bản' },
  { id: 'vbt11', jp: '速い', furigana: 'はやい', vn: 'Nhanh', en: 'fast', category: 'Thông số cơ bản' },
  { id: 'vbt12', jp: '遅い', furigana: 'おそい', vn: 'Chậm', en: 'slow', category: 'Thông số cơ bản' },
  { id: 'vbt13', jp: '固定', furigana: 'こてい', vn: 'Cố định', en: 'fixed', category: 'Thông số cơ bản' },
  { id: 'vbt14', jp: '移動', furigana: 'いどう', vn: 'Di động/Di chuyển', en: 'movable', category: 'Thông số cơ bản' },

  // 4.7 Điện - điều khiển - tự động hóa (Tiếp tục)
  { id: 'vac1', jp: '電磁リレー', furigana: 'でんじ', vn: 'Rơ-le điện từ', en: 'electromagnetic relay', category: 'Điện - Điều khiển' },
  { id: 'vac2', jp: 'SSR', furigana: '-', vn: 'Rơ-le bán dẫn', en: 'solid state relay', category: 'Điện - Điều khiển' },
  { id: 'vac3', jp: 'タイマーリレー', furigana: '-', vn: 'Rơ-le thời gian', en: 'timer relay', category: 'Điện - Điều khiển' },
  { id: 'vac4', jp: 'コンタクタ', furigana: '-', vn: 'Contactor/Khởi động từ', en: 'contactor', category: 'Điện - Điều khiển' },
  { id: 'vac5', jp: 'スイッチング電源', furigana: '-', vn: 'Nguồn switching', en: 'switching power supply', category: 'Điện - Điều khiển' },
  { id: 'vac6', jp: 'サーボアンプ', furigana: '-', vn: 'Bộ khuếch đại servo', en: 'servo amplifier', category: 'Điện - Điều khiển' },
  { id: 'vac7', jp: 'HMI', furigana: '-', vn: 'Màn hình người máy', en: 'human machine interface', category: 'Điện - Điều khiển' },
  { id: 'vac8', jp: 'IOモジュール', furigana: '-', vn: 'Module I/O', en: 'I/O module', category: 'Điện - Điều khiển' },
  { id: 'vac9', jp: 'セーフティリレー', furigana: '-', vn: 'Rơ-le an toàn', en: 'safety relay', category: 'Điện - Điều khiển' },
  { id: 'vac10', jp: '非接触センサー', furigana: 'ひせっしょく', vn: 'Cảm biến không tiếp xúc', en: 'non-contact sensor', category: 'Điện - Điều khiển' },

  // 4.3 Hành động kỹ thuật (Tiếp tục)
  { id: 'vta1', jp: '負荷試験', furigana: 'ふかしけん', vn: 'Kiểm tra tải', en: 'load test', category: 'Thao tác kỹ thuật' },
  { id: 'vta2', jp: '絶縁試験', furigana: 'ぜつえんしけん', vn: 'Kiểm tra cách điện', en: 'insulation test', category: 'Thao tác kỹ thuật' },
  { id: 'vta3', jp: '抵抗測定', furigana: 'ていこうそくてい', vn: 'Đo điện trở', en: 'resistance measurement', category: 'Thao tác kỹ thuật' },
  { id: 'vta4', jp: '位置合わせ', furigana: 'いちあわせ', vn: 'Căn chỉnh vị trí', en: 'alignment', category: 'Thao tác kỹ thuật' },
  { id: 'vta5', jp: 'エラー解除', furigana: 'かいじょ', vn: 'Xóa lỗi', en: 'error reset', category: 'Thao tác kỹ thuật' },
  { id: 'vta6', jp: '異常解析', furigana: 'いじょうかいせき', vn: 'Phân tích bất thường', en: 'abnormal analysis', category: 'Thao tác kỹ thuật' },
  { id: 'vta7', jp: '動作ログ確認', furigana: 'ろぐかくにん', vn: 'Kiểm tra nhật ký hoạt động', en: 'operation log check', category: 'Thao tác kỹ thuật' },
  { id: 'vta8', jp: '温度管理', furigana: 'おんどかんり', vn: 'Quản lý nhiệt độ', en: 'temperature management', category: 'Thao tác kỹ thuật' },

  // 4.6 Thông số kỹ thuật chi tiết
  { id: 'vsd1', jp: 'ピーク出力', furigana: '-', vn: 'Công suất cực đại', en: 'peak output', category: 'Thông số chi tiết' },
  { id: 'vsd2', jp: '効率曲線', furigana: 'こうりつきょくせん', vn: 'Đường cong hiệu suất', en: 'efficiency curve', category: 'Thông số chi tiết' },
  { id: 'vsd3', jp: '過負荷保護', furigana: 'かふかほご', vn: 'Bảo vệ quá tải', en: 'overload protection', category: 'Thông số chi tiết' },
  { id: 'vsd4', jp: 'IP規格', furigana: 'あいぴーきかく', vn: 'Tiêu chuẩn chống nước/bụi (IP)', en: 'IP rating', category: 'Thông số chi tiết' },
  { id: 'vsd5', jp: 'サイクルタイム', furigana: '-', vn: 'Thời gian chu kỳ', en: 'cycle time', category: 'Thông số chi tiết' },
  { id: 'vsd6', jp: 'MTBF', furigana: '-', vn: 'Thời gian trung bình giữa các lỗi', en: 'mean time between failures', category: 'Thông số chi tiết' },
  { id: 'vsd7', jp: '精度保証', furigana: 'せいどほしょう', vn: 'Đảm bảo độ chính xác', en: 'accuracy guarantee', category: 'Thông số chi tiết' },

  // 4.10 Quản lý kho (Tiếp tục)
  { id: 'vwm1', jp: '先入先出', furigana: 'さきいれさきだし', vn: 'Nhập trước xuất trước (FIFO)', en: 'FIFO', category: 'Kho vận' },
  { id: 'vwm2', jp: '不良品', furigana: 'ふりょうひん', vn: 'Hàng lỗi/Hàng hỏng', en: 'defective product', category: 'Kho vận' },
  { id: 'vwm3', jp: '良品', furigana: 'りょうひん', vn: 'Hàng đạt chất lượng', en: 'good product', category: 'Kho vận' },
  { id: 'vwm4', jp: '受領確認', furigana: 'じゅりょうかくにん', vn: 'Xác nhận nhận hàng', en: 'receipt confirmation', category: 'Kho vận' },
  { id: 'vwm5', jp: '過剰在庫', furigana: 'かじょうざいこ', vn: 'Tồn kho dư thừa', en: 'excess stock', category: 'Kho vận' },
  { id: 'vwm6', jp: '廃棄処理', furigana: 'はいきしょり', vn: 'Xử lý rác thải/hủy bỏ', en: 'disposal processing', category: 'Kho vận' },
  { id: 'vwm7', jp: '産業廃棄物', furigana: 'さんぎょうはいきぶつ', vn: 'Rác thải công nghiệp', en: 'industrial waste', category: 'Kho vận' },

  // 4.8 Sửa chữa - bảo trì (Tiếp tục)
  { id: 'vmb1', jp: '予防保全', furigana: 'よぼうほぜん', vn: 'Bảo trì phòng ngừa', en: 'preventive maintenance', category: 'Bảo trì' },
  { id: 'vmb2', jp: '故障解析', furigana: 'こしょうかいせき', vn: 'Phân tích hỏng hóc', en: 'failure analysis', category: 'Bảo trì' },
  { id: 'vmb3', jp: 'トラブルシューティング', furigana: '-', vn: 'Xử lý sự cố', en: 'troubleshooting', category: 'Bảo trì' },
  { id: 'vmb4', jp: 'キャリブレーション', furigana: '-', vn: 'Hiệu chuẩn', en: 'calibration', category: 'Bảo trì' },
  { id: 'vmb5', jp: '安全確認', furigana: 'あんぜんかくにん', vn: 'Xác nhận an toàn', en: 'safety check', category: 'Bảo trì' },
  { id: 'vmb6', jp: '再塗装', furigana: 'さいとそう', vn: 'Sơn lại', en: 'repainting', category: 'Bảo trì' },
  { id: 'vmb7', jp: '配線修理', furigana: 'はいせんしゅうり', vn: 'Sửa dây điện', en: 'wiring repair', category: 'Bảo trì' },
  { id: 'vmb8', jp: '漏れ修理', furigana: 'もれしゅうり', vn: 'Sửa rò rỉ', en: 'leak repair', category: 'Bảo trì' },

  // 4.9 Logistics - giao nhận quốc tế (Tiếp tục)
  { id: 'vli1', jp: '緩衝材', furigana: 'かんしょうざい', vn: 'Vật liệu chống sốc', en: 'cushioning material', category: 'Logistics' },
  { id: 'vli2', jp: '航空便', furigana: 'こうくうびん', vn: 'Gửi hàng đường hàng không', en: 'air freight', category: 'Logistics' },
  { id: 'vli3', jp: '船便', furigana: 'ふなびん', vn: 'Gửi hàng đường biển', en: 'sea freight', category: 'Logistics' },
  { id: 'vli4', jp: '容積重量', furigana: 'ようせきじゅうりょう', vn: 'Trọng lượng quy đổi/thể tích', en: 'volumetric weight', category: 'Logistics' },
  { id: 'vli5', jp: '配送遅延', furigana: 'はいそうちえん', vn: 'Giao hàng trễ', en: 'delivery delay', category: 'Logistics' },
  { id: 'vli6', jp: '破損品', furigana: 'はそんひん', vn: 'Hàng bị hỏng hóc', en: 'damaged goods', category: 'Logistics' },
  { id: 'vli7', jp: '厳重梱包', furigana: 'げんじゅう', vn: 'Đóng gói kỹ lưỡng', en: 'strict packaging', category: 'Logistics' },
  { id: 'vli8', jp: '木枠梱包', furigana: 'きわくこんぽう', vn: 'Đóng kiện gỗ/Thùng thưa', en: 'wooden crate packaging', category: 'Logistics' },

  // Công cụ (Tools - Tiếp tục)
  { id: 'vct1', jp: 'スパナ', furigana: '-', vn: 'Cờ lê dẹt', en: 'spanner', category: 'Công cụ' },
  { id: 'vct2', jp: 'モンキーレンチ', furigana: '-', vn: 'Mỏ lết', en: 'adjustable wrench', category: 'Công cụ' },
  { id: 'vct3', jp: 'ニッパー', furigana: '-', vn: 'Kìm cắt', en: 'nippers', category: 'Công cụ' },
  { id: 'vct4', jp: 'ラジオペンチ', furigana: '-', vn: 'Kìm nhọn', en: 'needle-nose pliers', category: 'Công cụ' },
  { id: 'vct5', jp: 'ハンダごて', furigana: '-', vn: 'Mỏ hàn thiếc', en: 'soldering iron', category: 'Công cụ' },
  { id: 'vct6', jp: 'テスター', furigana: '-', vn: 'Đồng hồ đo điện', en: 'multimeter', category: 'Công cụ' },
  { id: 'vct7', jp: '六角レンチ', furigana: 'ろっかく', vn: 'Lục giác', en: 'hex key/Allen wrench', category: 'Công cụ' },

  // Máy móc công nghiệp đặc thù (Tiếp tục)
  { id: 'vmi1', jp: 'レーザー加工機', furigana: 'かこうき', vn: 'Máy gia công laser', en: 'laser machine', category: 'Máy móc' },
  { id: 'vmi2', jp: '真空成形機', furigana: 'しんくう', vn: 'Máy ép chân không', en: 'vacuum forming machine', category: 'Máy móc' },
  { id: 'vmi3', jp: '研削盤', furigana: 'けんさくばん', vn: 'Máy mài phẳng', en: 'grinding machine', category: 'Máy móc' },
  { id: 'vmi4', jp: '自動搬送機', furigana: 'じどうはんそうき', vn: 'Máy vận chuyển tự động', en: 'automated guided vehicle', category: 'Máy móc' },
  { id: 'vmi5', jp: '高圧洗浄機', furigana: 'こうあつせんじょうき', vn: 'Máy xịt rửa áp lực cao', en: 'high-pressure cleaner', category: 'Máy móc' },
  { id: 'vmi6', jp: '製氷機', furigana: 'せいひょうき', vn: 'Máy làm đá', en: 'ice maker', category: 'Máy móc' },
  { id: 'vmi7', jp: 'チラー', furigana: '-', vn: 'Máy làm lạnh nước', en: 'chiller', category: 'Máy móc' },

  // --- NEW VOCABULARY START ---
  // 5.1 Cutting Tools (Dụng cụ cắt gọt)
  { id: 'vct8', jp: 'エンドミル', furigana: '-', vn: 'Dao phay ngón', en: 'end mill', category: 'Dụng cụ cắt' },
  { id: 'vct9', jp: 'ドリル', furigana: '-', vn: 'Mũi khoan', en: 'drill', category: 'Dụng cụ cắt' },
  { id: 'vct10', jp: 'タップ', furigana: '-', vn: 'Mũi taro', en: 'tap', category: 'Dụng cụ cắt' },
  { id: 'vct11', jp: 'チップ', furigana: '-', vn: 'Mảnh hợp kim/Chip tiện', en: 'insert tip', category: 'Dụng cụ cắt' },
  { id: 'vct12', jp: 'バイト', furigana: '-', vn: 'Dao tiện', en: 'lathe tool bit', category: 'Dụng cụ cắt' },
  { id: 'vct13', jp: 'リーマ', furigana: '-', vn: 'Mũi doa', en: 'reamer', category: 'Dụng cụ cắt' },
  { id: 'vct14', jp: 'フライス', furigana: '-', vn: 'Dao phay', en: 'milling cutter', category: 'Dụng cụ cắt' },

  // 5.2 Transmission Components (Truyền động)
  { id: 'vtr9', jp: 'カム', furigana: '-', vn: 'Cam', en: 'cam', category: 'Truyền động' },
  { id: 'vtr10', jp: 'クランク', furigana: '-', vn: 'Trục khuỷu', en: 'crank', category: 'Truyền động' },
  { id: 'vtr11', jp: 'スプロケット', furigana: '-', vn: 'Nhông xích', en: 'sprocket', category: 'Truyền động' },
  { id: 'vtr12', jp: 'タイミングベルト', furigana: '-', vn: 'Dây đai răng', en: 'timing belt', category: 'Truyền động' },
  { id: 'vtr13', jp: 'プーリー', furigana: '-', vn: 'Puly/Bánh đai', en: 'pulley', category: 'Truyền động' },
  { id: 'vtr14', jp: 'ボールねじ', furigana: '-', vn: 'Trục vít me bi', en: 'ball screw', category: 'Truyền động' },
  { id: 'vtr15', jp: 'リニアガイド', furigana: '-', vn: 'Thanh dẫn hướng tuyến tính', en: 'linear guide', category: 'Truyền động' },

  // 5.3 Pneumatics & Hydraulics (Khí nén & Thủy lực)
  { id: 'vph1', jp: 'エアシリンダー', furigana: '-', vn: 'Xi lanh khí nén', en: 'air cylinder', category: 'Khí nén/Thủy lực' },
  { id: 'vph2', jp: 'コンプレッサー', furigana: '-', vn: 'Máy nén khí', en: 'air compressor', category: 'Khí nén/Thủy lực' },
  { id: 'vph3', jp: 'レギュレーター', furigana: '-', vn: 'Bộ điều áp', en: 'regulator', category: 'Khí nén/Thủy lực' },
  { id: 'vph4', jp: '継手', furigana: 'つぎて', vn: 'Đầu nối/Cút nối', en: 'fitting', category: 'Khí nén/Thủy lực' },
  { id: 'vph5', jp: 'ホース', furigana: '-', vn: 'Ống dẫn/Ống mềm', en: 'hose', category: 'Khí nén/Thủy lực' },
  { id: 'vph6', jp: '油圧ポンプ', furigana: 'ゆあつ', vn: 'Bơm thủy lực', en: 'hydraulic pump', category: 'Khí nén/Thủy lực' },
  { id: 'vph7', jp: '圧力計', furigana: 'あつりょくけい', vn: 'Đồng hồ áp suất', en: 'pressure gauge', category: 'Khí nén/Thủy lực' },

  // 5.4 Sensors & Control (Cảm biến & Điều khiển)
  { id: 'vsc1', jp: '光電センサー', furigana: 'こうでん', vn: 'Cảm biến quang', en: 'photoelectric sensor', category: 'Điện - Cảm biến' },
  { id: 'vsc2', jp: '圧力センサー', furigana: 'あつりょく', vn: 'Cảm biến áp suất', en: 'pressure sensor', category: 'Điện - Cảm biến' },
  { id: 'vsc3', jp: '温度計', furigana: 'おんどけい', vn: 'Đồng hồ nhiệt độ', en: 'thermometer', category: 'Điện - Cảm biến' },
  { id: 'vsc4', jp: 'エンコーダー', furigana: '-', vn: 'Bộ mã hóa vòng quay', en: 'encoder', category: 'Điện - Cảm biến' },
  { id: 'vsc5', jp: 'リミットスイッチ', furigana: '-', vn: 'Công tắc hành trình', en: 'limit switch', category: 'Điện - Cảm biến' },
  { id: 'vsc6', jp: '電磁接触器', furigana: 'でんじせっしょくき', vn: 'Khởi động từ', en: 'magnetic contactor', category: 'Điện - Cảm biến' },

  // 5.5 Manufacturing Processes (Quy trình sản xuất)
  { id: 'vmp1', jp: '鋳造', furigana: 'ちゅうぞう', vn: 'Đúc', en: 'casting', category: 'Quy trình' },
  { id: 'vmp2', jp: '鍛造', furigana: 'たんぞう', vn: 'Rèn', en: 'forging', category: 'Quy trình' },
  { id: 'vmp3', jp: '切削', furigana: 'せっさく', vn: 'Cắt gọt', en: 'cutting', category: 'Quy trình' },
  { id: 'vmp4', jp: '研削', furigana: 'けんさく', vn: 'Mài (Kỹ thuật)', en: 'grinding', category: 'Quy trình' },
  { id: 'vmp5', jp: 'プレス加工', furigana: '-', vn: 'Gia công dập', en: 'press working', category: 'Quy trình' },
  { id: 'vmp6', jp: '板金', furigana: 'ばんきん', vn: 'Gia công kim loại tấm', en: 'sheet metal', category: 'Quy trình' },
  { id: 'vmp7', jp: '表面処理', furigana: 'ひょうめんしょり', vn: 'Xử lý bề mặt', en: 'surface treatment', category: 'Quy trình' },

  // 5.6 Quality Control (Quản lý chất lượng)
  { id: 'vqc1', jp: '検査', furigana: 'けんさ', vn: 'Kiểm tra (Sản phẩm)', en: 'inspection', category: 'Chất lượng' },
  { id: 'vqc2', jp: '許容差', furigana: 'きょようさ', vn: 'Dung sai', en: 'tolerance', category: 'Chất lượng' },
  { id: 'vqc3', jp: '不良品率', furigana: 'ふりょうひんりつ', vn: 'Tỷ lệ hàng lỗi', en: 'defect rate', category: 'Chất lượng' },
  { id: 'vqc4', jp: '抜き取り検査', furigana: 'ぬきとり', vn: 'Kiểm tra xác suất', en: 'sampling inspection', category: 'Chất lượng' },
  { id: 'vqc5', jp: '全数検査', furigana: 'ぜんすう', vn: 'Kiểm tra 100%', en: 'total inspection', category: 'Chất lượng' },

  // 5.7 More Industrial Machines (Thêm máy móc)
  { id: 'vmi8', jp: 'バンドソー', furigana: '-', vn: 'Máy cưa vòng', en: 'band saw', category: 'Máy móc' },
  { id: 'vmi9', jp: 'ボール盤', furigana: 'ぼーるばん', vn: 'Máy khoan bàn', en: 'drilling machine', category: 'Máy móc' },
  { id: 'vmi10', jp: 'タッピングマシン', furigana: '-', vn: 'Máy taro', en: 'tapping machine', category: 'Máy móc' },
  { id: 'vmi11', jp: '放電加工機', furigana: 'ほうでんかこうき', vn: 'Máy gia công xung điện', en: 'EDM machine', category: 'Máy móc' },
  { id: 'vmi12', jp: 'ワイヤーカット', furigana: '-', vn: 'Máy cắt dây', en: 'wire cut EDM', category: 'Máy móc' },
  { id: 'vmi13', jp: '平面研削盤', furigana: 'へいめんけんさくばん', vn: 'Máy mài phẳng', en: 'surface grinder', category: 'Máy móc' },
  { id: 'vmi14', jp: '円筒研削盤', furigana: 'えんとうけんさくばん', vn: 'Máy mài tròn', en: 'cylindrical grinder', category: 'Máy móc' },

  // 5.8 More Materials (Thêm vật liệu)
  { id: 'vma9', jp: '合金鋼', furigana: 'ごうきんこう', vn: 'Thép hợp kim', en: 'alloy steel', category: 'Vật liệu' },
  { id: 'vma10', jp: '炭素鋼', furigana: 'たんそこう', vn: 'Thép carbon', en: 'carbon steel', category: 'Vật liệu' },
  { id: 'vma11', jp: '工具鋼', furigana: 'こうぐこう', vn: 'Thép công cụ', en: 'tool steel', category: 'Vật liệu' },
  { id: 'vma12', jp: '高速度鋼', furigana: 'こうそくどこう', vn: 'Thép gió', en: 'HSS (High Speed Steel)', category: 'Vật liệu' },
  { id: 'vma13', jp: '特殊鋼', furigana: 'とくしゅ', vn: 'Thép đặc biệt', en: 'special steel', category: 'Vật liệu' },
  { id: 'vma14', jp: '鋳鉄', furigana: 'ちゅうてつ', vn: 'Gang', en: 'cast iron', category: 'Vật liệu' },

  // 5.9 Machine Structure (Cấu trúc máy)
  { id: 'vst6', jp: '主軸', furigana: 'しゅじく', vn: 'Trục chính', en: 'main spindle', category: 'Cấu trúc máy' },
  { id: 'vst7', jp: 'ベッド', furigana: '-', vn: 'Bệ máy/Thân máy', en: 'machine bed', category: 'Cấu trúc máy' },
  { id: 'vst8', jp: 'テーブル', furigana: '-', vn: 'Bàn làm việc', en: 'work table', category: 'Cấu trúc máy' },
  { id: 'vst9', jp: '刃物台', furigana: 'はものだい', vn: 'Đài gá dao', en: 'tool post', category: 'Cấu trúc máy' },
  { id: 'vst10', jp: '心押台', furigana: 'しんおしだい', vn: 'Ụ động', en: 'tailstock', category: 'Cấu trúc máy' },
  { id: 'vst11', jp: 'チャック', furigana: '-', vn: 'Mâm cặp', en: 'chuck', category: 'Cấu trúc máy' },
  { id: 'vst12', jp: 'カバー', furigana: '-', vn: 'Nắp che/Vỏ bảo vệ', en: 'cover', category: 'Cấu trúc máy' },

  // 5.10 Adjectives for conditions (Tính từ mô tả tình trạng)
  { id: 'vbt15', jp: '円滑', furigana: 'えんかつ', vn: 'Trơn tru/Sẻn', en: 'smoothly', category: 'Tình trạng' },
  { id: 'vbt16', jp: '迅速', furigana: 'じんそく', vn: 'Nhanh chóng', en: 'rapid', category: 'Tình trạng' },
  { id: 'vbt17', jp: '強力', furigana: 'きょうりょく', vn: 'Mạnh mẽ', en: 'powerful', category: 'Tình trạng' },
  { id: 'vbt18', jp: '静音', furigana: 'せいおん', vn: 'Yên tĩnh', en: 'silent', category: 'Tình trạng' },
  { id: 'vbt19', jp: '堅牢', furigana: 'けんろう', vn: 'Kiên cố/Bền bỉ', en: 'robust', category: 'Tình trạng' },
  { id: 'vbt20', jp: '精密', furigana: 'せいみつ', vn: 'Chính xác/Tinh vi', en: 'precise', category: 'Tình trạng' },
  { id: 'vbt21', jp: '安定', furigana: 'あんてい', vn: 'Ổn định', en: 'stable', category: 'Tình trạng' },
  { id: 'vbt22', jp: '不調', furigana: 'ふちょう', vn: 'Trục trặc', en: 'bad condition', category: 'Tình trạng' },

  // --- ADDING MORE TO REACH 1000 GOAL ---
  { id: 'vx1', jp: '歯車', furigana: 'はぐるま', vn: 'Bánh răng (Dịch nghĩa)', en: 'gearwheel', category: 'Linh kiện' },
  { id: 'vx2', jp: '平歯車', furigana: 'ひら', vn: 'Bánh răng trụ thẳng', en: 'spur gear', category: 'Linh kiện' },
  { id: 'vx3', jp: 'かさ歯車', furigana: '-', vn: 'Bánh răng côn', en: 'bevel gear', category: 'Linh kiện' },
  { id: 'vx4', jp: 'ねじ歯車', furigana: '-', vn: 'Bánh răng xoắn', en: 'helical gear', category: 'Linh kiện' },
  { id: 'vx5', jp: 'ウォームギア', furigana: '-', vn: 'Bánh răng trục vít', en: 'worm gear', category: 'Linh kiện' },
  { id: 'vx6', jp: 'ラック', furigana: '-', vn: 'Thanh răng', en: 'rack', category: 'Linh kiện' },
  { id: 'vx7', jp: 'ピニオン', furigana: '-', vn: 'Bánh răng nhỏ/Bánh dẫn', en: 'pinion', category: 'Linh kiện' },

  { id: 'vx8', jp: '転がり軸受', furigana: 'ころがり', vn: 'Ổ lăn', en: 'rolling bearing', category: 'Linh kiện' },
  { id: 'vx9', jp: 'すべり軸受', furigana: '-', vn: 'Ổ trượt', en: 'sliding bearing', category: 'Linh kiện' },
  { id: 'vx10', jp: '玉軸受', furigana: 'たま', vn: 'Ổ bi', en: 'ball bearing', category: 'Linh kiện' },
  { id: 'vx11', jp: 'ころ軸受', furigana: '-', vn: 'Ổ đũa', en: 'roller bearing', category: 'Linh kiện' },
  { id: 'vx12', jp: 'スラスト軸受', furigana: '-', vn: 'Ổ chặn', en: 'thrust bearing', category: 'Linh kiện' },

  { id: 'vx13', jp: 'カップリング', furigana: '-', vn: 'Khớp nối', en: 'coupling', category: 'Linh kiện' },
  { id: 'vx14', jp: '自在継手', furigana: 'じざい', vn: 'Khớp nối vạn năng', en: 'universal joint', category: 'Linh kiện' },
  { id: 'vx15', jp: 'クラッチ', furigana: '-', vn: 'Ly hợp', en: 'clutch', category: 'Linh kiện' },
  { id: 'vx16', jp: 'ブレーキ', furigana: '-', vn: 'Phanh', en: 'brake', category: 'Linh kiện' },

  { id: 'vx17', jp: 'ねじ', furigana: '-', vn: 'Vít/Ốc vít', en: 'screw/thread', category: 'Linh kiện' },
  { id: 'vx18', jp: 'おねじ', furigana: '-', vn: 'Ren ngoài', en: 'external thread', category: 'Linh kiện' },
  { id: 'vx19', jp: 'めねじ', furigana: '-', vn: 'Ren trong', en: 'internal thread', category: 'Linh kiện' },
  { id: 'vx20', jp: 'さらねじ', furigana: '-', vn: 'Vít bằng/Vít đầu bằng', en: 'countersunk screw', category: 'Linh kiện' },

  { id: 'vx21', jp: 'ボルト', furigana: '-', vn: 'Bu lông (Cơ bản)', en: 'bolt', category: 'Linh kiện' },
  { id: 'vx22', jp: '六角ボルト', furigana: 'ろっかく', vn: 'Bu lông lục giác', en: 'hex bolt', category: 'Linh kiện' },
  { id: 'vx23', jp: '座金', furigana: 'ざがね', vn: 'Long đền/Vòng đệm', en: 'washer', category: 'Linh kiện' },
  { id: 'vx24', jp: '羽目板', furigana: 'はめいた', vn: 'Tấm đệm/Shim', en: 'shim/plate', category: 'Linh kiện' },

  { id: 'vx25', jp: 'キー', furigana: '-', vn: 'Then', en: 'key', category: 'Linh kiện' },
  { id: 'vx26', jp: '平行キー', furigana: '-', vn: 'Then bằng', en: 'parallel key', category: 'Linh kiện' },
  { id: 'vx27', jp: '勾配キー', furigana: 'こうばい', vn: 'Then vát', en: 'taper key', category: 'Linh kiện' },
  { id: 'vx28', jp: '半月キー', furigana: 'はんげつ', vn: 'Then bán nguyệt', en: 'woodruff key', category: 'Linh kiện' },

  { id: 'vx29', jp: 'ピン', furigana: '-', vn: 'Chốt (Chi tiết)', en: 'pin', category: 'Linh kiện' },
  { id: 'vx30', jp: '平行ピン', furigana: '-', vn: 'Chốt trụ', en: 'parallel pin', category: 'Linh kiện' },
  { id: 'vx31', jp: 'テーパピン', furigana: '-', vn: 'Chốt côn', en: 'taper pin', category: 'Linh kiện' },
  { id: 'vx32', jp: '割りピン', furigana: 'わり', vn: 'Chốt chẻ', en: 'split pin', category: 'Linh kiện' },

  { id: 'vx33', jp: 'ばね', furigana: '-', vn: 'Lò xo (Kỹ thuật)', en: 'spring', category: 'Linh kiện' },
  { id: 'vx34', jp: '圧縮ばね', furigana: 'あっしゅく', vn: 'Lò xo nén', en: 'compression spring', category: 'Linh kiện' },
  { id: 'vx35', jp: '引張ばね', furigana: 'ひっぱり', vn: 'Lò xo kéo', en: 'extension spring', category: 'Linh kiện' },
  { id: 'vx36', jp: 'ねじりばね', furigana: '-', vn: 'Lò xo xoắn', en: 'torsion spring', category: 'Linh kiện' },
  { id: 'vx37', jp: '板ばね', furigana: 'いた', vn: 'Nhíp/Lò xo lá', en: 'leaf spring', category: 'Linh kiện' },

  { id: 'vx38', jp: 'シール', furigana: '-', vn: 'Gioăng/Phớt', en: 'seal', category: 'Linh kiện' },
  { id: 'vx39', jp: 'オイルシール', furigana: '-', vn: 'Phớt dầu', en: 'oil seal', category: 'Linh kiện' },
  { id: 'vx40', jp: 'Oリング', furigana: '-', vn: 'Vòng chữ O/O-ring', en: 'O-ring', category: 'Linh kiện' },
  { id: 'vx41', jp: 'ガスケット', furigana: '-', vn: 'Gasket/Đệm làm kín', en: 'gasket', category: 'Linh kiện' },

  { id: 'vx42', jp: '電磁石', furigana: 'でんじしゃく', vn: 'Nam châm điện', en: 'electromagnet', category: 'Linh kiện' },
  { id: 'vx43', jp: '配線器具', furigana: 'はいせん', vn: 'Thiết bị đi dây', en: 'wiring devices', category: 'Điện' },
  { id: 'vx44', jp: '端子', furigana: 'たんし', vn: 'Đầu cốt/Cực đấu dây', en: 'terminal', category: 'Điện' },
  { id: 'vx45', jp: 'コネクタ', furigana: '-', vn: 'Đầu nối/Jack cắm', en: 'connector', category: 'Điện' },
  { id: 'vx46', jp: 'ケーブル', furigana: '-', vn: 'Cáp điện', en: 'cable', category: 'Điện' },
  { id: 'vx47', jp: '絶縁体', furigana: 'ぜつえんたい', vn: 'Chất cách điện', en: 'insulator', category: 'Điện' },
  { id: 'vx48', jp: '導体', furigana: 'どうたい', vn: 'Vật dẫn điện', en: 'conductor', category: 'Điện' },

  { id: 'vx49', jp: '抵抗器', furigana: 'ていこうき', vn: 'Điện trở (Linh kiện)', en: 'resistor', category: 'Điện' },
  { id: 'vx50', jp: 'コンデンサ', furigana: '-', vn: 'Tụ điện (Linh kiện)', en: 'capacitor', category: 'Điện' },
  { id: 'vx51', jp: 'コイル', furigana: '-', vn: 'Cuộn cảm/Cuộn dây', en: 'coil/inductor', category: 'Điện' },
  { id: 'vx52', jp: 'ダイオード', furigana: '-', vn: 'Điốt', en: 'diode', category: 'Điện' },
  { id: 'vx53', jp: 'トランジスタ', furigana: '-', vn: 'Transistor/Bóng bán dẫn', en: 'transistor', category: 'Điện' },
  { id: 'vx54', jp: 'IC/チップ', furigana: '-', vn: 'Mạch tích hợp', en: 'integrated circuit', category: 'Điện' },

  { id: 'vx55', jp: 'ヒューズ', furigana: '-', vn: 'Cầu chì', en: 'fuse', category: 'Điện' },
  { id: 'vx56', jp: 'サーキットブレーカー', furigana: '-', vn: 'Aptomat (Chi tiết)', en: 'circuit breaker', category: 'Điện' },
  { id: 'vx57', jp: '変圧器', furigana: 'へんあつき', vn: 'Máy biến áp (Chi tiết)', en: 'transformer', category: 'Điện' },
  { id: 'vx58', jp: 'インダクタ', furigana: '-', vn: 'Cuộn cảm (Chi tiết)', en: 'inductor', category: 'Điện' },

  { id: 'vx59', jp: '制御盤', furigana: 'せいぎょばん', vn: 'Tủ điều khiển', en: 'control panel', category: 'Điện' },
  { id: 'vx60', jp: '操作盤', furigana: 'そうさばん', vn: 'Bàn điều khiển', en: 'operation panel', category: 'Điện' },
  { id: 'vx61', jp: '配電盤', furigana: 'はいでんばん', vn: 'Bản phân phối điện', en: 'distribution board', category: 'Điện' },

  { id: 'vx62', jp: '直流', furigana: 'ちょくりゅう', vn: 'Dòng điện một chiều/DC', en: 'direct current', category: 'Điện' },
  { id: 'vx63', jp: '交流', furigana: 'こうりゅう', vn: 'Dòng điện xoay chiều/AC', en: 'alternating current', category: 'Điện' },
  { id: 'vx64', jp: '単相', furigana: 'たんそう', vn: 'Điện 1 pha', en: 'single phase', category: 'Điện' },
  { id: 'vx65', jp: '三相', furigana: 'さんそう', vn: 'Điện 3 pha', en: 'three phase', category: 'Điện' },

  { id: 'vx66', jp: 'アース', furigana: '-', vn: 'Tiếp địa/Nối đất', en: 'ground/earth', category: 'Điện' },
  { id: 'vx67', jp: '短絡', furigana: 'たんらく', vn: 'Ngắn mạch/Chập điện', en: 'short circuit', category: 'Điện' },
  { id: 'vx68', jp: '漏電', furigana: 'ろうでん', vn: 'Rò điện', en: 'electrical leakage', category: 'Điện' },
  { id: 'vx69', jp: '感電', furigana: 'かんでん', vn: 'Điện giật', en: 'electric shock', category: 'Điện' },

  { id: 'vx70', jp: '潤滑液', furigana: 'じゅんかつえき', vn: 'Dịch bôi trơn', en: 'lubricating fluid', category: 'Vật tư' },
  { id: 'vx71', jp: '切削油', furigana: 'せっさくゆ', vn: 'Dầu làm mát/Dầu cắt gọt', en: 'cutting oil', category: 'Vật tư' },
  { id: 'vx72', jp: '作動油', furigana: 'さどうゆ', vn: 'Dầu thủy lực', en: 'hydraulic oil', category: 'Vật tư' },
  { id: 'vx73', jp: '研磨材', furigana: 'けんまざい', vn: 'Vật liệu mài/Đá mài', en: 'abrasives', category: 'Vật tư' },
  { id: 'vx74', jp: '研磨石', furigana: 'けんませき', vn: 'Đá mài (Chi tiết)', en: 'grinding stone', category: 'Vật tư' },

  { id: 'vx75', jp: '鋳物', furigana: 'いもの', vn: 'Vật đúc', en: 'casting product', category: 'Vật liệu' },
  { id: 'vx76', jp: '鋼管', furigana: 'こうかん', vn: 'Ống thép', en: 'steel pipe', category: 'Vật liệu' },
  { id: 'vx77', jp: '形鋼', furigana: 'かたこう', vn: 'Thép hình (I, U, V)', en: 'shaped steel', category: 'Vật liệu' },
  { id: 'vx78', jp: '線材', furigana: 'せんざい', vn: 'Thép dây/Dây kim loại', en: 'wire rod', category: 'Vật liệu' },

  { id: 'vx79', jp: '摩耗', furigana: 'まもう', vn: 'Mài mòn', en: 'wear/abrasion', category: 'Tình trạng' },
  { id: 'vx80', jp: '疲労', furigana: 'ひろう', vn: 'Mỏi (Kim loại)', en: 'fatigue', category: 'Tình trạng' },
  { id: 'vx81', jp: '経年', furigana: 'けいねん', vn: 'Qua nhiều năm/Lâu năm', en: 'over years', category: 'Tình trạng' },
  { id: 'vx82', jp: '初期不良', furigana: 'しょき', vn: 'Lỗi ngay khi mới mua', en: 'initial failure', category: 'Tình trạng' },

  { id: 'vx83', jp: '設置', furigana: 'せっち', vn: 'Lắp đặt/Thiết lập', en: 'installation', category: 'Thao tác' },
  { id: 'vx84', jp: '移設', furigana: 'いせつ', vn: 'Di dời máy', en: 'relocation', category: 'Thao tác' },
  { id: 'vx85', jp: '撤去', furigana: 'てきょ', vn: 'Tháo dỡ/Gỡ bỏ', en: 'removal', category: 'Thao tác' },
  { id: 'vx86', jp: '改造', furigana: 'かいぞう', vn: 'Cải tiến/Độ lại', en: 'modification', category: 'Thao tác' },

  { id: 'vx87', jp: '試作', furigana: 'しさく', vn: 'Làm mẫu/Prototype', en: 'prototyping', category: 'Thao tác' },
  { id: 'vx88', jp: '量産', furigana: 'りょうさん', vn: 'Sản xuất hàng loạt', en: 'mass production', category: 'Thao tác' },
  { id: 'vx89', jp: '工程', furigana: 'こうてい', vn: 'Công đoạn/Quy trình', en: 'process', category: 'Thao tác' },
  { id: 'vx90', jp: '歩留まり', furigana: 'ぶどまり', vn: 'Tỷ lệ thành phẩm', en: 'yield', category: 'Thao tác' },

  { id: 'vx91', jp: '寸法', furigana: 'すんぽう', vn: 'Kích thước', en: 'dimension', category: 'Thông số' },
  { id: 'vx92', jp: '全長', furigana: 'ぜんちょう', vn: 'Chiều dài tổng thể', en: 'overall length', category: 'Thông số' },
  { id: 'vx93', jp: '全幅', furigana: 'ぜんぷく', vn: 'Chiều rộng tổng thể', en: 'overall width', category: 'Thông số' },
  { id: 'vx94', jp: '全高', furigana: 'ぜんこう', vn: 'Chiều cao tổng thể', en: 'overall height', category: 'Thông số' },
  { id: 'vx95', jp: '重量', furigana: 'じゅうりょう', vn: 'Trọng lượng', en: 'weight', category: 'Thông số' },

  { id: 'vx96', jp: '内径', furigana: 'ないけい', vn: 'Đường kính trong', en: 'inside diameter', category: 'Thông số' },
  { id: 'vx97', jp: '外径', furigana: 'がいけい', vn: 'Đường kính ngoài', en: 'outside diameter', category: 'Thông số' },
  { id: 'vx98', jp: '板厚', furigana: 'いたあつ', vn: 'Độ dày tấm', en: 'plate thickness', category: 'Thông số' },
  { id: 'vx99', jp: 'ねじピッチ', furigana: '-', vn: 'Bước ren', en: 'thread pitch', category: 'Thông số' },

  { id: 'vx100', jp: '硬度', furigana: 'こうど', vn: 'Độ cứng', en: 'hardness', category: 'Thông số' },
  { id: 'vx101', jp: '強度', furigana: 'きょうど', vn: 'Cường độ/Độ bền', en: 'strength', category: 'Thông số' },
  { id: 'vx102', jp: '剛性', furigana: 'ごうせい', vn: 'Độ cứng vững', en: 'rigidity', category: 'Thông số' },
  { id: 'vx103', jp: '靭性', furigana: 'じんせい', vn: 'Độ dẻo dai', en: 'toughness', category: 'Thông số' },

  { id: 'vx104', jp: '粗さ', furigana: 'あらさ', vn: 'Độ nhám/Độ xù xì', en: 'roughness', category: 'Thông số' },
  { id: 'vx105', jp: '真直度', furigana: 'しんちょくど', vn: 'Độ thẳng', en: 'straightness', category: 'Thông số' },
  { id: 'vx106', jp: '真円度', furigana: 'しんえんど', vn: 'Độ tròn', en: 'roundness', category: 'Thông số' },
  { id: 'vx107', jp: '平面度', furigana: 'へいめんど', vn: 'Độ phẳng', en: 'flatness', category: 'Thông số' },
  { id: 'vx108', jp: '平行度', furigana: 'へいこうど', vn: 'Độ song song', en: 'parallelism', category: 'Thông số' },
  { id: 'vx109', jp: '直角度', furigana: 'ちょっかくど', vn: 'Độ vuông góc', en: 'perpendicularity', category: 'Thông số' },

  { id: 'vx110', jp: '定規', furigana: 'じょうぎ', vn: 'Thước kẻ/Thước thẳng', en: 'ruler', category: 'Công cụ' },
  { id: 'vx111', jp: '巻尺', furigana: 'まきじゃく', vn: 'Thước cuộn', en: 'tape measure', category: 'Công cụ' },
  { id: 'vx112', jp: '直角定規', furigana: 'ちょっかく', vn: 'Thước vuông/Ke vuông', en: 'square', category: 'Công cụ' },
  { id: 'vx113', jp: '分度器', furigana: 'ぶんどき', vn: 'Thước đo độ', en: 'protractor', category: 'Công cụ' },

  { id: 'vx114', jp: 'ダイヤルゲージ', furigana: '-', vn: 'Đồng hồ so', en: 'dial gauge', category: 'Công cụ' },
  { id: 'vx115', jp: '限界ゲージ', furigana: 'げんかい', vn: 'Dưỡng đo kiểm/Cấu đo kiểm', en: 'limit gauge', category: 'Công cụ' },
  { id: 'vx116', jp: '三次元測定機', furigana: 'さんじげん', vn: 'Máy đo tọa độ 3D (CMM)', en: 'CMM machine', category: 'Công cụ' },

  { id: 'vx117', jp: '万力', furigana: 'まんりき', vn: 'Ê-tô', en: 'vise', category: 'Công cụ' },
  { id: 'vx118', jp: 'クランプ', furigana: '-', vn: 'Kẹp/Cảo', en: 'clamp', category: 'Công cụ' },
  { id: 'vx119', jp: 'ペンチ', furigana: '-', vn: 'Kìm', en: 'pliers', category: 'Công cụ' },
  { id: 'vx120', jp: 'ハンマー', furigana: '-', vn: 'Búa', en: 'hammer', category: 'Công cụ' },
  { id: 'vx121', jp: 'やすり', furigana: '-', vn: 'Dũa', en: 'file', category: 'Công cụ' },
  { id: 'vx122', jp: '金切鋸', furigana: 'かなきりのこ', vn: 'Cưa sắt/Cưa tay', en: 'hacksaw', category: 'Công cụ' },

  { id: 'vx123', jp: '溶接棒', furigana: 'ようせつぼう', vn: 'Que hàn', en: 'welding rod', category: 'Vật tư' },
  { id: 'vx124', jp: '溶加材', furigana: 'ようかざい', vn: 'Vật liệu hàn bổ sung', en: 'filler metal', category: 'Vật tư' },
  { id: 'vx125', jp: 'シールドガス', furigana: '-', vn: 'Khí bảo vệ hàn', en: 'shielding gas', category: 'Vật tư' },

  { id: 'vx126', jp: '焼入れ', furigana: 'やきいれ', vn: 'Tôi (Nhiệt luyện)', en: 'hardening/quenching', category: 'Nhiệt luyện' },
  { id: 'vx127', jp: '焼戻し', furigana: 'やきもどし', vn: 'Ram (Nhiệt luyện)', en: 'tempering', category: 'Nhiệt luyện' },
  { id: 'vx128', jp: '焼なまし', furigana: 'やきなまし', vn: 'Ủ (Nhiệt luyện)', en: 'annealing', category: 'Nhiệt luyện' },
  { id: 'vx129', jp: '焼ならし', furigana: 'やきならし', vn: 'Thường hóa (Nhiệt luyện)', en: 'normalizing', category: 'Nhiệt luyện' },

  { id: 'vx130', jp: '窒化', furigana: 'ちっか', vn: 'Thấm nitơ', en: 'nitriding', category: 'Nhiệt luyện' },
  { id: 'vx131', jp: '浸炭', furigana: 'しんたん', vn: 'Thấm carbon', en: 'carburizing', category: 'Nhiệt luyện' },
  { id: 'vx132', jp: '高周波焼入れ', furigana: 'こうしゅうは', vn: 'Tôi cao tần', en: 'induction hardening', category: 'Nhiệt luyện' },

  { id: 'vx133', jp: '図面', furigana: 'ずめん', vn: 'Bản vẽ', en: 'drawing', category: 'Thiết kế' },
  { id: 'vx134', jp: '設計', furigana: 'せっけい', vn: 'Thiết kế (Quá trình)', en: 'design', category: 'Thiết kế' },
  { id: 'vx135', jp: '展開図', furigana: 'てんかいず', vn: 'Bản vẽ triển khai/Trải phẳng', en: 'development drawing', category: 'Thiết kế' },
  { id: 'vx136', jp: '組立図', furigana: 'くみたてず', vn: 'Bản vẽ lắp', en: 'assembly drawing', category: 'Thiết kế' },
  { id: 'vx137', jp: '部品図', furigana: 'ぶひんず', vn: 'Bản vẽ chi tiết', en: 'part drawing', category: 'Thiết kế' },

  { id: 'vx138', jp: '三面図', furigana: 'さんめんず', vn: 'Bản vẽ 3 hình chiếu', en: 'three-view drawing', category: 'Thiết kế' },
  { id: 'vx139', jp: '投影法', furigana: 'とうえいほう', vn: 'Phương pháp chiếu', en: 'projection method', category: 'Thiết kế' },
  { id: 'vx140', jp: '尺度', furigana: 'しゃくど', vn: 'Tỷ lệ (Bản vẽ)', en: 'scale', category: 'Thiết kế' },

  { id: 'vx141', jp: 'CAD', furigana: 'きゃど', vn: 'Phần mềm thiết kế CAD', en: 'CAD', category: 'Thiết kế' },
  { id: 'vx142', jp: 'CAM', furigana: 'きゃむ', vn: 'Phần mềm lập trình gia công CAM', en: 'CAM', category: 'Thiết kế' },
  { id: 'vx143', jp: 'CAE', furigana: 'しーえーいー', vn: 'Phần mềm phân tích kỹ thuật CAE', en: 'CAE', category: 'Thiết kế' },

  { id: 'vx144', jp: '見積', furigana: 'みつもり', vn: 'Báo giá/Ước tính', en: 'estimation', category: 'Thương mại' },
  { id: 'vx145', jp: '受注', furigana: 'じゅちゅう', vn: 'Nhận đơn hàng', en: 'receiving order', category: 'Thương mại' },
  { id: 'vx146', jp: '納入', furigana: 'のうにゅう', vn: 'Giao hàng/Cung cấp', en: 'delivery/supply', category: 'Thương mại' },
  { id: 'vx147', jp: '納期', furigana: 'のうき', vn: 'Thời hạn giao hàng', en: 'delivery date', category: 'Thương mại' },

  { id: 'vx148', jp: '単価', furigana: 'たんか', vn: 'Đơn giá', en: 'unit price', category: 'Thương mại' },
  { id: 'vx149', jp: '総額', furigana: 'そうがく', vn: 'Tổng tiền', en: 'total amount', category: 'Thương mại' },
  { id: 'vx150', jp: '消費税', furigana: 'しょうひぜい', vn: 'Thuế tiêu thụ/VAT', en: 'consumption tax', category: 'Thương mại' },
  
  // REACHING 500+ Items with this block
  { id: 'vmi15', jp: '研削機', furigana: 'けんさくき', vn: 'Máy mài (Nói chung)', en: 'grinder', category: 'Máy móc' },
  { id: 'vmi16', jp: '切断機', furigana: 'せつだんき', vn: 'Máy cắt', en: 'cutting machine', category: 'Máy móc' },
  { id: 'vmi17', jp: '曲げ機', furigana: 'まげき', vn: 'Máy uốn', en: 'bending machine', category: 'Máy móc' },
  { id: 'vmi18', jp: '旋盤', furigana: 'せんばん', vn: 'Máy tiện (Cơ)', en: 'lathe', category: 'Máy móc' },
  { id: 'vmi19', jp: '穴あけ機', furigana: 'あなあけき', vn: 'Máy đục lỗ/Máy khoan', en: 'drilling machine', category: 'Máy móc' },
  { id: 'vmi20', jp: '自動プレス', furigana: '-', vn: 'Máy dập tự động', en: 'automatic press', category: 'Máy móc' },
  { id: 'vmi21', jp: '油圧プレス', furigana: 'ゆあつ', vn: 'Máy dập thủy lực', en: 'hydraulic press', category: 'Máy móc' },
  { id: 'vmi22', jp: '空圧プレス', furigana: 'くうあつ', vn: 'Máy dập khí nén', en: 'pneumatic press', category: 'Máy móc' },
  
  { id: 'vlo8', jp: '輸送', furigana: 'ゆそう', vn: 'Vận chuyển/Chuyên chở', en: 'transportation', category: 'Logistics' },
  { id: 'vlo9', jp: '積卸', furigana: 'つみおろし', vn: 'Bốc dỡ hàng', en: 'loading/unloading', category: 'Logistics' },
  { id: 'vlo10', jp: '保管', furigana: 'ほかん', vn: 'Bảo quản/Lưu kho', en: 'storage', category: 'Logistics' },
  { id: 'vlo11', jp: '在庫切', furigana: 'ざいこぎれ', vn: 'Hết hàng', en: 'out of stock', category: 'Logistics' },
  { id: 'vlo12', jp: '欠品', furigana: 'けっぴん', vn: 'Thiếu hàng', en: 'shortage of goods', category: 'Logistics' },
  { id: 'vlo13', jp: '分納', furigana: 'ぶんのう', vn: 'Giao hàng nhiều lần/Giao theo đợt', en: 'partial delivery', category: 'Logistics' },
  
  { id: 'vsf8', jp: '注意', furigana: 'ちゅうい', vn: 'Chú ý', en: 'caution', category: 'An toàn' },
  { id: 'vsf9', jp: '危険', furigana: 'きけん', vn: 'Nguy hiểm', en: 'danger', category: 'An toàn' },
  { id: 'vsf10', jp: '警告', furigana: 'けいこく', vn: 'Cảnh báo', en: 'warning', category: 'An toàn' },
  { id: 'vsf11', jp: '火気厳禁', furigana: 'かきげんきん', vn: 'Cấm lửa', en: 'no open flames', category: 'An toàn' },
  { id: 'vsf12', jp: '立入禁止', furigana: 'たちいりきんし', vn: 'Cấm vào', en: 'keep out', category: 'An toàn' },
  { id: 'vsf13', jp: '禁煙', furigana: 'きんえん', vn: 'Cấm hút thuốc', en: 'no smoking', category: 'An toàn' },
  { id: 'vsf14', jp: '頭上注意', furigana: 'ずじょう', vn: 'Chú ý trên đầu', en: 'watch your head', category: 'An toàn' },
  { id: 'vsf15', jp: '手元注意', furigana: 'てもと', vn: 'Chú ý tay/Cẩn thận tay', en: 'watch your hands', category: 'An toàn' },
  { id: 'vsf16', jp: '足元注意', furigana: 'あしもと', vn: 'Chú ý dưới chân', en: 'watch your step', category: 'An toàn' },
  
  { id: 'vma15', jp: '軟鋼', furigana: 'なんこう', vn: 'Thép mềm', en: 'mild steel', category: 'Vật liệu' },
  { id: 'vma16', jp: '硬鋼', furigana: 'こうこう', vn: 'Thép cứng/Thép cường độ cao', en: 'hard steel', category: 'Vật liệu' },
  { id: 'vma17', jp: 'バネ鋼', furigana: '-', vn: 'Thép lò xo', en: 'spring steel', category: 'Vật liệu' },
  { id: 'vma18', jp: '快削鋼', furigana: 'かいさくこう', vn: 'Thép dễ cắt gọt', en: 'free-cutting steel', category: 'Vật liệu' },
  { id: 'vma19', jp: 'クロム鋼', furigana: '-', vn: 'Thép crom', en: 'chromium steel', category: 'Vật liệu' },
  { id: 'vma20', jp: 'ニッケル鋼', furigana: '-', vn: 'Thép niken', en: 'nickel steel', category: 'Vật liệu' },
  
  { id: 'vtr25', jp: '領収証', furigana: 'りょうしゅうしょう', vn: 'Biên lai/Hóa đơn (Dùng cho thuế)', en: 'receipt bill', category: 'Thương mại' },
  { id: 'vtr26', jp: '請求書', furigana: 'せいきゅうしょ', vn: 'Hóa đơn thanh toán/Yêu cầu thanh toán', en: 'invoice', category: 'Thương mại' },
  { id: 'vtr27', jp: '納品書', furigana: 'のうひんしょ', vn: 'Phiếu giao hàng', en: 'delivery note', category: 'Thương mại' },
  { id: 'vtr28', jp: '契約書', furigana: 'けいやくしょ', vn: 'Hợp đồng', en: 'contract/agreement', category: 'Thương mại' },
  { id: 'vtr29', jp: '価格表', furigana: 'かかくひょう', vn: 'Bảng giá', en: 'price list', category: 'Thương mại' },
  { id: 'vtr30', jp: 'カタログ', furigana: '-', vn: 'Ca-ta-lô/Sách hướng dẫn sản phẩm', en: 'catalog', category: 'Thương mại' },

  // --- CONTINUE EXPANDING ---
  { id: 'ext1', jp: '動力', furigana: 'どうりょく', vn: 'Động lực/Nguồn điện động lực', en: 'power', category: 'Năng lượng' },
  { id: 'ext2', jp: '燃料', furigana: 'ねんりょう', vn: 'Nhiên liệu', en: 'fuel', category: 'Năng lượng' },
  { id: 'ext3', jp: 'ガソリン', furigana: '-', vn: 'Xăng', en: 'gasoline', category: 'Năng lượng' },
  { id: 'ext4', jp: '軽油', furigana: 'けいゆ', vn: 'Dầu Diesel', en: 'diesel oil', category: 'Năng lượng' },
  { id: 'ext5', jp: '灯油', furigana: 'とうゆ', vn: 'Dầu hỏa', en: 'kerosene', category: 'Năng lượng' },
  { id: 'ext6', jp: '潤滑剤', furigana: 'じゅんかつ', vn: 'Chất bôi trơn', en: 'lubricant', category: 'Vật tư' },
  
  { id: 'ext7', jp: '溶剤', furigana: 'ようざい', vn: 'Dung môi', en: 'solvent', category: 'Vật tư' },
  { id: 'ext8', jp: '接着剤', furigana: 'せっちゃく', vn: 'Keo dán', en: 'adhesive', category: 'Vật tư' },
  { id: 'ext9', jp: 'パッキン', furigana: '-', vn: 'Gioăng/Đệm kín', en: 'packing', category: 'Linh kiện' },
  { id: 'ext10', jp: 'ブッシュ', furigana: '-', vn: 'Bạc lót/Ống lót', en: 'bush/bushing', category: 'Linh kiện' },
  
  { id: 'ext11', jp: 'リベット', furigana: '-', vn: 'Đinh tán', en: 'rivet', category: 'Linh kiện' },
  { id: 'ext12', jp: 'アンカーボルト', furigana: '-', vn: 'Bu lông nở/Tắc kê', en: 'anchor bolt', category: 'Linh kiện' },
  { id: 'ext13', jp: '止め輪', furigana: 'とめわ', vn: 'Vòng chặn/Phe cài', en: 'retaining ring/snap ring', category: 'Linh kiện' },
  { id: 'ext14', jp: 'スナップリング', furigana: '-', vn: 'Phe cài/Vòng hãm', en: 'snap ring', category: 'Linh kiện' },
  
  { id: 'ext15', jp: '歯形', furigana: 'はがた', vn: 'Biên dạng răng/Dáng răng', en: 'tooth profile', category: 'Kỹ thuật' },
  { id: 'ext16', jp: 'モジュール', furigana: '-', vn: 'Mô-đun (Bánh răng)', en: 'module', category: 'Kỹ thuật' },
  { id: 'ext17', jp: '中心距離', furigana: 'ちゅうしん', vn: 'Khoảng cách tâm', en: 'center distance', category: 'Kỹ thuật' },
  { id: 'ext18', jp: 'バックラッシ', furigana: '-', vn: 'Độ rơ/Khe hở răng', en: 'backlash', category: 'Kỹ thuật' },
  
  { id: 'ext19', jp: '回転', furigana: 'かいてん', vn: 'Xoay/Vòng quay', en: 'rotation', category: 'Hành động' },
  { id: 'ext20', jp: '往復運動', furigana: 'おうふく', vn: 'Chuyển động tịnh tiến', en: 'reciprocating motion', category: 'Hành động' },
  { id: 'ext21', jp: '振動', furigana: 'しんどう', vn: 'Rung động', en: 'vibration', category: 'Hành động' },
  { id: 'ext22', jp: '騒音', furigana: 'そうおん', vn: 'Tiếng ồn', en: 'noise', category: 'Hành động' },
  
  { id: 'ext23', jp: '摩擦', furigana: 'まさつ', vn: 'Ma sát', en: 'friction', category: 'Vật lý' },
  { id: 'ext24', jp: '荷重', furigana: 'かじゅう', vn: 'Tải trọng', en: 'load', category: 'Vật lý' },
  { id: 'ext25', jp: '応力', furigana: 'おうりょく', vn: 'Ứng suất', en: 'stress', category: 'Vật lý' },
  { id: 'ext26', jp: '歪み', furigana: 'ひずみ', vn: 'Biến dạng/Độ võng', en: 'strain/distortion', category: 'Vật lý' },
  
  { id: 'ext27', jp: '弾性', furigana: 'だんせい', vn: 'Tính đàn hồi', en: 'elasticity', category: 'Vật lý' },
  { id: 'ext28', jp: '塑性', furigana: 'そせい', vn: 'Tính dẻo', en: 'plasticity', category: 'Vật lý' },
  { id: 'ext29', jp: '脆性', furigana: 'ぜいせい', vn: 'Tính giòn', en: 'brittleness', category: 'Vật lý' },
  { id: 'ext30', jp: '延性', furigana: 'えんせい', vn: 'Tính kéo sợi/Độ dẻo', en: 'ductility', category: 'Vật lý' },

  // --- NEW VOCABULARY BLOCO 2 ---
  { id: 'ext31', jp: '硬化', furigana: 'こうか', vn: 'Làm cứng/Đông cứng', en: 'hardening', category: 'Vật lý' },
  { id: 'ext32', jp: '軟化', furigana: 'なんか', vn: 'Làm mềm', en: 'softening', category: 'Vật lý' },
  { id: 'ext33', jp: '腐食性', furigana: 'ふしょく', vn: 'Tính ăn mòn', en: 'corrosive', category: 'Vật lý' },
  { id: 'ext34', jp: '耐熱性', furigana: 'たいねつ', vn: 'Tính chịu nhiệt', en: 'heat resistance', category: 'Vật lý' },
  { id: 'ext35', jp: '耐薬性', furigana: 'たいやく', vn: 'Tính kháng hóa chất', en: 'chemical resistance', category: 'Vật lý' },
  
  { id: 'ext36', jp: '直流モーター', furigana: '-', vn: 'Động cơ DC', en: 'DC motor', category: 'Điện' },
  { id: 'ext37', jp: '交流モーター', furigana: '-', vn: 'Động cơ AC', en: 'AC motor', category: 'Điện' },
  { id: 'ext38', jp: 'ステッピングモーター', furigana: '-', vn: 'Động cơ bước', en: 'stepping motor', category: 'Điện' },
  { id: 'ext39', jp: 'リニアモーター', furigana: '-', vn: 'Động cơ tuyến tính', en: 'linear motor', category: 'Điện' },
  
  { id: 'ext40', jp: '油圧ユニット', furigana: '-', vn: 'Bộ nguồn thủy lực', en: 'hydraulic unit', category: 'Khí nén/Thủy lực' },
  { id: 'ext41', jp: '空圧ユニット', furigana: '-', vn: 'Bộ nguồn khí nén', en: 'pneumatic unit', category: 'Khí nén/Thủy lực' },
  { id: 'ext42', jp: 'アキュムレータ', furigana: '-', vn: 'Bình tích áp', en: 'accumulator', category: 'Khí nén/Thủy lực' },
  { id: 'ext43', jp: 'サイレンサー', furigana: '-', vn: 'Bộ giảm âm/Tiêu âm', en: 'silencer', category: 'Khí nén/Thủy lực' },
  
  { id: 'ext44', jp: 'ニードルバルブ', furigana: '-', vn: 'Van kim', en: 'needle valve', category: 'Khí nén/Thủy lực' },
  { id: 'ext45', jp: '逆止弁', furigana: 'ぎゃくしべん', vn: 'Van một chiều', en: 'check valve', category: 'Khí nén/Thủy lực' },
  { id: 'ext46', jp: '安全弁', furigana: 'あんぜんべん', vn: 'Van an toàn', en: 'relief valve', category: 'Khí nén/Thủy lực' },
  { id: 'ext47', jp: '減圧弁', furigana: 'げんあつべん', vn: 'Van giảm áp', en: 'pressure reducing valve', category: 'Khí nén/Thủy lực' },
  
  { id: 'ext48', jp: 'ストレーナー', furigana: '-', vn: 'Lưới lọc/Lọc y', en: 'strainer', category: 'Vật tư' },
  { id: 'ext49', jp: 'オイルフェンス', furigana: '-', vn: 'Phao quây dầu/Chắn dầu', en: 'oil fence', category: 'Vật tư' },
  { id: 'ext50', jp: 'ウエス', furigana: '-', vn: 'Giẻ lau/Vải vụn', en: 'waste cloth/rag', category: 'Vật tư' },
  
  { id: 'ext51', jp: '保護手袋', furigana: 'てぶくろ', vn: 'Găng tay bảo hộ', en: 'protective gloves', category: 'An toàn' },
  { id: 'ext52', jp: '防塵マスク', furigana: 'ぼうじん', vn: 'Khẩu trang chống bụi', en: 'dust mask', category: 'An toàn' },
  { id: 'ext53', jp: 'イヤーマフ', furigana: '-', vn: 'Chụp tai chống ồn', en: 'earmuffs', category: 'An toàn' },
  { id: 'ext54', jp: '安全帯', furigana: 'あんぜんたい', vn: 'Dây đai an toàn', en: 'safety belt', category: 'An toàn' },
  
  { id: 'ext55', jp: '定時点検', furigana: 'ていじ', vn: 'Kiểm tra định kỳ (Theo giờ)', en: 'scheduled inspection', category: 'Bảo trì' },
  { id: 'ext56', jp: '事後保全', furigana: 'じご', vn: 'Bảo trì sau hỏng hóc', en: 'corrective maintenance', category: 'Bảo trì' },
  { id: 'ext57', jp: '予知保全', furigana: 'よち', vn: 'Bảo trì dự đoán', en: 'predictive maintenance', category: 'Bảo trì' },
  { id: 'ext58', jp: '日常点検', furigana: 'にちじょう', vn: 'Kiểm tra hàng ngày', en: 'daily inspection', category: 'Bảo trì' },
  
  { id: 'ext59', jp: '油漏れ', furigana: 'あぶらもれ', vn: 'Rò rỉ dầu', en: 'oil leak', category: 'Tình trạng' },
  { id: 'ext60', jp: '水漏れ', furigana: 'みずもれ', vn: 'Rò rỉ nước', en: 'water leak', category: 'Tình trạng' },
  { id: 'ext61', jp: 'ガス漏れ', furigana: '-', vn: 'Rò rỉ khí/gas', en: 'gas leak', category: 'Tình trạng' },
  { id: 'ext62', jp: 'エア漏れ', furigana: '-', vn: 'Rò rỉ khí nén', en: 'air leak', category: 'Tình trạng' },
  
  { id: 'ext63', jp: '断線', furigana: 'だんせん', vn: 'Đứt dây/Hở mạch', en: 'wire breakage', category: 'Tình trạng' },
  { id: 'ext64', jp: '接触不良', furigana: 'せっしょく', vn: 'Tiếp xúc kém', en: 'poor contact', category: 'Tình trạng' },
  { id: 'ext65', jp: '過熱', furigana: 'かねつ', vn: 'Nóng quá mức/Quá nhiệt', en: 'overheating', category: 'Tình trạng' },
  { id: 'ext66', jp: '焦げ', furigana: 'こげ', vn: 'Cháy sém/Khét', en: 'burn/scorch', category: 'Tình trạng' },
  
  { id: 'ext67', jp: '棚', furigana: 'たな', vn: 'Kệ/Giá đỡ', en: 'shelf', category: 'Kho vận' },
  { id: 'ext68', jp: '段ボール', furigana: 'だんぼーる', vn: 'Thùng carton', en: 'cardboard box', category: 'Kho vận' },
  { id: 'ext69', jp: 'ラップ', furigana: '-', vn: 'Màng bọc/Màng co', en: 'wrap/stretch film', category: 'Kho vận' },
  { id: 'ext70', jp: 'PPバンド', furigana: '-', vn: 'Dây đai nhựa PP', en: 'PP band', category: 'Kho vận' },
  
  { id: 'ext71', jp: '運搬車', furigana: 'うんぱん', vn: 'Xe vận chuyển/Xe rùa', en: 'transport cart', category: 'Kho vận' },
  { id: 'ext72', jp: 'ハンドリフト', furigana: '-', vn: 'Xe nâng tay', en: 'hand pallet truck', category: 'Kho vận' },
  { id: 'ext73', jp: 'クレーン', furigana: '-', vn: 'Cần cẩu/Cần trục', en: 'crane', category: 'Máy móc' },
  { id: 'ext74', jp: 'ホイスト', furigana: '-', vn: 'Pa-lăng', en: 'hoist', category: 'Máy móc' },
  
  { id: 'ext75', jp: 'ボルト止め', furigana: '-', vn: 'Cố định bằng bu lông', en: 'bolting', category: 'Thao tác' },
  { id: 'ext76', jp: 'ねじ込み', furigana: '-', vn: 'Vặn vít vào/Xoáy vào', en: 'screwing in', category: 'Thao tác' },
  { id: 'ext77', jp: 'はめ合い', furigana: 'はめあい', vn: 'Lắp ghép/Độ dôi-hở', en: 'fit', category: 'Thao tác' },
  { id: 'ext78', jp: '圧入', furigana: 'あつにゅう', vn: 'Ép chặt/Ép lồng', en: 'press fitting', category: 'Thao tác' },
  
  { id: 'ext79', jp: 'バリ取り', furigana: 'ばりとり', vn: 'Khử bavia/Làm sạch cạnh', en: 'deburring', category: 'Thao tác' },
  { id: 'ext80', jp: '面取り', furigana: 'めんとり', vn: 'Vát mép', en: 'chamfering', category: 'Thao tác' },
  { id: 'ext81', jp: '芯出し', furigana: 'しんだし', vn: 'Lấy tâm/Căn tâm', en: 'centering', category: 'Thao tác' },
  { id: 'ext82', jp: '穴あけ', furigana: 'あなあけ', vn: 'Khoán lỗ/Đục lỗ', en: 'drilling/punching', category: 'Thao tác' },
  
  { id: 'ext83', jp: '溶接機', furigana: 'ようせつき', vn: 'Máy hàn (Nói chung)', en: 'welder', category: 'Máy móc' },
  { id: 'ext84', jp: 'アーク溶接', furigana: '-', vn: 'Hàn hồ quang', en: 'arc welding', category: 'Quy trình' },
  { id: 'ext85', jp: 'TIG溶接', furigana: '-', vn: 'Hàn TIG', en: 'TIG welding', category: 'Quy trình' },
  { id: 'ext86', jp: 'MIG溶接', furigana: '-', vn: 'Hàn MIG', en: 'MIG welding', category: 'Quy trình' },
  { id: 'ext87', jp: 'スポット溶接', furigana: '-', vn: 'Hàn điểm', en: 'spot welding', category: 'Quy trình' },
  
  { id: 'ext88', jp: '接着', furigana: 'せっちゃく', vn: 'Kết dính/Dán', en: 'adhesion', category: 'Hành động' },
  { id: 'ext89', jp: 'リベット打ち', furigana: '-', vn: 'Tán đinh', en: 'riveting', category: 'Hành động' },
  { id: 'ext90', jp: 'ねじ切り', furigana: 'ねじきり', vn: 'Tiện ren/Cắt ren', en: 'threading/tapping', category: 'Hành động' },
  
  { id: 'ext91', jp: '研磨盤', furigana: 'けんまばん', vn: 'Bàn mài/Đĩa mài', en: 'grinding disk', category: 'Linh kiện' },
  { id: 'ext92', jp: '砥石', furigana: 'といし', vn: 'Đá mài/Đá mài tay', en: 'whetstone/grinding wheel', category: 'Linh kiện' },
  { id: 'ext93', jp: 'サンドペーパー', furigana: '-', vn: 'Giấy nhám', en: 'sandpaper', category: 'Vật tư' },
  
  { id: 'ext94', jp: 'プライヤー', furigana: '-', vn: 'Kìm đa năng', en: 'pliers', category: 'Công cụ' },
  { id: 'ext95', jp: 'ウォーターポンププライヤー', furigana: '-', vn: 'Kìm mỏ quạ', en: 'water pump pliers', category: 'Công cụ' },
  { id: 'ext96', jp: 'ロッキングプライヤー', furigana: '-', vn: 'Kìm bấm/Kìm chết', en: 'locking pliers', category: 'Công cụ' },
  
  { id: 'ext97', jp: '六角棒レンチ', furigana: 'ろっかくぼう', vn: 'Lục giác cây', en: 'hex key set', category: 'Công cụ' },
  { id: 'ext98', jp: 'ソケットレンチ', furigana: '-', vn: 'Cờ lê ống điếu/Khẩu đầu tuýp', en: 'socket wrench', category: 'Công cụ' },
  { id: 'ext99', jp: 'ラチェットレンチ', furigana: '-', vn: 'Cờ lê tự động/Cờ lê cóc', en: 'ratchet wrench', category: 'Công cụ' },
  { id: 'ext100', jp: 'トルクレンチ', furigana: '-', vn: 'Cờ lê lực', en: 'torque wrench', category: 'Công cụ' },

  { id: 'ext101', jp: 'スクレーパー', furigana: '-', vn: 'Dao cạo/Cây sủi', en: 'scraper', category: 'Công cụ' },
  { id: 'ext102', jp: 'ワイヤーブラシ', furigana: '-', vn: 'Chổi sắt/Bàn chải sắt', en: 'wire brush', category: 'Công cụ' },
  { id: 'ext103', jp: 'ポンチ', furigana: '-', vn: 'Đục/Dùi', en: 'punch', category: 'Công cụ' },
  { id: 'ext104', jp: 'タガネ', furigana: '-', vn: 'Đục sắt', en: 'chisel', category: 'Công cụ' },
  
  { id: 'ext105', jp: '水平器', furigana: 'すいへいき', vn: 'Thước thủy/Nivo', en: 'spirit level', category: 'Công cụ' },
  { id: 'ext106', jp: 'シックネスゲージ', furigana: '-', vn: 'Thước lá đo khe hở', en: 'feeler gauge', category: 'Công cụ' },
  { id: 'ext107', jp: 'ねじゲージ', furigana: '-', vn: 'Dưỡng đo ren', en: 'thread gauge', category: 'Công cụ' },
  { id: 'ext108', jp: '半径ゲージ', furigana: 'はんけい', vn: 'Dưỡng đo bán kính (R)', en: 'radius gauge', category: 'Công cụ' },
  
  { id: 'ext109', jp: 'デジタルノギス', furigana: '-', vn: 'Thước cặp điện tử', en: 'digital caliper', category: 'Công cụ' },
  { id: 'ext110', jp: 'ハイトゲージ', furigana: '-', vn: 'Thước đo cao', en: 'height gauge', category: 'Công cụ' },
  { id: 'ext111', jp: '厚さ計', furigana: 'あつさけい', vn: 'Máy đo độ dày', en: 'thickness tester', category: 'Công cụ' },
  { id: 'ext112', jp: '硬度計', furigana: 'こうどけい', vn: 'Máy đo độ cứng', en: 'hardness tester', category: 'Công cụ' },
  
  { id: 'ext113', jp: '研磨機', furigana: 'けんまき', vn: 'Máy mài/Máy đánh bóng', en: 'polishing machine', category: 'Máy móc' },
  { id: 'ext114', jp: '旋削', furigana: 'せんさく', vn: 'Tiện', en: 'turning', category: 'Quy trình' },
  { id: 'ext115', jp: 'フライス削り', furigana: '-', vn: 'Phay', en: 'milling', category: 'Quy trình' },
  { id: 'ext116', jp: '研削仕上げ', furigana: 'しあげ', vn: 'Gia công mài tinh', en: 'grinding finish', category: 'Quy trình' },
  
  { id: 'ext117', jp: '荒加工', furigana: 'あらかこう', vn: 'Gia công thô', en: 'rough machining', category: 'Quy trình' },
  { id: 'ext118', jp: '仕上げ加工', furigana: 'しあげかこう', vn: 'Gia công tinh', en: 'finishing', category: 'Quy trình' },
  { id: 'ext119', jp: '精密加工', furigana: 'せいみつかこう', vn: 'Gia công chính xác', en: 'precision machining', category: 'Quy trình' },
  
  { id: 'ext120', jp: '金型', furigana: 'かながた', vn: 'Khuôn mẫu/Khuôn kim loại', en: 'mold/die', category: 'Linh kiện' },
  { id: 'ext121', jp: '治具', furigana: 'じぐ', vn: 'Đồ gá/Jig', en: 'jig/fixture', category: 'Linh kiện' },
  { id: 'ext122', jp: '取付具', furigana: 'とりつけぐ', vn: 'Phụ kiện gá lắp', en: 'fixture', category: 'Linh kiện' },
  
  { id: 'ext123', jp: '生産線', furigana: 'せいさんせん', vn: 'Dây chuyền sản xuất', en: 'production line', category: 'Nhà máy' },
  { id: 'ext124', jp: '稼働率', furigana: 'かどうりつ', vn: 'Hiệu suất hoạt động', en: 'operation rate', category: 'Nhà máy' },
  { id: 'ext125', jp: '生産能力', furigana: 'せいさんのうりょく', vn: 'Năng lực sản xuất', en: 'production capacity', category: 'Nhà máy' },
  { id: 'ext126', jp: '品質管理', furigana: 'ひんしつかんり', vn: 'Quản lý chất lượng (QC)', en: 'quality control', category: 'Nhà máy' },
  
  { id: 'ext127', jp: '外観検査', furigana: 'がいかん', vn: 'Kiểm tra ngoại quan', en: 'visual inspection', category: 'Chất lượng' },
  { id: 'ext128', jp: '非破壊検査', furigana: 'ひはかい', vn: 'Kiểm tra không phá hủy (NDT)', en: 'non-destructive testing', category: 'Chất lượng' },
  { id: 'ext129', jp: '破壊検査', furigana: 'はかい', vn: 'Kiểm tra phá hủy', en: 'destructive testing', category: 'Chất lượng' },
  
  { id: 'ext130', jp: '標準化', furigana: 'ひょうじゅんか', vn: 'Tiêu chuẩn hóa', en: 'standardization', category: 'Quản lý' },
  { id: 'ext131', jp: '仕様書', furigana: 'しようしょ', vn: 'Bản đặc tả kỹ thuật', en: 'specification sheet', category: 'Tài liệu' },
  { id: 'ext132', jp: '取扱説明書', furigana: 'とりあつかい', vn: 'Sách hướng dẫn sử dụng', en: 'manual', category: 'Tài liệu' },
  { id: 'ext133', jp: '型式', furigana: 'かたしき', vn: 'Model/Kiểu dáng', en: 'model/type', category: 'Thông số' },
  { id: 'ext134', jp: '製造番号', furigana: 'せいぞうばんごう', vn: 'Số sê-ri/Số chế tạo', en: 'serial number', category: 'Thông số' },
  
  { id: 'ext135', jp: '保証期間', furigana: 'ほしょう', vn: 'Thời hạn bảo hành', en: 'warranty period', category: 'Thương mại' },
  { id: 'ext136', jp: '返品', furigana: 'へんぴん', vn: 'Trả hàng/Đổi trả', en: 'return of goods', category: 'Thương mại' },
  { id: 'ext137', jp: '不良交換', furigana: 'ふりょう', vn: 'Đổi hàng lỗi', en: 'defect exchange', category: 'Thương mại' },
  { id: 'ext138', jp: '修理依頼', furigana: 'しゅうりいらい', vn: 'Yêu cầu sửa chữa', en: 'repair request', category: 'Thương mại' },
  
  { id: 'ext139', jp: '廃番', furigana: 'はいばん', vn: 'Ngừng sản xuất/Hết đời', en: 'discontinued', category: 'Thương mại' },
  { id: 'ext140', jp: '後継機', furigana: 'こうけいき', vn: 'Máy đời sau/Dòng thay thế', en: 'successor model', category: 'Thương mại' },
  { id: 'ext141', jp: '現行機', furigana: 'げんこうき', vn: 'Máy đời hiện tại', en: 'current model', category: 'Thương mại' },
  
  { id: 'ext142', jp: '現地確認', furigana: 'げんち', vn: 'Xác nhận tại chỗ/Hiện trường', en: 'on-site confirmation', category: 'Hành động' },
  { id: 'ext143', jp: '立ち合い', furigana: 'たちあい', vn: 'Có mặt chứng kiến/Giám sát', en: 'witnessing/attendance', category: 'Hành động' },
  { id: 'ext144', jp: '引渡し', furigana: 'ひきわたし', vn: 'Bàn giao', en: 'handover', category: 'Hành động' },
  
  { id: 'ext145', jp: '電力', furigana: 'でんりょく', vn: 'Điện năng/Công suất điện', en: 'electric power', category: 'Thông số' },
  { id: 'ext146', jp: '電圧', furigana: 'でんあつ', vn: 'Điện áp', en: 'voltage', category: 'Thông số' },
  { id: 'ext147', jp: '電流', furigana: 'でんりゅう', vn: 'Dòng điện', en: 'current', category: 'Thông số' },
  { id: 'ext148', jp: '抵抗', furigana: 'ていこう', vn: 'Điện trở', en: 'resistance', category: 'Thông số' },
  
  { id: 'ext149', jp: '絶縁', furigana: 'ぜつえん', vn: 'Cách điện', en: 'insulation', category: 'Kỹ thuật' },
  { id: 'ext150', jp: '導通', furigana: 'どうつう', vn: 'Thông mạch', en: 'continuity', category: 'Kỹ thuật' },
  { id: 'ext151', jp: '短絡保護', furigana: 'たんらくほご', vn: 'Bảo vệ ngắn mạch', en: 'short circuit protection', category: 'Kỹ thuật' },
  { id: 'ext152', jp: '接地', furigana: 'せっち', vn: 'Nối đất', en: 'earthing', category: 'Kỹ thuật' },
  
  { id: 'ext153', jp: '手動', furigana: 'しゅどう', vn: 'Thủ công/Bằng tay', en: 'manual', category: 'Vận hành' },
  { id: 'ext154', jp: '自動', furigana: 'じどう', vn: 'Tự động', en: 'automatic', category: 'Vận hành' },
  { id: 'ext155', jp: '半自動', furigana: 'はんじどう', vn: 'Bán tự động', en: 'semi-automatic', category: 'Vận hành' },
  { id: 'ext156', jp: '連動', furigana: 'れんどう', vn: 'Liên động/Kết hợp', en: 'linkage/interlock', category: 'Vận hành' },
  
  { id: 'ext157', jp: '始動', furigana: 'しどう', vn: 'Khởi động', en: 'start-up', category: 'Vận hành' },
  { id: 'ext158', jp: '停止', furigana: 'ていし', vn: 'Dừng lại', en: 'stop', category: 'Vận hành' },
  { id: 'ext159', jp: '急停止', furigana: 'きゅう', vn: 'Dừng gấp', en: 'emergency stop', category: 'Vận hành' },
  { id: 'ext160', jp: '再起動', furigana: 'さいきどう', vn: 'Khởi động lại', en: 'restart', category: 'Vận hành' },
  
  { id: 'ext161', jp: '順方向', furigana: 'じゅん', vn: 'Chiều thuận', en: 'forward direction', category: 'Vận hành' },
  { id: 'ext162', jp: '逆方向', furigana: 'ぎゃく', vn: 'Chiều ngược', en: 'reverse direction', category: 'Vận hành' },
  { id: 'ext163', jp: '時計回り', furigana: 'とけいまわり', vn: 'Chiều kim đồng hồ (CW)', en: 'clockwise', category: 'Vận hành' },
  { id: 'ext164', jp: '反時計回り', furigana: 'はん', vn: 'Ngược chiều kim đồng hồ (CCW)', en: 'counter-clockwise', category: 'Vận hành' },

  { id: 'ext165', jp: '水平', furigana: 'すいへい', vn: 'Nằm ngang/Mức thủy', en: 'horizontal', category: 'Vị trí' },
  { id: 'ext166', jp: '垂直', furigana: 'すいちょく', vn: 'Thẳng đứng', en: 'vertical', category: 'Vị trí' },
  { id: 'ext167', jp: '斜め', furigana: 'ななめ', vn: 'Nghiêng/Chéo', en: 'diagonal/slant', category: 'Vị trí' },
  { id: 'ext168', jp: '直角', furigana: 'ちょっかく', vn: 'Góc vuông', en: 'right angle', category: 'Vị trí' },
  
  { id: 'ext169', jp: '並列', furigana: 'へいれつ', vn: 'Song song', en: 'parallel', category: 'Vị trí' },
  { id: 'ext170', jp: '直列', furigana: 'ちょくれつ', vn: 'Nối tiếp', en: 'series', category: 'Vị trí' },
  { id: 'ext171', jp: '同心', furigana: 'どうしん', vn: 'Đồng tâm', en: 'concentric', category: 'Vị trí' },
  { id: 'ext172', jp: '偏心', furigana: 'へんしん', vn: 'Lệch tâm', en: 'eccentric', category: 'Vị trí' },
  
  { id: 'ext173', jp: '表面', furigana: 'ひょうめん', vn: 'Bề mặt', en: 'surface', category: 'Vị trí' },
  { id: 'ext174', jp: '裏面', furigana: 'りめん', vn: 'Mặt sau/Mặt trái', en: 'back surface', category: 'Vị trí' },
  { id: 'ext175', jp: '側面', furigana: 'そくめん', vn: 'Mặt bên/Cạnh bên', en: 'side surface', category: 'Vị trí' },
  { id: 'ext176', jp: '端面', furigana: 'たんめん', vn: 'Mặt đầu/Mặt mút', en: 'end surface', category: 'Vị trí' },
  
  { id: 'ext177', jp: '内周', furigana: 'ないしゅう', vn: 'Chu vi trong', en: 'inner circumference', category: 'Thông số' },
  { id: 'ext178', jp: '外周', furigana: 'がいしゅう', vn: 'Chu vi ngoài', en: 'outer circumference', category: 'Thông số' },
  { id: 'ext179', jp: '面積', furigana: 'めんせき', vn: 'Diện tích', en: 'area', category: 'Thông số' },
  { id: 'ext180', jp: '体積', furigana: 'たいせき', vn: 'Thể tích', en: 'volume', category: 'Thông số' },
  
  { id: 'ext181', jp: '密度', furigana: 'みつど', vn: 'Khối lượng riêng/Mật độ', en: 'density', category: 'Thông số' },
  { id: 'ext182', jp: '粘度', furigana: 'ねんど', vn: 'Độ nhớt', en: 'viscosity', category: 'Thông số' },
  { id: 'ext183', jp: '比重', furigana: 'ひじゅう', vn: 'Tỷ trọng', en: 'specific gravity', category: 'Thông số' },
  { id: 'ext184', jp: '圧力', furigana: 'あつりょく', vn: 'Áp suất', en: 'pressure', category: 'Thông số' },

  // --- NEW VOCABULARY BLOCO 3 ---
  { id: 'ext185', jp: '引張強さ', furigana: 'ひっぱり', vn: 'Độ bền kéo', en: 'tensile strength', category: 'Thông số' },
  { id: 'ext186', jp: '圧縮強さ', furigana: 'あっしゅく', vn: 'Độ bền nén', en: 'compressive strength', category: 'Thông số' },
  { id: 'ext187', jp: 'せん断強さ', furigana: '-', vn: 'Độ bền cắt', en: 'shear strength', category: 'Thông số' },
  
  { id: 'ext188', jp: '延展性', furigana: 'えんてんせい', vn: 'Tính dát mỏng/Kéo dài', en: 'malleability', category: 'Vật lý' },
  { id: 'ext189', jp: '透磁率', furigana: 'とうじりつ', vn: 'Độ từ thẩm', en: 'magnetic permeability', category: 'Vật lý' },
  { id: 'ext190', jp: '導電率', furigana: 'どうでんりつ', vn: 'Độ dẫn điện', en: 'electrical conductivity', category: 'Vật lý' },
  
  { id: 'ext191', jp: 'ABS樹脂', furigana: '-', vn: 'Nhựa ABS', en: 'ABS resin', category: 'Vật liệu' },
  { id: 'ext192', jp: 'ポリカーボネート', furigana: '-', vn: 'Nhựa Polycarbonate', en: 'polycarbonate', category: 'Vật liệu' },
  { id: 'ext193', jp: 'ナイロン', furigana: '-', vn: 'Nhựa Nylon/PA', en: 'nylon/polyamide', category: 'Vật liệu' },
  { id: 'ext194', jp: 'テフロン', furigana: '-', vn: 'Nhựa Teflon/PTFE', en: 'teflon/PTFE', category: 'Vật liệu' },
  { id: 'ext195', jp: 'アクリル', furigana: '-', vn: 'Nhựa Acrylic', en: 'acrylic', category: 'Vật liệu' },
  
  { id: 'ext196', jp: 'セラミックス', furigana: '-', vn: 'Gốm kỹ thuật/Ceramics', en: 'ceramics', category: 'Vật liệu' },
  { id: 'ext197', jp: '超硬合金', furigana: 'ちょうこう', vn: 'Hợp kim siêu cứng/Carbide', en: 'cemented carbide', category: 'Vật liệu' },
  { id: 'ext198', jp: 'ダイヤモンド工具', furigana: '-', vn: 'Dụng cụ kim cương', en: 'diamond tools', category: 'Vật liệu' },
  
  { id: 'ext199', jp: '鋳鋼', furigana: 'ちゅうこう', vn: 'Thép đúc', en: 'cast steel', category: 'Vật liệu' },
  { id: 'ext200', jp: '可鍛鋳鉄', furigana: 'かたん', vn: 'Gang dẻo', en: 'malleable cast iron', category: 'Vật liệu' },
  { id: 'ext201', jp: '球状黒鉛鋳鉄', furigana: 'きゅうじょう', vn: 'Gang cầu', en: 'ductile cast iron', category: 'Vật liệu' },
  
  { id: 'ext202', jp: 'プレス金型', furigana: 'かながた', vn: 'Khuôn dập', en: 'press die', category: 'Linh kiện' },
  { id: 'ext203', jp: 'プラスチック金型', furigana: '-', vn: 'Khuôn nhựa', en: 'plastic mold', category: 'Linh kiện' },
  { id: 'ext204', jp: 'ダイカスト金型', furigana: '-', vn: 'Khuôn đúc áp lực', en: 'die casting mold', category: 'Linh kiện' },
  
  { id: 'ext205', jp: 'パンチ', furigana: '-', vn: 'Chày dập/Kim dập', en: 'punch', category: 'Linh kiện' },
  { id: 'ext206', jp: 'ダイ', furigana: '-', vn: 'Cối dập', en: 'die', category: 'Linh kiện' },
  { id: 'ext207', jp: 'ガイドピン', furigana: '-', vn: 'Chốt dẫn hướng', en: 'guide pin', category: 'Linh kiện' },
  { id: 'ext208', jp: 'スプリングピン', furigana: '-', vn: 'Chốt đàn hồi', en: 'spring pin', category: 'Linh kiện' },
  
  { id: 'ext209', jp: 'リミット回路', furigana: '-', vn: 'Mạch giới hạn', en: 'limit circuit', category: 'Điện' },
  { id: 'ext210', jp: '保護回路', furigana: 'ほご', vn: 'Mạch bảo vệ', en: 'protection circuit', category: 'Điện' },
  { id: 'ext211', jp: 'インターロック', furigana: '-', vn: 'Khóa liên động', en: 'interlock', category: 'Điện' },
  
  { id: 'ext212', jp: '近接スイッチ', furigana: 'きんせつ', vn: 'Công tắc tiệm cận', en: 'proximity switch', category: 'Điện' },
  { id: 'ext213', jp: '感圧センサ', furigana: 'かんあつ', vn: 'Cảm biến áp lực', en: 'pressure sensor (touch)', category: 'Điện' },
  { id: 'ext214', jp: '超音波センサ', furigana: 'ちょうおんぱ', vn: 'Cảm biến siêu âm', en: 'ultrasonic sensor', category: 'Điện' },
  
  { id: 'ext215', jp: 'サーモスタット', furigana: '-', vn: 'Rơ-le nhiệt/Bộ ổn nhiệt', en: 'thermostat', category: 'Điện' },
  { id: 'ext216', jp: 'ヒーター', furigana: '-', vn: 'Điện trở đốt nóng/Thanh nhiệt', en: 'heater', category: 'Điện' },
  { id: 'ext217', jp: '冷却ファン', furigana: 'れいきゃく', vn: 'Quạt làm mát', en: 'cooling fan', category: 'Điện' },
  
  { id: 'ext218', jp: 'エアフィルタ', furigana: '-', vn: 'Lọc khí', en: 'air filter', category: 'Khí nén/Thủy lực' },
  { id: 'ext219', jp: 'ルブリケータ', furigana: '-', vn: 'Bộ tra dầu khí nén', en: 'lubricator', category: 'Khí nén/Thủy lực' },
  { id: 'ext220', jp: 'ドライヤ', furigana: '-', vn: 'Máy sấy khí', en: 'air dryer', category: 'Khí nén/Thủy lực' },
  
  { id: 'ext221', jp: 'マニホールド', furigana: '-', vn: 'Đế van/Khối phối khí', en: 'manifold', category: 'Khí nén/Thủy lực' },
  { id: 'ext222', jp: 'スピードコントローラ', furigana: '-', vn: 'Van tiết lưu/Tiết lưu', en: 'speed controller', category: 'Khí nén/Thủy lực' },
  { id: 'ext223', jp: '消音器', furigana: 'しょうおんき', vn: 'Bộ giảm thanh/Tiêu âm', en: 'muffler', category: 'Khí nén/Thủy lực' },
  
  { id: 'ext224', jp: '旋盤加工', furigana: 'せんさく', vn: 'Gia công tiện', en: 'lathe machining', category: 'Quy trình' },
  { id: 'ext225', jp: '研磨加工', furigana: 'けんま', vn: 'Gia công mài/đánh bóng', en: 'polishing process', category: 'Quy trình' },
  { id: 'ext226', jp: '放電加工', furigana: 'ほうでん', vn: 'Gia công tia lửa điện', en: 'EDM process', category: 'Quy trình' },
  { id: 'ext227', jp: 'レーザー切断', furigana: '-', vn: 'Cắt laser', en: 'laser cutting', category: 'Quy trình' },
  
  { id: 'ext228', jp: 'ウォータージェット', furigana: '-', vn: 'Cắt bằng tia nước', en: 'water jet cutting', category: 'Quy trình' },
  { id: 'ext229', jp: 'プラズマ切断', furigana: '-', vn: 'Cắt plasma', en: 'plasma cutting', category: 'Quy trình' },
  
  { id: 'ext230', jp: 'サンドブラスト', furigana: '-', vn: 'Phun cát', en: 'sandblasting', category: 'Xử lý bề mặt' },
  { id: 'ext231', jp: 'ショットブラスト', furigana: '-', vn: 'Phun bi', en: 'shot blasting', category: 'Xử lý bề mặt' },
  { id: 'ext232', jp: 'アルマイト', furigana: '-', vn: 'Anode hóa nhôm', en: 'anodizing', category: 'Xử lý bề mặt' },
  { id: 'ext233', jp: '黒染め', furigana: 'くろぞめ', vn: 'Nhuộm đen kim loại', en: 'black oxide coating', category: 'Xử lý bề mặt' },
  
  { id: 'ext234', jp: 'パーカー処理', furigana: '-', vn: 'Xử lý phốt phát hóa', en: 'phosphating', category: 'Xử lý bề mặt' },
  { id: 'ext235', jp: '電解研磨', furigana: 'でんかい', vn: 'Đánh bóng điện hóa', en: 'electropolishing', category: 'Xử lý bề mặt' },
  
  { id: 'ext236', jp: 'パレット台車', furigana: '-', vn: 'Xe đẩy pallet', en: 'pallet truck', category: 'Kho vận' },
  { id: 'ext237', jp: 'フォークリフト運転', furigana: '-', vn: 'Vận hành xe nâng', en: 'forklift operation', category: 'Hành động' },
  { id: 'ext238', jp: '荷役', furigana: 'にやく', vn: 'Bốc xếp hàng hóa', en: 'cargo handling', category: 'Kho vận' },
  
  { id: 'ext239', jp: '定期修理', furigana: 'ていき', vn: 'Sửa chữa định kỳ', en: 'regular repair', category: 'Bảo trì' },
  { id: 'ext240', jp: '臨時修理', furigana: 'りんじ', vn: 'Sửa chữa đột xuất', en: 'emergency repair', category: 'Bảo trì' },
  { id: 'ext241', jp: '部品調達', furigana: 'ちょうたつ', vn: 'Cung ứng linh kiện', en: 'parts procurement', category: 'Thương mại' },
  
  { id: 'ext242', jp: '下取り', furigana: 'したどり', vn: 'Mua cũ đổi mới/Thu cũ đổi mới', en: 'trade-in', category: 'Thương mại' },
  { id: 'ext243', jp: '相見積もり', furigana: 'あい', vn: 'Báo giá so sánh/Lấy nhiều giá', en: 'comparative estimation', category: 'Thương mại' },
  { id: 'ext244', jp: '稟議', furigana: 'りんぎ', vn: 'Quyết định cấp trên/Trình duyệt', en: 'approval request', category: 'Thương mại' },
  
  { id: 'ext245', jp: '現品票', furigana: 'げんぴんぴょう', vn: 'Thẻ kho/Thẻ định danh hàng hóa', en: 'goods tag/inventory tag', category: 'Kho vận' },
  { id: 'ext246', jp: '納品期限', furigana: 'のうひん', vn: 'Hạn chót giao hàng', en: 'delivery deadline', category: 'Thương mại' },
  { id: 'ext247', jp: '検収', furigana: 'けんしゅう', vn: 'Nghiệm thu hàng hóa', en: 'acceptance inspection', category: 'Thương mại' },
  
  { id: 'ext248', jp: 'ISO規格', furigana: '-', vn: 'Tiêu chuẩn ISO', en: 'ISO standards', category: 'Quản lý' },
  { id: 'ext249', jp: 'JIS規格', furigana: '-', vn: 'Tiêu chuẩn công nghiệp Nhật Bản (JIS)', en: 'JIS standards', category: 'Quản lý' },
  { id: 'ext250', jp: '社内規格', furigana: 'しゃない', vn: 'Tiêu chuẩn nội bộ', en: 'in-house standards', category: 'Quản lý' },
  
  { id: 'ext251', jp: '環境対策', furigana: 'かんきょう', vn: 'Biện pháp môi trường', en: 'environmental measures', category: 'Quản lý' },
  { id: 'ext252', jp: '省エネ', furigana: '-', vn: 'Tiết kiệm năng lượng', en: 'energy saving', category: 'Quản lý' },
  { id: 'ext253', jp: 'リサイクル', furigana: '-', vn: 'Tái chế', en: 'recycling', category: 'Quản lý' },
  
  { id: 'ext254', jp: '安全大会', furigana: 'あんぜん', vn: 'Hội nghị an toàn', en: 'safety meeting', category: 'An toàn' },
  { id: 'ext255', jp: '指差し呼称', furigana: 'ゆびさし', vn: 'Chỉ tay gọi tên (Check an toàn Nhật)', en: 'pointing and calling', category: 'An toàn' },
  { id: 'ext256', jp: 'ヒヤリハット', furigana: '-', vn: 'Tình huống suýt xảy ra tai nạn', en: 'near miss', category: 'An toàn' },
  { id: 'ext257', jp: 'KYT', furigana: '-', vn: 'Huấn luyện dự đoán nguy hiểm', en: 'hazard prediction training', category: 'An toàn' },
  
  { id: 'ext258', jp: '作業着', furigana: 'さぎょうぎ', vn: 'Quần áo bảo hộ lao động', en: 'work clothes', category: 'An toàn' },
  { id: 'ext259', jp: '反射ベスト', furigana: 'はんしゃ', vn: 'Áo phản quang', en: 'reflective vest', category: 'An toàn' },
  { id: 'ext260', jp: '防毒マスク', furigana: 'ぼうどく', vn: 'Mặt nạ phòng độc', en: 'gas mask', category: 'An toàn' },
  
  { id: 'ext261', jp: 'クリーンルーム', furigana: '-', vn: 'Phòng sạch', en: 'clean room', category: 'Nhà máy' },
  { id: 'ext262', jp: '静電対策', furigana: 'せいでん', vn: 'Biện pháp chống tĩnh điện', en: 'static electricity measures', category: 'Nhà máy' },
  { id: 'ext263', jp: '温度恒常室', furigana: 'こうじょう', vn: 'Phòng ổn định nhiệt độ', en: 'constant temperature room', category: 'Nhà máy' },
  
  { id: 'ext264', jp: 'ロボットアーム', furigana: '-', vn: 'Cánh tay robot', en: 'robot arm', category: 'Máy móc' },
  { id: 'ext265', jp: '多関節ロボット', furigana: 'たかんせつ', vn: 'Robot nhiều khớp', en: 'articulated robot', category: 'Máy móc' },
  { id: 'ext266', jp: '協働ロボット', furigana: 'きょうどう', vn: 'Robot cộng tác/Cobot', en: 'cobot', category: 'Máy móc' },
  
  { id: 'ext267', jp: '搬送ロボット', furigana: 'はんそう', vn: 'Robot vận chuyển', en: 'transport robot', category: 'Máy móc' },
  { id: 'ext268', jp: 'AGV', furigana: '-', vn: 'Xe tự hành (Automated Guided Vehicle)', en: 'AGV', category: 'Máy móc' },
  { id: 'ext269', jp: 'AMR', furigana: '-', vn: 'Robot di động tự trị (Autonomous Mobile Robot)', en: 'AMR', category: 'Máy móc' },
  
  { id: 'ext270', jp: '制御理論', furigana: 'せいぎょ', vn: 'Lý thuyết điều khiển', en: 'control theory', category: 'Kỹ thuật' },
  { id: 'ext271', jp: 'フィードバック', furigana: '-', vn: 'Phản hồi/Feedback', en: 'feedback', category: 'Kỹ thuật' },
  { id: 'ext272', jp: 'PID制御', furigana: '-', vn: 'Điều khiển PID', en: 'PID control', category: 'Kỹ thuật' },
  
  { id: 'ext273', jp: 'シーケンス回路', furigana: '-', vn: 'Mạch tuần tự/Mạch Sequence', en: 'sequence circuit', category: 'Kỹ thuật' },
  { id: 'ext274', jp: 'ラダー図', furigana: '-', vn: 'Sơ đồ hình thang (Ladder diagram)', en: 'ladder diagram', category: 'Kỹ thuật' },
  { id: 'ext275', jp: 'ネットワーク監視', furigana: 'かんし', vn: 'Giám sát mạng', en: 'network monitoring', category: 'Kỹ thuật' },
  
  { id: 'ext276', jp: 'IoT/スマート工場', furigana: '-', vn: 'Nhà máy thông minh (IoT)', en: 'smart factory', category: 'Kỹ thuật' },
  { id: 'ext277', jp: '見える化', furigana: 'みえるか', vn: 'Trực quan hóa (Vi-su-al-i-za-tion)', en: 'visualization', category: 'Kỹ thuật' },
  { id: 'ext278', jp: 'デジタルツイン', furigana: '-', vn: 'Bản sao kỹ thuật số', en: 'digital twin', category: 'Kỹ thuật' },
  
  { id: 'ext279', jp: '保全員', furigana: 'ほぜんいん', vn: 'Nhân viên bảo trì', en: 'maintenance staff', category: 'Nhân sự' },
  { id: 'ext280', jp: '技能検定', furigana: 'ぎのうけんてい', vn: 'Kỳ thi tay nghề/Bằng nghề', en: 'skills test', category: 'Nhân sự' },
  { id: 'ext281', jp: '親方', furigana: 'おやかた', vn: 'Thợ cả/Quản đốc (Cách gọi cũ)', en: 'foreman', category: 'Nhân sự' },
  { id: 'ext282', jp: '現場監督', furigana: 'かんとく', vn: 'Giám sát hiện trường', en: 'site supervisor', category: 'Nhân sự' },
  
  { id: 'ext283', jp: '改善', furigana: 'かいぜん', vn: 'Cải tiến (Kaizen)', en: 'improvement', category: 'Quản lý' },
  { id: 'ext284', jp: '無駄', furigana: 'むだ', vn: 'Lãng phí (Muda)', en: 'waste', category: 'Quản lý' },
  { id: 'ext285', jp: '標準作業', furigana: 'ひょうじゅん', vn: 'Thao tác chuẩn', en: 'standard work', category: 'Quản lý' },
  { id: 'ext286', jp: 'ポカヨケ', furigana: '-', vn: 'Chống sai lỗi (Poka-yoke)', en: 'error-proofing', category: 'Quản lý' },
  
  { id: 'ext287', jp: '3S/5S', furigana: '-', vn: 'Phong trào 5S', en: '5S', category: 'Quản lý' },
  { id: 'ext288', jp: '整理', furigana: 'せいり', vn: 'Sàng lọc', en: 'sort', category: 'Quản lý' },
  { id: 'ext289', jp: '整頓', furigana: 'せいとん', vn: 'Sắp xếp', en: 'set in order', category: 'Quản lý' },
  { id: 'ext290', jp: '清掃', furigana: 'せいそう', vn: 'Sạch sẽ', en: 'shine', category: 'Quản lý' },
  { id: 'ext291', jp: '清潔', furigana: 'せいけつ', vn: 'Săn sóc', en: 'standardize', category: 'Quản lý' },
  { id: 'ext292', jp: 'しつけ', furigana: '-', vn: 'Sẵn sàng', en: 'sustain', category: 'Quản lý' },
  
  { id: 'ext293', jp: 'トヨタ生産方式', furigana: '-', vn: 'Hệ thống sản xuất Toyota (TPS)', en: 'TPS', category: 'Quản lý' },
  { id: 'ext294', jp: 'かんばん方式', furigana: '-', vn: 'Hệ thống Kanban', en: 'Kanban system', category: 'Quản lý' },
  { id: 'ext295', jp: 'ジャストインタイム', furigana: '-', vn: 'Vừa đúng lúc (JIT)', en: 'Just-In-Time', category: 'Quản lý' },

  // --- FINAL VOCABULARY BLOCO 4 ---
  { id: 'f1', jp: '送り速度', furigana: 'おくりそくど', vn: 'Tốc độ tiến dao', en: 'feed rate', category: 'Cơ khí' },
  { id: 'f2', jp: '切削速度', furigana: 'せっさく', vn: 'Tốc độ cắt', en: 'cutting speed', category: 'Cơ khí' },
  { id: 'f3', jp: '切り込み深さ', furigana: 'きりこみ', vn: 'Chiều sâu cắt', en: 'depth of cut', category: 'Cơ khí' },
  { id: 'f4', jp: '切削抵抗', furigana: 'ていこう', vn: 'Lực cản cắt gọt', en: 'cutting resistance', category: 'Cơ khí' },
  
  { id: 'f5', jp: '周速', furigana: 'しゅうそく', vn: 'Vận tốc chu vi', en: 'peripheral speed', category: 'Cơ khí' },
  { id: 'f6', jp: '滑り', furigana: 'すべり', vn: 'Độ trượt', en: 'slip', category: 'Cơ khí' },
  { id: 'f7', jp: '遊び', furigana: 'あそび', vn: 'Độ rơ/Khoảng tự do', en: 'play/clearance', category: 'Cơ khí' },
  
  { id: 'f8', jp: '六角穴付きボルト', furigana: 'ろっかく', vn: 'Bu lông lục giác chìm', en: 'hex socket bolt', category: 'Linh kiện' },
  { id: 'f9', jp: '蝶ボルト', furigana: 'ちょう', vn: 'Bu lông tai hồng', en: 'wing bolt', category: 'Linh kiện' },
  { id: 'f10', jp: 'Uボルト', furigana: '-', vn: 'Bu lông chữ U', en: 'U-bolt', category: 'Linh kiện' },
  { id: 'f11', jp: 'スタッドボルト', furigana: '-', vn: 'Bu lông hai đầu/Stud bolt', en: 'stud bolt', category: 'Linh kiện' },
  
  { id: 'f12', jp: '袋ナット', furigana: 'ふくろ', vn: 'Đai ốc mũ', en: 'cap nut', category: 'Linh kiện' },
  { id: 'f13', jp: 'フランジナット', furigana: '-', vn: 'Đai ốc có vành', en: 'flange nut', category: 'Linh kiện' },
  { id: 'f14', jp: '蝶ナット', furigana: 'ちょう', vn: 'Đai ốc tai hồng', en: 'wing nut', category: 'Linh kiện' },
  { id: 'f15', jp: '緩み止めナット', furigana: 'ゆるみどめ', vn: 'Đai ốc chống lỏng (Nyloc)', en: 'lock nut', category: 'Linh kiện' },
  
  { id: 'f16', jp: '平座金', furigana: 'ひらざがね', vn: 'Vòng đệm phẳng', en: 'plain washer', category: 'Linh kiện' },
  { id: 'f17', jp: 'ばね座金', furigana: 'ばねざがね', vn: 'Vòng đệm vênh/Long đền vênh', en: 'spring washer', category: 'Linh kiện' },
  { id: 'f18', jp: 'テーパ座金', furigana: '-', vn: 'Vòng đệm vát', en: 'taper washer', category: 'Linh kiện' },
  
  { id: 'f19', jp: '誘導電動機', furigana: 'ゆうどう', vn: 'Động cơ không đồng bộ/Động cơ cảm ứng', en: 'induction motor', category: 'Điện' },
  { id: 'f20', jp: '同期電動機', furigana: 'どうき', vn: 'Động cơ đồng bộ', en: 'synchronous motor', category: 'Điện' },
  { id: 'f21', jp: '三相カゴ型', furigana: 'さんそう', vn: 'Động cơ lồng sóc 3 pha', en: 'three-phase squirrel cage motor', category: 'Điện' },
  
  { id: 'f22', jp: '巻線', furigana: 'まきせん', vn: 'Cuộn dây quấn', en: 'winding', category: 'Điện' },
  { id: 'f23', jp: '回転子', furigana: 'かいてんし', vn: 'Rô-to (Rotor)', en: 'rotor', category: 'Điện' },
  { id: 'f24', jp: '固定子', furigana: 'こていし', vn: 'Sta-to (Stator)', en: 'stator', category: 'Điện' },
  { id: 'f25', jp: '整流子', furigana: 'せいりゅうし', vn: 'Cổ góp/Bộ chỉnh lưu', en: 'commutator', category: 'Điện' },
  
  { id: 'f26', jp: '電気抵抗', furigana: 'ていこう', vn: 'Điện trở (Tính chất)', en: 'electrical resistance', category: 'Điện' },
  { id: 'f27', jp: '静電容量', furigana: 'せいでん', vn: 'Điện dung', en: 'capacitance', category: 'Điện' },
  { id: 'f28', jp: '自己インダクタンス', furigana: '-', vn: 'Hệ số tự cảm', en: 'self-inductance', category: 'Điện' },
  
  { id: 'f29', jp: '直巻', furigana: 'ちょくまき', vn: 'Quấn nối tiếp', en: 'series winding', category: 'Điện' },
  { id: 'f30', jp: '分巻', furigana: 'ぶんまき', vn: 'Quấn song song', en: 'shunt winding', category: 'Điện' },
  { id: 'f31', jp: '複巻', furigana: 'ふくまき', vn: 'Quấn hỗn hợp', en: 'compound winding', category: 'Điện' },
  
  { id: 'f32', jp: '油圧ホース', furigana: '-', vn: 'Ống thủy lực', en: 'hydraulic hose', category: 'Khí nén/Thủy lực' },
  { id: 'f33', jp: '高圧ホース', furigana: 'こうあつ', vn: 'Ống áp lực cao', en: 'high pressure hose', category: 'Khí nén/Thủy lực' },
  { id: 'f34', jp: '耐油ホース', furigana: 'たいゆ', vn: 'Ống chịu dầu', en: 'oil resistant hose', category: 'Khí nén/Thủy lực' },
  
  { id: 'f35', jp: '圧力スイッチ', furigana: '-', vn: 'Công tắc áp suất', en: 'pressure switch', category: 'Khí nén/Thủy lực' },
  { id: 'f36', jp: 'フロートスイッチ', furigana: '-', vn: 'Công tắc phao', en: 'float switch', category: 'Khí nén/Thủy lực' },
  { id: 'f37', jp: 'レベルスイッチ', furigana: '-', vn: 'Công tắc báo mức', en: 'level switch', category: 'Khí nén/Thủy lực' },
  
  { id: 'f38', jp: '吸込フィルタ', furigana: 'すいこみ', vn: 'Lọc hút', en: 'suction filter', category: 'Khí nén/Thủy lực' },
  { id: 'f39', jp: '戻りフィルタ', furigana: 'もどり', vn: 'Lọc hồi', en: 'return filter', category: 'Khí nén/Thủy lực' },
  { id: 'f40', jp: 'バイパス弁', furigana: '-', vn: 'Van đường tắt/Van Bypass', en: 'bypass valve', category: 'Khí nén/Thủy lực' },
  
  { id: 'f41', jp: '木箱', furigana: 'きばこ', vn: 'Thùng gỗ', en: 'wooden box', category: 'Kho vận' },
  { id: 'f42', jp: '木枠', furigana: 'きわく', vn: 'Khung gỗ/Kiện thưa', en: 'wooden crate', category: 'Kho vận' },
  { id: 'f43', jp: '強化ダンボール', furigana: '-', vn: 'Thùng carton chịu lực', en: 'heavy-duty cardboard', category: 'Kho vận' },
  { id: 'f44', jp: '真空梱包', furigana: 'しんくう', vn: 'Đóng gói chân không', en: 'vacuum packaging', category: 'Kho vận' },
  
  { id: 'f45', jp: 'コンテナ', furigana: '-', vn: 'Công-ten-nơ', en: 'container', category: 'Logistics' },
  { id: 'f46', jp: 'バンニング', furigana: '-', vn: 'Đóng hàng vào container', en: 'vanning', category: 'Logistics' },
  { id: 'f47', jp: 'デバンニング', furigana: '-', vn: 'Dỡ hàng khỏi container', en: 'devanning', category: 'Logistics' },
  
  { id: 'f48', jp: '輸出', furigana: 'ゆしゅつ', vn: 'Xuất khẩu', en: 'export', category: 'Logistics' },
  { id: 'f49', jp: '輸入', furigana: 'ゆにゅう', vn: 'Nhập khẩu', en: 'import', category: 'Logistics' },
  { id: 'f50', jp: '貿易', furigana: 'ぼうえき', vn: 'Ngoại thương', en: 'foreign trade', category: 'Logistics' },
  
  { id: 'f51', jp: '船荷証券', furigana: 'ふなにしょうけん', vn: 'Vận đơn đường biển (B/L)', en: 'bill of lading', category: 'Logistics' },
  { id: 'f52', jp: '送り状', furigana: 'おくりじょう', vn: 'Hóa đơn gửi hàng/Invoice', en: 'invoice/shipper\'s bill', category: 'Logistics' },
  { id: 'f53', jp: '梱包明細書', furigana: 'めいさいしょ', vn: 'Phiếu đóng gói (Packing List)', en: 'packing list', category: 'Logistics' },
  
  { id: 'f54', jp: '原産地証明書', furigana: 'げんさんち', vn: 'Giấy chứng nhận xuất xứ (C/O)', en: 'certificate of origin', category: 'Logistics' },
  { id: 'f55', jp: '植物検疫', furigana: 'けんえき', vn: 'Kiểm dịch thực vật', en: 'phytosanitary inspection', category: 'Logistics' },
  { id: 'f56', jp: '燻蒸', furigana: 'くんじょう', vn: 'Hun trùng', en: 'fumigation', category: 'Logistics' },
  
  { id: 'f57', jp: '労働安全衛生法', furigana: 'えいせいほう', vn: 'Luật an toàn vệ sinh lao động', en: 'Industrial Safety and Health Act', category: 'Quản lý' },
  { id: 'f58', jp: '特別教育', furigana: 'とくべつ', vn: 'Đào tạo đặc biệt', en: 'special training', category: 'Nhân sự' },
  { id: 'f59', jp: '技能講習', furigana: 'ぎのうこうしゅう', vn: 'Khóa học bồi dưỡng tay nghề', en: 'skill training course', category: 'Nhân sự' },
  
  { id: 'f60', jp: '危険予知', furigana: 'きけんよち', vn: 'Dự báo nguy hiểm', en: 'danger prediction', category: 'An toàn' },
  { id: 'f61', jp: '安全旗', furigana: 'あんぜんき', vn: 'Cờ an toàn', en: 'safety flag', category: 'An toàn' },
  { id: 'f62', jp: '無災害記録', furigana: 'むさいがい', vn: 'Kỷ lục không tai nạn', en: 'accident-free record', category: 'An toàn' },
  
  { id: 'f63', jp: '研削用といし', furigana: '-', vn: 'Đá mài dùng cho máy mài', en: 'grinding wheel for machines', category: 'Vật tư' },
  { id: 'f64', jp: '切断用といし', furigana: '-', vn: 'Đá cắt', en: 'cutting wheel', category: 'Vật tư' },
  { id: 'f65', jp: 'オフセットといし', furigana: '-', vn: 'Đá mài nhám/Đá mài cong', en: 'depressed center wheel', category: 'Vật tư' },
  
  { id: 'f66', jp: 'ダイヤモンド石', furigana: '-', vn: 'Đá mài kim cương', en: 'diamond wheel', category: 'Vật tư' },
  { id: 'f67', jp: 'CBN石', furigana: '-', vn: 'Đá mài CBN', en: 'CBN wheel', category: 'Vật tư' },
  { id: 'f68', jp: 'フェルト', furigana: '-', vn: 'Nỉ/Vải nỉ (Đánh bóng)', en: 'felt', category: 'Vật tư' },
  
  { id: 'f69', jp: 'コンパウンド', furigana: '-', vn: 'Xi đánh bóng/Kem đánh bóng', en: 'polishing compound', category: 'Vật tư' },
  { id: 'f70', jp: '青棒', furigana: 'あおぼう', vn: 'Lơ đánh bóng (Xanh)', en: 'green rouge polishing', category: 'Vật tư' },
  { id: 'f71', jp: '白棒', furigana: 'しろぼう', vn: 'Lơ đánh bóng (Trắng)', en: 'white rouge polishing', category: 'Vật tư' },
  
  { id: 'f72', jp: 'クランプレバー', furigana: '-', vn: 'Tay siết/Cần kẹp', en: 'clamping lever', category: 'Linh kiện' },
  { id: 'f73', jp: '調節つまみ', furigana: '-', vn: 'Núm vặn điều chỉnh', en: 'adjustment knob', category: 'Linh kiện' },
  { id: 'f74', jp: 'ハンドル車', furigana: '-', vn: 'Tay quay/Vô lăng máy', en: 'handwheel', category: 'Linh kiện' },
  
  { id: 'f75', jp: 'レベルフット', furigana: '-', vn: 'Chân tăng chỉnh/Chân máy', en: 'leveling foot', category: 'Linh kiện' },
  { id: 'f76', jp: 'アジャスターボルト', furigana: '-', vn: 'Bu lông tăng chỉnh', en: 'adjuster bolt', category: 'Linh kiện' },
  { id: 'f77', jp: 'キャスター', furigana: '-', vn: 'Bánh xe đẩy', en: 'caster', category: 'Linh kiện' },
  
  { id: 'f78', jp: '直動システム', furigana: 'ちょくどう', vn: 'Hệ thống chuyển động thẳng', en: 'linear motion system', category: 'Máy móc' },
  { id: 'f79', jp: 'リニアブッシュ', furigana: '-', vn: 'Bạc lót tuyến tính', en: 'linear bush', category: 'Linh kiện' },
  { id: 'f80', jp: 'スライドレール', furigana: '-', vn: 'Thanh trượt/Ray trượt', en: 'slide rail', category: 'Linh kiện' },
  
  { id: 'f81', jp: 'タイミングプーリー', furigana: '-', vn: 'Puly răng', en: 'timing pulley', category: 'Linh kiện' },
  { id: 'f82', jp: 'Vプーリー', furigana: '-', vn: 'Puly chữ V', en: 'V-pulley', category: 'Linh kiện' },
  { id: 'f83', jp: 'Vベルト', furigana: '-', vn: 'Dây curoa chữ V', en: 'V-belt', category: 'Linh kiện' },
  
  { id: 'f84', jp: 'ローラチェーン', furigana: '-', vn: 'Xích lăn', en: 'roller chain', category: 'Linh kiện' },
  { id: 'f85', jp: 'チェーン継手', furigana: '-', vn: 'Khớp nối xích/Mắt nối xích', en: 'chain joint', category: 'Linh kiện' },
  { id: 'f86', jp: 'テンショナー', furigana: '-', vn: 'Bộ tăng xích/Tăng đai', en: 'tensioner', category: 'Linh kiện' },
  
  { id: 'f87', jp: '軸受箱', furigana: 'じくうけばこ', vn: 'Gối đỡ vòng bi', en: 'bearing housing', category: 'Linh kiện' },
  { id: 'f88', jp: 'ピローブロック', furigana: '-', vn: 'Gối đỡ/Pillow block', en: 'pillow block', category: 'Linh kiện' },
  { id: 'f89', jp: 'フランジ形軸受', furigana: '-', vn: 'Gối đỡ mặt bích', en: 'flange bearing', category: 'Linh kiện' },
  
  { id: 'f90', jp: '潤滑装置', furigana: 'じゅんかつ', vn: 'Thiết bị bôi trơn', en: 'lubrication system', category: 'Máy móc' },
  { id: 'f91', jp: 'グリスガン', furigana: '-', vn: 'Súng bơm mỡ', en: 'grease gun', category: 'Công cụ' },
  { id: 'f92', jp: 'オイルポット', furigana: '-', vn: 'Bình châm dầu', en: 'oil pot', category: 'Công cụ' },
  
  { id: 'f93', jp: '空圧バルブ', furigana: 'くうあつ', vn: 'Van khí nén', en: 'pneumatic valve', category: 'Khí nén/Thủy lực' },
  { id: 'f94', jp: '切替弁', furigana: 'きりかえべん', vn: 'Van chuyển hướng/Van đảo chiều', en: 'directional control valve', category: 'Khí nén/Thủy lực' },
  { id: 'f95', jp: '電磁切替弁', furigana: 'でんじ', vn: 'Van đảo chiều điện từ', en: 'solenoid directional valve', category: 'Khí nén/Thủy lực' },
  
  { id: 'f96', jp: '空圧ホース継手', furigana: '-', vn: 'Cút nối ống khí', en: 'pneumatic hose fitting', category: 'Khí nén/Thủy lực' },
  { id: 'f97', jp: 'ワンタッチ継手', furigana: '-', vn: 'Đầu nối nhanh', en: 'one-touch fitting', category: 'Khí nén/Thủy lực' },
  { id: 'f98', jp: 'カプラー', furigana: '-', vn: 'Khớp nối nhanh/Coupler', en: 'coupler', category: 'Khí nén/Thủy lực' },
  
  { id: 'f99', jp: 'エアダスター', furigana: '-', vn: 'Súng xịt khí', en: 'air duster', category: 'Công cụ' },
  { id: 'f100', jp: 'エアラチェット', furigana: '-', vn: 'Cờ lê cóc dùng khí nén', en: 'air ratchet', category: 'Công cụ' },
  { id: 'f101', jp: 'エアインパクト', furigana: '-', vn: 'Súng xiết bu lông dùng khí', en: 'air impact wrench', category: 'Công cụ' },
  
  { id: 'f102', jp: 'デジタルマルチメータ', furigana: '-', vn: 'Đồng hồ vạn năng điện tử', en: 'digital multimeter', category: 'Công cụ' },
  { id: 'f103', jp: 'クランプメータ', furigana: '-', vn: 'Ampe kìm', en: 'clamp meter', category: 'Công cụ' },
  { id: 'f104', jp: 'オシロスコープ', furigana: '-', vn: 'Máy hiện sóng', en: 'oscilloscope', category: 'Công cụ' },
  
  { id: 'f105', jp: 'テプラ', furigana: '-', vn: 'Máy in nhãn/Máy bắn nhãn', en: 'label printer', category: 'Công cụ' },
  { id: 'f106', jp: '懐中電灯', furigana: 'かいちゅう', vn: 'Đèn pin', en: 'flashlight', category: 'Công cụ' },
  { id: 'f107', jp: '投光器', furigana: 'とうこうき', vn: 'Đèn pha/Đèn chiếu sáng hiện trường', en: 'floodlight', category: 'Công cụ' },
  
  { id: 'f108', jp: '延長コード', furigana: '-', vn: 'Dây nguồn nối dài', en: 'extension cord', category: 'Vật tư' },
  { id: 'f109', jp: 'ドラムコード', furigana: '-', vn: 'Ổ cắm rulo/Cuộn dây điện', en: 'cable reel', category: 'Vật tư' },
  { id: 'f110', jp: 'マグネットベース', furigana: '-', vn: 'Đế từ (Dùng cho đồng hồ so)', en: 'magnetic base', category: 'Công cụ' },
  
  { id: 'f111', jp: '旋盤バイト', furigana: '-', vn: 'Dao tiện (Chi tiết)', en: 'lathe tool insert', category: 'Dụng cụ cắt' },
  { id: 'f112', jp: '超硬エンドミル', furigana: '-', vn: 'Dao phay ngón hợp kim', en: 'carbide end mill', category: 'Dụng cụ cắt' },
  { id: 'f113', jp: 'スローアウェイ', furigana: '-', vn: 'Dao gắn mảnh hợp kim/Dao tháo rời', en: 'indexable tool', category: 'Dụng cụ cắt' },
  
  { id: 'f114', jp: 'ボールエンドミル', furigana: '-', vn: 'Dao phay cầu', en: 'ball end mill', category: 'Dụng cụ cắt' },
  { id: 'f115', jp: 'ラジアスエンドミル', furigana: '-', vn: 'Dao phay bo góc R', en: 'radius end mill', category: 'Dụng cụ cắt' },
  { id: 'f116', jp: 'スクエアエンドミル', furigana: '-', vn: 'Dao phay mặt phẳng/Dao phay vuông', en: 'square end mill', category: 'Dụng cụ cắt' },
  
  { id: 'f117', jp: 'ダイス', furigana: '-', vn: 'Bản taro ren ngoài/Bàn ren', en: 'die (for threading)', category: 'Dụng cụ cắt' },
  { id: 'f118', jp: 'タップハンドル', furigana: '-', vn: 'Tay quay taro', en: 'tap handle', category: 'Công cụ' },
  { id: 'f119', jp: 'ダイスハンドル', furigana: '-', vn: 'Tay quay bàn ren', en: 'die handle', category: 'Công cụ' },
  
  { id: 'f120', jp: 'センタ穴ドリル', furigana: '-', vn: 'Mũi khoan tâm', en: 'center drill', category: 'Dụng cụ cắt' },
  { id: 'f121', jp: '段付きドリル', furigana: '-', vn: 'Mũi khoan tầng', en: 'step drill', category: 'Dụng cụ cắt' },
  { id: 'f122', jp: 'ホールソー', furigana: '-', vn: 'Mũi khoét lỗ/Cưa lỗ', en: 'hole saw', category: 'Dụng cụ cắt' },
  
  { id: 'f123', jp: '研磨ベルト', furigana: '-', vn: 'Đai nhám/Băng nhám', en: 'abrasive belt', category: 'Vật tư' },
  { id: 'f124', jp: 'フラップホイール', furigana: '-', vn: 'Bánh nhám xếp/Đá nhám xếp', en: 'flap wheel', category: 'Vật tư' },
  { id: 'f125', jp: 'バフ', furigana: '-', vn: 'Bánh vải đánh bóng', en: 'buffing wheel', category: 'Vật tư' },
  
  { id: 'f126', jp: '工作機械', furigana: 'こうさくきかい', vn: 'Máy công cụ', en: 'machine tool', category: 'Máy móc' },
  { id: 'f127', jp: '成形機', furigana: 'せいけいき', vn: 'Máy đúc/Máy tạo hình', en: 'molding machine', category: 'Máy móc' },
  { id: 'f128', jp: '洗浄機', furigana: 'せんじょうき', vn: 'Máy rửa', en: 'washing machine', category: 'Máy móc' },
  
  { id: 'f129', jp: '乾燥機', furigana: 'かんそうき', vn: 'Máy sấy', en: 'dryer', category: 'Máy móc' },
  { id: 'f130', jp: '送風機', furigana: 'そうふうき', vn: 'Máy thổi khí/Quạt công nghiệp', en: 'blower', category: 'Máy móc' },
  { id: 'f131', jp: '真空ポンプ', furigana: 'しんくう', vn: 'Bơm chân không', en: 'vacuum pump', category: 'Máy móc' },
  
  { id: 'f132', jp: '水中ポンプ', furigana: 'すいちゅう', vn: 'Bơm chìm', en: 'submersible pump', category: 'Máy móc' },
  { id: 'f133', jp: '自吸式ポンプ', furigana: 'じきゅうしき', vn: 'Bơm tự mồi', en: 'self-priming pump', category: 'Máy móc' },
  { id: 'f134', jp: 'ギアポンプ', furigana: '-', vn: 'Bơm bánh răng', en: 'gear pump', category: 'Máy móc' },
  
  { id: 'f135', jp: 'ピストンポンプ', furigana: '-', vn: 'Bơm piston', en: 'piston pump', category: 'Máy móc' },
  { id: 'f136', jp: 'ベーンポンプ', furigana: '-', vn: 'Bơm cánh gạt', en: 'vane pump', category: 'Máy móc' },
  { id: 'f137', jp: '渦巻ポンプ', furigana: 'うずまき', vn: 'Bơm ly tâm', en: 'centrifugal pump', category: 'Máy móc' },
  
  { id: 'f138', jp: '攪拌機', furigana: 'かくはんき', vn: 'Máy khuấy', en: 'agitator/mixer', category: 'Máy móc' },
  { id: 'f139', jp: '粉砕機', furigana: 'ふんさいき', vn: 'Máy nghiền', en: 'crusher/grinder', category: 'Máy móc' },
  { id: 'f140', jp: '選別機', furigana: 'せんべつき', vn: 'Máy phân loại', en: 'sorting machine', category: 'Máy móc' },
  
  { id: 'f141', jp: '結束機', furigana: 'けっそくき', vn: 'Máy buộc dây/Máy đai kiện', en: 'strapping machine', category: 'Máy móc' },
  { id: 'f142', jp: '梱包機', furigana: 'こんぽうき', vn: 'Máy đóng gói (Tự động)', en: 'packaging machine', category: 'Máy móc' },
  { id: 'f143', jp: 'ラベル貼り機', furigana: '-', vn: 'Máy dán nhãn', en: 'labeling machine', category: 'Máy móc' },
  
  { id: 'f144', jp: '自動はかり', furigana: '-', vn: 'Cân tự động', en: 'automatic scale', category: 'Máy móc' },
  { id: 'f145', jp: '計数機', furigana: 'けいすうき', vn: 'Máy đếm sản phẩm', en: 'counting machine', category: 'Máy móc' },
  { id: 'f146', jp: '検査装置', furigana: 'けんさ', vn: 'Thiết bị kiểm tra/Hệ thống kiểm tra', en: 'inspection system', category: 'Máy móc' },
  
  { id: 'f147', jp: '画像処理', furigana: 'がぞう', vn: 'Xử lý hình ảnh (Vision system)', en: 'image processing', category: 'Kỹ thuật' },
  { id: 'f148', jp: 'センサーヘッド', furigana: '-', vn: 'Đầu cảm biến', en: 'sensor head', category: 'Linh kiện' },
  { id: 'f149', jp: 'コントローラユニット', furigana: '-', vn: 'Bộ phận điều khiển', en: 'controller unit', category: 'Linh kiện' },
  
  { id: 'f150', jp: 'アンプユニット', furigana: '-', vn: 'Bộ khuếch đại (Amply)', en: 'amplifier unit', category: 'Linh kiện' },
  { id: 'f151', jp: 'デジタルスイッチ', furigana: '-', vn: 'Công tắc kỹ thuật số', en: 'digital switch', category: 'Linh kiện' },
  { id: 'f152', jp: 'セーフティカーテン', furigana: '-', vn: 'Cảm biến an toàn dạng màn tia', en: 'safety light curtain', category: 'An toàn' },
  
  { id: 'f153', jp: '非常用警告灯', furigana: '-', vn: 'Đèn cảnh báo khẩn cấp (Còi hú)', en: 'emergency warning light', category: 'An toàn' },
  { id: 'f154', jp: '積層信号灯', furigana: 'せきそうしんごうとう', vn: 'Đèn tháp tín hiệu (Đỏ, vàng, xanh)', en: 'signal tower light', category: 'An toàn' },
  { id: 'f155', jp: 'ブザー', furigana: '-', vn: 'Còi báo/Loa báo', en: 'buzzer', category: 'An toàn' },
  
  { id: 'f156', jp: '材料証明書', furigana: 'ざいりょう', vn: 'Chứng chỉ vật liệu (Mill Test Report)', en: 'material certificate', category: 'Tài liệu' },
  { id: 'f157', jp: '検査成績書', furigana: 'けんさ', vn: 'Báo cáo kết quả kiểm tra', en: 'inspection report', category: 'Tài liệu' },
  { id: 'f158', jp: '校正証明書', furigana: 'こうせい', vn: 'Giấy chứng nhận hiệu chuẩn', en: 'calibration certificate', category: 'Tài liệu' },

  // --- EXTRA VOCABULARY BLOCK 5 ---
  { id: 'ex1', jp: '変圧器', furigana: 'へんあつき', vn: 'Máy biến áp', en: 'transformer', category: 'Điện' },
  { id: 'ex2', jp: '継電器', furigana: 'けいでんき', vn: 'Rơ-le', en: 'relay', category: 'Điện' },
  { id: 'ex3', jp: '遮断器', furigana: 'しゃだんき', vn: 'Cầu dao/Bộ ngắt mạch', en: 'circuit breaker', category: 'Điện' },
  { id: 'ex4', jp: '配線遮断器', furigana: 'はいせん', vn: 'Aptomat (MCCB)', en: 'molded case circuit breaker', category: 'Điện' },
  { id: 'ex5', jp: '漏電遮断器', furigana: 'ろうでん', vn: 'Cầu dao chống rò (ELCB)', en: 'earth leakage circuit breaker', category: 'Điện' },
  
  { id: 'ex6', jp: '端子台', furigana: 'たんしだい', vn: 'Cầu đấu dây/Terminal block', en: 'terminal block', category: 'Điện' },
  { id: 'ex7', jp: '圧着端子', furigana: 'あっちゃく', vn: 'Đầu cốt/Cốt dây điện', en: 'crimp terminal', category: 'Điện' },
  { id: 'ex8', jp: '配線ダクト', furigana: '-', vn: 'Máng dây điện', en: 'wiring duct', category: 'Điện' },
  { id: 'ex9', jp: '電線管', furigana: 'でんせんかん', vn: 'Ống luồn dây điện', en: 'conduit', category: 'Điện' },
  
  { id: 'ex10', jp: '押ボタンスイッチ', furigana: '-', vn: 'Công tắc nút nhấn', en: 'push button switch', category: 'Điện' },
  { id: 'ex11', jp: '非常停止ボタン', furigana: 'ひじょう', vn: 'Nút dừng khẩn cấp', en: 'emergency stop button', category: 'Điện' },
  { id: 'ex12', jp: 'セレクタスイッチ', furigana: '-', vn: 'Công tắc xoay/Công tắc chọn', en: 'selector switch', category: 'Điện' },
  { id: 'ex13', jp: 'フットスイッチ', furigana: '-', vn: 'Công tắc bàn đạp chân', en: 'foot switch', category: 'Điện' },
  
  { id: 'ex14', jp: 'フォトセンサ', furigana: '-', vn: 'Cảm biến quang', en: 'photoelectric sensor', category: 'Điện' },
  { id: 'ex15', jp: 'レーザーセンサ', furigana: '-', vn: 'Cảm biến laser', en: 'laser sensor', category: 'Điện' },
  { id: 'ex16', jp: '変位センサ', furigana: 'へんい', vn: 'Cảm biến đo khoảng cách/biến dạng', en: 'displacement sensor', category: 'Điện' },
  { id: 'ex17', jp: '色彩センサ', furigana: 'しきさい', vn: 'Cảm biến màu sắc', en: 'color sensor', category: 'Điện' },
  
  { id: 'ex18', jp: 'PLC', furigana: '-', vn: 'Bộ điều khiển logic lập trình được (PLC)', en: 'PLC', category: 'Điện' },
  { id: 'ex19', jp: 'タッチパネル', furigana: '-', vn: 'Màn hình cảm ứng (HMI)', en: 'touch panel/HMI', category: 'Điện' },
  { id: 'ex20', jp: 'インバータ', furigana: '-', vn: 'Biến tần (Inverter)', en: 'inverter', category: 'Điện' },
  { id: 'ex21', jp: 'サーボアンプ', furigana: '-', vn: 'Bộ điều khiển động cơ servo', en: 'servo amplifier', category: 'Điện' },
  
  { id: 'ex22', jp: 'エンコーダ', furigana: '-', vn: 'Bộ mã hóa vòng quay/Encoder', en: 'encoder', category: 'Điện' },
  { id: 'ex23', jp: 'タコジェネレータ', furigana: '-', vn: 'Máy phát tốc', en: 'tacho generator', category: 'Điện' },
  { id: 'ex24', jp: 'ポテンショメータ', furigana: '-', vn: 'Biến trở xoay', en: 'potentiometer', category: 'Điện' },
  
  { id: 'ex25', jp: '動力配線', furigana: 'どうりょく', vn: 'Dây nguồn động lực', en: 'power wiring', category: 'Điện' },
  { id: 'ex26', jp: '制御配線', furigana: 'せいぎょ', vn: 'Dây tín hiệu điều khiển', en: 'control wiring', category: 'Điện' },
  { id: 'ex27', jp: '通信ケーブル', furigana: '-', vn: 'Cáp truyền thông', en: 'communication cable', category: 'Điện' },
  { id: 'ex28', jp: 'ノイズフィルター', furigana: '-', vn: 'Bộ lọc nhiễu', en: 'noise filter', category: 'Điện' },
  
  { id: 'ex29', jp: '配線図', furigana: 'はいせんず', vn: 'Sơ đồ đi dây', en: 'wiring diagram', category: 'Tài liệu' },
  { id: 'ex30', jp: '系統図', furigana: 'けいとうず', vn: 'Sơ đồ hệ thống', en: 'system diagram', category: 'Tài liệu' },
  { id: 'ex31', jp: '展開接続図', furigana: 'てんかい', vn: 'Sơ đồ khai triển/Sơ đồ nguyên lý', en: 'elementary diagram', category: 'Tài liệu' },
  
  { id: 'ex32', jp: '空気圧シリンダ', furigana: '-', vn: 'Xi-lanh khí nén', en: 'pneumatic cylinder', category: 'Khí nén/Thủy lực' },
  { id: 'ex33', jp: '油圧シリンダ', furigana: '-', vn: 'Xi-lanh thủy lực', en: 'hydraulic cylinder', category: 'Khí nén/Thủy lực' },
  { id: 'ex34', jp: 'ロータリアクチュエータ', furigana: '-', vn: 'Cơ cấu chấp hành xoay', en: 'rotary actuator', category: 'Khí nén/Thủy lực' },
  { id: 'ex35', jp: 'エアチャック', furigana: '-', vn: 'Kẹp khí nén', en: 'air chuck', category: 'Khí nén/Thủy lực' },
  
  { id: 'ex36', jp: 'ピストンロッド', furigana: '-', vn: 'Cần piston', en: 'piston rod', category: 'Khí nén/Thủy lực' },
  { id: 'ex37', jp: 'シリンダチューブ', furigana: '-', vn: 'Vỏ xi-lanh', en: 'cylinder tube', category: 'Khí nén/Thủy lực' },
  { id: 'ex38', jp: 'ヘッドカバー', furigana: '-', vn: 'Nắp đầu (Xi-lanh)', en: 'head cover', category: 'Khí nén/Thủy lực' },
  { id: 'ex39', jp: 'ロッドカバー', furigana: '-', vn: 'Nắp đuôi/Nắp cần', en: 'rod cover', category: 'Khí nén/Thủy lực' },
  
  { id: 'ex40', jp: 'クレビス', furigana: '-', vn: 'Tai treo/Khớp nối chữ U', en: 'clevis', category: 'Khí nén/Thủy lực' },
  { id: 'ex41', jp: 'ナックルジョイント', furigana: '-', vn: 'Khớp nối đầu cần', en: 'knuckle joint', category: 'Khí nén/Thủy lực' },
  { id: 'ex42', jp: 'フランジ取付', furigana: '-', vn: 'Lắp bằng mặt bích', en: 'flange mounting', category: 'Khí nén/Thủy lực' },
  { id: 'ex43', jp: 'フット取付', furigana: '-', vn: 'Lắp kiểu chân đế (L)', en: 'foot mounting', category: 'Khí nén/Thủy lực' },
  
  { id: 'ex44', jp: '電磁弁ユニット', furigana: '-', vn: 'Cụm van điện từ', en: 'solenoid valve manifold', category: 'Khí nén/Thủy lực' },
  { id: 'ex45', jp: 'オートスイッチ', furigana: '-', vn: 'Công tắc tự động (Gắn xi-lanh)', en: 'auto switch', category: 'Khí nén/Thủy lực' },
  { id: 'ex46', jp: 'リードスイッチ', furigana: '-', vn: 'Công tắc từ', en: 'reed switch', category: 'Khí nén/Thủy lực' },
  
  { id: 'ex47', jp: '流量計', furigana: 'りゅうりょうけい', vn: 'Lưu lượng kế', en: 'flow meter', category: 'Khí nén/Thủy lực' },
  { id: 'ex48', jp: '圧力計', furigana: 'あつりょくけい', vn: 'Đồng hồ áp suất', en: 'pressure gauge', category: 'Khí nén/Thủy lực' },
  { id: 'ex49', jp: '油面計', furigana: 'ゆめんけい', vn: 'Thước đo mức dầu', en: 'oil level gauge', category: 'Khí nén/Thủy lực' },
  { id: 'ex50', jp: '温度計', furigana: 'おんどけい', vn: 'Nhiệt kế/Đồng hồ nhiệt', en: 'thermometer', category: 'Thông số' },
  
  { id: 'ex51', jp: 'オイルクリーナ', furigana: '-', vn: 'Máy lọc dầu', en: 'oil cleaner', category: 'Vật tư' },
  { id: 'ex52', jp: '作動油', furigana: 'さどうゆ', vn: 'Dầu thủy lực', en: 'hydraulic oil', category: 'Vật tư' },
  { id: 'ex53', jp: '潤滑油', furigana: 'じゅんかつゆ', vn: 'Dầu bôi trơn', en: 'lubricating oil', category: 'Vật tư' },
  { id: 'ex54', jp: '切削油', furigana: 'せっさくゆ', vn: 'Dầu làm mát/Dầu cắt gọt', en: 'cutting oil', category: 'Vật tư' },
  { id: 'ex55', jp: '防錆油', furigana: 'ぼうせいゆ', vn: 'Dầu chống gỉ', en: 'anti-rust oil', category: 'Vật tư' },
  
  { id: 'ex56', jp: '洗浄液', furigana: 'せんじょうえき', vn: 'Dung dịch tẩy rửa', en: 'cleaning liquid', category: 'Vật tư' },
  { id: 'ex57', jp: '希釈液', furigana: 'きしゃく', vn: 'Dung dịch pha loãng', en: 'diluent', category: 'Vật tư' },
  { id: 'ex58', jp: '溶剤', furigana: 'ようざい', vn: 'Dung môi', en: 'solvent', category: 'Vật tư' },
  
  { id: 'ex59', jp: '研削液', furigana: 'けんさくえき', vn: 'Dung dịch mài', en: 'grinding fluid', category: 'Vật tư' },
  { id: 'ex60', jp: '不水性切削油', furigana: '-', vn: 'Dầu cắt gọt không pha nước', en: 'non-water-soluble cutting oil', category: 'Vật tư' },
  { id: 'ex61', jp: '水溶性切削油', furigana: 'すいようせい', vn: 'Dầu cắt gọt pha nước (Sữa)', en: 'water-soluble cutting oil', category: 'Vật tư' },
  
  { id: 'ex62', jp: '部品番号', furigana: 'ぶひんばんごう', vn: 'Mã số linh kiện/Part Number', en: 'part number', category: 'Thương mại' },
  { id: 'ex63', jp: '互換部品', furigana: 'ごかん', vn: 'Linh kiện thay thế tương đương', en: 'interchangeable parts', category: 'Thương mại' },
  { id: 'ex64', jp: '推奨部品', furigana: 'すいしょう', vn: 'Linh kiện khuyên dùng', en: 'recommended parts', category: 'Thương mại' },
  
  { id: 'ex65', jp: '消耗部品', furigana: 'しょうもう', vn: 'Linh kiện tiêu hao', en: 'consumable parts', category: 'Thương mại' },
  { id: 'ex66', jp: '定期交換部品', furigana: 'こうかん', vn: 'Linh kiện thay thế định kỳ', en: 'periodical replacement parts', category: 'Thương mại' },
  { id: 'ex67', jp: '予備品', furigana: 'よびひん', vn: 'Phụ tùng dự phòng/Spare parts', en: 'spare parts', category: 'Thương mại' },
  
  { id: 'ex68', jp: '在庫管理', furigana: 'ざいこ', vn: 'Quản lý kho/Tồn kho', en: 'inventory management', category: 'Kho vận' },
  { id: 'ex69', jp: '棚卸し', furigana: 'たなおろし', vn: 'Kiểm kê kho', en: 'stock-taking', category: 'Kho vận' },
  { id: 'ex70', jp: '出庫', furigana: 'しゅっこ', vn: 'Xuất kho', en: 'stock-out/shipping', category: 'Kho vận' },
  { id: 'ex71', jp: '入庫', furigana: 'にゅうこ', vn: 'Nhập kho', en: 'warehousing', category: 'Kho vận' },
  
  { id: 'ex72', jp: '欠品', furigana: 'けっぴん', vn: 'Hết hàng/Thiếu hàng', en: 'out of stock', category: 'Thương mại' },
  { id: 'ex73', jp: '納期遅延', furigana: 'のうき', vn: 'Trễ hạn giao hàng', en: 'delivery delay', category: 'Thương mại' },
  { id: 'ex74', jp: '分納', furigana: 'ぶんのう', vn: 'Giao hàng nhiều lần/Giao từng phần', en: 'partial delivery', category: 'Thương mại' },
  
  { id: 'ex75', jp: '運送料', furigana: 'うんそうりょう', vn: 'Cước phí vận chuyển', en: 'shipping fee', category: 'Thương mại' },
  { id: 'ex76', jp: '梱包費', furigana: 'こんぽうひ', vn: 'Phí đóng gói', en: 'packing cost', category: 'Thương mại' },
  { id: 'ex77', jp: '据付費', furigana: 'すえつけひ', vn: 'Phí lắp đặt', en: 'installation cost', category: 'Thương mại' },
  { id: 'ex78', jp: '試運転費', furigana: 'しうんてん', vn: 'Phí vận hành thử', en: 'trial run cost', category: 'Thương mại' },
  
  { id: 'ex79', jp: '見積期限', furigana: 'みつもり', vn: 'Hạn chót báo giá', en: 'quotation deadline', category: 'Thương mại' },
  { id: 'ex80', jp: '発注書', furigana: 'はっちゅうしょ', vn: 'Đơn đặt hàng (PO)', en: 'purchase order', category: 'Thương mại' },
  { id: 'ex81', jp: '注文請書', furigana: 'ちゅうもん', vn: 'Xác nhận đơn hàng', en: 'order acknowledgement', category: 'Thương mại' },
  
  { id: 'ex82', jp: '請求書', furigana: 'せいきゅうしょ', vn: 'Hóa đơn yêu cầu thanh toán/Invoice', en: 'bill/invoice', category: 'Thương mại' },
  { id: 'ex83', jp: '領収書', furigana: 'りょうしゅうしょ', vn: 'Biên lai/Hóa đơn đã thanh toán', en: 'receipt', category: 'Thương mại' },
  { id: 'ex84', jp: '支払条件', furigana: 'しはらい', vn: 'Điều khoản thanh toán', en: 'payment terms', category: 'Thương mại' },
  
  { id: 'ex85', jp: '現金払い', furigana: 'げんきん', vn: 'Thanh toán tiền mặt', en: 'cash payment', category: 'Thương mại' },
  { id: 'ex86', jp: '振込', furigana: 'ふりこみ', vn: 'Chuyển khoản', en: 'bank transfer', category: 'Thương mại' },
  { id: 'ex87', jp: '手形', furigana: 'てがた', vn: 'Hối phiếu/Hợp đồng chứng khoán', en: 'bill of exchange/note', category: 'Thương mại' },
  
  { id: 'ex88', jp: '寸法精度', furigana: 'すんぽう', vn: 'Độ chính xác kích thước', en: 'dimensional accuracy', category: 'Chất lượng' },
  { id: 'ex89', jp: '幾何公差', furigana: 'きかこうさ', vn: 'Dung sai hình học', en: 'geometric tolerance', category: 'Chất lượng' },
  { id: 'ex90', jp: '真円度', furigana: 'しんえんど', vn: 'Độ tròn', en: 'roundness', category: 'Chất lượng' },
  { id: 'ex91', jp: '円筒度', furigana: 'えんとうど', vn: 'Độ trụ', en: 'cylindricity', category: 'Chất lượng' },
  
  { id: 'ex92', jp: '平面度', furigana: 'へいめんど', vn: 'Độ phẳng', en: 'flatness', category: 'Chất lượng' },
  { id: 'ex93', jp: '平行度', furigana: 'へいこうど', vn: 'Độ song song', en: 'parallelism', category: 'Chất lượng' },
  { id: 'ex94', jp: '直角度', furigana: 'ちょっかくど', vn: 'Độ vuông góc', en: 'perpendicularity', category: 'Chất lượng' },
  { id: 'ex95', jp: '同軸度', furigana: 'どうじくど', vn: 'Độ đồng trục', en: 'coaxiality', category: 'Chất lượng' },
  
  { id: 'ex96', jp: '位置度', furigana: 'いちど', vn: 'Dung sai vị trí', en: 'position tolerance', category: 'Chất lượng' },
  { id: 'ex97', jp: '振れ公差', furigana: 'ふれ', vn: 'Dung sai độ đảo', en: 'run-out tolerance', category: 'Chất lượng' },
  { id: 'ex98', jp: '全振れ', furigana: 'ぜんぶれ', vn: 'Độ đảo toàn phần', en: 'total run-out', category: 'Chất lượng' },
  
  { id: 'ex99', jp: 'ブロックゲージ', furigana: '-', vn: 'Căn mẫu chuẩn/Gauge block', en: 'gauge block', category: 'Công cụ' },
  { id: 'ex100', jp: 'ピンゲージ', furigana: '-', vn: 'Chốt đo chuẩn/Pin gauge', en: 'pin gauge', category: 'Công cụ' },
  { id: 'ex101', jp: 'リングゲージ', furigana: '-', vn: 'Vòng đo chuẩn/Ring gauge', en: 'ring gauge', category: 'Công cụ' },
  
  { id: 'ex102', jp: '限界ゲージ', furigana: 'げんかい', vn: 'Dưỡng kiểm giới hạn (Go/No-go)', en: 'limit gauge', category: 'Công cụ' },
  { id: 'ex103', jp: '通り側', furigana: 'とおり', vn: 'Đầu Go (Đầu lọt)', en: 'go side', category: 'Công cụ' },
  { id: 'ex104', jp: '止まり側', furigana: 'とまり', vn: 'Đầu No-go (Đầu không lọt)', en: 'no-go side', category: 'Công cụ' },
  
  { id: 'ex105', jp: 'マイクロメータヘッド', furigana: '-', vn: 'Đầu Micrometer', en: 'micrometer head', category: 'Công cụ' },
  { id: 'ex106', jp: 'インジケータ', furigana: '-', vn: 'Đồng hồ so/Bộ chỉ thị', en: 'indicator', category: 'Công cụ' },
  { id: 'ex107', jp: 'てこ式ダイヤルゲージ', furigana: '-', vn: 'Đồng hồ so chân gập', en: 'lever type dial gauge', category: 'Công cụ' },
  
  { id: 'ex108', jp: '投影機', furigana: 'とうえいき', vn: 'Máy chiếu biên dạng', en: 'profile projector', category: 'Công cụ' },
  { id: 'ex109', jp: '工具顕微鏡', furigana: 'けんびきょう', vn: 'Kính hiển vi soi công cụ', en: 'toolmaker\'s microscope', category: 'Công cụ' },
  { id: 'ex110', jp: '三次元測定機', furigana: 'さんじげん', vn: 'Máy đo tọa độ 3 chiều (CMM)', en: 'CMM', category: 'Máy móc' },
  
  { id: 'ex111', jp: '真円度測定機', furigana: 'しんえんど', vn: 'Máy đo độ tròn', en: 'roundness measuring machine', category: 'Máy móc' },
  { id: 'ex112', jp: '表面粗さ測定機', furigana: 'あらさ', vn: 'Máy đo độ nhám bề mặt', en: 'surface roughness tester', category: 'Máy móc' },
  { id: 'ex113', jp: '真直度', furigana: 'しんちょくど', vn: 'Độ thẳng', en: 'straightness', category: 'Chất lượng' },
  
  { id: 'ex114', jp: 'JIS 1級', furigana: 'いっきゅう', vn: 'Cấp 1 theo JIS (Độ chính xác cao)', en: 'JIS Class 1', category: 'Chất lượng' },
  { id: 'ex115', jp: '公差限界', furigana: 'げんかい', vn: 'Giới hạn dung sai', en: 'tolerance limit', category: 'Chất lượng' },
  { id: 'ex116', jp: '許容範囲', furigana: 'きょよう', vn: 'Phạm vi cho phép', en: 'allowable range', category: 'Chất lượng' },
  
  { id: 'ex117', jp: '不適合品', furigana: 'ふてきごう', vn: 'Sản phẩm không phù hợp/Lỗi', en: 'non-conforming product', category: 'Chất lượng' },
  { id: 'ex118', jp: '選別作業', furigana: 'せんべつ', vn: 'Công tác phân loại/Lọc hàng lỗi', en: 'sorting work', category: 'Hành động' },
  { id: 'ex119', jp: '手直し', furigana: 'てなおし', vn: 'Sửa chữa lại/Rework', en: 'rework', category: 'Hành động' },
  { id: 'ex120', jp: '廃棄', furigana: 'はいき', vn: 'Loại bỏ/Hủy bỏ (Hàng lỗi)', en: 'disposal/scrapping', category: 'Hành động' },
  
  { id: 'ex121', jp: '初品検査', furigana: 'しょひん', vn: 'Kiểm tra sản phẩm đầu tiên', en: 'first article inspection', category: 'Chất lượng' },
  { id: 'ex122', jp: '巡回点検', furigana: 'じゅんかい', vn: 'Kiểm tra tuần tra', en: 'patrol inspection', category: 'Chất lượng' },
  { id: 'ex123', jp: '最終検査', furigana: 'さいしゅう', vn: 'Kiểm tra cuối cùng', en: 'final inspection', category: 'Chất lượng' },
  
  { id: 'ex124', jp: '抜取り検査', furigana: 'ぬきとり', vn: 'Kiểm tra xác suất/Kiểm tra mẫu', en: 'sampling inspection', category: 'Chất lượng' },
  { id: 'ex125', jp: '全数検査', furigana: 'ぜんすう', vn: 'Kiểm tra 100%/Kiểm tra toàn bộ', en: '100% inspection', category: 'Chất lượng' },
  { id: 'ex126', jp: '品質保証', furigana: 'ほしょう', vn: 'Đảm bảo chất lượng (QA)', en: 'quality assurance', category: 'Chất lượng' },
  
  { id: 'ex127', jp: '計数管理', furigana: 'けいすう', vn: 'Quản lý bằng số liệu', en: 'data management', category: 'Quản lý' },
  { id: 'ex128', jp: '工程能力', furigana: 'こうてい', vn: 'Năng lực quy trình (Cp/Cpk)', en: 'process capability', category: 'Quản lý' },
  { id: 'ex129', jp: '管理図', furigana: 'かんりず', vn: 'Biểu đồ kiểm soát', en: 'control chart', category: 'Quản lý' },
  
  { id: 'ex130', jp: '原因究明', furigana: 'げんいん', vn: 'Tìm kiếm nguyên nhân gốc rễ', en: 'root cause investigation', category: 'Hành động' },
  { id: 'ex131', jp: '再発防止策', furigana: 'さいはつ', vn: 'Biện pháp phòng ngừa tái diễn', en: 'recurrence prevention measures', category: 'Quản lý' },
  { id: 'ex132', jp: '暫定処置', furigana: 'ざんてい', vn: 'Biện pháp khắc phục tạm thời', en: 'temporary measure', category: 'Quản lý' },
  { id: 'ex133', jp: '恒久処置', furigana: 'こうきゅう', vn: 'Biện pháp khắc phục triệt để', en: 'permanent measure', category: 'Quản lý' },
  
  { id: 'ex134', jp: 'ヒューズ', furigana: '-', vn: 'Cầu chì', en: 'fuse', category: 'Điện' },
  { id: 'ex135', jp: 'コンデンサ', furigana: '-', vn: 'Tụ điện', en: 'capacitor', category: 'Điện' },
  { id: 'ex136', jp: 'ダイオード', furigana: '-', vn: 'Đi-ốt', en: 'diode', category: 'Điện' },
  { id: 'ex137', jp: 'トランジスタ', furigana: '-', vn: 'Bóng bán dẫn/Transistor', en: 'transistor', category: 'Điện' },
  
  { id: 'ex138', jp: 'フォトカプラ', furigana: '-', vn: 'Cách ly quang/Opto-coupler', en: 'optically coupled isolator', category: 'Điện' },
  { id: 'ex139', jp: '集積回路', furigana: 'しゅうせき', vn: 'Mạch tích hợp (IC)', en: 'integrated circuit', category: 'Điện' },
  { id: 'ex140', jp: '基板', furigana: 'きばん', vn: 'Bảng mạch/Bo mạch', en: 'printed circuit board (PCB)', category: 'Điện' },
  { id: 'ex141', jp: 'ハンダ付け', furigana: '-', vn: 'Hàn thiếc/Hàn điện tử', en: 'soldering', category: 'Hành động' },
  
  { id: 'ex142', jp: 'ハンダごて', furigana: '-', vn: 'Mỏ hàn nhiệt', en: 'soldering iron', category: 'Công cụ' },
  { id: 'ex143', jp: 'ハンダ吸取器', furigana: '-', vn: 'Dụng cụ hút thiếc', en: 'solder sucker', category: 'Công cụ' },
  { id: 'ex144', jp: 'フラックス', furigana: '-', vn: 'Nhựa thông/Chất trợ hàn', en: 'flux', category: 'Vật tư' },
  
  { id: 'ex145', jp: 'コネクタ', furigana: '-', vn: 'Đầu nối/Jack cắm', en: 'connector', category: 'Điện' },
  { id: 'ex146', jp: 'コンセント', furigana: '-', vn: 'Ổ cắm điện', en: 'electrical outlet', category: 'Điện' },
  { id: 'ex147', jp: 'プラグ', furigana: '-', vn: 'Phích cắm', en: 'plug', category: 'Điện' },
  { id: 'ex148', jp: 'アース線', furigana: '-', vn: 'Dây tiếp địa', en: 'earth wire', category: 'Điện' },
  
  { id: 'ex149', jp: '結束バンド', furigana: 'けっそく', vn: 'Dây rút nhựa (Lạt nhựa)', en: 'cable tie', category: 'Vật tư' },
  { id: 'ex150', jp: 'スパイラルチューブ', furigana: '-', vn: 'Ống xoắn quấn dây', en: 'spiral tube', category: 'Vật tư' },
  { id: 'ex151', jp: '絶縁テープ', furigana: '-', vn: 'Băng dính cách điện', en: 'insulating tape', category: 'Vật tư' },
  { id: 'ex152', jp: 'マークチューブ', furigana: '-', vn: 'Ống lồng đầu dây (Đánh dấu)', en: 'mark tube', category: 'Vật tư' },
  
  { id: 'ex153', jp: '熱収縮チューブ', furigana: 'ねつしゅうしゅく', vn: 'Ống co nhiệt', en: 'heat shrink tube', category: 'Vật tư' },
  { id: 'ex154', jp: '圧着工具', furigana: 'あっちゃく', vn: 'Kìm bấm cốt', en: 'crimping tool', category: 'Công cụ' },
  { id: 'ex155', jp: 'ワイヤーストリッパー', furigana: '-', vn: 'Kìm tuốt dây điện', en: 'wire stripper', category: 'Công cụ' },
  { id: 'ex156', jp: 'ニッパー', furigana: '-', vn: 'Kìm cắt chân linh kiện', en: 'nippers', category: 'Công cụ' },
  
  { id: 'ex157', jp: 'ラテックス手袋', furigana: '-', vn: 'Găng tay cao su/Latex', en: 'latex gloves', category: 'An toàn' },
  { id: 'ex158', jp: 'ニトリル手袋', furigana: '-', vn: 'Găng tay Nitrile', en: 'nitrile gloves', category: 'An toàn' },
  { id: 'ex159', jp: '軍手', furigana: 'ぐんて', vn: 'Găng tay vải len/Găng tay bảo hộ', en: 'cotton work gloves', category: 'An toàn' },
  
  { id: 'ex160', jp: '防刃手袋', furigana: 'ぼうじん', vn: 'Găng tay chống cắt', en: 'cut-resistant gloves', category: 'An toàn' },
  { id: 'ex161', jp: '耐熱手袋', furigana: 'たいねつ', vn: 'Găng tay chịu nhiệt', en: 'heat-resistant gloves', category: 'An toàn' },
  { id: 'ex162', jp: '皮手袋', furigana: 'かわて', vn: 'Găng tay da', en: 'leather gloves', category: 'An toàn' },
  
  { id: 'ex163', jp: '安全靴', furigana: 'あんぜんぐつ', vn: 'Giày bảo hộ', en: 'safety shoes', category: 'An toàn' },
  { id: 'ex164', jp: '静電靴', furigana: 'せいでんぐつ', vn: 'Giày chống tĩnh điện', en: 'static dissipative shoes', category: 'An toàn' },
  { id: 'ex165', jp: '長靴', furigana: 'ながぐつ', vn: 'Ủng bảo hộ', en: 'safety boots', category: 'An toàn' },
  
  { id: 'ex166', jp: '防護眼鏡', furigana: 'がんきょう', vn: 'Kính bảo hộ', en: 'safety glasses', category: 'An toàn' },
  { id: 'ex167', jp: 'ゴーグル', furigana: '-', vn: 'Kính bảo hộ dạng kín/Goggles', en: 'goggles', category: 'An toàn' },
  { id: 'ex168', jp: '溶接面', furigana: 'ようせつめん', vn: 'Mặt nạ hàn', en: 'welding shield', category: 'An toàn' },
  
  { id: 'ex169', jp: '防振手袋', furigana: 'ぼうしん', vn: 'Găng tay chống rung', en: 'vibration-reducing gloves', category: 'An toàn' },
  { id: 'ex170', jp: '防寒着', furigana: 'ぼうかんぎ', vn: 'Quần áo chống lạnh', en: 'winter workwear', category: 'An toàn' },
  { id: 'ex171', jp: '救急箱', furigana: 'きゅうきゅうばこ', vn: 'Hộp sơ cứu', en: 'first-aid kit', category: 'An toàn' },
  
  { id: 'ex172', jp: '消火器', furigana: 'しょうかき', vn: 'Bình chữa cháy', en: 'fire extinguisher', category: 'An toàn' },
  { id: 'ex173', jp: '火災報知器', furigana: 'かさいほうちき', vn: 'Thiết bị báo cháy', en: 'fire alarm', category: 'An toàn' },
  { id: 'ex174', jp: '避難経路', furigana: 'ひなんけいろ', vn: 'Đường thoát hiểm', en: 'evacuation route', category: 'An toàn' },
  
  { id: 'ex175', jp: '整理整頓', furigana: 'せいりせいとん', vn: 'Sắp xếp ngăn nắp', en: 'tidying up', category: 'Quản lý' },
  { id: 'ex176', jp: '清掃活動', furigana: 'せいそう', vn: 'Hoạt động tổng vệ sinh', en: 'cleaning activities', category: 'Quản lý' },
  { id: 'ex177', jp: '危険予知訓練', furigana: '-', vn: 'Huấn luyện KYT (Dự đoán nguy hiểm)', en: 'KYT training', category: 'An toàn' },
  
  { id: 'ex178', jp: '作業標準書', furigana: 'ひょうじゅんしょ', vn: 'Bản tiêu chuẩn thao tác (SOP)', en: 'SOP', category: 'Tài liệu' },
  { id: 'ex179', jp: '管理標準書', furigana: 'かんり', vn: 'Tiêu chuẩn quản lý', en: 'management standard', category: 'Tài liệu' },
  { id: 'ex180', jp: '自主保全', furigana: 'じしゅ', vn: 'Tự bảo trì', en: 'autonomous maintenance', category: 'Bảo trì' },
  
  { id: 'ex181', jp: '点検表', furigana: 'てんけんひょう', vn: 'Bảng kiểm tra/Checklist', en: 'inspection checklist', category: 'Tài liệu' },
  { id: 'ex182', jp: '修理履歴', furigana: 'りれき', vn: 'Lịch sử sửa chữa', en: 'repair history', category: 'Tài liệu' },
  { id: 'ex183', jp: '設備台帳', furigana: 'だいちょう', vn: 'Sổ quản lý thiết bị/Sổ tài sản', en: 'equipment ledger', category: 'Tài liệu' },
  
  { id: 'ex184', jp: '稼働報告書', furigana: 'かどう', vn: 'Báo cáo hoạt động', en: 'operation report', category: 'Tài liệu' },
  { id: 'ex185', jp: '故障報告書', furigana: 'こしょう', vn: 'Báo cáo sự cố/Hỏng hóc', en: 'failure report', category: 'Tài liệu' },
  { id: 'ex186', jp: '事故報告書', furigana: 'じこ', vn: 'Báo cáo tai nạn', en: 'accident report', category: 'Tài liệu' },
  
  { id: 'ex187', jp: '有償修理', furigana: 'ゆうしょう', vn: 'Sửa chữa có tính phí', en: 'paid repair', category: 'Thương mại' },
  { id: 'ex188', jp: '無償修理', furigana: 'むしょう', vn: 'Sửa chữa miễn phí (Bảo hành)', en: 'free repair', category: 'Thương mại' },
  { id: 'ex189', jp: 'オーバーホール', furigana: '-', vn: 'Đại tu/Bảo dưỡng toàn bộ', en: 'overhaul', category: 'Bảo trì' },
  
  { id: 'ex190', jp: '現地修理', furigana: 'げんち', vn: 'Sửa chữa tại chỗ', en: 'on-site repair', category: 'Bảo trì' },
  { id: 'ex191', jp: '引取修理', furigana: 'ひきとり', vn: 'Sửa chữa tại xưởng (Gửi đi)', en: 'carry-in repair', category: 'Bảo trì' },
  { id: 'ex192', jp: '代品貸出', furigana: 'だいひん', vn: 'Cho mượn máy thay thế', en: 'loaner unit', category: 'Thương mại' },
  
  { id: 'ex193', jp: '技術講習', furigana: 'ぎじゅつ', vn: 'Hướng dẫn kỹ thuật/Training', en: 'technical training', category: 'Hành động' },
  { id: 'ex194', jp: 'SV派遣', furigana: 'はけん', vn: 'Cử chuyên gia hỗ trợ (Supervisor)', en: 'dispatching supervisor', category: 'Nhân sự' },
  { id: 'ex195', jp: '出張費', furigana: 'しゅっちょうひ', vn: 'Công tác phí', en: 'business trip expense', category: 'Thương mại' },
  
  { id: 'ex196', jp: '宿泊費', furigana: 'しゅくはくひ', vn: 'Phí lưu trú/Phí khách sạn', en: 'accommodation fee', category: 'Thương mại' },
  { id: 'ex197', jp: '日当', furigana: 'にっとう', vn: 'Công tác phí theo ngày/Lương ngày', en: 'daily allowance', category: 'Thương mại' },
  { id: 'ex198', jp: '渡航費', furigana: 'とこうひ', vn: 'Chi phí đi lại quốc tế', en: 'travel expense', category: 'Thương mại' },
  
  { id: 'ex199', jp: '輸入関税', furigana: 'かんぜい', vn: 'Thuế nhập khẩu', en: 'import duty', category: 'Logistics' },
  { id: 'ex200', jp: '通関料', furigana: 'つうかん', vn: 'Phí thông quan', en: 'customs clearance fee', category: 'Logistics' },
  { id: 'ex201', jp: '保税倉庫', furigana: 'ほぜい', vn: 'Kho ngoại quan', en: 'bonded warehouse', category: 'Logistics' },
  
  { id: 'ex202', jp: '船積み', furigana: 'ふなづみ', vn: 'Xếp hàng lên tàu', en: 'shipping/boarding', category: 'Logistics' },
  { id: 'ex203', jp: '航空便', furigana: 'こうくうびん', vn: 'Gửi bằng đường hàng không', en: 'air freight', category: 'Logistics' },
  { id: 'ex204', jp: '船便', furigana: 'ふなびん', vn: 'Gửi bằng đường biển', en: 'sea freight', category: 'Logistics' },
  
  { id: 'ex205', jp: '混載便', furigana: 'こんさい', vn: 'Hàng ghép (LCL)', en: 'consolidated shipment', category: 'Logistics' },
  { id: 'ex206', jp: 'チャーター便', furigana: '-', vn: 'Xe thuê riêng/Cháy chuyến (Chartered)', en: 'charter flight/truck', category: 'Logistics' },
  { id: 'ex207', jp: '国内配送', furigana: 'こくない', vn: 'Vận chuyển nội địa', en: 'domestic delivery', category: 'Logistics' },
  
  { id: 'ex208', jp: '送り先', furigana: 'おくりさき', vn: 'Địa chỉ nhận hàng', en: 'destination', category: 'Logistics' },
  { id: 'ex209', jp: '荷受人', furigana: 'にうけにん', vn: 'Người nhận hàng/Consignee', en: 'consignee', category: 'Logistics' },
  { id: 'ex210', jp: '荷送人', furigana: 'におくりにん', vn: 'Người gửi hàng/Shipper', en: 'shipper', category: 'Logistics' },
  
  { id: 'ex211', jp: '追跡番号', furigana: 'ついせき', vn: 'Mã số theo dõi/Tracking number', en: 'tracking number', category: 'Logistics' },
  { id: 'ex212', jp: '貨物', furigana: 'かもつ', vn: 'Hàng hóa (Vận tải)', en: 'cargo', category: 'Logistics' },
  { id: 'ex213', jp: '重量物', furigana: 'じゅうりょうぶつ', vn: 'Hàng nặng', en: 'heavy cargo', category: 'Logistics' },
  
  { id: 'ex214', jp: '精密機器', furigana: 'せいみつ', vn: 'Thiết bị chính xác/Máy móc nhạy cảm', en: 'precision equipment', category: 'Logistics' },
  { id: 'ex215', jp: '割れ物注意', furigana: 'われもの', vn: 'Hàng dễ vỡ (Cẩn thận)', en: 'fragile handle with care', category: 'Logistics' },
  { id: 'ex216', jp: '取扱注意', furigana: 'とりあつかい', vn: 'Cẩn thận khi vận chuyển', en: 'handle with care', category: 'Logistics' },
  
  { id: 'ex217', jp: '天地無用', furigana: 'てんちむよう', vn: 'Không được đặt ngược/Cẩn thận hướng đặt', en: 'do not turn over', category: 'Logistics' },
  { id: 'ex218', jp: '水濡れ厳禁', furigana: 'げんきん', vn: 'Nghiêm cấm dính nước', en: 'keep dry', category: 'Logistics' },
  { id: 'ex219', jp: '直射日光禁止', furigana: 'ちょくしゃ', vn: 'Tránh ánh nắng trực tiếp', en: 'keep away from sunlight', category: 'Logistics' },
  
  { id: 'ex220', jp: '積み重ね禁止', furigana: 'つみかさね', vn: 'Cấm xếp chồng/Không đè lên nhau', en: 'do not stack', category: 'Logistics' },
  { id: 'ex221', jp: '段積み数', furigana: 'だんづみ', vn: 'Số tầng được phép xếp chồng', en: 'stacking height', category: 'Logistics' },
  { id: 'ex222', jp: '保護材', furigana: 'ほござい', vn: 'Vật liệu bảo vệ/Xốp/Đệm', en: 'protective material', category: 'Vật tư' },
  
  { id: 'ex223', jp: '緩衝材', furigana: 'かんしょう', vn: 'Vật liệu giảm chấn/Chống sốc', en: 'cushioning material', category: 'Vật tư' },
  { id: 'ex224', jp: '気泡緩衝材', furigana: '-', vn: 'Xốp nổ/Màng xốp bóp nổ (Bubble wrap)', en: 'bubble wrap', category: 'Vật tư' },
  { id: 'ex225', jp: '木材パレット', furigana: '-', vn: 'Pallet gỗ', en: 'wooden pallet', category: 'Vật tư' },
  { id: 'ex226', jp: 'プラスチックパレット', furigana: '-', vn: 'Pallet nhựa', en: 'plastic pallet', category: 'Vật tư' },
  
  { id: 'ex227', jp: '輸出用梱包', furigana: 'ゆしゅつ', vn: 'Đóng gói hàng xuất khẩu', en: 'export packing', category: 'Logistics' },
  { id: 'ex228', jp: '海上梱包', furigana: 'かいじょう', vn: 'Đóng gói đi đường biển', en: 'ocean packing', category: 'Logistics' },
  { id: 'ex229', jp: '航空梱包', furigana: 'こうくう', vn: 'Đóng gói đi đường hàng không', en: 'air packing', category: 'Logistics' },
  
  { id: 'ex230', jp: 'ラッシング', furigana: '-', vn: 'Chằng buộc hàng hóa', en: 'lashing', category: 'Logistics' },
  { id: 'ex231', jp: '木枠梱包', furigana: 'こんぽう', vn: 'Đóng kiện gỗ thưa', en: 'crating', category: 'Logistics' },
  { id: 'ex232', jp: '密閉木箱', furigana: 'みっぺい', vn: 'Thùng gỗ kín', en: 'closed wooden case', category: 'Logistics' },
  
  { id: 'ex233', jp: '熱処理済み', furigana: 'ねつしょり', vn: 'Đã qua xử lý nhiệt (Kiện gỗ)', en: 'heat treated', category: 'Logistics' },
  { id: 'ex234', jp: 'IPPCマーク', furigana: '-', vn: 'Dấu xác nhận khử trùng (Dùng cho gỗ)', en: 'IPPC mark', category: 'Logistics' },
  { id: 'ex235', jp: 'スキッド', furigana: '-', vn: 'Đế gỗ/Tấm kê hàng', en: 'skid', category: 'Logistics' },
  
  { id: 'ex236', jp: '台数', furigana: 'だいすう', vn: 'Số lượng máy/Số chiếc', en: 'number of units', category: 'Thông số' },
  { id: 'ex237', jp: '連数', furigana: 'れんすう', vn: 'Số bộ/Số dãy (Van, PLC)', en: 'number of stations', category: 'Thông số' },
  { id: 'ex238', jp: '個数', furigana: 'こすう', vn: 'Số cái/Số lượng nhỏ', en: 'number of pieces', category: 'Thông số' },
  
  { id: 'ex239', jp: '重量', furigana: 'じゅうりょう', vn: 'Trọng lượng', en: 'weight', category: 'Thông số' },
  { id: 'ex240', jp: '質量', furigana: 'しつりょう', vn: 'Khối lượng', en: 'mass', category: 'Thông số' },
  { id: 'ex241', jp: '容積', furigana: 'ようせき', vn: 'Dung tích/Thể tích chứa', en: 'capacity/volume', category: 'Thông số' },
  
  { id: 'ex242', jp: '外形寸法', furigana: 'がいけい', vn: 'Kích thước bên ngoài', en: 'outer dimensions', category: 'Thông số' },
  { id: 'ex243', jp: '据付面積', furigana: 'すえつけ', vn: 'Diện tích lắp đặt', en: 'installation area', category: 'Thông số' },
  { id: 'ex244', jp: 'クリアランス', furigana: '-', vn: 'Khoảng cách an toàn/Khe hở', en: 'clearance', category: 'Thông số' },
  
  { id: 'ex245', jp: '静荷重', furigana: 'せいかじゅう', vn: 'Tải trọng tĩnh', en: 'static load', category: 'Thông số' },
  { id: 'ex246', jp: '動荷重', furigana: 'どうかじゅう', vn: 'Tải trọng động', en: 'dynamic load', category: 'Thông số' },
  { id: 'ex247', jp: '耐荷重', furigana: 'たいかじゅう', vn: 'Khả năng chịu tải', en: 'load capacity', category: 'Thông số' },
  
  { id: 'ex248', jp: '許容力', furigana: 'きょようりょく', vn: 'Lực cho phép', en: 'allowable force', category: 'Thông số' },
  { id: 'ex249', jp: '安全率', furigana: 'あんぜんりつ', vn: 'Hệ số an toàn', en: 'safety factor', category: 'Thông số' },
  { id: 'ex250', jp: '定格値', furigana: 'ていかくち', vn: 'Giá trị định mức', en: 'rated value', category: 'Thông số' },
  
  { id: 'ex251', jp: '最大出力', furigana: 'しゅつりょく', vn: 'Công suất tối đa', en: 'maximum output', category: 'Thông số' },
  { id: 'ex252', jp: '能率', furigana: 'のうりつ', vn: 'Năng suất/Hiệu năng', en: 'efficiency', category: 'Thông số' },
  { id: 'ex253', jp: '分解能', furigana: 'ぶんかいのう', vn: 'Độ phân giải (Cảm biến)', en: 'resolution', category: 'Thông số' },
  
  { id: 'ex254', jp: '繰り返し精度', furigana: 'くりかえし', vn: 'Độ lặp lại/Độ chính xác lặp', en: 'repeatability', category: 'Thông số' },
  { id: 'ex255', jp: 'バックラッシ', furigana: '-', vn: 'Độ rơ bánh răng/Backlash', en: 'backlash', category: 'Thông số' },
  { id: 'ex256', jp: 'ばらつき', furigana: '-', vn: 'Sự sai số/Sự không đồng đều/Độ tán xạ', en: 'variation/dispersion', category: 'Thông số' },
  
  { id: 'ex257', jp: 'ノイズ', furigana: '-', vn: 'Nhiễu (Điện, âm thanh)', en: 'noise', category: 'Kỹ thuật' },
  { id: 'ex258', jp: 'サージ電圧', furigana: '-', vn: 'Điện áp đột biến/Xung điện', en: 'surge voltage', category: 'Điện' },
  { id: 'ex259', jp: '漏れ電流', furigana: 'もれ', vn: 'Dòng rò', en: 'leakage current', category: 'Điện' },
  
  { id: 'ex260', jp: '絶縁抵抗', furigana: 'ぜつえん', vn: 'Điện trở cách điện', en: 'insulation resistance', category: 'Điện' },
  { id: 'ex261', jp: '絶縁破壊', furigana: 'はかい', vn: 'Thủng cách điện/Đánh thủng', en: 'insulation breakdown', category: 'Điện' },
  { id: 'ex262', jp: '耐電圧', furigana: 'たいでんあつ', vn: 'Điện áp chịu đựng/Điện áp thử', en: 'withstand voltage', category: 'Điện' },
  
  { id: 'ex263', jp: 'アースラグ', furigana: '-', vn: 'Vít tiếp địa/Cọc tiếp địa', en: 'earth lug', category: 'Điện' },
  { id: 'ex264', jp: '等電位', furigana: 'とうでんい', vn: 'Đẳng thế/Cùng điện thế', en: 'equipotential', category: 'Điện' },
  { id: 'ex265', jp: '誘導障害', furigana: 'ゆうどう', vn: 'Gây nhiễu cảm ứng', en: 'inductive interference', category: 'Điện' },
  
  { id: 'ex266', jp: 'インピーダンス', furigana: '-', vn: 'Trở kháng', en: 'impedance', category: 'Điện' },
  { id: 'ex267', jp: '電力損失', furigana: 'そんしつ', vn: 'Tổn hao điện năng', en: 'power loss', category: 'Điện' },
  { id: 'ex268', jp: '熱損失', furigana: 'ねつ', vn: 'Tổn hao nhiệt', en: 'heat loss', category: 'Điện' },
  
  { id: 'ex269', jp: '自己放電', furigana: 'ほうでん', vn: 'Tự phóng điện (Pin, ắc quy)', en: 'self-discharge', category: 'Điện' },
  { id: 'ex270', jp: '充電', furigana: 'じゅうでん', vn: 'Sạc điện', en: 'charging', category: 'Hành động' },
  { id: 'ex271', jp: '過充電', furigana: 'か', vn: 'Sạc quá mức', en: 'overcharging', category: 'Tình trạng' },
  
  { id: 'ex272', jp: '電池切れ', furigana: '-', vn: 'Hết pin', en: 'dead battery', category: 'Tình trạng' },
  { id: 'ex273', jp: '交換時期', furigana: 'じき', vn: 'Thời điểm thay thế', en: 'replacement time', category: 'Bảo trì' },
  { id: 'ex274', jp: '耐用年数', furigana: 'たいよう', vn: 'Tuổi thọ sử dụng/Năm sử dụng', en: 'service life', category: 'Thông số' },
  
  { id: 'ex275', jp: '初期不良', furigana: 'しょき', vn: 'Lỗi ngay từ đầu/Lỗi xuất xưởng', en: 'initial defect', category: 'Chất lượng' },
  { id: 'ex276', jp: '経年劣化', furigana: 'けいねん', vn: 'Xuống cấp theo thời gian', en: 'aging/deterioration', category: 'Tình trạng' },
  { id: 'ex277', jp: '金属疲労', furigana: 'ひろう', vn: 'Mỏi kim loại', en: 'metal fatigue', category: 'Tình trạng' },
  
  { id: 'ex278', jp: '摩耗', furigana: 'まもう', vn: 'Mài mòn/Hao mòn', en: 'abrasion/wear', category: 'Tình trạng' },
  { id: 'ex279', jp: '偏摩耗', furigana: 'へんまもう', vn: 'Mòn không đều/Mòn lệch', en: 'uneven wear', category: 'Tình trạng' },
  { id: 'ex280', jp: '錆び', furigana: 'さび', vn: 'Gỉ sét', en: 'rust', category: 'Tình trạng' },
  
  { id: 'ex281', jp: '腐食', furigana: 'ふしょく', vn: 'Sự ăn mòn (Hóa học)', en: 'corrosion', category: 'Tình trạng' },
  { id: 'ex282', jp: '電食', furigana: 'でんしょく', vn: 'Ăn mòn điện hóa', en: 'electrolytic corrosion', category: 'Tình trạng' },
  { id: 'ex283', jp: 'ひび割れ', furigana: 'わ', vn: 'Nứt nẻ/Vết nứt', en: 'cracking', category: 'Tình trạng' },
  
  { id: 'ex284', jp: '変形', furigana: 'へんけい', vn: 'Biến dạng', en: 'deformation', category: 'Tình trạng' },
  { id: 'ex285', jp: '歪み', furigana: 'ゆがみ', vn: 'Cong vênh/Méo mó', en: 'warpage/distortion', category: 'Tình trạng' },
  { id: 'ex286', jp: '折れ', furigana: 'おれ', vn: 'Gãy', en: 'broken/snapped', category: 'Tình trạng' },
  
  { id: 'ex287', jp: '外れ', furigana: 'はずれ', vn: 'Sút ra/Rơi ra/Tuột', en: 'disconnected/detached', category: 'Tình trạng' },
  { id: 'ex288', jp: '抜け', furigana: 'ぬけ', vn: 'Tuột ra/Rơi ra', en: 'slipping out', category: 'Tình trạng' },
  { id: 'ex289', jp: '詰まり', furigana: 'つまり', vn: 'Tắc nghẽn/Nghẹt', en: 'clogging', category: 'Tình trạng' },
  
  { id: 'ex290', jp: '目詰まり', furigana: 'めづまり', vn: 'Tắc mắt lưới/Tắc lọc', en: 'filter clogging', category: 'Tình trạng' },
  { id: 'ex291', jp: '固着', furigana: 'こちゃく', vn: 'Dính chặt/Kẹt cứng', en: 'sticking/seizing', category: 'Tình trạng' },
  { id: 'ex292', jp: '焼付き', furigana: 'やきつき', vn: 'Cháy dính (Do nhiệt/ma sát)', en: 'seizure', category: 'Tình trạng' },
  
  { id: 'ex293', jp: '異音', furigana: 'いおん', vn: 'Âm thanh lạ/Tiếng kêu lạ', en: 'abnormal noise', category: 'Tình trạng' },
  { id: 'ex294', jp: '異臭', furigana: 'いしゅう', vn: 'Mùi lạ', en: 'abnormal odor', category: 'Tình trạng' },
  { id: 'ex295', jp: '異常動', furigana: 'いじょう', vn: 'Chuyển động bất thường', en: 'abnormal movement', category: 'Tình trạng' },
  
  { id: 'ex296', jp: 'オーバーラン', furigana: '-', vn: 'Chạy quá giới hạn/Overrun', en: 'overrun', category: 'Tình trạng' },
  { id: 'ex297', jp: '過負荷', furigana: 'かふか', vn: 'Quá tải (Overload)', en: 'overload', category: 'Tình trạng' },
  { id: 'ex298', jp: 'ハンチング', furigana: '-', vn: 'Dao động/Săn (Tín hiệu)', en: 'hunting', category: 'Tình trạng' },
  
  { id: 'ex299', jp: 'オフセット', furigana: '-', vn: 'Độ lệch/Bù đắp (Offset)', en: 'offset', category: 'Kỹ thuật' },
  { id: 'ex300', jp: '初期化', furigana: 'しょきか', vn: 'Khởi tạo/Reset về ban đầu', en: 'initialization', category: 'Hành động' },
  { id: 'ex301', jp: 'データログ', furigana: '-', vn: 'Nhật ký dữ liệu', en: 'data log', category: 'Tài liệu' },
  { id: 'ex302', jp: '遠隔操作', furigana: 'えんかく', vn: 'Điều khiển từ xa', en: 'remote control', category: 'Vận hành' },
  { id: 'ex303', jp: '監視画面', furigana: 'かんし', vn: 'Màn hình giám sát', en: 'monitoring screen', category: 'Vận hành' },
  { id: 'ex304', jp: '異常ログ', furigana: '-', vn: 'Nhật ký lỗi/Lịch sử sự cố', en: 'error log', category: 'Tài liệu' },
  { id: 'ex305', jp: '自己診断', furigana: 'じこしんだん', vn: 'Tự chẩn đoán lỗi', en: 'self-diagnosis', category: 'Vận hành' },
  { id: 'ex306', jp: '通信エラー', furigana: '-', vn: 'Lỗi truyền thông', en: 'communication error', category: 'Tình trạng' },
  { id: 'ex307', jp: 'タイムアウト', furigana: '-', vn: 'Lỗi quá thời gian (Timeout)', en: 'timeout', category: 'Tình trạng' },
  { id: 'ex308', jp: 'バックアップ', furigana: '-', vn: 'Sao lưu dữ liệu', en: 'backup', category: 'Quản lý' },
];

export const PHRASES: PhraseItem[] = [
  // 2.1 Hỏi thông tin ban đầu
  {
    id: 'p1',
    vn: 'Anh/chị có thể cho tôi biết tình trạng thực tế của máy không?',
    jp: '実際の状態を教えていただけますか。',
    en: 'Could you tell me the actual condition of the machine?',
    category: 'Hỏi thông tin'
  },
  {
    id: 'p2',
    vn: 'Máy đã sử dụng bao lâu rồi và còn hoạt động ổn định không?',
    jp: '使用期間と、現在正常に動作しているか教えてください。',
    en: 'How long has it been used, and is it still functioning properly?',
    category: 'Hỏi thông tin'
  },
  {
    id: 'p3',
    vn: 'Anh/chị có biết số giờ hoạt động không?',
    jp: '稼働時間は分かりますか。',
    en: 'Do you know the operating hours?',
    category: 'Hỏi thông tin'
  },
  {
    id: 'p4',
    vn: 'Máy có được bảo trì định kỳ không?',
    jp: '定期的にメンテナンスを行っていましたか。',
    en: 'Was regular maintenance performed?',
    category: 'Hỏi thông tin'
  },

  // 2.2 Kiểm tra lỗi - hỏng
  {
    id: 'p5',
    vn: 'Máy có lỗi nào mà tôi cần lưu ý không?',
    jp: '注意すべき不具合はありますか。',
    en: 'Are there any issues I should be aware of?',
    category: 'Kiểm tra lỗi'
  },
  {
    id: 'p6',
    vn: 'Đây có phải là hàng hiện trạng, không bảo hành đúng không?',
    jp: 'こちらは現状品で、保証なしという認識でよろしいですか。',
    en: 'Just to confirm, this is an as-is item with no warranty, correct?',
    category: 'Kiểm tra lỗi'
  },
  {
    id: 'p7',
    vn: 'Phần này có trầy, có ảnh hưởng gì không?',
    jp: 'この部分に傷がありますが、使用に問題はありませんか。',
    en: 'This part has scratches, does it affect usage?',
    category: 'Kiểm tra lỗi'
  },

  // 2.3 Thương lượng - trả giá
  {
    id: 'p8',
    vn: 'Nếu được, anh/chị có thể giảm nhẹ giúp tôi không?',
    jp: 'もし可能であれば、少しお値引きいただけますか。',
    en: 'If possible, could you offer a small discount?',
    category: 'Thương lượng'
  },
  {
    id: 'p9',
    vn: 'Tôi có thể mua ngay nếu giá là ___ được không?',
    jp: '即決で___円なら購入したいのですが、いかがでしょうか。',
    en: 'I can buy immediately if the price is ___, would that work?',
    category: 'Thương lượng'
  },
  {
    id: 'p10',
    vn: 'Giá thấp nhất anh/chị có thể để lại là bao nhiêu?',
    jp: '最低いくらまで可能でしょうか。',
    en: 'What is the lowest price you can offer?',
    category: 'Thương lượng'
  },
  {
    id: 'p11',
    vn: 'Nếu tôi lấy cả lô, anh/chị có thể giảm bao nhiêu?',
    jp: '全部まとめで買うと、いくら安くなりますか。',
    en: 'If I buy the whole lot, how much can you discount?',
    category: 'Thương lượng'
  },

  // 2.4 Xác nhận giao dịch
  {
    id: 'p12',
    vn: 'Tôi muốn xác nhận lại phương thức giao hàng và thanh toán.',
    jp: '配送方法と支払い方法を確認したいです。',
    en: "I'd like to confirm the delivery and payment method.",
    category: 'Xác nhận'
  },
  {
    id: 'p13',
    vn: 'Tôi sẽ đến xem và kiểm tra máy trước khi quyết định.',
    jp: '購入前に実物を確認したいです。',
    en: "I'd like to inspect the item before making a decision.",
    category: 'Xác nhận'
  },
  // --- NEW PHRASES (100 SAMPLES) ---
  { id: 'p14', vn: 'Máy này có sẵn trong kho không?', jp: 'この商品は在庫がありますか。', en: 'Is this product in stock?', category: 'Hỏi sản phẩm' },
  { id: 'p15', vn: 'Thời gian bảo hành của sản phẩm là bao lâu?', jp: '保証期間はどのくらいですか。', en: 'How long is the warranty period?', category: 'Hỏi sản phẩm' },
  { id: 'p16', vn: 'Sản phẩm này được sản xuất tại đâu?', jp: '原産国はどこですか。', en: 'Where is this product manufactured?', category: 'Hỏi sản phẩm' },
  { id: 'p17', vn: 'Công suất tiêu thụ điện của máy là bao nhiêu?', jp: '消費電力はどのくらいですか。', en: 'What is the power consumption?', category: 'Thông số' },
  { id: 'p18', vn: 'Máy có đi kèm hướng dẫn sử dụng tiếng Việt không?', jp: 'ベトナム語の取扱説明書はありますか。', en: 'Is there a Japanese manual included?', category: 'Hỏi sản phẩm' },
  { id: 'p19', vn: 'Kích thước tổng thể của máy là bao nhiêu?', jp: '外形寸法を教えてください。', en: 'What are the overall dimensions?', category: 'Thông số' },
  { id: 'p20', vn: 'Trọng lượng của máy là bao nhiêu?', jp: '機械の重量はどのくらいですか。', en: 'How much does the machine weigh?', category: 'Thông số' },
  { id: 'p21', vn: 'Máy sử dụng nguồn điện mấy pha?', jp: '電源は何相ですか。', en: 'What is the power phase requirement?', category: 'Thông số' },
  { id: 'p22', vn: 'Tốc độ quay tối đa là bao nhiêu?', jp: '最大回転数はどのくらいですか。', en: 'What is the maximum RPM?', category: 'Thông số' },
  { id: 'p23', vn: 'Sản phẩm này có đáp ứng tiêu chuẩn JIS không?', jp: 'この商品はJIS規格に適合していますか。', en: 'Does this product meet JIS standards?', category: 'Tiêu chuẩn' },
  { id: 'p24', vn: 'Tôi có thể mua linh kiện thay thế ở đâu?', jp: '交換部品はどこで購入できますか。', en: 'Where can I buy replacement parts?', category: 'Hỗ trợ' },
  { id: 'p25', vn: 'Máy có tính năng dừng khẩn cấp không?', jp: '非常停止機能はありますか。', en: 'Does it have an emergency stop function?', category: 'An toàn' },
  { id: 'p26', vn: 'Anh/chị có thể gửi catalogue cho tôi được không?', jp: 'カタログを送っていただけますか。', en: 'Could you send me the catalog?', category: 'Tài liệu' },
  { id: 'p27', vn: 'Màu sắc thực tế của sản phẩm có giống trong ảnh không?', jp: '実際の色は写真と同じですか。', en: 'Is the actual color the same as in the photo?', category: 'Hỏi sản phẩm' },
  { id: 'p28', vn: 'Sản phẩm này có chống nước không?', jp: 'この商品は防水ですか。', en: 'Is this product waterproof?', category: 'Thông số' },
  { id: 'p29', vn: 'Lớp mạ bề mặt là gì?', jp: '表面のメッキは何ですか。', en: 'What is the surface plating?', category: 'Thông số' },
  { id: 'p30', vn: 'Nếu mua số lượng lớn có được giảm giá không?', jp: '大量注文の場合、割引はありますか。', en: 'Is there a discount for bulk orders?', category: 'Thương lượng' },
  { id: 'p31', vn: 'Phí vận chuyển đến TP.HCM là bao nhiêu?', jp: 'ホーチミン市までの送料はいくらですか。', en: 'What is the shipping cost to Ho Chi Minh City?', category: 'Giao hàng' },
  { id: 'p32', vn: 'Giao hàng mất bao lâu?', jp: '納期はどのくらいかかりますか。', en: 'How long does delivery take?', category: 'Giao hàng' },
  { id: 'p33', vn: 'Tôi có thể thanh toán bằng thẻ tín dụng không?', jp: 'クレジットカードでの支払いは可能ですか。', en: 'Can I pay by credit card?', category: 'Thanh toán' },
  { id: 'p34', vn: 'Có thể xuất hóa đơn đỏ (VAT) không?', jp: '領収書（VAT）の発行は可能ですか。', en: 'Can you issue a VAT invoice?', category: 'Thanh toán' },
  { id: 'p35', vn: 'Máy này phù hợp cho vật liệu nào?', jp: 'この機械はどの材料に適していますか。', en: 'What materials is this machine suitable for?', category: 'Hỏi sản phẩm' },
  { id: 'p36', vn: 'Độ chính xác của máy là bao nhiêu?', jp: '機械の精度はどのくらいですか。', en: 'What is the precision of the machine?', category: 'Thông số' },
  { id: 'p37', vn: 'Anh/chị có video vận hành máy không?', jp: '動作動画はありますか。', en: 'Do you have an operation video?', category: 'Tài liệu' },
  { id: 'p38', vn: 'Máy có phát ra tiếng ồn lớn không?', jp: '騒音は大きいですか。', en: 'Is it very noisy?', category: 'Thông số' },
  { id: 'p39', vn: 'Tôi có thể thử máy tại xưởng không?', jp: '工場で試運転できますか。', en: 'Can I test the machine at the factory?', category: 'Kiểm tra' },
  { id: 'p40', vn: 'Giá này đã bao gồm thuế chưa?', jp: 'この価格は税込みですか。', en: 'Does this price include tax?', category: 'Thanh toán' },
  { id: 'p41', vn: 'Có bao nhiêu máy còn lại trong kho?', jp: '在庫はあと何台ありますか。', en: 'How many units are left in stock?', category: 'Hỏi sản phẩm' },
  { id: 'p42', vn: 'Sản phẩm có đạt chứng chỉ ISO không?', jp: 'ISO認証は取得していますか。', en: 'Is it ISO certified?', category: 'Tiêu chuẩn' },
  { id: 'p43', vn: 'Nếu máy hỏng thì sửa chữa như thế nào?', jp: '故障した際の修理はどうすればいいですか。', en: 'How should I handle repairs if it breaks?', category: 'Hỗ trợ' },
  { id: 'p44', vn: 'Phụ kiện kèm theo gồm những gì?', jp: '付属品は何が入っていますか。', en: 'What accessories are included?', category: 'Hỏi sản phẩm' },
  { id: 'p45', vn: 'Máy này là model năm bao nhiêu?', jp: 'これは何年モデルですか。', en: 'What year is this model?', category: 'Hỏi sản phẩm' },
  { id: 'p46', vn: 'Tôi muốn yêu cầu báo giá chính thức.', jp: '正式な見積書をお願いしたいのですが。', en: 'I would like to request an official quotation.', category: 'Thương mại' },
  { id: 'p47', vn: 'Hình thức thanh toán đặt cọc như thế nào?', jp: '手付金の支払い方法はどうなりますか。', en: 'What is the deposit payment method?', category: 'Thanh toán' },
  { id: 'p48', vn: 'Máy có dễ lắp đặt không?', jp: '設置は簡単ですか。', en: 'Is it easy to install?', category: 'Hỏi sản phẩm' },
  { id: 'p49', vn: 'Tôi cần chuẩn bị nguồn điện như thế nào?', jp: 'どのような電源の準備が必要ですか。', en: 'What kind of power supply do I need to prepare?', category: 'Thông số' },
  { id: 'p50', vn: 'Độ bền của linh kiện này là bao lâu?', jp: '部品の寿命はどのくらいですか。', en: 'What is the lifespan of this component?', category: 'Thông số' },
  { id: 'p51', vn: 'Có thể thay đổi kích thước theo yêu cầu không?', jp: 'オーダーメイドでサイズの変更は可能ですか。', en: 'Is it possible to customize the size?', category: 'Hỏi sản phẩm' },
  { id: 'p52', vn: 'Anh/chị có chi nhánh tại Hà Nội không?', jp: 'ハノイに支店はありますか。', en: 'Do you have a branch in Hanoi?', category: 'Hỏi sản phẩm' },
  { id: 'p53', vn: 'Quy trình bảo trì hàng tháng như thế nào?', jp: '月次のメンテナンス手順はどうなっていますか。', en: 'What is the monthly maintenance procedure?', category: 'Hỗ trợ' },
  { id: 'p54', jp: '梱包サイズを教えてください。', vn: 'Cho tôi biết kích thước đóng gói.', en: 'Please tell me the packaging size.', category: 'Logistics' },
  { id: 'p55', jp: '容積重量を計算していただけますか。', vn: 'Anh/chị có thể tính giúp tôi trọng lượng quy đổi không?', en: 'Could you calculate the volumetric weight?', category: 'Logistics' },
  { id: 'p56', jp: '輸出用梱包は対応可能ですか。', vn: 'Bên anh/chị có thể đóng gói hàng xuất khẩu không?', en: 'Can you handle export packaging?', category: 'Logistics' },
  { id: 'p57', jp: '海上便と航空便、どちらが安いですか。', vn: 'Đường biển hay đường hàng không cái nào rẻ hơn?', en: 'Which is cheaper, sea freight or air freight?', category: 'Logistics' },
  { id: 'p58', jp: '通関手続きは代行してもらえますか。', vn: 'Anh/chị có làm đại lý thông quan giúp không?', en: 'Can you handle customs clearance for us?', category: 'Logistics' },
  { id: 'p59', jp: '原産地証明書の発行をお願いします。', vn: 'Vui lòng cấp giấy chứng nhận xuất xứ (C/O).', en: 'Please issue a Certificate of Origin.', category: 'Tài liệu' },
  { id: 'p60', jp: '追跡番号はいつ分かりますか。', vn: 'Khi nào thì có mã số theo dõi (tracking)?', en: 'When will the tracking number be available?', category: 'Logistics' },
  { id: 'p61', jp: '製品の不具合が見つかった場合、返品できますか。', vn: 'Nếu phát hiện lỗi sản phẩm, tôi có thể trả lại không?', en: 'If a defect is found, can I return it?', category: 'Chất lượng' },
  { id: 'p62', jp: '修理の見積もりを出してください。', vn: 'Hãy cho tôi báo giá sửa chữa.', en: 'Please provide a repair estimate.', category: 'Thương mại' },
  { id: 'p63', jp: '代わりの部品はすぐに届きますか。', vn: 'Linh kiện thay thế có thể giao ngay không?', en: 'Can the replacement parts be delivered immediately?', category: 'Giao hàng' },
  { id: 'p64', jp: '現地での設置指導はありますか。', vn: 'Có hướng dẫn lắp đặt tại chỗ không?', en: 'Is there on-site installation guidance?', category: 'Hỗ trợ' },
  { id: 'p65', jp: 'この機種は現在生産されていますか。', vn: 'Model này hiện vẫn đang được sản xuất chứ?', en: 'Is this model currently in production?', category: 'Hỏi sản phẩm' },
  { id: 'p66', jp: '消耗品のリストを送ってください。', vn: 'Hãy gửi danh sách linh kiện tiêu hao cho tôi.', en: 'Please send a list of consumables.', category: 'Tài liệu' },
  { id: 'p67', jp: '予備の部品をセットで購入したいです。', vn: 'Tôi muốn mua kèm theo một bộ linh kiện dự phòng.', en: 'I want to buy a set of spare parts with it.', category: 'Thương mại' },
  { id: 'p68', jp: '支払条件を30日以内に変更できますか。', vn: 'Có thể thay đổi điều khoản thanh toán thành trong vòng 30 ngày không?', en: 'Can we change the payment terms to within 30 days?', category: 'Thanh toán' },
  { id: 'p69', jp: '送金後の確認メールをお願いします。', vn: 'Vui lòng gửi mail xác nhận sau khi nhận được tiền chuyển khoản.', en: 'Please send a confirmation email after the transfer.', category: 'Thanh toán' },
  { id: 'p70', jp: '大量購入の場合、卸値になりますか。', vn: 'Nếu mua số lượng lớn thì có được giá sỉ không?', en: 'Will there be wholesale pricing for bulk purchases?', category: 'Thương lượng' },
  { id: 'p71', jp: 'この商品のサンプルはありますか。', vn: 'Có mẫu thử của sản phẩm này không?', en: 'Is there a sample of this product?', category: 'Hỏi sản phẩm' },
  { id: 'p72', jp: '他社製品との互換性はありますか。', vn: 'Có tính tương thích với sản phẩm của hãng khác không?', en: 'Is it compatible with other companies\' products?', category: 'Thông số' },
  { id: 'p73', jp: '最大許容荷重を超えるとどうなりますか。', vn: 'Nếu vượt quá tải trọng cho phép tối đa thì sẽ thế nào?', en: 'What happens if the maximum allowable load is exceeded?', category: 'An toàn' },
  { id: 'p74', jp: 'メンテナンスの頻度はどのくらいですか。', vn: 'Tần suất bảo trì là bao lâu một lần?', en: 'How often is maintenance required?', category: 'Bảo trì' },
  { id: 'p75', jp: '作業員のトレーニングをお願いしたいです。', vn: 'Tôi muốn yêu cầu đào tạo cho nhân viên thao tác.', en: 'I would like to request training for the operators.', category: 'Hành động' },
  { id: 'p76', jp: '設置場所の床荷重を確認してください。', vn: 'Hãy kiểm tra tải trọng sàn của nơi lắp đặt.', en: 'Please check the floor load at the installation site.', category: 'Hành động' },
  { id: 'p77', jp: '冷却水の供給が必要ですか。', vn: 'Có cần cấp nước làm mát không?', en: 'Is a cooling water supply required?', category: 'Thông số' },
  { id: 'p78', jp: '潤滑油の指定はありますか。', vn: 'Có chỉ định loại dầu bôi trơn nào không?', en: 'Are there any specified lubricants?', category: 'Thông số' },
  { id: 'p79', jp: '防塵対策はされていますか。', vn: 'Có biện pháp chống bụi không?', en: 'Are there any anti-dust measures?', category: 'Thông số' },
  { id: 'p80', jp: '騒音レベルはデシベルでどのくらいですか。', vn: 'Mức độ tiếng ồn tính theo decibel là bao nhiêu?', en: 'What is the noise level in decibels?', category: 'Thông số' },
  { id: 'p81', jp: '振動対策用のベースはありますか。', vn: 'Có đế chống rung không?', en: 'Is there a base for vibration prevention?', category: 'Linh kiện' },
  { id: 'p82', jp: '配線図を先に見せていただけますか。', vn: 'Có thể cho tôi xem sơ đồ đi dây trước được không?', en: 'Could you show me the wiring diagram first?', category: 'Tài liệu' },
  { id: 'p83', jp: 'インバーターのパラメーター設定を教えてください。', vn: 'Hãy chỉ tôi cài đặt tham số của biến tần.', en: 'Please tell me the inverter parameter settings.', category: 'Thông số' },
  { id: 'p84', jp: 'エラーコードE01の意味は何ですか。', vn: 'Mã lỗi E01 có nghĩa là gì?', en: 'What does error code E01 mean?', category: 'Tình trạng' },
  { id: 'p85', jp: '予備のヒューズは何アンペアですか。', vn: 'Cầu trì dự phòng là bao nhiêu Ampe?', en: 'How many amperes is the spare fuse?', category: 'Thông số' },
  { id: 'p86', jp: '制御回路の電圧を教えてください。', vn: 'Cho tôi biết điện áp của mạch điều khiển.', en: 'Please tell me the control circuit voltage.', category: 'Thông số' },
  { id: 'p87', jp: 'バックアップバッテリーの寿命は？', vn: 'Tuổi thọ của pin dự phòng là bao lâu?', en: 'What is the lifespan of the backup battery?', category: 'Thông số' },
  { id: 'p88', jp: '遠隔監視は可能ですか。', vn: 'Có thể giám sát từ xa không?', en: 'Is remote monitoring possible?', category: 'Vận hành' },
  { id: 'p89', jp: '最新のソフトウェア版ですか。', vn: 'Đây có phải là phiên bản phần mềm mới nhất không?', en: 'Is this the latest software version?', category: 'Hỏi sản phẩm' },
  { id: 'p90', jp: 'プログラムの変更は可能ですか。', vn: 'Có thể thay đổi chương trình không?', en: 'Is it possible to change the program?', category: 'Vận hành' },
  { id: 'p91', jp: '社内基準に合格していますか。', vn: 'Có đạt tiêu chuẩn nội bộ của công ty không?', en: 'Does it pass internal standards?', category: 'Chất lượng' },
  { id: 'p92', jp: '第三者機関の検査報告書はありますか。', vn: 'Có báo cáo kiểm tra của cơ quan thứ ba không?', en: 'Is there an inspection report from a third-party agency?', category: 'Tài liệu' },
  { id: 'p93', jp: '材料の証明書（ミルシート）をお願いします。', vn: 'Hãy cung cấp chứng chỉ vật liệu (Mill sheet).', en: 'Please provide the material certificate (Mill sheet).', category: 'Tài liệu' },
  { id: 'p94', jp: '最終的な検査成績書を送ってください。', vn: 'Hãy gửi bảng kết quả kiểm tra cuối cùng cho tôi.', en: 'Please send the final inspection report.', category: 'Tài liệu' },
  { id: 'p95', jp: '不良が発生した場合の連絡先は？', vn: 'Nếu phát sinh lỗi thì liên hệ ở đâu?', en: 'Who should I contact if a defect occurs?', category: 'Hỗ trợ' },
  { id: 'p96', jp: '返品の送料はどちらが負担しますか。', vn: 'Phí vận chuyển hàng trả lại bên nào sẽ chịu?', en: 'Who bears the shipping cost for returns?', category: 'Giao hàng' },
  { id: 'p97', jp: '梱包に「割れ物注意」と表記してください。', vn: 'Vui lòng ghi "Hàng dễ vỡ" lên bao bì.', en: 'Please label the package as "Fragile".', category: 'Logistics' },
  { id: 'p98', jp: '段積みの制限はありますか。', vn: 'Có giới hạn xếp chồng không?', en: 'Are there any stacking limitations?', category: 'Logistics' },
  { id: 'p99', jp: '直射日光を避けて保管してください。', vn: 'Vui lòng bảo quản tránh ánh nắng trực tiếp.', en: 'Please store away from direct sunlight.', category: 'Logistics' },
  { id: 'p100', jp: 'パレットのサイズを確認させてください。', vn: 'Hãy cho tôi xác nhận kích thước pallet.', en: 'Let me confirm the pallet size.', category: 'Logistics' },
  { id: 'p101', jp: 'トラックの積み下ろしは重機が必要ですか。', vn: 'Xếp dỡ lên xe tải có cần máy móc hạng nặng không?', en: 'Is heavy machinery needed for loading/unloading?', category: 'Logistics' },
  { id: 'p102', jp: '見積書の有効期限はいつまでですか。', vn: 'Báo giá có hiệu lực đến khi nào?', en: 'How long is the quotation valid for?', category: 'Thương mại' },
  { id: 'p103', jp: '支払後の請求書の発行をお願いします。', vn: 'Vui lòng xuất hóa đơn sau khi thanh toán.', en: 'Please issue the invoice after payment.', category: 'Thanh toán' },
  { id: 'p104', jp: '代理店契約について相談したいです。', vn: 'Tôi muốn thảo luận về hợp đồng đại lý.', en: 'I would like to discuss a dealership agreement.', category: 'Thương mại' },
  { id: 'p105', jp: 'カタログの内容に誤りはありませんか。', vn: 'Nội dung trong catalogue có sai sót gì không?', en: 'Are there any errors in the catalog content?', category: 'Tài liệu' },
  { id: 'p106', jp: '仕様の変更をお願いできますか。', vn: 'Tôi có thể yêu cầu thay đổi thông số kỹ thuật không?', en: 'Can I request a change in specifications?', category: 'Thương mại' },
  { id: 'p107', jp: '担当者の名刺をいただけますか。', vn: 'Tôi có thể xin danh thiếp của người phụ trách không?', en: 'Could I have the contact person\'s business card?', category: 'Hành động' },
  { id: 'p108', jp: '工場見学の予約をしたいです。', vn: 'Tôi muốn đặt hẹn đi tham quan nhà máy.', en: 'I would like to book a factory tour.', category: 'Hành động' },
  { id: 'p109', jp: '納期が遅れる場合、早めに連絡してください。', vn: 'Nếu trễ hạn giao hàng, vui lòng liên hệ sớm cho tôi.', en: 'If the delivery is delayed, please notify me in advance.', category: 'Giao hàng' },
  { id: 'p110', jp: '製品の安全データシート（SDS）はありますか。', vn: 'Có bản chỉ dẫn an toàn hóa chất (SDS) của sản phẩm không?', en: 'Is there a Safety Data Sheet (SDS) for the product?', category: 'Tài liệu' },
  { id: 'p111', jp: '環境負荷物質の含有調査をお願いします。', vn: 'Hãy điều tra hàm lượng các chất gây hại cho môi trường.', en: 'Please conduct a survey on environmentally hazardous substances.', category: 'Chất lượng' },
  { id: 'p112', jp: 'この機種は省エネ性能が高いですか。', vn: 'Model này có hiệu năng tiết kiệm điện cao không?', en: 'Does this model have high energy-saving performance?', category: 'Thông số' },
  { id: 'p113', jp: 'リサイクル可能な素材を使用していますか。', vn: 'Có sử dụng vật liệu có thể tái chế không?', en: 'Do you use recyclable materials?', category: 'Thông số' },
  { id: 'p114', jp: '電源を切断し、ロックアウト・タグアウトを実施してください。', vn: 'Ngắt nguồn điện và thực hiện quy trình khóa hãm/niêm phong (Lockout/Tagout).', en: 'Cut off power and perform Lockout/Tagout procedures.', category: 'An toàn' },
  { id: 'p115', jp: '油圧系統の残圧を完全に抜いてください。', vn: 'Xả hoàn toàn áp suất dư trong hệ thống thủy lực.', en: 'Completely bleed residual pressure from the hydraulic system.', category: 'Tháo dỡ' },
  { id: 'p116', jp: '冷媒や潤滑油は、環境規則に従って回収してください。', vn: 'Thu hồi môi chất lạnh và dầu bôi trơn theo quy định về môi trường.', en: 'Recover refrigerant and lubricating oil according to environmental regulations.', category: 'Tháo dỡ' },
  { id: 'p117', jp: '再組立てのために、すべての配線にマークを付けてください。', vn: 'Hãy đánh dấu tất cả các dây điện để phục vụ cho việc lắp ráp lại.', en: 'Mark all wiring for reassembly purposes.', category: 'Kỹ thuật' },
  { id: 'p118', jp: '重量物の吊り上げ前に、重心位置を確認してください。', vn: 'Kiểm tra vị trí trọng tâm trước khi nâng vật nặng.', en: 'Check the center of gravity before lifting heavy objects.', category: 'An toàn' },
  { id: 'p119', jp: 'クレーンの定格荷重を超えないように注意してください。', vn: 'Lưu ý không vượt quá tải trọng định mức của cần cẩu.', en: 'Be careful not to exceed the rated load of the crane.', category: 'An toàn' },
  { id: 'p120', jp: '玉掛け作業には、有資格者が立ち会う必要があります。', vn: 'Việc móc cáp (slinging) phải có người có chứng chỉ giám sát.', en: 'A qualified person must oversee the slinging operation.', category: 'An toàn' },
  { id: 'p121', jp: 'ワイヤーロープの損傷やキンクがないか点検してください。', vn: 'Kiểm tra xem dây cáp thép có bị hư hỏng hay bị xoắn gãy hay không.', en: 'Inspect wire ropes for damage or kinks.', category: 'An toàn' },
  { id: 'p122', jp: '吊り荷の下には絶対に入らないでください。', vn: 'Tuyệt đối không đi vào phía dưới vật đang được nâng.', en: 'Never go under a suspended load.', category: 'An toàn' },
  { id: 'p123', jp: 'ボルトを緩める際は、対角線の順序で行ってください。', vn: 'Khi nới lỏng bu lông, hãy thực hiện theo thứ tự đối chéo.', en: 'When loosening bolts, follow a diagonal sequence.', category: 'Kỹ thuật' },
  { id: 'p124', jp: '油漏れを防ぐため、配管の端部をプラグで塞いでください。', vn: 'Bịt đầu ống bằng nút chặn để ngăn rò rỉ dầu.', en: 'Plug the pipe ends to prevent oil leakage.', category: 'Tháo dỡ' },
  { id: 'p125', jp: '精密部品は、防錆紙で包んで保管してください。', vn: 'Bọc các bộ phận chính xác bằng giấy chống gỉ để bảo quản.', en: 'Wrap precision parts in anti-rust paper for storage.', category: 'Kỹ thuật' },
  { id: 'p126', jp: 'アンカーボルトを切断する前に、床の強度を確認してください。', vn: 'Kiểm tra độ bền của sàn trước khi cắt bu lông neo.', en: 'Check floor strength before cutting anchor bolts.', category: 'Tháo dỡ' },
  { id: 'p127', jp: '立ち入り禁止区域をコーンとバーで区画してください。', vn: 'Phân chia khu vực cấm vào bằng cọc tiêu và thanh chắn.', en: 'Delineate the off-limits area with cones and bars.', category: 'An toàn' },
  { id: 'p128', jp: '強風時はクレーン作業を中止してください。', vn: 'Dừng công việc cẩu hàng khi có gió mạnh.', en: 'Stop crane operations during strong winds.', category: 'An toàn' },
  { id: 'p129', jp: 'シャックルのピンが完全に締まっているか確認してください。', vn: 'Kiểm tra xem chốt của mã đăng (shackle) đã được siết chặt hoàn toàn chưa.', en: 'Check if the shackle pin is fully tightened.', category: 'An toàn' },
  { id: 'p130', jp: '地切り時は一度停止し、安定性を確認してください。', vn: 'Khi vật bắt đầu rời khỏi mặt đất, hãy dừng lại một chút để kiểm tra độ ổn định.', en: 'Stop momentarily when the load clears the ground to check stability.', category: 'An toàn' },
  { id: 'p131', jp: '合図者は明確なハンドシグナルを送ってください。', vn: 'Người ra hiệu phải đưa ra các tín hiệu tay rõ ràng.', en: 'The signaler must give clear hand signals.', category: 'An toàn' },
  { id: 'p132', jp: '機械のレベル出しには精密水準器を使用してください。', vn: 'Sử dụng thước thủy (ni-vô) chính xác để căn chỉnh thăng bằng cho máy.', en: 'Use a precision level to level the machinery.', category: 'Kỹ thuật' },
  { id: 'p133', jp: '搬出路の幅と高さを事前に測定してください。', vn: 'Đo trước chiều rộng và chiều cao của lộ trình vận chuyển ra ngoài.', en: 'Measure the width and height of the extraction route in advance.', category: 'Logistics' },
  { id: 'p134', jp: '床面の傾斜や段差に注意して移動させてください。', vn: 'Lưu ý độ dốc và bậc thềm trên mặt sàn khi di chuyển.', en: 'Be careful of floor slopes and steps during movement.', category: 'An toàn' },
  { id: 'p135', jp: '積載前に、車両の最大積載量を確認してください。', vn: 'Kiểm tra tải trọng tối đa của xe trước khi chất hàng.', en: 'Verify the vehicle\'s maximum load capacity before loading.', category: 'Logistics' },
  { id: 'p136', jp: '吊り荷の揺れを抑えるために、介錯ロープを使用してください。', vn: 'Sử dụng dây dẫn hướng (tag line) để hạn chế vật nâng bị đung đưa.', en: 'Use tag lines to control the swing of the suspended load.', category: 'An toàn' },
  { id: 'p137', jp: '高所作業では安全帯を必ず着用してください。', vn: 'Bắt buộc phải đeo dây an toàn khi làm việc trên cao.', en: 'Always wear a safety harness when working at heights.', category: 'An toàn' },
  { id: 'p138', jp: '分解した部品のリストを作成し、欠品を防いでください。', vn: 'Lập danh sách các bộ phận đã tháo rời để tránh thất lạc.', en: 'Create a list of disassembled parts to prevent loss.', category: 'Tháo dỡ' },
  { id: 'p139', jp: 'ベアリング部にゴミが入らないよう、養生してください。', vn: 'Hãy che chắn bảo vệ để bụi bẩn không lọt vào bộ phận vòng bi.', en: 'Protect bearing areas to prevent dust entry.', category: 'Kỹ thuật' },
  { id: 'p140', jp: '重量バランスが悪い場合は、バランスウェイトを使用してください。', vn: 'Nếu trọng tải không cân bằng, hãy sử dụng đối trọng (balance weight).', en: 'Use balance weights if the load is unbalanced.', category: 'An toàn' },
  { id: 'p141', jp: 'アウトリガーは最大まで張り出し、敷板を設置してください。', vn: 'Chân chống cẩu (outrigger) phải được cho ra hết mức và đặt tấm lót chân.', en: 'Extend outriggers fully and use plates/pads.', category: 'An toàn' },
  { id: 'p142', jp: '周囲の設備と接触しないよう、十分な間隔を確保してください。', vn: 'Đảm bảo khoảng cách đủ để không va chạm với các thiết bị xung quanh.', en: 'Ensure sufficient clearance to avoid contact with surrounding equipment.', category: 'An toàn' },
  { id: 'p143', jp: '移設先の電源容量が足りているか確認してください。', vn: 'Kiểm tra xem dung lượng nguồn điện tại vị trí mới có đủ không.', en: 'Confirm if the power capacity at the new location is sufficient.', category: 'Kỹ thuật' },
  { id: 'p144', jp: 'スリングベルトに擦れや切り傷がないか確認してください。', vn: 'Kiểm tra xem dây cẩu vải (sling belt) có bị mòn hay bị cắt không.', en: 'Check lifting slings for abrasions or cuts.', category: 'An toàn' },
  { id: 'p145', jp: '吊りボルトのネジ込みが十分であることを確認してください。', vn: 'Xác nhận bu lông vòng (eye bolt) đã được vặn vào đủ độ sâu.', en: 'Ensure eye bolts are fully threaded and tightened.', category: 'An toàn' },
  { id: 'p146', jp: '作業前に、朝礼で危険予知（KY）活動を行ってください。', vn: 'Trước khi làm việc, hãy thực hiện hoạt động dự báo nguy cơ (KY) tại buổi họp đầu giờ.', en: 'Conduct Kiken Yochi (KY) danger prediction activities before work.', category: 'An toàn' },
  { id: 'p147', jp: '大型機械の移動には、チルローラーが適しています。', vn: 'Con lăn (roller) chuyên dụng rất thích hợp để di chuyển máy móc lớn.', en: 'Machine rollers are suitable for moving large machinery.', category: 'Kỹ thuật' },
  { id: 'p148', jp: '基礎コンクリートの状態を見て、補強が必要か判断してください。', vn: 'Xem tình trạng bê tông nền và phán đoán xem có cần gia cố không.', en: 'Inspect the concrete foundation and determine if reinforcement is needed.', category: 'Kỹ thuật' },
  { id: 'p149', jp: '制御盤内の電子基板は、静電気に注意して扱ってください。', vn: 'Lưu ý khi xử lý bảng mạch điện tử trong tủ điều khiển để tránh tĩnh điện.', en: 'Handle electronics boards in the control panel with static electricity precautions.', category: 'Kỹ thuật' },
  { id: 'p150', jp: '解体作業中は、火気厳禁を徹底してください。', vn: 'Triệt để việc nghiêm cấm lửa trong quá trình tháo dỡ.', en: 'Vigorously enforce "No Open Flames" during dismantling.', category: 'An toàn' },
  { id: 'p151', jp: '廃棄物は、木くず・廃プラ・金属に分別してください。', vn: 'Hãy phân loại rác thải thành vụn gỗ, nhựa thải và kim loại.', en: 'Sort waste into wood, plastic, and metal.', category: 'Tháo dỡ' },
  { id: 'p152', jp: 'クレーンの旋回範囲内に人がいないことを確認してください。', vn: 'Xác nhận không có người trong phạm vi quay của cần cẩu.', en: 'Ensure no one is within the crane\'s swing radius.', category: 'An toàn' },
  { id: 'p153', jp: '移設後の試運転前に、必ず絶縁抵抗を測定してください。', vn: 'Trước khi chạy thử sau di chuyển, nhất định phải đo điện trở cách điện.', en: 'Always measure insulation resistance before trial operation after relocation.', category: 'Kỹ thuật' },
  { id: 'p154', jp: '配管の接続部は、増し締めを忘れないでください。', vn: 'Đừng quên việc siết bổ sung cho các đầu nối ống.', en: 'Don\'t forget to re-tighten pipe connections.', category: 'Kỹ thuật' },
  { id: 'p155', jp: '非常停止ボタンが正常に機能するか、まず確認してください。', vn: 'Đầu tiên, hãy kiểm tra xem nút dừng khẩn cấp có hoạt động bình thường không.', en: 'First, check if the emergency stop buttons function correctly.', category: 'An toàn' },
  { id: 'p156', jp: '床のアンカー穴は、モルタルで埋めて平らにしてください。', vn: 'Hãy lấp các lỗ bu lông neo trên sàn bằng vữa và làm phẳng.', en: 'Fill anchor holes in the floor with mortar and level them.', category: 'Tháo dỡ' },
  { id: 'p157', jp: '荷崩れを防ぐため、ラッシングベルトで固定してください。', vn: 'Cố định bằng dây đai buộc hàng (lashing belt) để ngăn đổ vỡ.', en: 'Secure with lashing belts to prevent load collapse.', category: 'Logistics' },
  { id: 'p158', jp: '作業エリアの照明が十分であることを確認してください。', vn: 'Xác nhận độ sáng tại khu vực làm việc là đầy đủ.', en: 'Confirm that lighting in the work area is sufficient.', category: 'An toàn' },
  { id: 'p159', jp: '重量物の手積み作業は、腰痛予防のため複数人で行ってください。', vn: 'Việc bê vác vật nặng bằng tay nên thực hiện bởi nhiều người để phòng đau lưng.', en: 'Manual handling of heavy objects should be done by multiple people to prevent back pain.', category: 'An toàn' },
  { id: 'p160', jp: '機械の取扱い説明書（マニュアル）を再確認してください。', vn: 'Hãy kiểm tra kỹ lại sách hướng dẫn sử dụng máy.', en: 'Reconfirm the machine\'s instruction manual.', category: 'Kỹ thuật' },
  { id: 'p161', jp: '油圧ホースの劣化やひび割れをチェックしてください。', vn: 'Kiểm tra xem ống thủy lực có bị lão hóa hay nứt vỡ không.', en: 'Check hydraulic hoses for aging and cracks.', category: 'Kỹ thuật' },
  { id: 'p162', jp: 'チェーンブロックのブレーキが効くか、事前にテストしてください。', vn: 'Hãy test trước xem phanh của pa-lăng xích (chain block) còn tác dụng không.', en: 'Test the chain block brake beforehand.', category: 'An toàn' },
  { id: 'p163', jp: '移動用キャスターのロックを確実に行ってください。', vn: 'Hãy khóa chốt các bánh xe di chuyển một cách chắc chắn.', en: 'Ensure the locks on the moving casters are secured.', category: 'An toàn' },
  { id: 'p164', jp: 'ガス溶断を行う場合は、消火器を準備してください。', vn: 'Khi thực hiện cắt bằng khí (hàn cắt), hãy chuẩn bị sẵn bình chữa cháy.', en: 'Prepare fire extinguishers when performing gas cutting.', category: 'An toàn' },
  { id: 'p165', jp: '機械のシリアルナンバーを写真に撮っておいてください。', vn: 'Hãy chụp ảnh lại số seri của máy.', en: 'Please take pictures of the machine\'s serial number.', category: 'Kỹ thuật' },
  { id: 'p166', jp: '塗装剥げを防ぐため、吊り荷に当て物を使用してください。', vn: 'Sử dụng đệm lót cho vật nâng để ngăn bong tróc sơn.', en: 'Use padding on the load to prevent paint peeling.', category: 'Kỹ thuật' },
  { id: 'p167', jp: '電線管の支持金具をすべて取り外してください。', vn: 'Hãy tháo dỡ toàn bộ các giá đỡ ống luồn dây điện.', en: 'Remove all conduit support brackets.', category: 'Tháo dỡ' },
  { id: 'p168', jp: 'ボルトの頭が潰れないよう、適切なサイズの工具を使用してください。', vn: 'Sử dụng dụng cụ đúng kích cỡ để không làm tròn đầu bu lông.', en: 'Use tools of the appropriate size to avoid stripping bolt heads.', category: 'Kỹ thuật' },
  { id: 'p169', jp: '吊り角度は60度以内を目標に設定してください。', vn: 'Mục tiêu thiết lập góc nâng (đỉnh cẩu) là trong khoảng 60 độ.', en: 'Aim to keep the lifting angle within 60 degrees.', category: 'An toàn' },
  { id: 'p170', jp: '地盤の陥没に注意して、クレーンを設置してください。', vn: 'Lưu ý tình trạng sụt lún mặt đất khi lắp đặt cần cẩu.', en: 'Be careful of ground subsidence when setting up the crane.', category: 'An toàn' },
  { id: 'p171', jp: 'ピット周辺での作業は、転落防止策を講じてください。', vn: 'Thực hiện biện pháp phòng chống rơi ngã khi làm việc quanh các hố (pit).', en: 'Implement fall prevention measures when working around pits.', category: 'An toàn' },
  { id: 'p172', jp: '機械内部の残水による凍結やサビに注意してください。', vn: 'Lưu ý tình trạng đóng băng hoặc rỉ sét do nước đọng bên trong máy.', en: 'Watch out for freezing or rust due to residual water inside the machine.', category: 'Kỹ thuật' },
  { id: 'p173', jp: '防塵カバーを掛けて、精密機械を保護してください。', vn: 'Hãy phủ bọc chống bụi để bảo vệ máy móc chính xác.', en: 'Cover precision machinery with dust covers for protection.', category: 'Kỹ thuật' },
  { id: 'p174', jp: '油圧オイルを交換する際は、オイルフィルターも新しくしてください。', vn: 'Khi thay dầu thủy lực, hãy thay mới cả lọc dầu.', en: 'When changing hydraulic oil, also replace the oil filter.', category: 'Kỹ thuật' },
  { id: 'p175', jp: 'クレーンと架空電線の接近に注意してください。', vn: 'Lưu ý khoảng cách tiếp cận giữa cần cẩu và đường dây điện trên cao.', en: 'Be careful of the proximity between the crane and overhead power lines.', category: 'An toàn' },
  { id: 'p176', jp: 'ボルトに潤滑剤を塗ると、取り外しが容易になります。', vn: 'Bôi chất bôi trơn vào bu lông sẽ giúp việc tháo dỡ dễ dàng hơn.', en: 'Applying lubricant to bolts will make removal easier.', category: 'Kỹ thuật' },
  { id: 'p177', jp: '吊り荷が回転しないよう、回転防止のロープを引いてください。', vn: 'Kéo dây chống quay để vật nâng không bị xoay tròn.', en: 'Pull anti-rotation ropes to prevent the load from spinning.', category: 'An toàn' },
  { id: 'p178', jp: '機械が転倒しないよう、確実に固定されていることを再確認してください。', vn: 'Kiểm tra lại một lần nữa xem máy đã được cố định chắc chắn để không bị đổ chưa.', en: 'Reconfirm that the machine is securely fixed to prevent it from tipping over.', category: 'An toàn' },
  { id: 'p179', jp: '分電盤の中のメインブレーカーを切ってください。', vn: 'Hãy ngắt cầu dao tổng bên trong tủ phân phối điện.', en: 'Turn off the main breaker in the distribution panel.', category: 'Tháo dỡ' },
  { id: 'p180', jp: '作業完了後、工具の置き忘れがないか確認してください。', vn: 'Sau khi hoàn thành công việc, hãy kiểm tra xem có bỏ quên dụng cụ không.', en: 'After finishing work, check if any tools have been left behind.', category: 'Kỹ thuật' },
  { id: 'p181', jp: '床の鉄板の継ぎ目に注意してフォークリフトを走らせてください。', vn: 'Lưu ý các mối nối của tấm sắt trên sàn khi chạy xe nâng.', en: 'Be careful of joints in floor iron plates when driving the forklift.', category: 'An toàn' },
  { id: 'p182', jp: '荷台の上で荷を縛る際は、墜落に十分注意してください。', vn: 'Khi buộc hàng trên thùng xe, hãy đặc biệt chú ý tránh bị rơi ngã.', en: 'Be careful of falls when securing loads on the truck bed.', category: 'An toàn' },
  { id: 'p183', jp: '排水口に油が流れ込まないように、ウエスで塞いでください。', vn: 'Dùng giẻ lau bịt lỗ thoát nước để dầu không chảy vào.', en: 'Plug drains with rags to prevent oil from flowing in.', category: 'Tháo dỡ' },
  { id: 'p184', jp: '機械の水平を確認してから、アンカーを打ち込んでください。', vn: 'Xác nhận độ cân bằng của máy rồi mới đóng bu lông neo.', en: 'Level the machine before driving in the anchors.', category: 'Kỹ thuật' },
  { id: 'p185', jp: '作業指揮者の指示に従って、一斉に動かしてください。', vn: 'Hãy di chuyển đồng loạt theo chỉ thị của người chỉ huy công việc.', en: 'Follow the instructions of the work supervisor and move in unison.', category: 'An toàn' },
  { id: 'p186', jp: '精密機械をクレーンで吊る場合は、非常にゆっくり巻いてください。', vn: 'Khi cẩu máy móc chính xác, hãy cuộn cáp lên cực kỳ chậm.', en: 'When lifting precision machinery with a crane, hoist it very slowly.', category: 'An toàn' },
  { id: 'p187', jp: '油圧ショベルを作業員が背後を通る際は、合図してください。', vn: 'Khi nhân viên đi qua phía sau máy xúc thủy lực, hãy đưa ra tín hiệu.', en: 'Signal when personnel pass behind the hydraulic excavator.', category: 'An toàn' },
  { id: 'p188', jp: '玉掛けワイヤーを外す際、跳ね返りに注意してください。', vn: 'Khi tháo dây cáp móc hàng, hãy lưu ý lực bật lại (văng dây).', en: 'Be careful of backlash when removing slinging wires.', category: 'An toàn' },
  { id: 'p189', jp: '配線図と実際の結線が一致しているか確認してください。', vn: 'Kiểm tra xem sơ đồ đấu dây có khớp với thực tế không.', en: 'Verify if the wiring diagram matches the actual connections.', category: 'Kỹ thuật' },
  { id: 'p190', jp: '機械部品のバリで手を切らないよう、防刃手袋を着用してください。', vn: 'Đeo găng tay chống cắt để không bị đứt tay bởi các bavia (gờ nhọn) của bộ phận máy.', en: 'Wear cut-resistant gloves to avoid cutting hands on machine part burrs.', category: 'An toàn' },
  { id: 'p191', jp: '運搬車への積み込みは、後方を優先してバランスを取ってください。', vn: 'Khi chất hàng lên xe vận chuyển, hãy ưu tiên phía sau để lấy cân bằng.', en: 'Prioritize the rear when loading the transport vehicle to maintain balance.', category: 'Logistics' },
  { id: 'p192', jp: '重量物の重心がズレている場合、スリングの長さを調節してください。', vn: 'Nếu trọng tâm vật nặng bị lệch, hãy điều chỉnh độ dài của dây cáp (sling).', en: 'Adjust the sling length if the center of gravity of the heavy object is offset.', category: 'An toàn' },
  { id: 'p193', jp: '油圧ジャッキのストローク限界に注意してください。', vn: 'Lưu ý giới hạn hành trình (stroke) của kích thủy lực.', en: 'Be careful of the hydraulic jack\'s stroke limit.', category: 'Kỹ thuật' },
  { id: 'p194', jp: '廃棄する潤滑油は、専用のドラム缶にまとめてください。', vn: 'Dầu bôi trơn bỏ đi hãy gom lại vào thùng phuy chuyên dụng.', en: 'Collect waste lubricating oil in dedicated drums.', category: 'Tháo dỡ' },
  { id: 'p195', jp: '作業エリアの養生シートは、滑らないようにしっかり固定してください。', vn: 'Tấm bạt che phủ (bảo ôn) khu vực làm việc phải được cố định chắc chắn để không bị trượt.', en: 'Secure work area protection sheets firmly to prevent slipping.', category: 'An toàn' },
  { id: 'p196', jp: '天井クレーンの走行レールに障害物がないことを確認してください。', vn: 'Xác nhận không có vật cản trên đường ray chạy của cẩu trục.', en: 'Ensure there are no obstacles on the overhead crane\'s travel rails.', category: 'An toàn' },
  { id: 'p197', jp: '機械の銘板を確認し、重量を再計算してください。', vn: 'Kiểm tra biển tên (铭牌) của máy và tính toán lại trọng lượng.', en: 'Check the machine\'s nameplate and recalculate the weight.', category: 'Kỹ thuật' },
  { id: 'p198', jp: '移動用台車は、タイヤの空気圧が適正であることを確認してください。', vn: 'Xác nhận áp suất lốp của xe đẩy di chuyển là phù hợp.', en: 'Verify that the moving trolley\'s tire pressure is appropriate.', category: 'Kỹ thuật' },
  { id: 'p199', jp: '高所作業車のバケットから身を乗り出さないでください。', vn: 'Đừng rướn người ra khỏi lồng làm việc của xe nâng người.', en: 'Do not lean out from the high-altitude work vehicle\'s bucket.', category: 'An toàn' },
  { id: 'p200', jp: 'ボルトのねじ山を傷めないよう、最後は手で回して確認してください。', vn: 'Lúc cuối hãy xoay bằng tay để kiểm tra để không làm hỏng ren bu lông.', en: 'Check by manual turning at the end to avoid damaging bolt threads.', category: 'Kỹ thuật' },
  { id: 'p201', jp: '吊り荷を降ろす場所に、枕木を並べてください。', vn: 'Xếp các thanh gỗ kê (枕木) tại nơi hạ vật nâng xuống.', en: 'Place sleepers/dunnage at the site where the load will be lowered.', category: 'An toàn' },
  { id: 'p202', jp: 'スリングのアイ部分がフックのセンターにあるか確認してください。', vn: 'Kiểm tra xem phần khuyên (eye) của dây cáp có nằm giữa móc cẩu không.', en: 'Ensure the sling eye is centered on the hook.', category: 'An toàn' },
  { id: 'p203', jp: '機械の輸送中は、振動センサーを設置して監視してください。', vn: 'Trong quá trình vận chuyển máy, hãy lắp đặt cảm biến rung để giám sát.', en: 'Install vibration sensors to monitor the machine during transport.', category: 'Logistics' },
  { id: 'p204', jp: '作業員のヘルメットのあご紐は、しっかり締めてください。', vn: 'Dây quai mũ bảo hiểm của nhân viên phải được siết chặt.', en: 'Ensure the chin straps of workers\' helmets are securely fastened.', category: 'An toàn' },
  { id: 'p205', jp: '配管のフランジ面を傷つけないように保護してください。', vn: 'Bảo vệ mặt bích (flange) của đường ống để không bị trầy xước.', en: 'Protect pipe flange faces from damage.', category: 'Kỹ thuật' },
  { id: 'p206', jp: 'クレーンのワイヤーの巻きすぎ防止装置が作動するか確認してください。', vn: 'Kiểm tra thiết bị chống cuộn cáp quá mức của cần cẩu có hoạt động không.', en: 'Confirm the crane\'s over-hoist prevention device is working.', category: 'An toàn' },
  { id: 'p207', jp: '精密機械の梱包には、ショックバリアを使用してください。', vn: 'Sử dụng vật liệu chống sốc (shock barrier) khi đóng gói máy móc chính xác.', en: 'Use shock barriers when packaging precision machinery.', category: 'Logistics' },
  { id: 'p208', jp: '床のアンカーを抜いた後のバリを、グラインダーで削ってください。', vn: 'Dùng máy mài để mài phẳng bavia sau khi tháo bu lông neo.', en: 'Grind off the burrs after removing floor anchors.', category: 'Tháo dỡ' },
  { id: 'p209', jp: '作業エリアの周辺に消火器の場所を明示してください。', vn: 'Chỉ rõ vị trí của bình chữa cháy xung quanh khu vực làm việc.', en: 'Clearly mark the locations of fire extinguishers around the work area.', category: 'An toàn' },
  { id: 'p210', jp: '機械の試運転時は、周囲に声を掛けてから始めてください。', vn: 'Khi chạy thử máy, hãy gọi báo cho mọi người xung quanh trước khi bắt đầu.', en: 'Call out to everyone nearby before starting the machine trial run.', category: 'An toàn' },
  { id: 'p211', jp: 'スリングベルトをクレーンのフックに掛ける際は、ねじれに注意してください。', vn: 'Khi móc dây cẩu vải vào móc cẩu, hãy lưu ý đừng để bị xoắn.', en: 'Avoid twisting slinging belts when hanging them on the crane hook.', category: 'An toàn' },
  { id: 'p212', jp: '重量物のバランスを確認するために、数センチだけ吊り上げてください。', vn: 'Hãy nâng lên vài phân để kiểm tra độ cân bằng của vật nặng.', en: 'Lift the load just a few centimeters to verify its balance.', category: 'An toàn' },
  { id: 'p213', jp: '作業終了の合図があるまで、持ち場を離れないでください。', vn: 'Đừng rời khỏi vị trí cho đến khi có tín hiệu kết thúc công việc.', en: 'Do not leave your post until the signal to finish work is given.', category: 'An toàn' },
  { id: 'p214', jp: 'モーターから異音が発生しています。', vn: 'Động cơ đang phát ra tiếng động lạ.', en: 'The motor is making an unusual noise.', category: 'Tình trạng' },
  { id: 'p215', jp: 'コンプレッサーの圧力が上がりません。', vn: 'Áp suất của máy nén khí không tăng lên.', en: 'The compressor pressure is not increasing.', category: 'Tình trạng' },
  { id: 'p216', jp: 'ベルトが摩耗しているので交換が必要です。', vn: 'Dây curoa bị mòn rồi nên cần phải thay thế.', en: 'The belt is worn out and needs replacement.', category: 'Bảo trì' },
  { id: 'p217', jp: 'ベアリングにグリスを注入してください。', vn: 'Hãy bơm mỡ vào vòng bi.', en: 'Please inject grease into the bearing.', category: 'Bảo trì' },
  { id: 'p218', jp: '基板の回路がショートしています。', vn: 'Mạch trên bo mạch bị đoản mạch (chập điện).', en: 'The circuit on the board is shorted.', category: 'Tình trạng' },
  { id: 'p219', jp: 'センサーが汚れで誤作動しています。', vn: 'Cảm biến đang hoạt động sai do bị bẩn.', en: 'The sensor is malfunctioning due to dirt.', category: 'Tình trạng' },
  { id: 'p220', jp: 'インバーターで周波数を調整してください。', vn: 'Hãy điều chỉnh tần số bằng biến tần.', en: 'Please adjust the frequency using the inverter.', category: 'Kỹ thuật' },
  { id: 'p221', jp: 'PLCのプログラムをバックアップしてください。', vn: 'Hãy sao lưu dự phòng chương trình PLC.', en: 'Please backup the PLC program.', category: 'Kỹ thuật' },
  { id: 'p222', jp: '電磁弁が固着して動きません。', vn: 'Van điện từ bị kẹt không hoạt động.', en: 'The solenoid valve is stuck and won\'t move.', category: 'Tình trạng' },
  { id: 'p223', jp: '減速機からオイルが漏れています。', vn: 'Dầu đang bị rò rỉ từ hộp giảm tốc.', en: 'Oil is leaking from the gear reducer.', category: 'Tình trạng' },
  { id: 'p224', jp: 'ノギスで外径を測定してください。', vn: 'Hãy đo đường kính ngoài bằng thước cặp.', en: 'Please measure the outer diameter with a caliper.', category: 'Kỹ thuật' },
  { id: 'p225', jp: 'レンチを使ってボルトを締めてください。', vn: 'Hãy sử dụng cờ lê để siết bu lông.', en: 'Please use a wrench to tighten the bolt.', category: 'Kỹ thuật' },
  { id: 'p226', jp: 'この部品はステンレス（SUS304）製です。', vn: 'Linh kiện này được làm bằng inox (SUS304).', en: 'This part is made of stainless steel (SUS304).', category: 'Vật liệu' },
  { id: 'p227', jp: 'ボルトのねじ山が潰れています。', vn: 'Răng của bu lông bị hỏng (cháy ren) rồi.', en: 'The bolt threads are stripped.', category: 'Tình trạng' },
  { id: 'p228', jp: '絶縁テスターで漏電をチェックしてください。', vn: 'Hãy kiểm tra rò điện bằng đồng hồ đo cách điện.', en: 'Please check for leakage with an insulation tester.', category: 'Kỹ thuật' },
  { id: 'p229', jp: 'リレーの接点が焼損しています。', vn: 'Tiếp điểm của rơ-le bị cháy rồi.', en: 'The relay contacts are burnt.', category: 'Tình trạng' },
  { id: 'p230', jp: 'ブレーカーが落ちた原因を調べてください。', vn: 'Hãy điều tra nguyên nhân tại sao aptomat bị nhảy.', en: 'Please investigate why the circuit breaker tripped.', category: 'Kỹ thuật' },
  { id: 'p231', jp: 'オイルフィルターを新品に交換しました。', vn: 'Tôi đã thay bộ lọc dầu bằng cái mới rồi.', en: 'I have replaced the oil filter with a new one.', category: 'Bảo trì' },
  { id: 'p232', jp: 'プーリーの溝が摩耗しています。', vn: 'Rãnh của puly bị mòn rồi.', en: 'The pulley groove is worn out.', category: 'Tình trạng' },
  { id: 'p233', jp: 'タイミングベルトの張りを調整してください。', vn: 'Hãy điều chỉnh độ căng của dây đai răng.', en: 'Please adjust the tension of the timing belt.', category: 'Bảo trì' },
  { id: 'p234', jp: 'シリンダーのパッキンから空気が漏れています。', vn: 'Khí đang rò rỉ từ gioăng của xi lanh.', en: 'Air is leaking from the cylinder packing.', category: 'Tình trạng' },
  { id: 'p235', jp: '圧力計の針がゼロを指しています。', vn: 'Kim của đồng hồ áp suất đang chỉ số không.', en: 'The pressure gauge needle is pointing at zero.', category: 'Tình trạng' },
  { id: 'p236', jp: '六角レンチでカバーを外してください。', vn: 'Hãy tháo nắp che bằng lục giác.', en: 'Please remove the cover using a hex key.', category: 'Kỹ thuật' },
  { id: 'p237', jp: '油圧ユニットの作動油を補充してください。', vn: 'Hãy bổ sung dầu thủy lực cho bộ nguồn thủy lực.', en: 'Please replenish the hydraulic fluid in the hydraulic unit.', category: 'Bảo trì' },
  { id: 'p238', jp: '主軸の振れをダイヤルゲージで確認してください。', vn: 'Hãy kiểm tra độ đảo của trục chính bằng đồng hồ so.', en: 'Please check the main spindle runout with a dial gauge.', category: 'Kỹ thuật' },
  { id: 'p239', jp: '非常停止ボタンを押すと電源が遮断されます。', vn: 'Khi nhấn nút dừng khẩn cấp thì nguồn điện sẽ bị ngắt.', en: 'Pressing the emergency stop button cuts off the power.', category: 'An toàn' },
  { id: 'p240', jp: '安全靴を履かずに作業しないでください。', vn: 'Đừng làm việc mà không đi giày bảo hộ.', en: 'Do not work without wearing safety shoes.', category: 'An toàn' },
  { id: 'p241', jp: '保護メガネの着用を徹底してください。', vn: 'Hãy triệt để việc đeo kính bảo hộ.', en: 'Strictly enforce the wearing of safety glasses.', category: 'An toàn' },
  { id: 'p242', jp: 'この工作機械は高精度な加工が可能です。', vn: 'Máy công cụ này có thể gia công với độ chính xác cao.', en: 'This machine tool is capable of high-precision machining.', category: 'Thông số' },
  { id: 'p243', jp: '鋳鉄製のベッドは振動吸収性に優れています。', vn: 'Thân máy làm bằng gang có khả năng hấp thụ rung động tuyệt vời.', en: 'The cast iron bed has excellent vibration absorption properties.', category: 'Thông số' },
  { id: 'p244', jp: 'アルミダイカスト製品のバリを取り除いてください。', vn: 'Hãy loại bỏ bavia của sản phẩm nhôm đúc áp lực.', en: 'Please remove burrs from the aluminum die-cast products.', category: 'Kỹ thuật' },
  { id: 'p245', jp: '研磨作業で表面を鏡面仕上げにします。', vn: 'Làm bóng bề mặt bằng công việc mài bóng.', en: 'Finish the surface to a mirror finish through polishing.', category: 'Kỹ thuật' },
  { id: 'p246', jp: '溶接部のクラックを非破壊検査で調べます。', vn: 'Kiểm tra vết nứt ở mối hàn bằng phương pháp kiểm tra không phá hủy.', en: 'Inspect weld cracks using non-destructive testing.', category: 'Kỹ thuật' },
  { id: 'p247', jp: '防錆塗装をしてから出荷してください。', vn: 'Hãy sơn chống rỉ rồi mới giao hàng.', en: 'Please apply anti-rust painting before shipping.', category: 'Logistics' },
  { id: 'p248', jp: 'このボルトはM10の並目ねじです。', vn: 'Bu lông này là ren thường M10.', en: 'This bolt is an M10 coarse thread.', category: 'Thông số' },
  { id: 'p249', jp: 'スプリングの弾性が弱くなっています。', vn: 'Tính đàn hồi của lò xo đang bị yếu đi.', en: 'The spring elasticity is weakening.', category: 'Tình trạng' },
  { id: 'p250', jp: 'Oリングに傷がないか確認してください。', vn: 'Hãy kiểm tra xem vòng chữ O có bị trầy xước không.', en: 'Check if the O-ring has any scratches.', category: 'Bảo trì' },
  { id: 'p251', jp: '配線端子を圧着工具で固定してください。', vn: 'Hãy cố định đầu cốt dây điện bằng kìm bấm cos.', en: 'Please fix the wiring terminals with a crimping tool.', category: 'Kỹ thuật' },
  { id: 'p252', jp: 'HMIにエラーメッセージが表示されました。', vn: 'Thông báo lỗi đã hiển thị trên màn hình HMI.', en: 'An error message appeared on the HMI.', category: 'Tình trạng' },
  { id: 'p253', jp: 'リミットスイッチが反応しません。', vn: 'Công tắc hành trình không phản hồi.', en: 'The limit switch is not responding.', category: 'Tình trạng' },
  { id: 'p254', jp: 'このマシニングセンターのATCは何本ですか。', vn: 'Bộ thay dao tự động (ATC) của trung tâm gia công này có bao nhiêu con (dao)?', en: 'How many tools does the ATC of this machining center have?', category: 'Thông số' },
  { id: 'p255', jp: '切削油の濃度を測定してください。', vn: 'Hãy đo nồng độ của dầu cắt gọt.', en: 'Please measure the concentration of the cutting oil.', category: 'Kỹ thuật' },
  { id: 'p256', jp: 'ドリルが折れないように送り速度を下げてください。', vn: 'Hãy giảm tốc độ tiến dao để mũi khoan không bị gãy.', en: 'Please lower the feed rate to prevent the drill from breaking.', category: 'Kỹ thuật' },
  { id: 'p257', jp: 'タップでめねじを切ってください。', vn: 'Hãy dùng mũi taro để tạo ren trong.', en: 'Please cut internal threads with a tap.', category: 'Kỹ thuật' },
  { id: 'p258', jp: 'チップを表裏ひっくり返して使用できますか。', vn: 'Có thể lật mặt mảnh hợp kim (chip) để sử dụng không?', en: 'Can the insert tip be turned over for use?', category: 'Kỹ thuật' },
  { id: 'p259', jp: 'チャックでワークをしっかり固定してください。', vn: 'Hãy dùng mâm cặp để cố định phôi thật chắc.', en: 'Please secure the workpiece firmly with the chuck.', category: 'Kỹ thuật' },
  { id: 'p260', jp: '刃物台の原点復帰が完了しました。', vn: 'Việc đưa đài gá dao về gốc (Home) đã hoàn thành.', en: 'The tool post home return is complete.', category: 'Kỹ thuật' },
  { id: 'p261', jp: 'このベアリングは防塵シール付きですか。', vn: 'Vòng bi này có kèm theo phớt chống bụi không?', en: 'Does this bearing have dust-proof seals?', category: 'Thông số' },
  { id: 'p262', jp: 'マグネットスイッチがチャタリングを起こしています。', vn: 'Công tắc từ đang bị hiện tượng dội tiếp điểm (chattering).', en: 'The magnetic switch is chattering.', category: 'Tình trạng' },
  { id: 'p263', jp: '絶縁被覆が剥けて銅線が露出しています。', vn: 'Lớp vỏ cách điện bị bong ra làm lộ dây đồng.', en: 'The insulation is peeled off, exposing the copper wire.', category: 'Tình trạng' },
  { id: 'p264', jp: '鉄板の厚みを測定してください。', vn: 'Hãy đo độ dày của tấm sắt.', en: 'Please measure the thickness of the iron plate.', category: 'Kỹ thuật' },
  { id: 'p265', jp: 'アルミニウムは軽量で耐食性に優れています。', vn: 'Nhôm nhẹ và có khả năng chống ăn mòn tuyệt vời.', en: 'Aluminum is lightweight and has excellent corrosion resistance.', category: 'Vật liệu' },
  { id: 'p266', jp: '銅は電気伝導率が非常に高いです。', vn: 'Đồng có độ dẫn điện rất cao.', en: 'Copper has very high electrical conductivity.', category: 'Vật liệu' },
  { id: 'p267', jp: '真鍮製の部品は加工しやすいです。', vn: 'Linh kiện làm bằng đồng thau rất dễ gia công.', en: 'Brass parts are easy to machine.', category: 'Vật liệu' },
  { id: 'p268', jp: 'プラスチック部品の成形不良をチェックしてください。', vn: 'Hãy kiểm tra lỗi đúc của linh kiện nhựa.', en: 'Check for molding defects in plastic parts.', category: 'Chất lượng' },
  { id: 'p269', jp: 'ゴムパッキンが硬化してボロボロになっています。', vn: 'Gioăng cao su bị cứng lại và đang bị mủn ra rồi.', en: 'The rubber packing has hardened and is crumbling.', category: 'Tình trạng' },
  { id: 'p270', jp: '塗装面にムラがないか確認してください。', vn: 'Hãy xác nhận xem bề mặt sơn có bị không đều màu không.', en: 'Check for any unevenness on the painted surface.', category: 'Chất lượng' },
  { id: 'p271', jp: 'メッキが剥がれて錆が出ています。', vn: 'Lớp mạ bị bong ra và rỉ sét đang xuất hiện.', en: 'The plating is peeling off, and rust is appearing.', category: 'Tình trạng' },
  { id: 'p272', jp: '研磨機で表面を滑らかにしてください。', vn: 'Hãy dùng máy mài để làm mịn bề mặt.', en: 'Please smooth the surface with a grinding machine.', category: 'Kỹ thuật' },
  { id: 'p273', jp: '厚い板を曲げるには強力なプレス機が必要です。', vn: 'Để uốn tấm dày thì cần máy dập mạnh mẽ.', en: 'A powerful press machine is needed to bend thick plates.', category: 'Máy móc' },
  { id: 'p274', jp: '薄い材料を溶接すると歪みやすいです。', vn: 'Khi hàn vật liệu mỏng thì rất dễ bị biến dạng.', en: 'Welding thin materials causes them to warp easily.', category: 'Kỹ thuật' },
  { id: 'p275', jp: '通路が狭いので、フォークリフトの運転に注意してください。', vn: 'Lối đi hẹp nên hãy chú ý khi lái xe nâng.', en: 'The aisle is narrow, so be careful when driving the forklift.', category: 'An toàn' },
  { id: 'p276', jp: '軽い荷物でも腰を痛めないよう注意してください。', vn: 'Ngay cả với hành lý nhẹ cũng hãy chú ý để không làm đau lưng.', en: 'Be careful not to hurt your back even with light loads.', category: 'An toàn' },
  { id: 'p277', jp: 'このボルトはしっかり固定されていますか。', vn: 'Bu lông này đã được cố định chắc chắn chưa?', en: 'Is this bolt securely fixed?', category: 'Kỹ thuật' },
  { id: 'p278', jp: '部品の移動は台車を使用してください。', vn: 'Hãy sử dụng xe đẩy để di chuyển linh kiện.', en: 'Please use a dolly for moving parts.', category: 'Logistics' },
  { id: 'p279', jp: '迅速な対応をお願いします。', vn: 'Yêu cầu phản hồi nhanh chóng.', en: 'Please respond promptly.', category: 'Giao tiếp' },
  { id: 'p280', jp: '動作が円滑であることを確認しました。', vn: 'Tôi đã xác nhận rằng hoạt động trơn tru.', en: 'I confirmed that the operation is smooth.', category: 'Kỹ thuật' },
  { id: 'p281', jp: '公差の範囲内に収まっていますか。', vn: 'Có nằm trong phạm vi dung sai không?', en: 'Is it within the tolerance range?', category: 'Chất lượng' },
  { id: 'p282', jp: '表面粗さを測定してください。', vn: 'Hãy đo độ nhám bề mặt.', en: 'Please measure the surface roughness.', category: 'Kỹ thuật' },
  { id: 'p283', jp: 'マイクロメーターを使用して精密に測定します。', vn: 'Sử dụng pan-me để đo chính xác.', en: 'Use a micrometer for precision measurement.', category: 'Kỹ thuật' },
  { id: 'p284', jp: 'この部品の垂直度を確認してください。', vn: 'Hãy kiểm tra độ vuông góc của linh kiện này.', en: 'Please check the perpendicularity of this part.', category: 'Kỹ thuật' },
  { id: 'p285', jp: '真円度が出ていないので調整が必要です。', vn: 'Độ tròn không đạt nên cần phải điều chỉnh.', en: 'The roundness is off, so adjustment is needed.', category: 'Chất lượng' },
  { id: 'p286', jp: '図面と現物を照合してください。', vn: 'Hãy đối chiếu bản vẽ với vật thật.', en: 'Please compare the drawing with the actual part.', category: 'Kỹ thuật' },
  { id: 'p287', jp: '最新の版数の図面を使用していますか。', vn: 'Anh có đang sử dụng bản vẽ mới nhất không?', en: 'Are you using the latest version of the drawing?', category: 'Tài liệu' },
  { id: 'p288', jp: '設計変更通知書（特記仕様）を確認してください。', vn: 'Hãy kiểm tra thông báo thay đổi thiết kế (thông số đặc biệt).', en: 'Please check the engineering change notice.', category: 'Tài liệu' },
  { id: 'p289', jp: 'CADデータで寸法を再確認します。', vn: 'Tôi sẽ kiểm tra lại kích thước trên dữ liệu CAD.', en: 'I will reconfirm the dimensions with the CAD data.', category: 'Kỹ thuật' },
  { id: 'p290', jp: 'この穴のピッチを教えてください。', vn: 'Hãy cho tôi biết khoảng cách giữa các lỗ (pitch).', en: 'Please tell me the pitch of these holes.', category: 'Kỹ thuật' },
  { id: 'p291', jp: 'リーマで穴を仕上げてください。', vn: 'Hãy dùng mũi doa để hoàn thiện lỗ.', en: 'Please finish the hole with a reamer.', category: 'Kỹ thuật' },
  { id: 'p292', jp: '面取り（C面）を忘れないでください。', vn: 'Đừng quên việc vát mép (vát C).', en: 'Don\'t forget the chamfering.', category: 'Kỹ thuật' },
  { id: 'p293', jp: 'バリ取り作業で怪我をしないように注意してください。', vn: 'Lưu ý để không bị thương khi làm việc loại bỏ bavia.', en: 'Be careful not to injure yourself while deburring.', category: 'An toàn' },
  { id: 'p294', jp: 'サンドブラストで表面を処理します。', vn: 'Xử lý bề mặt bằng phun cát.', en: 'Process the surface with sandblasting.', category: 'Kỹ thuật' },
  { id: 'p295', jp: 'アルマイト処理を施してください。', vn: 'Hãy thực hiện xử lý anod hóa nhôm (Alumite).', en: 'Please apply anodizing treatment.', category: 'Kỹ thuật' },
  { id: 'p296', jp: '熱処理（焼入れ）で硬度を高めます。', vn: 'Tăng độ cứng bằng xử lý nhiệt (tôi luyện).', en: 'Increase hardness with heat treatment (hardening).', category: 'Kỹ thuật' },
  { id: 'p297', jp: '焼きなましをして内部応力を除去します。', vn: 'Ủ thép để loại bỏ ứng suất nội bộ.', en: 'Perform annealing to remove internal stress.', category: 'Kỹ thuật' },
  { id: 'p298', jp: '浸炭処理が必要な部品です。', vn: 'Đây là linh kiện cần xử lý thấm carbon.', en: 'This part requires carburizing treatment.', category: 'Kỹ thuật' },
  { id: 'p299', jp: 'ロックウェル硬度計でテストしてください。', vn: 'Hãy test bằng máy đo độ cứng Rockwell.', en: 'Please test with a Rockwell hardness tester.', category: 'Kỹ thuật' },
  { id: 'p300', jp: '引張試験の結果をレポートにまとめてください。', vn: 'Hãy tổng hợp kết quả thử nghiệm kéo vào báo cáo.', en: 'Summarize the tensile test results in a report.', category: 'Chất lượng' },
  { id: 'p301', jp: '材料証明書（ミルシート）を提出してください。', vn: 'Hãy nộp chứng chỉ vật liệu (mill sheet).', en: 'Please submit the material certificate (mill sheet).', category: 'Tài liệu' },
  { id: 'p302', jp: '非破壊検査（磁粉探傷試験）を実施します。', vn: 'Thực hiện kiểm tra không phá hủy (kiểm tra hạt từ).', en: 'Perform non-destructive testing (magnetic particle testing).', category: 'Chất lượng' },
  { id: 'p303', jp: '超音波探傷試験で内部の欠陥を調べます。', vn: 'Kiểm tra khuyết tật bên trong bằng kiểm tra siêu âm.', en: 'Inspect internal defects with ultrasonic testing.', category: 'Chất lượng' },
  { id: 'p304', jp: '放射線透過試験の結果を確認してください。', vn: 'Hãy xác nhận kết quả kiểm tra tia xuyên thấu (tia X).', en: 'Please check the radiographic testing results.', category: 'Chất lượng' },
  { id: 'p305', jp: '圧力容器の耐圧試験を行います。', vn: 'Thực hiện thử nghiệm chịu áp của bình áp lực.', en: 'Perform a pressure resistance test on the pressure vessel.', category: 'Chất lượng' },
  { id: 'p306', jp: '気密テストで漏れがないか確認します。', vn: 'Xác nhận xem có rò rỉ không bằng test độ kín khí.', en: 'Confirm there is no leakage with an airtightness test.', category: 'Chất lượng' },
  { id: 'p307', jp: '水没させて気泡が出るかチェックしてください。', vn: 'Hãy dìm vào nước và check xem có bong bóng nổi lên không.', en: 'Submerge it and check if bubbles appear.', category: 'Chất lượng' },
  { id: 'p308', jp: '恒温槽に入れて環境試験を実施します。', vn: 'Cho vào buồng ổn nhiệt để thực hiện thử nghiệm môi trường.', en: 'Perform environmental tests in a constant temperature chamber.', category: 'Chất lượng' },
  { id: 'p309', jp: '塩水噴霧試験で耐食性を評価します。', vn: 'Đánh giá khả năng chống ăn mòn bằng thử nghiệm phun muối.', en: 'Evaluate corrosion resistance with a salt spray test.', category: 'Chất lượng' },
  { id: 'p310', jp: '振動試験機で耐久性を確認してください。', vn: 'Hãy xác nhận độ bền bằng máy thử rung.', en: 'Please confirm durability with a vibration testing machine.', category: 'Chất lượng' },
  { id: 'p311', jp: '検査成績書を同梱してください。', vn: 'Hãy gửi kèm theo phiếu kết quả kiểm tra.', en: 'Please include the inspection report.', category: 'Tài liệu' },
  { id: 'p312', jp: '梱包明細書（パッキングリスト）を作成します。', vn: 'Tôi sẽ lập danh sách đóng gói (packing list).', en: 'I will create a packing list.', category: 'Logistics' },
  { id: 'p313', jp: 'インボイスの金額を確認してください。', vn: 'Hãy xác nhận số tiền trên hóa đơn (invoice).', en: 'Please check the invoice amount.', category: 'Logistics' },
  { id: 'p314', jp: '輸出許可証を取得する必要があります。', vn: 'Cần phải lấy giấy phép xuất khẩu.', en: 'An export license must be obtained.', category: 'Logistics' },
  { id: 'p315', jp: '原産地証明書の発行を依頼してください。', vn: 'Hãy yêu cầu cấp giấy chứng nhận xuất xứ (C/O).', en: 'Please request the issuance of a certificate of origin.', category: 'Logistics' },
  { id: 'p316', jp: '船荷証券（B/L）を送付しました。', vn: 'Tôi đã gửi vận đơn đường biển (B/L) rồi.', en: 'I have sent the bill of lading (B/L).', category: 'Logistics' },
  { id: 'p317', jp: '海上輸送の保険を掛けてください。', vn: 'Hãy mua bảo hiểm vận chuyển đường biển.', en: 'Please take out marine transport insurance.', category: 'Logistics' },
  { id: 'p318', jp: 'コンテナへのバンニング作業を立ち会います。', vn: 'Tôi sẽ có mặt giám sát việc đóng hàng vào container (vanning).', en: 'I will witness the container vanning operation.', category: 'Logistics' },
  { id: 'p319', jp: 'デバンニング時の荷崩れに注意してください。', vn: 'Lưu ý đổ vỡ hàng khi tháo dỡ container (devanning).', en: 'Be careful of load collapse during devanning.', category: 'An toàn' },
  { id: 'p320', jp: 'フォークリフトの爪をパレットに差し込んでください。', vn: 'Hãy đưa càng xe nâng vào pallet.', en: 'Insert the forklift forks into the pallet.', category: 'Logistics' },
  { id: 'p321', jp: 'ハンドリフトで狭い場所を移動させます。', vn: 'Di chuyển trong chỗ hẹp bằng xe nâng tay.', en: 'Move through narrow spaces using a pallet jack.', category: 'Logistics' },
  { id: 'p322', jp: '台車のタイヤをストッパーで固定してください。', vn: 'Hãy cố định bánh xe đẩy bằng miếng chặn (stopper).', en: 'Fix the trolley wheels with stoppers.', category: 'An toàn' },
  { id: 'p323', jp: '吊り荷をバランス良く維持してください。', vn: 'Hãy duy trì vật nâng ở trạng thái cân bằng tốt.', en: 'Keep the suspended load well-balanced.', category: 'An toàn' },
  { id: 'p324', jp: '高所作業車の資格を持っていますか。', vn: 'Anh có chứng chỉ lái xe nâng người (xe làm việc trên cao) không?', en: 'Do you have a license for high-altitude work vehicles?', category: 'An toàn' },
  { id: 'p325', jp: 'フルハーネス型の安全帯を正しく着用してください。', vn: 'Hãy đeo dây an toàn loại toàn thân đúng cách.', en: 'Wear a full-body harness correctly.', category: 'An toàn' },
  { id: 'p326', jp: 'ヘルメットに凹みや亀裂がないか点検します。', vn: 'Kiểm tra mũ bảo hiểm xem có vết móp hay nứt không.', en: 'Inspect the helmet for dents or cracks.', category: 'An toàn' },
  { id: 'p327', jp: '救急箱の場所を確認しておいてください。', vn: 'Hãy xác nhận lại vị trí của hộp sơ cứu.', en: 'Please confirm the location of the first aid kit.', category: 'An toàn' },
  { id: 'p328', jp: 'AEDの設置場所を周知してください。', vn: 'Hãy phổ biến cho mọi người biết vị trí lắp đặt AED.', en: 'Inform everyone about the AED location.', category: 'An toàn' },
  { id: 'p329', jp: '避難経路を確認し、障害物を置かないでください。', vn: 'Xác nhận lộ trình thoát hiểm và đừng để vật cản ở đó.', en: 'Confirm evacuation routes and do not place obstacles there.', category: 'An toàn' },
  { id: 'p330', jp: '定期的な安全パトロールを実施してください。', vn: 'Hãy thực hiện tuần tra an toàn định kỳ.', en: 'Please conduct regular safety patrols.', category: 'An toàn' },
  { id: 'p331', jp: '見積書の有効期限を教えてください。', vn: 'Hãy cho tôi biết thời hạn hiệu lực của báo giá.', en: 'Please tell me the validity period of the quotation.', category: 'Giao thương' },
  { id: 'p332', jp: '最短のリードタイムはどのくらいですか。', vn: 'Thời gian giao hàng (lead time) ngắn nhất là bao lâu?', en: 'What is the shortest lead time?', category: 'Giao thương' },
  { id: 'p333', jp: '関税の支払いはどちらの負担になりますか。', vn: 'Việc thanh toán thuế quan sẽ do bên nào chịu?', en: 'Who will be responsible for paying customs duties?', category: 'Giao thương' },
  { id: 'p334', jp: '包括的な保守契約の締結を検討しています。', vn: 'Chúng tôi đang cân nhắc việc ký kết hợp đồng bảo trì toàn diện.', en: 'We are considering signing a comprehensive maintenance contract.', category: 'Giao thương' },
  { id: 'p335', jp: '仕様書に基づいて設計を進めてください。', vn: 'Hãy tiến hành thiết kế dựa trên bản đặc tả thông số (spec).', en: 'Please proceed with the design based on the specification sheet.', category: 'Kỹ thuật' },
  { id: 'p336', jp: 'ノイズ対策のためにシールド線を確保してください。', vn: 'Hãy đảm bảo sử dụng dây bọc kim để chống nhiễu.', en: 'Please ensure shielded cables are used for noise countermeasure.', category: 'Kỹ thuật' },
  { id: 'p337', jp: 'アース（接地）が確実にとられているか。', vn: 'Dây tiếp địa (nối đất) đã được đấu chắc chắn chưa?', en: 'Is the earth (ground) connection securely made?', category: 'An toàn' },
  { id: 'p338', jp: '端子台のネジが緩んでいないか増し締めしてください。', vn: 'Hãy siết lại các vít ở cầu đấu (terminal block) xem có bị lỏng không.', en: 'Retighten the screws on the terminal block to ensure they aren\'t loose.', category: 'Bảo trì' },
  { id: 'p339', jp: '制御盤の冷却ファンは回っていますか。', vn: 'Quạt làm mát của tủ điều khiển có đang quay không?', en: 'Is the control panel cooling fan running?', category: 'Bảo trì' },
  { id: 'p340', jp: 'タッチパネルの感度が低下しています。', vn: 'Độ nhạy của màn hình cảm ứng đang bị giảm đi.', en: 'The touch panel sensitivity has decreased.', category: 'Tình trạng' },
  { id: 'p341', jp: 'プログラムのデバッグ作業に時間がかかります。', vn: 'Việc gỡ lỗi (debug) chương trình sẽ mất thời gian.', en: 'Debugging the program will take some time.', category: 'Kỹ thuật' },
  { id: 'p342', jp: '非常用発電機の始動テストを行います。', vn: 'Thực hiện test khởi động máy phát điện dự phòng.', en: 'Perform a start test of the emergency generator.', category: 'Bảo trì' },
  { id: 'p343', jp: '無停電電源装置（UPS）のバッテリーを交換します。', vn: 'Thay pin cho bộ lưu điện (UPS).', en: 'Replace the battery of the Uninterruptible Power Supply (UPS).', category: 'Bảo trì' },
  { id: 'p344', jp: '光ケーブルの芯線が折れないよう注意してください。', vn: 'Lưu ý để không làm gãy lõi sợi cáp quang.', en: 'Be careful not to break the core of the optical cable.', category: 'Kỹ thuật' },
  { id: 'p345', jp: '通信エラーのログを解析してください。', vn: 'Hãy phân tích nhật ký (log) lỗi truyền thông.', en: 'Please analyze the communication error log.', category: 'Kỹ thuật' },
  { id: 'p346', jp: 'リモートメンテナンス機能を有効にします。', vn: 'Kích hoạt chức năng bảo trì từ xa.', en: 'Enable the remote maintenance function.', category: 'Kỹ thuật' },
  { id: 'p347', jp: 'セキュリティソフトを最新版に更新してください。', vn: 'Hãy cập nhật phần mềm bảo mật lên bản mới nhất.', en: 'Please update the security software to the latest version.', category: 'Kỹ thuật' },
  { id: 'p348', jp: 'パスワード管理を徹底してください。', vn: 'Hãy triệt để việc quản lý mật khẩu.', en: 'Ensure strict password management.', category: 'An toàn' },
  { id: 'p349', jp: 'USBメモリの使用は禁止されています。', vn: 'Việc sử dụng thẻ nhớ USB bị cấm.', en: 'The use of USB flash drives is prohibited.', category: 'An toàn' },
  { id: 'p350', jp: '機密情報の漏洩に注意してください。', vn: 'Lưu ý việc rò rỉ thông tin mật.', en: 'Be careful of confidential information leakage.', category: 'An toàn' },
  { id: 'p351', jp: '溶接の裏波が綺麗に出ています。', vn: 'Đường hàn lót (ngấu mặt sau) hiện ra rất đẹp.', en: 'The welding penetration bead is visible and clean.', category: 'Chất lượng' },
  { id: 'p352', jp: '歪み取りのために、バーナーで加熱してください。', vn: 'Hãy dùng mỏ đốt để nung nóng nhằm khử biến dạng.', en: 'Please heat it with a burner to remove distortion.', category: 'Kỹ thuật' },
  { id: 'p353', jp: 'ショットブラストで表面の黒皮を落とします。', vn: 'Loại bỏ lớp oxit đen (vảy thép) bề mặt bằng phun bi.', en: 'Remove the surface mill scale using shot blasting.', category: 'Kỹ thuật' },
  { id: 'p354', jp: 'この部品は鍛造品なので強度が高いです。', vn: 'Linh kiện này là hàng rèn nên độ bền rất cao.', en: 'This part is a forged product, so it has high strength.', category: 'Vật liệu' },
  { id: 'p355', jp: '鋳造時に「す」が入らないよう注意します。', vn: 'Cẩn thận để không bị rỗ khí (bọt khí) khi đúc.', en: 'Be careful to avoid blowholes during casting.', category: 'Kỹ thuật' },
  { id: 'p356', jp: '抜き勾配を図面に反映させてください。', vn: 'Hãy thể hiện độ dốc thoát khuôn vào bản vẽ.', en: 'Please reflect the draft angle in the drawing.', category: 'Kỹ thuật' },
  { id: 'p357', jp: '金型の寿命が来ているので更新が必要です。', vn: 'Khuôn đã hết tuổi thọ nên cần phải làm mới.', en: 'The mold has reached its end of life and needs to be replaced.', category: 'Bảo trì' },
  { id: 'p358', jp: '試作段階（プロトタイプ）で不具合を抽出します。', vn: 'Trích xuất các lỗi ở giai đoạn làm mẫu thử (prototype).', en: 'Extract defects during the prototyping stage.', category: 'Kỹ thuật' },
  { id: 'p359', jp: '量産体制が整いました。', vn: 'Hệ thống sản xuất hàng loạt đã sẵn sàng.', en: 'The mass production system is ready.', category: 'Logistics' },
  { id: 'p360', jp: '歩留まりを改善してコストダウンを図ります。', vn: 'Cải thiện tỷ lệ thành phẩm (yield) để hướng tới giảm giá thành.', en: 'Improve the yield rate to reduce costs.', category: 'Giao thương' },
  { id: 'p361', jp: '不良率が高すぎるので、原因究明してください。', vn: 'Tỷ lệ hàng lỗi quá cao, hãy làm rõ nguyên nhân.', en: 'The defect rate is too high; please investigate the cause.', category: 'Chất lượng' },
  { id: 'p362', jp: 'なぜなぜ分析で再発防止策を立てます。', vn: 'Lập đối sách phòng chống tái diễn bằng phương pháp phân tích "Tại sao - Tại sao" (5 Whys).', en: 'Establish recurrence prevention measures using 5 Whys analysis.', category: 'Chất lượng' },
  { id: 'p363', jp: '5S（整理・整頓・清掃・清潔・しつけ）を徹底します。', vn: 'Triệt để thực hiện 5S (Sàng lọc - Sắp xếp - Sạch sẽ - Săn sóc - Sẵn sàng).', en: 'Thoroughly implement 5S.', category: 'An toàn' },
  { id: 'p364', jp: '見える化ボードを使って進捗を管理します。', vn: 'Quản lý tiến độ bằng bảng "Trực quan hóa" (visualization).', en: 'Manage progress using a visualization board.', category: 'Kỹ thuật' },
  { id: 'p365', jp: 'カイゼン（改善）提案を積極的に出してください。', vn: 'Hãy tích cực đưa ra các đề xuất cải tiến (Kaizen).', en: 'Please proactively submit Kaizen suggestions.', category: 'Kỹ thuật' },
  { id: 'p366', jp: 'ボトルネック工程を特定してください。', vn: 'Hãy xác định công đoạn "nút thắt cổ chai" (bottleneck).', en: 'Please identify the bottleneck process.', category: 'Kỹ thuật' },
  { id: 'p367', jp: 'タクトタイムを5秒短縮するのが目標です。', vn: 'Mục tiêu là rút ngắn thời gian chu kỳ (tact time) xuống 5 giây.', en: 'The goal is to shorten the tact time by 5 seconds.', category: 'Kỹ thuật' },
  { id: 'p368', jp: '在庫回転率を向上させる必要があります。', vn: 'Cần phải nâng cao tỷ lệ quay vòng hàng tồn kho.', en: 'The inventory turnover rate needs to be improved.', category: 'Logistics' },
  { id: 'p369', jp: 'ジャストインタイム（JIT）方式を導入します。', vn: 'Áp dụng phương thức "Vừa đúng lúc" (Just-In-Time).', en: 'Implement the Just-In-Time (JIT) method.', category: 'Logistics' },
  { id: 'p370', jp: '垂直統合型の生産体制を構築します。', vn: 'Xây dựng hệ thống sản xuất tích hợp theo chiều dọc.', en: 'Build a vertically integrated production system.', category: 'Kỹ thuật' },
  { id: 'p371', jp: '潤滑ポンプの圧力が異常に高いです。', vn: 'Áp suất của bơm bôi trơn đang cao bất thường.', en: 'The lubrication pump pressure is abnormally high.', category: 'Tình trạng' },
  { id: 'p372', jp: 'シールの隙間から冷却水が漏れています。', vn: 'Nước làm mát đang rò rỉ từ khe hở của phớt.', en: 'Cooling water is leaking from the seal gap.', category: 'Tình trạng' },
  { id: 'p373', jp: 'このオイルの動粘度を教えてください。', vn: 'Hãy cho tôi biết độ nhớt động học của loại dầu này.', en: 'Please tell me the kinematic viscosity of this oil.', category: 'Thông số' },
  { id: 'p374', jp: '機械が熱を持って、熱変位を起こしています。', vn: 'Máy đang bị nóng và gây ra biến dạng nhiệt.', en: 'The machine is heating up and causing thermal displacement.', category: 'Tình trạng' },
  { id: 'p375', jp: 'レーザー干渉計で精度補正を行ってください。', vn: 'Hãy thực hiện hiệu chỉnh độ chính xác bằng máy đo laser.', en: 'Please perform accuracy compensation using a laser interferometer.', category: 'Kỹ thuật' },
  { id: 'p376', jp: 'スピンドルのベアリング温度を監視します。', vn: 'Giám sát nhiệt độ vòng bi của trục chính.', en: 'Monitor the spindle bearing temperature.', category: 'Bảo trì' },
  { id: 'p377', jp: 'オーバーロードでサーマルリレーが作動しました。', vn: 'Rơ-le nhiệt đã hoạt động do bị quá tải.', en: 'The thermal relay tripped due to overload.', category: 'Tình trạng' },
  { id: 'p378', jp: 'マグネットチャックの吸着力が弱いです。', vn: 'Lực hút của bàn từ đang bị yếu.', en: 'The magnetic chuck\'s suction force is weak.', category: 'Tình trạng' },
  { id: 'p379', jp: 'この工作機械の据付工事をお願いします。', vn: 'Hãy thực hiện công việc lắp đặt cho máy công cụ này.', en: 'Please conduct the installation work for this machine tool.', category: 'Kỹ thuật' },
  { id: 'p380', jp: '引き渡し前の最終確認（検収）に立ち会ってください。', vn: 'Hãy có mặt tại buổi nghiệm thu (kiểm tra cuối cùng) trước khi bàn giao.', en: 'Please attend the final inspection (acceptance) before handover.', category: 'Giao thương' },
  { id: 'p381', jp: '本日の生産目標台数は100台です。', vn: 'Mục tiêu sản lượng hôm nay là 100 máy.', en: 'Today\'s production target is 100 units.', category: 'Sản xuất' },
  { id: 'p382', jp: 'ラインが停止した原因を特定しました。', vn: 'Đã xác định được nguyên nhân khiến dây chuyền bị dừng.', en: 'Identified the cause of the line stoppage.', category: 'Sản xuất' },
  { id: 'p383', jp: '設備の稼働率を向上させる必要があります。', vn: 'Cần phải nâng cao tỷ lệ vận hành của thiết bị.', en: 'Need to improve the equipment operation rate.', category: 'Sản xuất' },
  { id: 'p384', jp: '工程の見直しを行い、効率化を図ります。', vn: 'Xem xét lại công đoạn để hướng tới việc nâng cao hiệu quả.', en: 'Review processes to improve efficiency.', category: 'Sản xuất' },
  { id: 'p385', jp: '段取り替えの時間を短縮してください。', vn: 'Hãy rút ngắn thời gian chuẩn bị thay đổi (chuyển đổi mã hàng).', en: 'Shorten the setup changeover time.', category: 'Sản xuất' },
  { id: 'p386', jp: '仕掛品の在庫が溜まっています。', vn: 'Hàng dở dang (WIP) đang bị tồn đọng lại.', en: 'WIP inventory is accumulating.', category: 'Logistics' },
  { id: 'p387', jp: '完成品の検品を済ませてください。', vn: 'Hãy hoàn tất việc kiểm tra thành phẩm.', en: 'Complete the inspection of finished goods.', category: 'Chất lượng' },
  { id: 'p388', jp: '出荷伝票をシステムに入力します。', vn: 'Tôi sẽ nhập phiếu xuất hàng vào hệ thống.', en: 'I will enter the shipping slip into the system.', category: 'Logistics' },
  { id: 'p389', jp: '配送車両の手配を確認してください。', vn: 'Hãy xác nhận việc sắp xếp xe vận chuyển.', en: 'Confirm the arrangement of delivery vehicles.', category: 'Logistics' },
  { id: 'p390', jp: '荷物の重心がズレているので修正してください。', vn: 'Trọng tâm của hàng đang bị lệch, hãy sửa lại.', en: 'The center of gravity is off; please correct it.', category: 'An toàn' },
  { id: 'p391', jp: 'ラッシングベルトで荷物をしっかり固定します。', vn: 'Cố định hàng thật chắc bằng dây tăng đò (lashing belt).', en: 'Secure the load firmly with lashing belts.', category: 'An toàn' },
  { id: 'p392', jp: '玉掛けの資格証を提示してください。', vn: 'Hãy xuất trình thẻ chứng chỉ móc cáp.', en: 'Please present your slinging qualification certificate.', category: 'An toàn' },
  { id: 'p393', jp: '合図者の指示に従ってクレーンを操作します。', vn: 'Thao tác cần trục theo chỉ thị của người ra hiệu.', en: 'Operate the crane according to the signaler\'s instructions.', category: 'An toàn' },
  { id: 'p394', jp: '旋回範囲内に立ち入らないでください。', vn: 'Đừng đi vào trong phạm vi quay (của máy).', en: 'Do not enter the swing radius.', category: 'An toàn' },
  { id: 'p395', jp: 'ワイヤーロープに断線（キンク）がないか確認。', vn: 'Xác nhận xem cáp thép có bị đứt sợi hay bị xoắn gập không.', en: 'Check for broken strands or kinks in the wire rope.', category: 'An toàn' },
  { id: 'p396', jp: 'シャックルのネジが最後まで締まっていますか。', vn: 'Vít của ma-nhiê (shackle) đã được siết đến cùng chưa?', en: 'Is the shackle screw tightened all the way?', category: 'An toàn' },
  { id: 'p397', jp: '吊り角度が大きすぎると危険です。', vn: 'Góc treo quá lớn sẽ rất nguy hiểm.', en: 'It is dangerous if the lifting angle is too large.', category: 'An toàn' },
  { id: 'p398', jp: '地切りをしてバランスを確認します。', vn: 'Nhấc nhẹ hàng khỏi mặt đất để xác nhận độ cân bằng.', en: 'Lift the load slightly off the ground to check balance.', category: 'An toàn' },
  { id: 'p399', jp: '指差し呼称を徹底しましょう。', vn: 'Hãy triệt để việc vừa chỉ tay vừa hô (shisashi kosho).', en: 'Thoroughly implement pointing and calling.', category: 'An toàn' },
  { id: 'p400', jp: 'ヒヤリハット報告書を提出してください。', vn: 'Hãy nộp báo cáo "Hiyari-hatto" (tình huống suýt xảy ra tai nạn).', en: 'Please submit a near-miss report.', category: 'An toàn' },
  { id: 'p401', jp: '危険予知（KY）活動を実施します。', vn: 'Thực hiện hoạt động dự báo nguy hiểm (KYT).', en: 'Perform Hazard Prediction (KY) activities.', category: 'An toàn' },
  { id: 'p402', jp: 'この見積もりには梱包費も含まれています。', vn: 'Báo giá này đã bao gồm cả phí đóng gói.', en: 'This estimate includes packing costs.', category: 'Giao thương' },
  { id: 'p403', jp: '輸入消費税が別途発生します。', vn: 'Thuế tiêu thụ hàng nhập khẩu sẽ phát sinh riêng.', en: 'Import consumption tax will be incurred separately.', category: 'Logistics' },
  { id: 'p404', jp: '為替変動のリスクを考慮してください。', vn: 'Hãy cân nhắc đến rủi ro biến động tỷ giá.', en: 'Consider the risk of exchange rate fluctuations.', category: 'Giao thương' },
  { id: 'p405', jp: 'L/C（信用状）を開設する予定です。', vn: 'Dự định sẽ mở thư tín dụng (L/C).', en: 'We plan to open a letter of credit (L/C).', category: 'Logistics' },
  { id: 'p406', jp: '決済日は毎月末日締めの翌月末払いです。', vn: 'Ngày quyết toán là chốt cuối mỗi tháng và thanh toán vào cuối tháng sau.', en: 'The payment terms are end of month closing, following month end payment.', category: 'Giao thương' },
  { id: 'p407', jp: '契約書にサインと捺印をお願いします。', vn: 'Yêu cầu ký và đóng dấu vào hợp đồng.', en: 'Please sign and stamp the contract.', category: 'Giao thương' },
  { id: 'p408', jp: '不可抗力による納期遅延は免責となります。', vn: 'Sẽ được miễn trách nhiệm đối với việc chậm tiến độ do bất khả kháng.', en: 'Delivery delays due to force majeure are exempted from liability.', category: 'Giao thương' },
  { id: 'p409', jp: '仲裁地は日本国内と定めます。', vn: 'Nơi trọng tài (giải quyết tranh chấp) được quy định là trong nội địa Nhật Bản.', en: 'The place of arbitration is designated as within Japan.', category: 'Giao thương' },
  { id: 'p410', jp: '秘密保持契約（NDA）を締結しましょう。', vn: 'Hãy ký kết thỏa thuận bảo mật thông tin (NDA).', en: 'Let\'s conclude a non-disclosure agreement (NDA).', category: 'Giao thương' },
  { id: 'p411', jp: '担当者の交代により、引き継ぎを行います。', vn: 'Tiến hành bàn giao do thay đổi người phụ trách.', en: 'Carry out a handover due to a change in personnel.', category: 'Giao tiếp' },
  { id: 'p412', jp: '不明な点があれば、いつでもチャットでご連絡ください。', vn: 'Nếu có điểm nào chưa rõ, hãy liên hệ với tôi qua chat bất cứ lúc nào.', en: 'If anything is unclear, please contact me via chat anytime.', category: 'Giao tiếp' },
  { id: 'p413', jp: 'リモート会議のリンク（URL）を送ります。', vn: 'Tôi sẽ gửi link (URL) cuộc họp từ xa.', en: 'I will send the remote meeting link (URL).', category: 'Giao tiếp' },
  { id: 'p414', jp: '画面共有をして資料を説明します。', vn: 'Tôi sẽ chia sẻ màn hình để giải thích tài liệu.', en: 'I will share my screen to explain the materials.', category: 'Giao tiếp' },
  { id: 'p415', jp: 'マイクとスピーカーのテストをします。', vn: 'Tôi sẽ test mic và loa.', en: 'I will test the microphone and speakers.', category: 'Giao tiếp' },
  { id: 'p416', jp: '背景の音が入るのでミュートにしてください。', vn: 'Có tiếng ồn phía sau nên anh hãy để chế độ im lặng (mute) nhé.', en: 'Please mute yourself as there is background noise.', category: 'Giao tiếp' },
  { id: 'p417', jp: 'このデータは大容量なので、ストレージで共有します。', vn: 'Vì dữ liệu này dung lượng lớn nên tôi sẽ chia sẻ qua bộ nhớ đám mây.', en: 'This data is large, so I will share it via storage.', category: 'Giao tiếp' },
  { id: 'p418', jp: '圧縮ファイル（ZIP）の解凍パスワードです。', vn: 'Đây là mật khẩu giải nén file nén (ZIP).', en: 'This is the decompression password for the ZIP file.', category: 'Giao tiếp' },
  { id: 'p419', jp: '最新版のカタログをダウンロードしてください。', vn: 'Hãy tải xuống catalogue bản mới nhất.', en: 'Please download the latest catalog.', category: 'Giao tiếp' },
  { id: 'p420', jp: 'QRコードをスキャンして詳細を確認してください。', vn: 'Hãy quét mã QR để xác nhận chi tiết.', en: 'Scan the QR code to check the details.', category: 'Giao tiếp' },
  { id: 'p421', jp: 'センサーの感度をボリュームで微調整します。', vn: 'Điều chỉnh chi li độ nhạy của cảm biến bằng núm vặn.', en: 'Fine-tune the sensor sensitivity with the volume knob.', category: 'Kỹ thuật' },
  { id: 'p422', jp: '反射型のセンサーは色が黒いと反応しにくいです。', vn: 'Cảm biến loại phản xạ sẽ khó phản hồi nếu màu đen.', en: 'Reflective sensors are less likely to respond to black colors.', category: 'Kỹ thuật' },
  { id: 'p423', jp: '光電センサーの光軸を合わせてください。', vn: 'Hãy căn chỉnh trục quang (mắt đọc) của cảm biến quang điện.', en: 'Align the optical axis of the photoelectric sensor.', category: 'Kỹ thuật' },
  { id: 'p424', jp: '近接スイッチが金属を検知していません。', vn: 'Công tắc tiệm cận không phát hiện được kim loại.', en: 'The proximity switch is not detecting metal.', category: 'Tình trạng' },
  { id: 'p425', jp: '熱電対の種類（Kタイプ）を確認してください。', vn: 'Hãy xác nhận loại cặp nhiệt điện (Type K).', en: 'Check the type of thermocouple (Type K).', category: 'Thông số' },
  { id: 'p426', jp: 'PID制御のパラメータをオートチューニングします。', vn: 'Thực hiện tự động điều chỉnh (auto tuning) các tham số điều khiển PID.', en: 'Auto-tune the PID control parameters.', category: 'Kỹ thuật' },
  { id: 'p427', jp: 'アナログ出力が4-20mAであることを確認。', vn: 'Xác nhận đầu ra analog là 4-20mA.', en: 'Confirm the analog output is 4-20mA.', category: 'Thông số' },
  { id: 'p428', jp: 'DC24Vの電源が供給されていますか。', vn: 'Nguồn điện DC 24V có đang được cung cấp không?', en: 'Is DC 24V power being supplied?', category: 'Bảo trì' },
  { id: 'p429', jp: 'ノイズフィルターを設置して対策します。', vn: 'Lắp đặt bộ lọc nhiễu để xử lý.', en: 'Install a noise filter as a countermeasure.', category: 'Kỹ thuật' },
  { id: 'p430', jp: 'フェライトコアを配線に取り付けてください。', vn: 'Hãy lắp cục chống nhiễu (ferrite core) vào dây dẫn.', en: 'Attach a ferrite core to the wiring.', category: 'Bảo trì' },
  { id: 'p431', jp: 'このモジュールの点検ランプが点滅しています。', vn: 'Đèn kiểm tra của module này đang nhấp nháy.', en: 'The inspection lamp for this module is flashing.', category: 'Tình trạng' },
  { id: 'p432', jp: 'バッテリーの電圧が低下（アラーム）しています。', vn: 'Điện áp pin đang bị thấp (báo động).', en: 'Battery voltage is low (alarm).', category: 'Tình trạng' },
  { id: 'p433', jp: 'ファンヒーターで制御盤内を温めてください。', vn: 'Hãy dùng quạt sưởi để làm ấm bên trong tủ điều khiển.', en: 'Please warm the inside of the control panel with a fan heater.', category: 'Bảo trì' },
  { id: 'p434', jp: '結露により回路がショートする恐れがあります。', vn: 'Có nguy cơ chập mạch do hiện tượng ngưng tụ sương.', en: 'There is a risk of short circuit due to condensation.', category: 'An toàn' },
  { id: 'p435', jp: '防湿材（シリカゲル）を梱包に入れてください。', vn: 'Hãy cho gói chống ẩm (silica gel) vào thùng đóng gói.', en: 'Please put desiccant (silica gel) in the packaging.', category: 'Logistics' },
  { id: 'p436', jp: '木枠（クレート）梱包で輸出します。', vn: 'Xuất khẩu bằng hình thức đóng thùng gỗ (crate).', en: 'Exporters in wooden crate packaging.', category: 'Logistics' },
  { id: 'p437', jp: '強化ダンボールでの梱包は可能ですか。', vn: 'Có thể đóng gói bằng thùng carton chịu lực không?', en: 'Is packaging in reinforced cardboard possible?', category: 'Logistics' },
  { id: 'p438', jp: 'パレットのサイズは1100×1100です。', vn: 'Kích thước pallet là 1100x1100.', en: 'The pallet size is 1100x1100.', category: 'Thông số' },
  { id: 'p439', jp: '積み上げ制限（スタック制限）を守ってください。', vn: 'Hãy tuân thủ giới hạn chồng tầng (giới hạn stack).', en: 'Please observe stacking limits.', category: 'An toàn' },
  { id: 'p440', jp: '下積厳禁のラベルを貼ってください。', vn: 'Hãy dán nhãn "cấm để đồ vật đè lên".', en: 'Please apply a "do not stack" label.', category: 'Logistics' },
  { id: 'p441', jp: '精密機器につき、衝撃を与えないでください。', vn: 'Vì là thiết bị chính xác nên đừng gây va chạm.', en: 'Do not subject to shock, as it is precision equipment.', category: 'An toàn' },
  { id: 'p442', jp: '横倒し厳禁であることを徹底してください。', vn: 'Hãy triệt để quy định "cấm để nằm ngang".', en: 'Strictly enforce the "do not lay flat" rule.', category: 'Logistics' },
  { id: 'p443', jp: 'ショックセンサーにより衝撃を検知します。', vn: 'Phát hiện va chạm bằng cảm biến sốc.', en: 'Detect shock with a shock sensor.', category: 'Logistics' },
  { id: 'p444', jp: '外装箱にダメージがないかチェックして。', vn: 'Check xem thùng các tông bên ngoài có bị hư hại không.', en: 'Check if the outer box has any damage.', category: 'Logistics' },
  { id: 'p445', jp: 'コンテナのナンバープレートを撮影してください。', vn: 'Hãy chụp ảnh biển số của container.', en: 'Please take a photo of the container number plate.', category: 'Logistics' },
  { id: 'p446', jp: '封印（シール）の番号を控えておいて。', vn: 'Hãy lưu lại số kẹp chì (seal).', en: 'Note the seal number.', category: 'Logistics' },
  { id: 'p447', jp: '通関手続きを代行業者（乙仲）に依頼します。', vn: 'Tôi sẽ nhờ bên đại lý (môi giới hải quan) làm thủ tục thông quan.', en: 'I will request customs clearance through a broker.', category: 'Logistics' },
  { id: 'p448', jp: '原産地が日本であることを証明します。', vn: 'Chứng minh rằng xuất xứ là tại Nhật Bản.', en: 'Certify that the place of origin is Japan.', category: 'Logistics' },
  { id: 'p449', jp: 'HSコード（分類番号）を特定してください。', vn: 'Hãy xác định mã số HS (mã phân loại hàng hóa).', en: 'Please identify the HS code.', category: 'Logistics' },
  { id: 'p450', jp: 'EPA（経済連携協定）の適用で関税が減免。', vn: 'Miễn giảm thuế quan bằng việc áp dụng EPA.', en: 'Duty relief through the application of EPA.', category: 'Giao thương' },
  { id: 'p451', jp: '治具の設計図を確認させてください。', vn: 'Hãy cho tôi xác nhận bản vẽ thiết kế đồ gá.', en: 'Please let me check the jig design drawings.', category: 'Kỹ thuật' },
  { id: 'p452', jp: '位置決めピンを穴に差し込みます。', vn: 'Cắm chốt định vị vào lỗ.', en: 'Insert the positioning pin into the hole.', category: 'Kỹ thuật' },
  { id: 'p453', jp: 'クランプでワークを押し付けて固定。', vn: 'Ấn và cố định phôi bằng kẹp (clamp).', en: 'Push and fix the workpiece with a clamp.', category: 'Kỹ thuật' },
  { id: 'p454', jp: 'トグルクランプのレバーを倒してください。', vn: 'Hãy gạt tay cầm của kẹp xiết (toggle clamp).', en: 'Flip the lever of the toggle clamp.', category: 'Kỹ thuật' },
  { id: 'p455', jp: '油圧クランプの圧力を設定値に調整。', vn: 'Điều chỉnh áp suất của kẹp thủy lực về giá trị cài đặt.', en: 'Adjust the hydraulic clamp pressure to the set value.', category: 'Kỹ thuật' },
  { id: 'p456', jp: 'センサーでワークの着座を確認します。', vn: 'Xác nhận phôi đã đặt đúng vị trí bằng cảm biến.', en: 'Confirm the workpiece is seated correctly with a sensor.', category: 'Kỹ thuật' },
  { id: 'p457', jp: 'エアブロウで切粉（チップ）を飛ばしてください。', vn: 'Hãy thổi bay phoi (chip) bằng khí nén.', en: 'Blow away chips with an air blow.', category: 'Kỹ thuật' },
  { id: 'p458', jp: '集塵機の吸引力が落ちていませんか。', vn: 'Lực hút của máy hút bụi có bị giảm không?', en: 'Has the suction power of the dust collector decreased?', category: 'Bảo trì' },
  { id: 'p459', jp: 'フィルターの目詰まりを解消するために清掃。', vn: 'Vệ sinh để giải quyết vấn đề nghẹt bộ lọc.', en: 'Clean to clear filter clogging.', category: 'Bảo trì' },
  { id: 'p460', jp: 'スクラップボックスがいっぱいになったら空に。', vn: 'Khi thùng phế liệu đầy thì hãy đi đổ.', en: 'Empty the scrap box when it gets full.', category: 'Bảo trì' },
  { id: 'p461', jp: '床に油が溢れているので、ウエスで拭いて。', vn: 'Dầu đang bị tràn ra sàn nên hãy dùng giẻ lau đi.', en: 'Oil is spilling on the floor, so wipe it with a rag.', category: 'An toàn' },
  { id: 'p462', jp: '廃油の処理は指定の業者に依頼してください。', vn: 'Việc xử lý dầu thải hãy nhờ đơn vị chỉ định.', en: 'Request waste oil disposal from the designated contractor.', category: 'An toàn' },
  { id: 'p463', jp: 'MSDS（製品安全データシート）を確認して。', vn: 'Hãy xác nhận phiếu an toàn hóa chất (MSDS).', en: 'Check the Material Safety Data Sheet (MSDS).', category: 'An toàn' },
  { id: 'p464', jp: '有機溶剤の使用時は換気を徹底してください。', vn: 'Hãy triệt để thông gió khi sử dụng dung môi hữu cơ.', en: 'Ensure thorough ventilation when using organic solvents.', category: 'An toàn' },
  { id: 'p465', jp: '防毒マスクのフィルターを交換しました。', vn: 'Tôi đã thay bộ lọc của mặt nạ phòng độc.', en: 'I have replaced the gas mask filter.', category: 'An toàn' },
  { id: 'p466', jp: '消火器の有効期限を点検してください。', vn: 'Hãy kiểm tra thời hạn sử dụng của bình chữa cháy.', en: 'Check the expiration date of the fire extinguisher.', category: 'An toàn' },
  { id: 'p467', jp: '火気厳禁のエリアではタバコを吸わない。', vn: 'Không hút thuốc ở khu vực nghiêm cấm lửa.', en: 'Do not smoke in areas where open flames are prohibited.', category: 'An toàn' },
  { id: 'p468', jp: '火花の飛散を防ぐために遮光カーテンを使用。', vn: 'Sử dụng rèm chắn sáng để ngăn chặn tia lửa bay tán loạn.', en: 'Use a blackout curtain to prevent sparks from scattering.', category: 'An toàn' },
  { id: 'p469', jp: '溶接中の光を直接見ないでください。', vn: 'Đừng nhìn trực tiếp vào ánh sáng trong khi đang hàn.', en: 'Do not look directly at the light during welding.', category: 'An toàn' },
  { id: 'p470', jp: '溶接機のアースクリップを確実に接続して。', vn: 'Kết nối đầu kẹp tiếp địa của máy hàn thật chắc chắn.', en: 'Connect the welding machine earth clip securely.', category: 'An toàn' },
  { id: 'p471', jp: '溶接棒を乾燥炉に入れて湿気を取り除きます。', vn: 'Cho que hàn vào lò sấy để loại bỏ độ ẩm.', en: 'Put the welding rods in a drying oven to remove moisture.', category: 'Kỹ thuật' },
  { id: 'p472', jp: 'アルゴンガスの残量をメーターで確認して。', vn: 'Kiểm tra lượng khí Argon còn lại bằng đồng hồ.', en: 'Check the remaining argon gas level with a meter.', category: 'Bảo trì' },
  { id: 'p473', jp: 'ガス漏れ検知液を継ぎ手に塗布します。', vn: 'Bôi dung dịch phát hiện rò rỉ khí vào các mối nối.', en: 'Apply gas leak detection liquid to the joints.', category: 'Bảo trì' },
  { id: 'p474', jp: '配管のネジ部にシールテープを巻いて。', vn: 'Cuốn băng tan (băng keo non) vào phần ren của đường ống.', en: 'Wrap seal tape around the pipe threads.', category: 'Kỹ thuật' },
  { id: 'p475', jp: 'プライヤーでナットを仮止めしてください。', vn: 'Hãy gá tạm đai ốc bằng kìm.', en: 'Please temporarily fix the nut with pliers.', category: 'Kỹ thuật' },
  { id: 'p476', jp: 'このスパナはサイズが合いません。', vn: 'Chiếc cờ lê này không vừa kích cỡ.', en: 'This wrench does not fit the size.', category: 'Tình trạng' },
  { id: 'p477', jp: 'モンキーレンチを使用して緩めます。', vn: 'Sử dụng mỏ lết để nới lỏng.', en: 'Loosen using an adjustable wrench.', category: 'Kỹ thuật' },
  { id: 'p478', jp: 'ラチェットハンドルで素早く締め付け可能。', vn: 'Có thể siết nhanh bằng tay vặn cóc (rachet).', en: 'Can be tightened quickly with a ratchet handle.', category: 'Kỹ thuật' },
  { id: 'p479', jp: 'トルクレンチで規定のトルクに管理してください。', vn: 'Hãy quản lý lực siết đúng quy định bằng cờ lê lực.', en: 'Manage to the specified torque using a torque wrench.', category: 'Kỹ thuật' },
  { id: 'p480', jp: '電動ドライバーのビットを交換します。', vn: 'Thay đầu mũi của tua vít điện.', en: 'Replace the electric screwdriver bit.', category: 'Bảo trì' },
  { id: 'p481', jp: 'インパクトレンチで強力に締め付けます。', vn: 'Siết mạnh bằng máy siết bu lông (impact wrench).', en: 'Tighten powerfully with an impact wrench.', category: 'Kỹ thuật' },
  { id: 'p482', jp: 'ドリルチャックを専用のキーで締めて。', vn: 'Siết mâm cặp mũi khoan (đầu măng ranh) bằng khóa chuyên dụng.', en: 'Tighten the drill chuck with the dedicated key.', category: 'Kỹ thuật' },
  { id: 'p483', jp: '穴あけ時に切削液（タッピングペースト）を使用。', vn: 'Sử dụng nước làm mát (mỡ taro) khi khoan lỗ.', en: 'Use cutting fluid (tapping paste) when drilling.', category: 'Kỹ thuật' },
  { id: 'p484', jp: 'ポンチで中心に印を付けてから加工開始。', vn: 'Đánh dấu vào tâm bằng đục lấy dấu (punch) rồi mới bắt đầu gia công.', en: 'Mark the center with a punch before starting processing.', category: 'Kỹ thuật' },
  { id: 'p485', jp: 'やすり（ヤスリ）で角の鋭利な部分を落とす。', vn: 'Dùng dũa để mài mòn những phần sắc nhọn ở góc.', en: 'File down the sharp edges with a file.', category: 'Kỹ thuật' },
  { id: 'p486', jp: 'ワイヤーブラシで錆や汚れを落として。', vn: 'Dùng bàn chải sắt để đánh rỉ và vết bẩn.', en: 'Remove rust and dirt with a wire brush.', category: 'Bảo trì' },
  { id: 'p487', jp: 'スクレーパーで古いガスケットを剥がします。', vn: 'Dùng dao cạo (scraper) để bóc gioăng cũ.', en: 'Peel off old gaskets with a scraper.', category: 'Bảo trì' },
  { id: 'p488', jp: '接着剤の硬化時間（オープンタイム）を待つ。', vn: 'Chờ thời gian khô của keo dán.', en: 'Wait for the glue hardening time.', category: 'Kỹ thuật' },
  { id: 'p489', jp: 'シリコンシーラントで隙間を埋めて。', vn: 'Lấp đầy kẽ hở bằng keo silicon.', en: 'Fill the gaps with silicone sealant.', category: 'Kỹ thuật' },
  { id: 'p490', jp: 'この塗料は揮発性が高いので注意してください。', vn: 'Sơn này tính bay hơi cao nên hãy lưu ý.', en: 'Be careful as this paint is highly volatile.', category: 'An toàn' },
  { id: 'p491', jp: '筆でタッチアップ補修を行ってください。', vn: 'Hãy dùng cọ để thực hiện tu sửa (touch-up).', en: 'Please perform touch-up repairs with a brush.', category: 'Bảo trì' },
  { id: 'p492', jp: 'コンテナ内での荷崩れ防止のためにショアリング。', vn: 'Làm khung chặn (shoring) để ngăn hàng đổ vỡ trong container.', en: 'Shoring to prevent load shifting inside the container.', category: 'Logistics' },
  { id: 'p493', jp: '通船の手配が必要な場合があります。', vn: 'Cũng có trường hợp cần sắp xếp sà lan (feeder ship).', en: 'Feeder ship arrangements may be necessary.', category: 'Logistics' },
  { id: 'p494', jp: 'ターミナルでの混雑状況を報告して。', vn: 'Báo cáo tình trạng ùn tắc tại bến bãi (terminal).', en: 'Report the congestion situation at the terminal.', category: 'Logistics' },
  { id: 'p495', jp: 'フリータイム（無料保管期間）を確認して。', vn: 'Hãy xác nhận thời gian lưu kho miễn phí (free time).', en: 'Check the free time (free storage period).', category: 'Logistics' },
  { id: 'p496', jp: 'デマレッジ（超過料金）が発生する恐れがあります。', vn: 'Có nguy cơ phát sinh phí lưu bãi quá hạn (demurrage).', en: 'There is a risk of demurrage fees.', category: 'Logistics' },
  { id: 'p497', jp: 'ディテンション（返却遅延料）を避けるために返却。', vn: 'Trả hàng để tránh phí lưu vỏ container quá hạn (detention).', en: 'Return the container to avoid detention fees.', category: 'Logistics' },
  { id: 'p498', jp: '船舶が遅延（ディレイ）しています。', vn: 'Tàu đang bị chậm (delay).', en: 'The vessel is delayed.', category: 'Logistics' },
  { id: 'p499', jp: '抜港（スキップ）が発生しました。', vn: 'Đã phát sinh việc tàu bỏ qua cảng (ship skipping).', en: 'A port skip occurred.', category: 'Logistics' },
  { id: 'p500', jp: '目標達成おめでとうございます！使いこなしましょう。', vn: 'Chúc mừng anh đã đạt mục tiêu! Hãy sử dụng thành thạo nhé.', en: 'Congratulations on reaching the goal! Let\'s master using these.', category: 'Giao tiếp' },
  { id: 'p501', jp: 'このベアリングの型番を教えてください。', vn: 'Hãy cho tôi biết mã số (model) của vòng bi này.', en: 'Please tell me the model number of this bearing.', category: 'Linh kiện' },
  { id: 'p502', jp: '深溝玉軸受（ボールベアリング）を交換します。', vn: 'Thay thế vòng bi rãnh sâu (ball bearing).', en: 'Replace the deep groove ball bearing.', category: 'Bảo trì' },
  { id: 'p503', jp: '円錐ころ軸受の予圧を調整してください。', vn: 'Hãy điều chỉnh lực ép (preload) của vòng bi đũa côn.', en: 'Please adjust the preload of the tapered roller bearing.', category: 'Kỹ thuật' },
  { id: 'p504', jp: 'スラストベアリングのガタつきを確認。', vn: 'Kiểm tra độ rơ của vòng bi chặn (thrust bearing).', en: 'Check for play in the thrust bearing.', category: 'Bảo trì' },
  { id: 'p505', jp: '平歯車のバックラッシを測定してください。', vn: 'Hãy đo độ rơ (backlash) của bánh răng trụ thẳng.', en: 'Please measure the backlash of the spur gear.', category: 'Kỹ thuật' },
  { id: 'p506', jp: '傘歯車（ベベルギヤ）のかみ合わせを調整。', vn: 'Điều chỉnh sự ăn khớp của bánh răng côn.', en: 'Adjust the engagement of the bevel gears.', category: 'Kỹ thuật' },
  { id: 'p507', jp: 'ウォームギヤに摩耗が見られます。', vn: 'Thấy có sự mài mòn ở bánh vít.', en: 'Wear is visible on the worm gear.', category: 'Tình trạng' },
  { id: 'p508', jp: 'ラックアンドピニオンの清掃を行ってください。', vn: 'Hãy thực hiện vệ sinh thanh răng và bánh răng.', en: 'Please clean the rack and pinion.', category: 'Bảo trì' },
  { id: 'p509', jp: 'このリニアガイドのレールは錆びていませんか。', vn: 'Ray của thanh dẫn hướng tuyến tính (linear guide) này không bị rỉ chứ?', en: 'Is the rail of this linear guide rusted?', category: 'Tình trạng' },
  { id: 'p510', jp: 'ボールねじの精度をレーザーで測定。', vn: 'Đo độ chính xác của trục vít me bi bằng laser.', en: 'Measure the accuracy of the ball screw with a laser.', category: 'Kỹ thuật' },
  { id: 'p511', jp: 'カップリングの芯出し（アライメント）が重要。', vn: 'Việc căn tâm (alignment) của khớp nối là rất quan trọng.', en: 'Alignment of the coupling is important.', category: 'Kỹ thuật' },
  { id: 'p512', jp: 'ユニバーサルジョイントにグリスを注油して。', vn: 'Hãy tra mỡ vào khớp nối vạn năng (khớp các đăng).', en: 'Apply grease to the universal joint.', category: 'Bảo trì' },
  { id: 'p513', jp: '油圧ポンプのシールから漏れがあります。', vn: 'Có rò rỉ từ phớt của bơm thủy lực.', en: 'There is a leak from the hydraulic pump seal.', category: 'Tình trạng' },
  { id: 'p514', jp: 'メカニカルシールの摺動面を確認してください。', vn: 'Hãy kiểm tra bề mặt trượt của phớt cơ năng.', en: 'Please check the sliding surface of the mechanical seal.', category: 'Bảo trì' },
  { id: 'p515', jp: 'Oリングのサイズをノギスで測ります。', vn: 'Đo kích thước vòng chữ O bằng thước cặp.', en: 'Measure the O-ring size with a caliper.', category: 'Kỹ thuật' },
  { id: 'p516', jp: 'オイルシールの向きを間違えないように。', vn: 'Đừng để sai hướng của phớt chặn dầu.', en: 'Do not mistake the direction of the oil seal.', category: 'Kỹ thuật' },
  { id: 'p517', jp: '電磁クラッチの吸着板を清掃して。', vn: 'Hãy vệ sinh tấm hút của ly hợp điện từ.', en: 'Clean the electromagnetic clutch suction plate.', category: 'Bảo trì' },
  { id: 'p518', jp: 'ディスクブレーキのパッドを交換します。', vn: 'Thay má phanh của phanh đĩa.', en: 'Replace the disc brake pads.', category: 'Bảo trì' },
  { id: 'p519', jp: 'ソレノイドバルブのコイルが断線しています。', vn: 'Cuộn dây của van điện từ bị đứt rồi.', en: 'The solenoid valve coil is broken.', category: 'Tình trạng' },
  { id: 'p520', jp: '近接センサーの感応距離を確認してください。', vn: 'Hãy xác nhận khoảng cách cảm ứng của cảm biến tiệm cận.', en: 'Please check the sensing distance of the proximity sensor.', category: 'Kỹ thuật' },
  { id: 'p521', jp: 'ロータリーエンコーダのパルス数が合いません。', vn: 'Số xung của bộ mã hóa vòng quay không khớp.', en: 'The pulse count of the rotary encoder does not match.', category: 'Tình trạng' },
  { id: 'p522', jp: 'リミットスイッチのドッグを調整。', vn: 'Điều chỉnh vấu cam (dog) của công tắc hành trình.', en: 'Adjust the limit switch dog.', category: 'Kỹ thuật' },
  { id: 'p523', jp: 'PLCの入力ユニットに信号が入っていません。', vn: 'Không có tín hiệu vào bộ đầu vào của PLC.', en: 'No signal is entering the PLC input unit.', category: 'Tình trạng' },
  { id: 'p524', jp: 'サーボアンプにエラーコードが表示。', vn: 'Mã lỗi hiển thị trên bộ khuếch đại servo (servo amp).', en: 'An error code is displayed on the servo amplifier.', category: 'Tình trạng' },
  { id: 'p525', jp: 'インバーターのパラメータを初期化して。', vn: 'Hãy khởi tạo lại (reset) các tham số của biến tần.', en: 'Please initialize the inverter parameters.', category: 'Kỹ thuật' },
  { id: 'p526', jp: '端子台のマークチューブが外れています。', vn: 'Ống lồng đầu cốt (mark tube) ở cầu đấu bị tuột rồi.', en: 'The mark tube on the terminal block has come off.', category: 'Tình trạng' },
  { id: 'p527', jp: '配線ダクトの中にケーブルを収めてください。', vn: 'Hãy thu gọn dây cáp vào trong máng dây.', en: 'Please put the cables inside the wiring duct.', category: 'Kỹ thuật' },
  { id: 'p528', jp: 'ノイズ対策にフェライトコアを追加。', vn: 'Thêm cục chống nhiễu (ferrite core) để xử lý nhiễu.', en: 'Add a ferrite core as a noise countermeasure.', category: 'Kỹ thuật' },
  { id: 'p529', jp: 'ヒューズが飛んだ原因を調べてください。', vn: 'Hãy điều tra nguyên nhân cầu chì bị cháy.', en: 'Please investigate why the fuse blew.', category: 'Bảo trì' },
  { id: 'p530', jp: 'ブレーカーのレバーを「入」にしてください。', vn: 'Hãy gạt cần của aptomat sang chế độ "Bật" (On).', en: 'Please set the circuit breaker lever to "On".', category: 'Kỹ thuật' },
  { id: 'p531', jp: 'トランス（変圧器）から唸り音がします。', vn: 'Máy biến áp đang phát ra tiếng kêu ù ù.', en: 'The transformer is making a humming sound.', category: 'Tình trạng' },
  { id: 'p532', jp: 'コンデンサが膨らんでいるので交換。', vn: 'Tụ điện bị phồng nên thay thế.', en: 'The capacitor is bulging, so replace it.', category: 'Bảo trì' },
  { id: 'p533', jp: 'リレーの接点が溶着して離れません。', vn: 'Tiếp điểm của rơ-le bị dính và không tách ra được.', en: 'The relay contacts are welded together and won\'t separate.', category: 'Tình trạng' },
  { id: 'p534', jp: '冷却ファンが故障して温度が上昇。', vn: 'Quạt làm mát bị hỏng nên nhiệt độ tăng cao.', en: 'The cooling fan is broken, and the temperature is rising.', category: 'Tình trạng' },
  { id: 'p535', jp: 'フィルターレギュレータで圧力を設定。', vn: 'Cài đặt áp suất bằng bộ lọc điều áp (filter regulator).', en: 'Set the pressure with the filter regulator.', category: 'Kỹ thuật' },
  { id: 'p536', jp: 'スピードコントローラで速度を微調整。', vn: 'Điều chỉnh chi li tốc độ bằng van tiết lưu (speed controller).', en: 'Fine-tune the speed with the speed controller.', category: 'Kỹ thuật' },
  { id: 'p537', jp: 'サイレンサーから排気漏れがしています。', vn: 'Đang có rò rỉ khí xả từ bộ giảm âm.', en: 'Exhaust air is leaking from the silencer.', category: 'Tình trạng' },
  { id: 'p538', jp: 'ワンタッチ継手にチューブを差し込む。', vn: 'Cắm ống vào đầu nối nhanh (one-touch fitting).', en: 'Insert the tube into the one-touch fitting.', category: 'Kỹ thuật' },
  { id: 'p539', jp: 'エアシリンダのパッキンを交換して。', vn: 'Hãy thay gioăng phớt của xi lanh khí.', en: 'Please replace the air cylinder packing.', category: 'Bảo trì' },
  { id: 'p540', jp: 'バキュームパッドがワークを吸着しない。', vn: 'Núm hút chân không không hút được phôi.', en: 'The vacuum pad is not sucking the workpiece.', category: 'Tình trạng' },
  { id: 'p541', jp: '油圧ユニットの作動油が汚れています。', vn: 'Dầu thủy lực ở bộ nguồn thủy lực bị bẩn rồi.', en: 'The hydraulic oil in the hydraulic unit is dirty.', category: 'Tình trạng' },
  { id: 'p542', jp: 'アキュムレータの窒素圧力をチェック。', vn: 'Kiểm tra áp suất nitơ của bình tích áp.', en: 'Check the nitrogen pressure in the accumulator.', category: 'Bảo trì' },
  { id: 'p543', jp: 'マニホールドバルブの配線を確認。', vn: 'Xác nhận hệ thống dây điện của cụm van (manifold valve).', en: 'Confirm the manifold valve wiring.', category: 'Bảo trì' },
  { id: 'p544', jp: 'チェックバルブ（逆止弁）の向きを確認。', vn: 'Xác nhận hướng của van một chiều.', en: 'Confirm the direction of the check valve.', category: 'Kỹ thuật' },
  { id: 'p545', jp: 'バイパス回路のバルブを閉めてください。', vn: 'Hãy đóng van của mạch rẽ (bypass).', en: 'Please close the valve of the bypass circuit.', category: 'Kỹ thuật' },
  { id: 'p546', jp: '圧力スイッチの作動範囲を設定します。', vn: 'Cài đặt phạm vi hoạt động của công tắc áp suất.', en: 'Set the operating range of the pressure switch.', category: 'Kỹ thuật' },
  { id: 'p547', jp: 'ストレーナーを清掃して目詰まりを解消。', vn: 'Vệ sinh lưới lọc (strainer) để giải quyết nghẹt.', en: 'Clean the strainer to clear clogging.', category: 'Bảo trì' },
  { id: 'p548', jp: 'ドレン抜きを毎日実施してください。', vn: 'Hãy thực hiện xả nước ngưng (drain) hàng ngày.', en: 'Please perform drain discharge every day.', category: 'An toàn' },
  { id: 'p549', jp: 'この部品の図面ライブラリを更新。', vn: 'Cập nhật thư viện bản vẽ của linh kiện này.', en: 'Update the drawing library for this component.', category: 'Tài liệu' },
  { id: 'p550', jp: 'スペアパーツの在庫を確保してください。', vn: 'Hãy đảm bảo sẵn hàng dự phòng (spare parts).', en: 'Please ensure an inventory of spare parts.', category: 'Logistics' },
  { id: 'p551', jp: 'スプロケットの歯が欠けています。', vn: 'Răng của đĩa xích bị mẻ rồi.', en: 'The sprocket teeth are chipped.', category: 'Linh kiện' },
  { id: 'p552', jp: 'ローラーチェーンの伸びを確認してください。', vn: 'Hãy kiểm tra độ dãn của xích lăn.', en: 'Please check the elongation of the roller chain.', category: 'Bảo trì' },
  { id: 'p553', jp: 'タイミングプーリーのフランジが曲がっています。', vn: 'Mặt bích của puly răng bị cong rồi.', en: 'The timing pulley flange is bent.', category: 'Tình trạng' },
  { id: 'p554', jp: 'Vベルトの張力をテンションメーターで測る。', vn: 'Đo độ căng của dây đai chữ V bằng máy đo độ căng.', en: 'Measure the V-belt tension with a tension meter.', category: 'Kỹ thuật' },
  { id: 'p555', jp: 'カムフォロアのスタッド部分を締め付けて。', vn: 'Hãy siết chặt phần bu lông (stud) của con lăn cam.', en: 'Tighten the stud part of the cam follower.', category: 'Kỹ thuật' },
  { id: 'p556', jp: 'リニアブッシュのボールが脱落しています。', vn: 'Bi của bạc trượt tuyến tính bị rơi ra ngoài rồi.', en: 'The linear bush balls have fallen out.', category: 'Tình trạng' },
  { id: 'p557', jp: 'ばね座金（スプリングワッシャー）を入れてください。', vn: 'Hãy cho thêm vòng đệm vênh (long đền vênh) vào.', en: 'Please insert a spring washer.', category: 'Linh kiện' },
  { id: 'p558', jp: '平座金（ワッシャー）で面圧を分散させます。', vn: 'Phân tán áp lực bề mặt bằng vòng đệm phẳng.', en: 'Distribute surface pressure with a flat washer.', category: 'Kỹ thuật' },
  { id: 'p559', jp: '六角穴付きボルトをレンチで締める。', vn: 'Siết bu lông lục giác chìm bằng lục giác.', en: 'Tighten the hex socket head cap screw with a wrench.', category: 'Kỹ thuật' },
  { id: 'p560', jp: '蝶ボルト（丁番ボルト）を手で回して固定。', vn: 'Vặn bu lông tai hồng bằng tay để cố định.', en: 'Turn the wing bolt by hand to fix it.', category: 'Kỹ thuật' },
  { id: 'p561', jp: '皿ネジの頭が表面から出ないように。', vn: 'Đừng để đầu vít đầu bằng nhô lên khỏi bề mặt.', en: 'Ensure the countersunk screw head does not protrude from the surface.', category: 'Kỹ thuật' },
  { id: 'p562', jp: '止めネジ（イモネジ）でシャフトを固定。', vn: 'Cố định trục bằng vít trí (vít lục giác không đầu).', en: 'Fix the shaft with a set screw.', category: 'Kỹ thuật' },
  { id: 'p563', jp: 'Uナットを使用して緩み止めをします。', vn: 'Sử dụng đai ốc chữ U để chống lỏng.', en: 'Use a U-nut to prevent loosening.', category: 'Linh kiện' },
  { id: 'p564', jp: '袋ナットで見栄えを良くしてください。', vn: 'Hãy dùng đai ốc mũ để trông đẹp hơn.', en: 'Please use a cap nut to improve its appearance.', category: 'Kỹ thuật' },
  { id: 'p565', jp: 'ダブルナットで確実にロックして。', vn: 'Khóa thật chắc chắn bằng đai ốc đôi.', en: 'Lock it securely with double nuts.', category: 'Kỹ thuật' },
  { id: 'p566', jp: '平行ピンを台に打ち込んでください。', vn: 'Hãy đóng chốt trụ vào đế.', en: 'Please drive the parallel pin into the base.', category: 'Kỹ thuật' },
  { id: 'p567', jp: 'テーパーピンを抜くにはポンチが必要。', vn: 'Cần đục để rút chốt côn ra.', en: 'A punch is needed to remove the taper pin.', category: 'Kỹ thuật' },
  { id: 'p568', jp: 'スナップリング（C形止め輪）を外す。', vn: 'Tháo vòng phe (vòng chắn chữ C).', en: 'Remove the snap ring (C-retaining ring).', category: 'Kỹ thuật' },
  { id: 'p569', jp: 'キー溝にキーをはめ込んでください。', vn: 'Hãy lắp then vào rãnh then.', en: 'Please fit the key into the keyway.', category: 'Kỹ thuật' },
  { id: 'p570', jp: '半月キー（ウッドラフキー）を使用。', vn: 'Sử dụng then bán nguyệt.', en: 'Use a woodruff key.', category: 'Linh kiện' },
  { id: 'p571', jp: 'マグネットコンタクタが作動しません。', vn: 'Công tắc tơ (khởi động từ) không hoạt động.', en: 'The magnetic contactor is not operating.', category: 'Tình trạng' },
  { id: 'p572', jp: 'サーマルリレーの電流値を設定して。', vn: 'Hãy cài đặt giá trị dòng điện của rơ-le nhiệt.', en: 'Please set the current value of the thermal relay.', category: 'Kỹ thuật' },
  { id: 'p573', jp: 'タイマーの設定時間を10秒に変更。', vn: 'Thay đổi thời gian cài đặt của bộ hẹn giờ (timer) thành 10 giây.', en: 'Change the timer setting to 10 seconds.', category: 'Kỹ thuật' },
  { id: 'p574', jp: 'カウンターの数値をリセットしてください。', vn: 'Hãy thiết lập lại (reset) giá trị của bộ đếm.', en: 'Please reset the counter value.', category: 'Kỹ thuật' },
  { id: 'p575', jp: 'SSR（ソリッドステートリレー）の発熱を確認。', vn: 'Kiểm tra sự phát nhiệt của rơ-le bán dẫn (SSR).', en: 'Check the heat generation of the SSR (solid-state relay).', category: 'Bảo trì' },
  { id: 'p576', jp: 'セレクタスイッチの接点が接触不良。', vn: 'Tiếp điểm của công tắc xoay bị tiếp xúc kém.', en: 'The selector switch contacts have poor connection.', category: 'Tình trạng' },
  { id: 'p577', jp: '押しボタン（プッシュボタン）のカバーを交換。', vn: 'Thay nắp che của nút nhấn.', en: 'Replace the push button cover.', category: 'Bảo trì' },
  { id: 'p578', jp: '照光式スイッチの電球が切れています。', vn: 'Bóng đèn của công tắc có đèn báo bị cháy rồi.', en: 'The bulb of the illuminated switch is burnt out.', category: 'Tình trạng' },
  { id: 'p579', jp: '積層信号灯（パトライト）が赤色で点灯。', vn: 'Đèn tín hiệu tầng (đèn tầng) đang sáng màu đỏ.', en: 'The signal tower light is lit in red.', category: 'Tình trạng' },
  { id: 'p580', jp: '電子ブザーの音量を調整してください。', vn: 'Hãy điều chỉnh âm lượng của còi điện tử.', en: 'Please adjust the volume of the electronic buzzer.', category: 'Kỹ thuật' },
  { id: 'p581', jp: '超音波センサーで液面レベルを計測。', vn: 'Đo mức chất lỏng bằng cảm biến siêu âm.', en: 'Measure the liquid level with an ultrasonic sensor.', category: 'Kỹ thuật' },
  { id: 'p582', jp: 'レーザー変位計で高精度に厚みを測る。', vn: 'Đo độ dày với độ chính xác cao bằng máy đo biến vị laser.', en: 'Measure thickness with high precision using a laser displacement sensor.', category: 'Kỹ thuật' },
  { id: 'p583', jp: '感圧センサーでワークの有無を確認。', vn: 'Xác nhận sự hiện diện của phôi bằng cảm biến áp lực.', en: 'Confirm the presence of the workpiece with a pressure sensor.', category: 'Kỹ thuật' },
  { id: 'p584', jp: '流量センサー（フローセンサ）の値を読み取る。', vn: 'Đọc giá trị của cảm biến lưu lượng.', en: 'Read the value of the flow sensor.', category: 'Kỹ thuật' },
  { id: 'p585', jp: '熱電対（シースタイプ）を挿入して。', vn: 'Hãy chèn cặp nhiệt điện (loại có bọc bảo vệ) vào.', en: 'Please insert the thermocouple (sheath type).', category: 'Kỹ thuật' },
  { id: 'p586', jp: '湿度センサーが結露で反応しています。', vn: 'Cảm biến độ ẩm đang phản ứng do sương đọng.', en: 'The humidity sensor is responding due to condensation.', category: 'Tình trạng' },
  { id: 'p587', jp: 'エンコーダのケーブルをコネクタに接続。', vn: 'Kết nối cáp của bộ mã hóa vào cổng kết nối.', en: 'Connect the encoder cable to the connector.', category: 'Kỹ thuật' },
  { id: 'p588', jp: 'D-subコネクタのネジを固定して。', vn: 'Hãy cố định vít của đầu nối D-sub.', en: 'Please fix the screws of the D-sub connector.', category: 'Kỹ thuật' },
  { id: 'p589', jp: '丸型コネクタ（防水型）を使用。', vn: 'Sử dụng đầu nối tròn (loại chống nước).', en: 'Use a circular connector (waterproof type).', category: 'Linh kiện' },
  { id: 'p590', jp: 'LANケーブルの導通チェックをして。', vn: 'Hãy kiểm tra thông mạch của cáp LAN.', en: 'Please check the continuity of the LAN cable.', category: 'Kỹ thuật' },
  { id: 'p591', jp: '真空エジェクタのノズルを清掃。', vn: 'Vệ sinh vòi phun của bộ tạo chân không.', en: 'Clean the vacuum ejector nozzle.', category: 'Bảo trì' },
  { id: 'p592', jp: 'エア吸着パッド（サクションカップ）を交換。', vn: 'Thay núm hút khí (cup hút).', en: 'Replace the air suction pad (suction cup).', category: 'Bảo trì' },
  { id: 'p593', jp: 'サイレンサーの消音効果が落ちています。', vn: 'Hiệu quả giảm âm của bộ giảm âm đang bị giảm đi.', en: 'The silencing effect of the silencer has decreased.', category: 'Tình trạng' },
  { id: 'p594', jp: 'スピードコントローラのロックナットを締める。', vn: 'Siết đai ốc khóa của van tiết lưu.', en: 'Tighten the speed controller lock nut.', category: 'Kỹ thuật' },
  { id: 'p595', jp: 'ポリウレタンチューブ（エアーチューブ）を切断。', vn: 'Cắt ống nhựa polyurethane (ống khí).', en: 'Cut the polyurethane tube (air tube).', category: 'Kỹ thuật' },
  { id: 'p596', jp: 'エルボ継手で配線の方向を変える。', vn: 'Thay đổi hướng đi dây/ống bằng đầu nối chữ L (elbow).', en: 'Change the wiring/piping direction with an elbow fitting.', category: 'Kỹ thuật' },
  { id: 'p597', jp: 'ユニオン継手でパイプを連結してください。', vn: 'Hãy liên kết các đường ống bằng đầu nối thẳng (union).', en: 'Please connect the pipes with a union fitting.', category: 'Kỹ thuật' },
  { id: 'p598', jp: 'ニップルにシール材を塗布します。', vn: 'Bôi vật liệu làm kín vào đầu nối hai đầu ren (nipple).', en: 'Apply sealant to the nipple.', category: 'Kỹ thuật' },
  { id: 'p599', jp: 'レデューサーでサイズをダウンさせて。', vn: 'Hãy giảm kích thước bằng đầu thu (reducer).', en: 'Please reduce the size with a reducer.', category: 'Kỹ thuật' },
  { id: 'p600', jp: 'おめでとうございます！合計600句達成です。', vn: 'Chúc mừng anh! Đã đạt tổng cộng 600 mẫu câu rồi.', en: 'Congratulations! You have reached a total of 600 phrases.', category: 'Giao tiếp' }
];

export const DIALOGUES: Dialogue[] = [
  {
    id: 'd1',
    title: '3.1 Hỏi tình trạng + mở đầu trả giá',
    lines: [
      { role: 'buyer', jp: 'すみません、こちらの機械の実際の状態を教えていただけますか。', vn: 'Xin lỗi, anh/chị có thể cho tôi biết tình trạng thực tế của máy không?' },
      { role: 'seller', jp: '2年ほど使いましたが、今も問題なく動いています。', vn: 'Tôi dùng khoảng 2 năm, hiện vẫn hoạt động bình thường.' },
      { role: 'buyer', jp: 'ありがとうございます。もし可能でしたら、少しお値引きいただけませんか。', vn: 'Cảm ơn anh/chị. Nếu được, anh/chị có thể giảm nhẹ giúp tôi không?' },
      { role: 'seller', jp: 'どのくらいをお考えですか。', vn: 'Bạn muốn mức bao nhiêu?' },
      { role: 'buyer', jp: '8万5千円なら即決できます。', vn: 'Nếu giá là 85.000 yên thì tôi có thể chốt ngay.' }
    ]
  },
  {
    id: 'd2',
    title: '3.2 Trả giá vì máy có lỗi nhẹ',
    lines: [
      { role: 'buyer', jp: 'モーターが少し音がしますが、これは問題ありませんか。', vn: 'Motor hơi kêu một chút, điều này có vấn đề gì không?' },
      { role: 'seller', jp: '長年使っているので多少の音はありますが、動作には問題ありません。', vn: 'Do dùng lâu nên hơi ồn, nhưng hoạt động không có vấn đề.' },
      { role: 'buyer', jp: 'そうですか。では、この状態 को nghĩ đến 60.000 yên', vn: 'Vậy thì với tình trạng này, anh/chị có thể để giá 60.000 yên không?' },
      { role: 'seller', jp: '6万5千円ならどうですか。', vn: '65.000 yên được không?' },
      { role: 'buyer', jp: '6万3千円なら今日中に取りに行きます。', vn: '63.000 yên thì hôm nay tôi qua lấy ngay.' }
    ]
  },
  {
    id: 'd3',
    title: '3.3 Mua số lượng nhiều',
    lines: [
      { role: 'buyer', jp: '同じ機械を4台買いたいのですが、まとめ買いの値引きありますか？', vn: 'Tôi muốn mua 4 máy cùng loại, có giá sỉ không?' },
      { role: 'seller', jp: '4台なら5％引きできます。', vn: 'Nếu mua 4 cái thì tôi giảm 5%.' },
      { role: 'buyer', jp: '全部で28万円なら即座に振り込みます。', vn: 'Nếu tổng còn 280.000 yên thì tôi chuyển khoản ngay.' },
      { role: 'seller', jp: 'はい、大丈夫です。', vn: 'Được, tôi hỗ trợ.' }
    ]
  },
  {
    id: 'd4',
    title: '3.5 Chốt nhanh - lấy ngay',
    lines: [
      { role: 'buyer', jp: '急いでいるので、7万円なら即決したいです。', vn: 'Tôi đang cần gấp, nếu giá 70.000 yên tôi chốt ngay.' },
      { role: 'seller', jp: '7万2千円ではどうですか。', vn: '72.000 yên được không?' },
      { role: 'buyer', jp: '7万2千円で大丈夫です。30分以内に取りに行きます。', vn: '72.000 yên cũng được, tôi đến lấy trong 30 phút.' },
      { role: 'seller', jp: '分かりました。お待ちしています。', vn: 'Ok, tôi đợi bạn.' }
    ]
  },
  {
    id: 'd5',
    title: 'Yêu cầu tháo dỡ máy móc',
    lines: [
      { role: 'buyer', jp: 'この古い旋盤の解体をお願いしたいのですが。', vn: 'Tôi muốn yêu cầu tháo dỡ chiếc máy tiện cũ này.' },
      { role: 'seller', jp: 'はい、解体と搬出を含めてお見積りいたします。', vn: 'Vâng, tôi sẽ báo giá bao gồm cả tháo dỡ và vận chuyển ra ngoài.' }
    ]
  },
  {
    id: 'd6',
    title: 'Xác nhận an toàn khi tháo dỡ',
    lines: [
      { role: 'buyer', jp: '解体作業中の安全対策はどうなっていますか？', vn: 'Biện pháp an toàn trong quá trình tháo dỡ như thế nào?' },
      { role: 'seller', jp: '安全帯の着用と作業エリアの立ち入り禁止を徹底します。', vn: 'Chúng tôi triệt để việc đeo dây an toàn và cấm vào khu vực làm việc.' }
    ]
  },
  {
    id: 'd7',
    title: 'Hỏi về thời gian tháo dỡ',
    lines: [
      { role: 'buyer', jp: '解体には何日くらいかかりますか？', vn: 'Việc tháo dỡ mất khoảng mấy ngày?' },
      { role: 'seller', jp: '大型設備ですので、3日ほどいただく予定です。', vn: 'Vì là thiết bị lớn nên dự kiến sẽ mất khoảng 3 ngày.' }
    ]
  },
  {
    id: 'd8',
    title: 'Tháo dỡ hệ thống điện',
    lines: [
      { role: 'buyer', jp: '電気配線の切り離しもお願いできますか？', vn: 'Anh có thể tháo rời cả hệ thống dây điện không?' },
      { role: 'seller', jp: 'はい、資格を持った作業員が対応いたします。', vn: 'Vâng, nhân viên có bằng cấp chuyên môn sẽ thực hiện việc đó.' }
    ]
  },
  {
    id: 'd9',
    title: 'Yêu cầu di chuyển máy sang xưởng mới',
    lines: [
      { role: 'buyer', jp: '隣の工場へ機械を移設したいです。', vn: 'Tôi muốn di chuyển máy sang nhà xưởng bên cạnh.' },
      { role: 'seller', jp: '距離は近いですが、重量物なのでフォークリフトが必要です。', vn: 'Khoảng cách gần nhưng vì là hàng nặng nên cần xe nâng.' }
    ]
  },
  {
    id: 'd10',
    title: 'Bố trí máy móc tại vị trí mới',
    lines: [
      { role: 'buyer', jp: '移設後にレベル出しもしてもらえますか？', vn: 'Sau khi di chuyển, anh có thể căn chỉnh thăng bằng (level) giúp tôi luôn không?' },
      { role: 'seller', jp: 'はい、水平調整までしっかり行います。', vn: 'Vâng, chúng tôi sẽ thực hiện kỹ càng cho đến khi đạt độ cân bằng nằm ngang.' }
    ]
  },
  {
    id: 'd11',
    title: 'Thuê xe cẩu di chuyển thiết bị',
    lines: [
      { role: 'buyer', jp: '10トンのクレーン車を手配できますか？', vn: 'Anh có thể sắp xếp xe cẩu 10 tấn được không?' },
      { role: 'seller', jp: '来週の火曜日なら手配可能です。', vn: 'Thứ Ba tuần tới thì chúng tôi có thể sắp xếp được.' }
    ]
  },
  {
    id: 'd12',
    title: 'Làm sạch sàn nhà xưởng',
    lines: [
      { role: 'buyer', jp: '床の油汚れがひどいので、洗浄をお願いします。', vn: 'Vết dầu trên sàn rất bẩn, hãy làm sạch giúp tôi.' },
      { role: 'seller', jp: '専用の洗剤を使用して、高圧洗浄を行います。', vn: 'Chúng tôi sẽ dùng chất tẩy rửa chuyên dụng và rửa bằng áp lực cao.' }
    ]
  },
  {
    id: 'd13',
    title: 'Vệ sinh trần xưởng',
    lines: [
      { role: 'buyer', jp: '天井の埃もきれいにしたいです。', vn: 'Tôi cũng muốn làm sạch bụi trên trần nhà.' },
      { role: 'seller', jp: '高所作業車を使用して清掃いたします。', vn: 'Chúng tôi sẽ dùng xe làm việc trên cao để quét dọn.' }
    ]
  },
  {
    id: 'd14',
    title: 'Thu gom rác thải công nghiệp',
    lines: [
      { role: 'buyer', jp: '作業後の撤去ゴミはどう処理しますか？', vn: 'Rác thải sau khi làm việc sẽ xử lý thế nào?' },
      { role: 'seller', jp: '弊社で適切に産廃処理いたします。', vn: 'Công ty chúng tôi sẽ xử lý rác thải công nghiệp theo đúng quy định.' }
    ]
  },
  {
    id: 'd15',
    title: 'Thương lượng phí bảo trì',
    lines: [
      { role: 'buyer', jp: '保守契約の費用をもう少し安くできませんか？', vn: 'Anh có thể giảm phí hợp đồng bảo trì một chút không?' },
      { role: 'seller', jp: '長期契約であれば、10％割引可能です。', vn: 'Nếu là hợp đồng dài hạn, chúng tôi có thể giảm 10%.' }
    ]
  },
  {
    id: 'd16',
    title: 'Hỏi về linh kiện thay thế',
    lines: [
      { role: 'buyer', jp: '消耗品の在庫は常にありますか？', vn: 'Linh kiện tiêu hao lúc nào cũng có sẵn trong kho chứ?' },
      { role: 'seller', jp: '主要な部品は常にストックしております。', vn: 'Các bộ phận chính thì chúng tôi luôn lưu kho sẵn.' }
    ]
  },
  {
    id: 'd17',
    title: 'Yêu cầu tháo dỡ vách ngăn',
    lines: [
      { role: 'buyer', jp: 'パーテーションの撤去をお願いします。', vn: 'Hãy tháo dỡ các vách ngăn giúp tôi.' },
      { role: 'seller', jp: '承知しました。再利用されますか、処分されますか？', vn: 'Đã rõ. Anh muốn tái sử dụng hay vứt bỏ chúng?' }
    ]
  },
  {
    id: 'd18',
    title: 'Tháo dỡ đường ống khí nén',
    lines: [
      { role: 'buyer', jp: 'エアー配管の取り外しは可能ですか？', vn: 'Việc tháo dỡ đường ống khí nén có khả thi không?' },
      { role: 'seller', jp: 'はい、元栓を閉めてから安全に作業します。', vn: 'Vâng, chúng tôi sẽ khóa van tổng rồi làm việc an toàn.' }
    ]
  },
  {
    id: 'd19',
    title: 'Di chuyển bằng xe nâng chuyên dụng',
    lines: [
      { role: 'buyer', jp: '精密機械なので、振動を避けて運びたいです。', vn: 'Vì là máy móc chính xác nên tôi muốn vận chuyển tránh rung lắc.' },
      { role: 'seller', jp: 'エアサス仕様 của トラック を用意いたします。', vn: 'Chúng tôi sẽ chuẩn bị xe tải có hệ thống treo khí nén (giảm xóc khí).' }
    ]
  },
  {
    id: 'd20',
    title: 'Kiểm tra máy sau khi di chuyển',
    lines: [
      { role: 'buyer', jp: '設置後、試運転の立ち会いをお願いします。', vn: 'Sau khi lắp đặt, hãy có mặt chứng kiến việc chạy thử giúp tôi.' },
      { role: 'seller', jp: 'もちろんです。正常動作を確認するまで対応します。', vn: 'Dĩ nhiên rồi. Chúng tôi sẽ hỗ trợ cho đến khi xác nhận máy hoạt động bình thường.' }
    ]
  },
  {
    id: 'd21',
    title: 'Vệ sinh hệ thống thông gió',
    lines: [
      { role: 'buyer', jp: 'ダクトの中の清掃をお願いできますか。', vn: 'Anh có thể làm sạch bên trong đường ống dẫn gió không?' },
      { role: 'seller', jp: 'はい、専門の機材を使って汚れを落とします。', vn: 'Vâng, chúng tôi sẽ dùng thiết bị chuyên dụng để tẩy sạch vết bẩn.' }
    ]
  },
  {
    id: 'd22',
    title: 'Thu gom phế liệu kim loại',
    lines: [
      { role: 'buyer', jp: '鉄くずを引き取ってもらえますか。', vn: 'Anh có thể thu gom phế liệu sắt không?' },
      { role: 'seller', jp: '現在の相場に合わせて買い取りも可能です。', vn: 'Chúng tôi có thể thu mua theo giá thị trường hiện tại.' }
    ]
  },
  {
    id: 'd23',
    title: 'Xác nhận bản vẽ trước khi tháo dỡ',
    lines: [
      { role: 'buyer', jp: '図面を見て、解体範囲を確認してください。', vn: 'Hãy xem bản vẽ and xác nhận phạm vi tháo dỡ.' },
      { role: 'seller', jp: '承知しました。赤線で囲まれた部分ですね。', vn: 'Đã rõ. Là phần được khoanh mực đỏ đúng không ạ.' }
    ]
  },
  {
    id: 'd24',
    title: 'Chi phí di chuyển khẩn cấp',
    lines: [
      { role: 'buyer', jp: '明日中に移設を完了させることは可能ですか。', vn: 'Có thể hoàn thành việc di chuyển trong ngày mai không?' },
      { role: 'seller', jp: '特急料金がかかりますが、対応可能です。', vn: 'Sẽ mất thêm phí hỏa tốc, nhưng chúng tôi có thể làm được.' }
    ]
  },
  {
    id: 'd25',
    title: 'Mua lại máy cũ để đổi máy mới',
    lines: [
      { role: 'buyer', jp: '下取りに出して、最新モデルを導入したいです。', vn: 'Tôi muốn đổi máy cũ lấy máy mới (trade-in) để lắp đặt model mới nhất.' },
      { role: 'seller', jp: '現在の機械の査定をさせていただきます。', vn: 'Chúng tôi sẽ tiến hành định giá chiếc máy hiện tại của anh.' }
    ]
  },
  {
    id: 'd26',
    title: 'Tẩy rỉ sét bề mặt máy',
    lines: [
      { role: 'buyer', jp: 'この部品の錆落としをお願いします。', vn: 'Hãy tẩy rỉ sét cho linh kiện này giúp tôi.' },
      { role: 'seller', jp: 'サンドブラストできれいに仕上げます。', vn: 'Chúng tôi sẽ làm sạch bằng phương pháp phun cát.' }
    ]
  },
  {
    id: 'd27',
    title: 'Sơn lại máy móc sau khi làm sạch',
    lines: [
      { role: 'buyer', jp: '洗浄した後に再塗装もしてくれますか。', vn: 'Sau khi làm sạch anh có sơn lại máy luôn không?' },
      { role: 'seller', jp: 'はい、ご指定の色で塗装いたします。', vn: 'Vâng, chúng tôi sẽ sơn theo màu anh chỉ định.' }
    ]
  },
  {
    id: 'd28',
    title: 'Đặt cọc dịch vụ vệ sinh',
    lines: [
      { role: 'buyer', jp: '予約のために手付金を払います。', vn: 'Tôi sẽ trả tiền đặt cọc để giữ lịch hẹn.' },
      { role: 'seller', jp: 'ありがとうございます。入金確認後に確定します。', vn: 'Cảm ơn anh. Lịch sẽ được chốt sau khi chúng tôi nhận được tiền.' }
    ]
  },
  {
    id: 'd29',
    title: 'Dọn dẹp sau khi tháo dỡ xưởng',
    lines: [
      { role: 'buyer', jp: '更地にするまで掃除をお願いします。', vn: 'Hãy dọn dẹp sạch sẽ cho đến khi mặt bằng trống trải.' },
      { role: 'seller', jp: '最後はホウキと水洗いで仕上げます。', vn: 'Cuối cùng chúng tôi sẽ hoàn thiện bằng việc quét dọn và rửa nước.' }
    ]
  },
  {
    id: 'd30',
    title: 'Vận chuyển máy đi nước ngoài',
    lines: [
      { role: 'buyer', jp: '海外へ輸出するための移設準備をお願いします。', vn: 'Hãy chuẩn bị di dời để xuất khẩu ra nước ngoài.' },
      { role: 'seller', jp: 'スチール梱包と防錆処理を徹底します。', vn: 'Chúng tôi sẽ triệt để việc đóng gói bằng khung sắt và xử lý chống rỉ.' }
    ]
  },
  {
    id: 'd31',
    title: 'Kiểm tra lỗi sau khi lắp lại máy',
    lines: [
      { role: 'buyer', jp: '組み立て後に配線ミスがないか確認してください。', vn: 'Hãy kiểm tra xem có lỗi đi dây nào sau khi lắp ráp lại không.' },
      { role: 'seller', jp: '回路テスターで全てチェックいたします。', vn: 'Chúng tôi sẽ kiểm tra tất cả bằng thiết bị đo mạch.' }
    ]
  },
  {
    id: 'd32',
    title: 'Hỏi về giấy phép tháo dỡ',
    lines: [
      { role: 'buyer', jp: '解体工事の許可証は見せてもらえますか。', vn: 'Tôi có thể xem giấy phép thi công tháo dỡ không?' },
      { role: 'seller', jp: 'はい、コピーをお渡しします。', vn: 'Vâng, tôi sẽ gửi bản sao cho anh.' }
    ]
  },
  {
    id: 'd33',
    title: 'Phương án di chuyển máy nặng qua hố',
    lines: [
      { role: 'buyer', jp: 'ピットを越えて運ぶにはどうしますか。', vn: 'Để chuyển máy qua hố thì phải làm sao?' },
      { role: 'seller', jp: '厚い鉄板を敷いて道を補強します。', vn: 'Chúng tôi sẽ trải tấm sắt dày để gia cố đường đi.' }
    ]
  },
  {
    id: 'd34',
    title: 'Tư vấn phương pháp làm sạch tối ưu',
    lines: [
      { role: 'buyer', jp: '塗装ブースの掃除はどうすればいいですか。', vn: 'Việc vệ sinh buồng sơn nên làm thế nào?' },
      { role: 'seller', jp: 'ドライアイス洗浄が最も効果的です。', vn: 'Làm sạch bằng đá khô là hiệu quả nhất.' }
    ]
  },
  {
    id: 'd35',
    title: 'Phí chờ do chậm trễ khâu chuẩn bị',
    lines: [
      { role: 'seller', jp: '準備ができていないので、待機料金が発生します。', vn: 'Vì khâu chuẩn bị chưa xong nên sẽ phát sinh phí chờ.' },
      { role: 'buyer', jp: 'すみません、あと30分で完了させます。', vn: 'Xin lỗi, tôi sẽ hoàn tất trong 30 phút nữa.' }
    ]
  },
  {
    id: 'd36',
    title: 'Yêu cầu tháo dỡ pallet gỗ',
    lines: [
      { role: 'buyer', jp: 'この木製パレットをバラして処分してください。', vn: 'Hãy tháo rời và vứt bỏ những pallet gỗ này giúp tôi.' },
      { role: 'seller', jp: 'はい、釘に注意して作業します。', vn: 'Vâng, chúng tôi sẽ cẩn thận với đinh khi làm việc.' }
    ]
  },
  {
    id: 'd37',
    title: 'Di chuyển máy vào vị trí chật hẹp',
    lines: [
      { role: 'buyer', jp: 'スペースが狭いですが、入れられますか。', vn: 'Không gian hẹp, có đưa máy vào được không?' },
      { role: 'seller', jp: 'チルローラーを使って慎重に移動させます。', vn: 'Chúng tôi sẽ dùng con lăn (roller) để di chuyển thận trọng.' }
    ]
  },
  {
    id: 'd38',
    title: 'Xác nhận tải trọng của thang máy',
    lines: [
      { role: 'buyer', jp: 'エレベーターの積載荷重は足りますか。', vn: 'Tải trọng của thang máy có đủ không?' },
      { role: 'seller', jp: '機械が2トンなので、制限ギリギリです。', vn: 'Máy nặng 2 tấn nên sát nút giới hạn rồi.' }
    ]
  },
  {
    id: 'd39',
    title: 'Dịch vụ làm sạch định kỳ hàng năm',
    lines: [
      { role: 'buyer', jp: '年に一度、大掃除を依頼したいです。', vn: 'Tôi muốn thuê tổng vệ sinh mỗi năm một lần.' },
      { role: 'seller', jp: '年間スケジュールを組みましょう。', vn: 'Chúng ta hãy lập lịch trình hàng năm nhé.' }
    ]
  },
  {
    id: 'd40',
    title: 'Tháo dỡ hệ thống chiếu sáng',
    lines: [
      { role: 'buyer', jp: '照明器具の取り外しをお願いします。', vn: 'Hãy tháo dỡ các thiết bị chiếu sáng giúp tôi.' },
      { role: 'seller', jp: '高所作業になるので、ヘルメットが必要です。', vn: 'Vì là làm việc trên cao nên cần có mũ bảo hiểm.' }
    ]
  },
  {
    id: 'd41',
    title: 'Cắt bỏ các bu lông sàn',
    lines: [
      { role: 'buyer', jp: 'アンカーボルトの切断も必要です。', vn: 'Cũng cần phải cắt bỏ các bu lông neo (anchor bolt).' },
      { role: 'seller', jp: 'サンダーで床面をフラットにします。', vn: 'Chúng tôi sẽ dùng máy mài để làm phẳng mặt sàn.' }
    ]
  },
  {
    id: 'd42',
    title: 'Di chuyển văn phòng nhà xưởng',
    lines: [
      { role: 'buyer', jp: '事務机や棚の移動も頼めますか。', vn: 'Anh có thể chuyển giúp cả bàn làm việc và giá kệ không?' },
      { role: 'seller', jp: 'はい、養生もしっかり行います。', vn: 'Vâng, chúng tôi cũng sẽ che chắn bảo vệ (bảo ôn) kỹ càng.' }
    ]
  },
  {
    id: 'd43',
    title: 'Làm sạch cửa sổ kính cao',
    lines: [
      { role: 'buyer', jp: '高い場所の窓ガラスを掃除してほしい。', vn: 'Tôi muốn anh lau kính ở những chỗ cao.' },
      { role: 'seller', jp: 'ゴンドラを使って外側から洗浄します。', vn: 'Chúng tôi sẽ dùng lồng treo để rửa từ phía bên ngoài.' }
    ]
  },
  {
    id: 'd44',
    title: 'Tháo dỡ bồn chứa hóa chất',
    lines: [
      { role: 'buyer', jp: 'タンクの残液を抜いてから解体してください。', vn: 'Hãy xả hết dịch thừa trong bồn rồi mới tháo dỡ nhé.' },
      { role: 'seller', jp: '廃液処理も含めて対応いたします。', vn: 'Chúng tôi sẽ xử lý cả phần nước thải đó.' }
    ]
  },
  {
    id: 'd45',
    title: 'Mua bán linh kiện máy cũ',
    lines: [
      { role: 'buyer', jp: '中古のモーターを探しています。', vn: 'Tôi đang tìm mua motor cũ.' },
      { role: 'seller', jp: 'テスト済みの在庫가いくつかありますよ。', vn: 'Tôi có vài cái trong kho đã qua kiểm tra rồi đấy.' }
    ]
  },
  {
    id: 'd46',
    title: 'Yêu cầu xuất trình bảo hiểm lao động',
    lines: [
      { role: 'buyer', jp: '労災保険の加入証明書を出してください。', vn: 'Hãy xuất trình giấy chứng nhận tham gia bảo hiểm tai nạn lao động.' },
      { role: 'seller', jp: 'はい、提出書類一式に同封します。', vn: 'Vâng, tôi sẽ kèm theo trong bộ hồ sơ nộp lên.' }
    ]
  },
  {
    id: 'd47',
    title: 'Bàn giao mặt bằng sau khi làm sạch',
    lines: [
      { role: 'seller', jp: '清掃が完了しました。確認をお願いします。', vn: 'Việc làm sạch đã hoàn tất. Xin mời anh kiểm tra.' },
      { role: 'buyer', jp: '隅々まできれいになっていますね。合格です。', vn: 'Sạch đến từng ngóc ngách nhỉ. Đạt yêu cầu.' }
    ]
  },
  {
    id: 'd48',
    title: 'Thanh lý toàn bộ thiết bị nhà xưởng',
    lines: [
      { role: 'buyer', jp: '工場内の設備を全て一括で買い取ってください。', vn: 'Hãy mua lại toàn bộ thiết bị trong xưởng giúp tôi.' },
      { role: 'seller', jp: 'リストを頂ければ、明日一括査定に伺います。', vn: 'Nếu anh gửi danh sách, mai tôi sẽ qua định giá tổng thể.' }
    ]
  },
  {
    id: 'd49',
    title: 'Sắp xếp lại kho hàng (5S)',
    lines: [
      { role: 'buyer', jp: '倉庫の整理整頓のアドバイスをください。', vn: 'Hãy cho tôi lời khuyên về việc sắp xếp ngăn nắp kho hàng.' },
      { role: 'seller', jp: '定位置管理（ロケーション管理）を導入しましょう。', vn: 'Chúng ta hãy áp dụng quản lý vị trí cố định nhé.' }
    ]
  },
  {
    id: 'd50',
    title: 'Kết thúc hợp đồng tháo dỡ di dời',
    lines: [
      { role: 'buyer', jp: '今回の工事はこれで完了ですね。', vn: 'Công trình lần này đến đây là hoàn tất rồi nhỉ.' },
      { role: 'seller', jp: 'はい。不備があればいつでもご連絡ください。', vn: 'Vâng. Nếu có gì sai sót anh cứ liên hệ bất cứ lúc nào.' }
    ]
  },
  {
    id: 'd51',
    title: 'Tháo dỡ hệ thống PCCC',
    lines: [
      { role: 'buyer', jp: 'スプリンクラーの撤去作業をお願いします。', vn: 'Hãy thực hiện việc tháo dỡ hệ thống vòi phun nước chữa cháy.' },
      { role: 'seller', jp: '水漏れしないよう、配管の目封じを確実に行います。', vn: 'Chúng tôi sẽ bịt kín đường ống chắc chắn để không bị rò rỉ nước.' }
    ]
  },
  {
    id: 'd52',
    title: 'Di chuyển trạm biến áp',
    lines: [
      { role: 'buyer', jp: 'キュービクルの移設をお願いしたい。', vn: 'Tôi muốn di chuyển trạm biến áp (cubicle).' },
      { role: 'seller', jp: '電力会社への申請はお済みですか。', vn: 'Anh đã làm xong thủ tục đăng ký với công ty điện lực chưa?' }
    ]
  },
  {
    id: 'd53',
    title: 'Làm sạch khu vực xử lý nước thải',
    lines: [
      { role: 'buyer', jp: '廃水処理ピットの泥をさらってください。', vn: 'Hãy nạo vét bùn ở hố xử lý nước thải.' },
      { role: 'seller', jp: '強力吸引車を手配して、一気に回収します。', vn: 'Chúng tôi sẽ sắp xếp xe hút công suất lớn để thu gom nhanh gọn.' }
    ]
  },
  {
    id: 'd54',
    title: 'Tháo dỡ sàn nâng (Access Floor)',
    lines: [
      { role: 'buyer', jp: 'OAフロアの解体をお願いします。', vn: 'Hãy tháo dỡ sàn nâng kỹ thuật (OA floor).' },
      { role: 'seller', jp: '床下の配線を傷つけないよう注意します。', vn: 'Chúng tôi sẽ cẩn thận để không làm hỏng dây điện dưới sàn.' }
    ]
  },
  {
    id: 'd55',
    title: 'Thảo luận yêu cầu thiết kế máy (Design Requirements)',
    lines: [
      { role: 'buyer', jp: '新しい自動梱包機の設計をお願いしたいのですが。', vn: 'Tôi muốn nhờ anh thiết kế một chiếc máy đóng gói tự động mới.' },
      { role: 'seller', jp: '承知しました。処理能力やタクトタイムのご希望はありますか。', vn: 'Đã rõ. Anh có yêu cầu gì về công suất xử lý hay thời gian chu kỳ (tact time) không?' },
      { role: 'buyer', jp: '1分間に30個以上の処理が目標です。', vn: 'Mục tiêu là xử lý trên 30 sản phẩm mỗi phút.' },
      { role: 'seller', jp: 'それでしたら、高速サーボモーターの使用を提案いたします。', vn: 'Nếu vậy, tôi đề xuất sử dụng động cơ servo tốc độ cao.' }
    ]
  },
  {
    id: 'd56',
    title: 'Vận hành máy CNC hàng ngày (Daily Operation)',
    lines: [
      { role: 'buyer', jp: '本日の作業前に、旋盤の原点復帰を行ってください。', vn: 'Trước khi làm việc hôm nay, hãy thực hiện việc đưa máy tiện về gốc (Home).' },
      { role: 'seller', jp: 'はい。暖機運転（ウォーミングアップ）も15分ほど実施します。', vn: 'Vâng. Tôi cũng sẽ thực hiện chạy rốt-đa (warm-up) khoảng 15 phút.' },
      { role: 'buyer', jp: '刃物の摩耗もチェックしておいてください。', vn: 'Anh cũng hãy kiểm tra độ mòn của dao nhé.' },
      { role: 'seller', jp: '了解です。必要であればチップを交換します。', vn: 'Rõ ạ. Nếu cần tôi sẽ thay mảnh hợp kim (chip).' }
    ]
  },
  {
    id: 'd57',
    title: 'Họp duyệt thiết kế cơ khí (Design Review)',
    lines: [
      { role: 'buyer', jp: 'この図面の強度計算書を確認しましたが、強度は十分ですか。', vn: 'Tôi đã kiểm tra bản tính toán độ bền của bản vẽ này, liệu nó có đủ chắc chắn không?' },
      { role: 'seller', jp: '安全率を2.5倍見ていますので、問題ありません。', vn: 'Chúng tôi đã tính hệ số an toàn gấp 2.5 lần nên không có vấn đề gì.' },
      { role: 'buyer', jp: 'メンテナンス性を考えて、カバーの取り外しを簡単にしてください。', vn: 'Hãy thiết kế nắp che dễ tháo rời để thuận tiện cho việc bảo trì.' },
      { role: 'seller', jp: '承知しました。クイックチェンジ式の金具に変更します。', vn: 'Tôi rõ rồi. Tôi sẽ đổi sang loại giá đỡ thay nhanh.' }
    ]
  },
  {
    id: 'd58',
    title: 'Xử lý lỗi khi vận hành máy (Operation Troubleshooting)',
    lines: [
      { role: 'buyer', jp: 'コンベアが急に止まってしまいました。', vn: 'Băng tải đột nhiên bị dừng lại rồi.' },
      { role: 'seller', jp: '非常停止ボタンが押されていないか確認してください。', vn: 'Hãy kiểm tra xem nút dừng khẩn cấp có bị nhấn không.' },
      { role: 'buyer', jp: 'ボタンは大丈夫です。モーターがかなり熱くなっています。', vn: 'Nút không sao. Nhưng motor đang rất nóng.' },
      { role: 'seller', jp: '過負荷（オーバーロード）の可能性がありますね。一度電源を切ってください。', vn: 'Có khả năng là bị quá tải. Hãy ngắt nguồn điện một lần xem sao.' }
    ]
  },
  {
    id: 'd59',
    title: 'Lựa chọn vật liệu cho bản vẽ (Material Selection)',
    lines: [
      { role: 'buyer', jp: 'このシャフトの材質は何が最適でしょうか。', vn: 'Vật liệu nào là tối ưu cho chiếc trục này?' },
      { role: 'seller', jp: '負荷が大きいので、S45Cの炭素鋼を提案します。', vn: 'Vì tải trọng lớn nên tôi đề xuất thép carbon S45C.' },
      { role: 'buyer', jp: '錆びやすい環境なので、ステンレスはどうですか。', vn: 'Vì môi trường dễ bị rỉ sét, nên dùng Inox thì sao?' },
      { role: 'seller', jp: 'コストは上がりますが、SUS304なら防錆効果は抜群です。', vn: 'Chi phí sẽ tăng lên, nhưng nếu là SUS304 thì hiệu quả chống rỉ rất tuyệt vời.' }
    ]
  },
  {
    id: 'd60',
    title: 'Gọi điện hỏi về máy đăng bán trên web (Initial Inquiry)',
    lines: [
      { role: 'buyer', jp: 'お忙しいところ恐れ入ります。中古機械の販売サイトを見てお電話いたしました。', vn: 'Xin lỗi vì đã làm phiền anh lúc đang bận. Tôi gọi điện đến sau khi xem trang web bán máy cũ.' },
      { role: 'seller', jp: 'ありがとうございます。どの機械についてのお問い合わせでしょうか。', vn: 'Cảm ơn anh. Anh muốn hỏi về chiếc máy nào ạ?' },
      { role: 'buyer', jp: '掲載番号1024番の「アマダ製プレス機」は、まだ在庫ありますか。', vn: 'Chiếc "Máy dập hiệu Amada" mã số đăng 1024 còn hàng không anh?' },
      { role: 'seller', jp: 'はい、まだございます。現在、商談が入っていない状態です。', vn: 'Vâng, vẫn còn ạ. Hiện tại chưa có ai đặt vấn đề mua chiếc đó.' }
    ]
  },
  {
    id: 'd61',
    title: 'Hỏi về tình trạng và lịch sử sử dụng (Machine Condition)',
    lines: [
      { role: 'buyer', jp: 'この機械の使用時間（アワーメーター）はどのくらいですか。', vn: 'Thời gian sử dụng (số giờ chạy) của máy này là bao nhiêu?' },
      { role: 'seller', jp: '約5,000時間です。主にアルミ材の加工に使用されていました。', vn: 'Khoảng 5,000 giờ. Chủ yếu được dùng để gia công vật liệu nhôm.' },
      { role: 'buyer', jp: '定期的なオーバーホールは実施されていますか。', vn: 'Máy có được thực hiện đại tu định kỳ không?' },
      { role: 'seller', jp: 'はい、2年前にメーカーによる点検と部品交換を済ませております。', vn: 'Vâng, cách đây 2 năm đã được nhà sản xuất kiểm tra và thay thế phụ tùng rồi.' }
    ]
  },
  {
    id: 'd62',
    title: 'Thương lượng giá và chi phí vận chuyển (Price & Shipping)',
    lines: [
      { role: 'buyer', jp: '価格についてですが、もう少しお値引きは可能でしょうか。', vn: 'Về giá cả, anh có thể giảm giá thêm chút được không?' },
      { role: 'seller', jp: '既にかなり安く設定しておりますが、即決いただけるなら5%引きます。', vn: 'Chúng tôi đã để giá khá thấp rồi, nhưng nếu anh quyết định mua ngay thì tôi sẽ giảm 5%.' },
      { role: 'buyer', jp: '搬出費用（レッカー代）はこちらの負担になりますか。', vn: 'Chi phí bốc hàng ra (tiền xe cẩu) sẽ do bên tôi chịu phải không?' },
      { role: 'seller', jp: '原則として、車上渡し以降の費用はお客様のご負担となります。', vn: 'Theo nguyên tắc, các chi phí từ sau khi giao hàng lên xe sẽ do khách hàng chịu.' }
    ]
  },
  {
    id: 'd63',
    title: 'Hẹn lịch đến xem máy trực tiếp (Site Visit)',
    lines: [
      { role: 'buyer', jp: '現物を確認したいのですが、来週の火曜日に伺ってもよろしいですか。', vn: 'Tôi muốn kiểm tra máy trực tiếp, thứ Ba tuần tới tôi đến xem có được không?' },
      { role: 'seller', jp: '承知しました。当日は電源を入れて動作確認ができるように準備しておきます。', vn: 'Đã rõ. Hôm đó chúng tôi sẽ chuẩn bị sẵn để anh có thể bật máy lên kiểm tra vận hành.' },
      { role: 'buyer', jp: 'ありがとうございます。午後2時頃に工場の方へお邪魔します。', vn: 'Cảm ơn anh. Khoảng 2 giờ chiều tôi sẽ ghé qua phía nhà máy.' },
      { role: 'seller', jp: 'お待ちしております。お気をつけてお越しください。', vn: 'Chúng tôi sẽ đợi. Chúc anh đi đường bình an.' }
    ]
  },
  {
    id: 'd64',
    title: 'Đầm phán giá dựa trên đối thủ (Competitor Based Negotiation)',
    lines: [
      { role: 'buyer', jp: '他社さんからは、もう少し低い見積もりをいただいているのですが。', vn: 'Tôi đang nhận được báo giá thấp hơn một chút từ công ty khác.' },
      { role: 'seller', jp: '左様でございますか。具体的にどの程度の差がありますでしょうか。', vn: 'Vậy ạ? Cụ thể là chênh lệch khoảng bao nhiêu thưa anh?' },
      { role: 'buyer', jp: 'あと10万円ほど安くなれば、御社に即決したいと考えています。', vn: 'Nếu giảm thêm được khoảng 10 vạn Yên nữa thì tôi muốn quyết định lấy bên anh ngay.' },
      { role: 'seller', jp: '上司に相談してみます。少々お時間をいただけますか。', vn: 'Tôi sẽ thảo luận với cấp trên. Anh vui lòng chờ tôi một lát được không?' }
    ]
  },
  {
    id: 'd65',
    title: 'Chiết khấu khi mua số lượng lớn (Volume Discount)',
    lines: [
      { role: 'buyer', jp: '3台まとめて購入する場合、ボリュームディスカウントはありますか。', vn: 'Nếu tôi mua gộp 3 máy một lúc thì có được chiết khấu số lượng lớn không?' },
      { role: 'seller', jp: 'はい、複数台のご購入でしたら特別価格を適用させていただきます。', vn: 'Vâng, nếu mua nhiều máy chúng tôi sẽ áp dụng mức giá đặc biệt ạ.' },
      { role: 'buyer', jp: '具体的に1台あたり何パーセント程度安くなりますか。', vn: 'Cụ thể là mỗi máy sẽ được giảm khoảng bao nhiêu phần trăm?' },
      { role: 'seller', jp: '通常価格から10%オフでご提示させていただきます。', vn: 'Chúng tôi sẽ đưa ra mức giá giảm 10% so với giá thông thường.' }
    ]
  },
  {
    id: 'd66',
    title: 'Đàm phán phương thức thanh toán (Payment Terms)',
    lines: [
      { role: 'buyer', jp: '支払い条件について、分割払いは可能でしょうか。', vn: 'Về điều kiện thanh toán, tôi có thể trả góp được không?' },
      { role: 'seller', jp: '基本的には一括払いですが、3回までの分割なら検討可能です。', vn: 'Về cơ bản là thanh toán một lần, nhưng nếu chia làm 3 lần thì chúng tôi có thể cân nhắc.' },
      { role: 'buyer', jp: '着手金として30%、納品後に残金を支払う形はどうですか。', vn: 'Đặt cọc trước 30%, sau khi giao hàng sẽ thanh toán nốt phần còn lại thì sao?' },
      { role: 'seller', jp: 'その条件で承知いたしました。契約書を修正いたします。', vn: 'Chúng tôi chấp nhận điều kiện đó. Tôi sẽ sửa lại hợp đồng.' }
    ]
  },
  {
    id: 'd67',
    title: 'Đề nghị làm tròn giá cuối cùng (Final Rounding Off)',
    lines: [
      { role: 'buyer', jp: '端数を切り捨てて、ちょうど500万円にしていただけませんか。', vn: 'Anh có thể bớt phần lẻ đi, để tròn đúng 500 vạn Yên được không?' },
      { role: 'seller', jp: 'それは厳しいですが、本日ご契約いただけるならお受けします。', vn: 'Mức đó thì hơi khó cho chúng tôi, nhưng nếu anh ký hợp đồng ngay hôm nay thì tôi xin chấp nhận.' },
      { role: 'buyer', jp: 'ありがとうございます！それではその価格でお願いします。', vn: 'Cảm ơn anh! Vậy chốt với mức giá đó nhé.' },
      { role: 'seller', jp: 'こちらこそ、ありがとうございます。手続きを進めさせていただきます。', vn: 'Chúng tôi cũng cảm ơn anh. Tôi sẽ tiến hành làm thủ tục.' }
    ]
  },
  {
    id: 'd68',
    title: 'Hỏi về phụ kiện đi kèm máy (Included Accessories)',
    lines: [
      { role: 'buyer', jp: '標準付属品（工具やホルダー）はすべて揃っていますか。', vn: 'Các phụ kiện tiêu chuẩn (như dụng cụ, đầu kẹp) có đi kèm đầy đủ không?' },
      { role: 'seller', jp: 'はい、取扱説明書に記載されている標準付属品はすべてお付けします。', vn: 'Vâng, tất cả các phụ kiện tiêu chuẩn được ghi trong sách hướng dẫn đều sẽ được đi kèm.' },
      { role: 'buyer', jp: 'ツールホルダーなどの別売り品も、いくつか譲っていただけませんか。', vn: 'Anh có thể nhượng lại cho tôi một vài món mua lẻ như đầu kẹp (tool holder) không?' },
      { role: 'seller', jp: '予備がいくつかありますので、サービスでお付けしましょう。', vn: 'Chúng tôi có vài món dự phòng, nên sẽ tặng kèm anh như một dịch vụ ưu đãi.' }
    ]
  },
  {
    id: 'd69',
    title: 'Xác nhận về các chi tiết nhỏ trong ảnh (Parts in Photos)',
    lines: [
      { role: 'buyer', jp: 'ウェブサイトの写真に写っている周辺機器も含まれますか。', vn: 'Các thiết bị ngoại vi chụp trong ảnh trên website có bao gồm trong giá không?' },
      { role: 'seller', jp: '申し訳ありませんが、写真のコンプレッサーは別売りとなります。', vn: 'Rất tiếc nhưng máy nén khí trong ảnh là hàng bán riêng ạ.' },
      { role: 'buyer', jp: '本体に付いている配線やダクト類はどうなりますか。', vn: 'Vậy còn hệ thống dây điện và đường ống dẫn gắn trên thân máy thì sao?' },
      { role: 'seller', jp: 'それらは機械の一部ですので、そのままお渡しいたします。', vn: 'Những thứ đó là một phần của máy nên chúng tôi sẽ để nguyên như vậy giao cho anh.' }
    ]
  },
  {
    id: 'd70',
    title: 'Đàm phán lấy thêm phụ tùng dự phòng (Negotiating Spare Parts)',
    lines: [
      { role: 'buyer', jp: '消耗品（パッキンやフィルター）の予備があれば、一緒にいただけますか。', vn: 'Nếu có phụ tùng tiêu hao dự phòng (như gioăng, bộ lọc), anh có thể cho tôi lấy cùng luôn không?' },
      { role: 'seller', jp: '在庫を確認しましたが、未使用のフィルターが2個ありましたので同梱します。', vn: 'Tôi đã kiểm tra kho, còn 2 bộ lọc chưa sử dụng nên tôi sẽ đóng gói cùng luôn.' },
      { role: 'buyer', jp: '助かります！工具箱（ツールボックス）もそのままいただけますか。', vn: 'May quá! Tôi có thể lấy luôn cả hộp dụng cụ (tool box) đó không?' },
      { role: 'seller', jp: 'はい、その機械専用の工具一式が入っていますので、そのままお持ちください。', vn: 'Vâng, trong đó có bộ dụng cụ chuyên dụng cho máy đó, nên anh cứ việc lấy đi.' }
    ]
  },
  {
    id: 'd71',
    title: 'Hỏi về tài liệu kỹ thuật đi kèm (Technical Documents)',
    lines: [
      { role: 'buyer', jp: '電気回路図やパラメータ表などの資料はありますか。', vn: 'Anh có các tài liệu như sơ đồ mạch điện hay bảng tham số không?' },
      { role: 'seller', jp: 'はい、メーカー発行のオリジナル資料がすべて保管されています。', vn: 'Vâng, tất cả tài liệu gốc do nhà sản xuất phát hành đều đang được lưu giữ.' },
      { role: 'buyer', jp: 'それらがないと修理が難しいので、必ず付けてください。', vn: 'Nếu không có chúng thì sẽ rất khó sửa chữa, nên anh nhất định phải đính kèm nhé.' },
      { role: 'seller', jp: '承知いたしました。搬出時にファイルにまとめてお渡しします。', vn: 'Tôi rõ rồi. Lúc bốc hàng tôi sẽ tập hợp lại vào bìa hồ sơ rồi giao cho anh.' }
    ]
  },
  {
    id: 'd72',
    title: 'An toàn lao động - Nhắc nhở đeo bảo hộ (Safety First)',
    lines: [
      { role: 'seller', jp: '現場に入る前に、ヘルメットと安全靴を着用してください。', vn: 'Trước khi vào hiện trường, hãy đội mũ bảo hiểm và đi giày bảo hộ.' },
      { role: 'buyer', jp: '分かりました。安全メガネも必要ですか。', vn: 'Tôi hiểu rồi. Có cần cả kính bảo hộ không?' },
      { role: 'seller', jp: 'はい、火花が飛ぶ作業があるので必ず着用してください。', vn: 'Có, vì có công việc phát ra tia lửa nên nhất định phải đeo.' }
    ]
  },
  {
    id: 'd73',
    title: 'Báo cáo lỗi sản phẩm (Quality Issue)',
    lines: [
      { role: 'buyer', jp: 'このロットの製品にバリ（不備）が見つかりました。', vn: 'Đã tìm thấy bavia (lỗi) trên các sản phẩm của lô này.' },
      { role: 'seller', jp: 'どのくらいの数に不具合がありますか。', vn: 'Có khoảng bao nhiêu sản phẩm bị lỗi?' },
      { role: 'buyer', jp: '100個中、15個程度です。切削条件の調整が必要かもしれません。', vn: 'Khoảng 15 trong số 100 cái. Có lẽ cần phải điều chỉnh điều kiện cắt gọt.' }
    ]
  },
  {
    id: 'd74',
    title: 'Lập kế hoạch sản xuất tuần tới (Production Planning)',
    lines: [
      { role: 'buyer', jp: '来週の生産スケジュールを確認しましょう。', vn: 'Chúng ta hãy xác nhận lịch trình sản xuất tuần tới.' },
      { role: 'seller', jp: '来週は急ぎの注文が入ったので、ラインを1本増やします。', vn: 'Vì tuần sau có đơn hàng gấp nên chúng tôi sẽ tăng thêm 1 dây chuyền.' },
      { role: 'buyer', jp: '材料の在庫は足りますか。', vn: 'Liệu vật liệu tồn kho có đủ không?' },
      { role: 'seller', jp: 'はい、明日5トン入荷する予定です。', vn: 'Vâng, dự kiến mai sẽ nhập thêm 5 tấn.' }
    ]
  },
  {
    id: 'd75',
    title: 'Yêu cầu bảo trì máy đột xuất (Maintenance Request)',
    lines: [
      { role: 'buyer', jp: 'プレス機の調子が悪いので、見ていただけませんか。', vn: 'Máy dập đang có trục trặc, anh có thể xem giúp tôi không?' },
      { role: 'seller', jp: 'どのような症状ですか。', vn: 'Triệu chứng như thế nào?' },
      { role: 'buyer', jp: 'スライドの動きが鈍く、異音がします。', vn: 'Chuyển động của bàn trượt bị chậm và có tiếng kêu lạ.' },
      { role: 'seller', jp: '潤滑ポンプの故障かもしれません。すぐに点検します。', vn: 'Có thể là do hỏng bơm bôi trơn. Tôi sẽ kiểm tra ngay.' }
    ]
  },
  {
    id: 'd76',
    title: 'Bàn giao ca làm việc (Shift Handover)',
    lines: [
      { role: 'buyer', jp: '夜勤の引き継ぎをお願いします。', vn: 'Hãy thực hiện bàn giao từ ca đêm.' },
      { role: 'seller', jp: '2号機は油漏れのため、現在停止しています。', vn: 'Máy số 2 hiện đang dừng do rò rỉ dầu.' },
      { role: 'buyer', jp: '修理の依頼は出しましたか。', vn: 'Anh đã gửi yêu cầu sửa chữa chưa?' },
      { role: 'seller', jp: 'はい、保全チームが10時に来る予定です。', vn: 'Rồi, đội bảo trì dự kiến sẽ đến lúc 10 giờ.' }
    ]
  },
  {
    id: 'd77',
    title: 'Kiểm kê kho hàng (Stock Count)',
    lines: [
      { role: 'buyer', jp: '棚卸の結果、ネジの在庫が足りません。', vn: 'Kết quả kiểm kê cho thấy tồn kho ốc vít không đủ.' },
      { role: 'seller', jp: '書類の数字とどのくらい差がありますか。', vn: 'Chênh lệch bao nhiêu so với con số trên giấy tờ?' },
      { role: 'buyer', jp: '500本ほど不足しています。入力ミスの可能性があります。', vn: 'Thiếu khoảng 500 chiếc. Có khả năng là do lỗi nhập liệu.' }
    ]
  },
  {
    id: 'd78',
    title: 'Xử lý khi có tai nạn lao động (Accident Response)',
    lines: [
      { role: 'buyer', jp: '大変です！作業員が手を怪我しました。', vn: 'Nguy rồi! Nhân viên bị thương ở tay.' },
      { role: 'seller', jp: 'すぐに救急箱を持ってきてください！出血はひどいですか。', vn: 'Hãy mang ngay hộp sơ cứu đến đây! Có bị chảy máu nhiều không?' },
      { role: 'buyer', jp: 'はい、深く切っています。病院に連絡します。', vn: 'Có, vết cắt khá sâu. Tôi sẽ liên hệ bệnh viện.' }
    ]
  },
  {
    id: 'd79',
    title: 'Giải thích quy trình 5S (5S Methodology)',
    lines: [
      { role: 'buyer', jp: '今日の5S活動の目標は何ですか。', vn: 'Mục tiêu của hoạt động 5S hôm nay là gì?' },
      { role: 'seller', jp: '「整理」を重点的に行い、不要な私物を片付けます。', vn: 'Chúng ta sẽ tập trung vào "Sàng lọc", dọn dẹp các đồ dùng cá nhân không cần thiết.' },
      { role: 'buyer', jp: '床のライン引きも直したほうがいいですね。', vn: 'Cũng nên kẻ lại các đường chỉ dẫn trên sàn nữa nhỉ.' }
    ]
  },
  {
    id: 'd80',
    title: 'Thương lượng thời gian giao hàng (Lead Time Negotiation)',
    lines: [
      { role: 'buyer', jp: '納期を1週間早めていただけませんか。', vn: 'Anh có thể đẩy sớm hạn giao hàng lên 1 tuần được không?' },
      { role: 'seller', jp: '材料の調達に時間がかかるため、それは難しいです。', vn: 'Vì việc điều phối vật liệu mất thời gian nên điều đó khá khó khăn.' },
      { role: 'buyer', jp: '追加料金を払うので、特急で対応できませんか。', vn: 'Tôi sẽ trả thêm phí, anh có thể xử lý hỏa tốc không?' }
    ]
  },
  {
    id: 'd81',
    title: 'Hỏi về chứng chỉ của thợ hàn (Welder Certification)',
    lines: [
      { role: 'buyer', jp: '溶接作業を行う作業員は有資格者ですか。', vn: 'Nhân viên thực hiện việc hàn có chứng chỉ rành nghề không?' },
      { role: 'seller', jp: 'はい、JISの溶接技能者資格を持ったスタッフが担当します。', vn: 'Vâng, các nhân viên có chứng chỉ kỹ thuật hàn JIS sẽ phụ trách.' },
      { role: 'buyer', jp: '証明書のコピーをいただけますか。', vn: 'Tôi có thể xin bản sao chứng chỉ không?' }
    ]
  },
  {
    id: 'd82',
    title: 'Yêu cầu báo giá linh kiện tiêu hao (Consumables Quote)',
    lines: [
      { role: 'buyer', jp: 'フィルターとベルトの見積もりをお願いします。', vn: 'Cho tôi xin báo giá bộ lọc và dây curoa.' },
      { role: 'seller', jp: '承知しました。各5本ずつの注文でよろしいですか。', vn: 'Đã rõ. Anh đặt mỗi loại 5 chiếc có đúng không?' },
      { role: 'buyer', jp: 'はい、予備として在庫しておきたいです。', vn: 'Vâng, tôi muốn để sẵn trong kho làm dự phòng.' }
    ]
  },
  {
    id: 'd83',
    title: 'Thông báo dừng máy để bảo trì định kỳ (Scheduled Shutdown)',
    lines: [
      { role: 'buyer', jp: '明日の午後1時から、全ラインを停止して点検を行います。', vn: 'Từ 1 giờ chiều mai, chúng tôi sẽ dừng tất cả các dây chuyền để kiểm tra.' },
      { role: 'seller', jp: '完了まで何時間くらいかかりますか。', vn: 'Mất khoảng mấy tiếng cho đến khi hoàn thành?' },
      { role: 'buyer', jp: '3時間の予定です。4時までに再稼働します。', vn: 'Dự kiến là 3 tiếng. Ca sản xuất sẽ bắt đầu lại trước 4 giờ.' }
    ]
  },
  {
    id: 'd84',
    title: 'Xác nhận kích thước pallet đóng hàng (Pallet Size Confirmation)',
    lines: [
      { role: 'buyer', jp: '発送用のパレットは、1100型で大丈夫ですか。', vn: 'Pallet dùng để gửi hàng loại 1100 có được không?' },
      { role: 'seller', jp: 'はい、標準サイズなのでトラックの積載も問題ありません。', vn: 'Vâng, đó là kích thước tiêu chuẩn nên việc chất lên xe tải không có vấn đề gì.' },
      { role: 'buyer', jp: '段積みの高さ制限はありますか。', vn: 'Có giới hạn về chiều cao khi xếp chồng không?' }
    ]
  },
  {
    id: 'd85',
    title: 'Bàn luận về chi phí rác thải công nghiệp (Waste Disposal Costs)',
    lines: [
      { role: 'buyer', jp: '産業廃棄物の処理費用が高くなっています。', vn: 'Chi phí xử lý rác thải công nghiệp đang tăng cao.' },
      { role: 'seller', jp: '分別を徹底して、リサイクルできるものを増やしましょう。', vn: 'Chúng ta hãy triệt để phân loại để tăng lượng rác có thể tái chế.' },
      { role: 'buyer', jp: '金属くずの買い取り業者を探してみます。', vn: 'Tôi sẽ thử tìm đơn vị thu mua phế liệu kim loại.' }
    ]
  },
  {
    id: 'd86',
    title: 'Thảo luận thông số máy tùy chỉnh (Custom Machine Specs)',
    lines: [
      { role: 'buyer', jp: '特注仕様（カスタム）のコンベアを検討しています。', vn: 'Tôi đang cân nhắc một chiếc băng tải có thông số tùy chỉnh (đặc chủng).' },
      { role: 'seller', jp: 'どのような変更が必要ですか。', vn: 'Anh cần những thay đổi như thế nào?' },
      { role: 'buyer', jp: '耐熱ベルトへの変更と、速度の可変範囲を広げたいです。', vn: 'Tôi muốn đổi sang dây đai chịu nhiệt và mở rộng phạm vi điều chỉnh tốc độ.' }
    ]
  },
  {
    id: 'd87',
    title: 'Diễn tập dừng khẩn cấp (Emergency Stop Drill)',
    lines: [
      { role: 'buyer', jp: '今から非常停止の訓練を行います。', vn: 'Bây giờ chúng ta sẽ thực hiện diễn tập dừng khẩn cấp.' },
      { role: 'seller', jp: '異常を発見したら、すぐに赤いボタンを押してください。', vn: 'Nếu phát hiện bất thường, hãy nhấn ngay nút màu đỏ.' },
      { role: 'buyer', jp: '解除方法も再確認しておきましょう。', vn: 'Chúng ta cũng hãy kiểm tra lại cách reset (xóa lỗi) nhé.' }
    ]
  },
  {
    id: 'd88',
    title: 'Hướng dẫn nhân viên mới về PPE (PPE Orientation)',
    lines: [
      { role: 'buyer', jp: '新人研修で、保護具の重要性を説明してください。', vn: 'Hãy giải thích tầm quan trọng của đồ bảo hộ trong khóa đào tạo nhân viên mới.' },
      { role: 'seller', jp: '耳栓や防塵マスクが必要なエリアを周知します。', vn: 'Tôi sẽ phổ biến về các khu vực cần đeo nút tai và khẩu trang chống bụi.' },
      { role: 'buyer', jp: '着用していない場合は、厳重に注意してください。', vn: 'Nếu ai không đeo, hãy nhắc nhở một cách nghiêm khắc.' }
    ]
  },
  {
    id: 'd89',
    title: 'Sắp xếp tủ dụng cụ (Tool Cabinet Organization)',
    lines: [
      { role: 'buyer', jp: '工具箱の中が乱雑になっています。', vn: 'Bên trong hộp dụng cụ đang rất bừa bãi.' },
      { role: 'seller', jp: '姿置き（影絵管理）を導入して、戻し場所を明確にしましょう。', vn: 'Chúng ta hãy áp dụng quản lý theo hình bóng (vẽ hình dụng cụ lên bảng) để làm rõ chỗ để lại đồ.' },
      { role: 'buyer', jp: 'いいアイデアですね。週末に準備しましょう。', vn: 'Ý hay đấy. Hãy chuẩn bị vào cuối tuần nhé.' }
    ]
  },
  {
    id: 'd90',
    title: 'Báo cáo mất dụng cụ (Missing Tool Report)',
    lines: [
      { role: 'buyer', jp: '17mmのスパナが見当たりません。', vn: 'Tôi không thấy cờ lê 17mm đâu cả.' },
      { role: 'seller', jp: '最後に使ったのは誰ですか。', vn: 'Ai là người dùng cuối cùng?' },
      { role: 'buyer', jp: '私が昨日の夕方使いました。周辺をもう一度探してみます。', vn: 'Tôi đã dùng vào chiều tối qua. Tôi sẽ thử tìm quanh đây một lần nữa.' }
    ]
  },
  {
    id: 'd91',
    title: 'Thảo luận vấn đề rung lắc của máy (Machine Vibration)',
    lines: [
      { role: 'buyer', jp: '高速回転時に異常な振動が発生しています。', vn: 'Xảy ra rung lắc bất thường khi máy quay ở tốc độ cao.' },
      { role: 'seller', jp: '軸のバランスが崩れている可能性があります。', vn: 'Có khả năng là sự cân bằng của trục bị lệch.' },
      { role: 'buyer', jp: 'ベアリングの摩耗もチェックしてください。', vn: 'Anh cũng hãy kiểm tra độ mòn của vòng bi (bạc đạn) nhé.' }
    ]
  },
  {
    id: 'd92',
    title: 'Cài đặt chương trình CNC mới (New CNC Program Setup)',
    lines: [
      { role: 'buyer', jp: '新しい製品のCNCプログラムを作成しました。', vn: 'Tôi đã tạo chương trình CNC cho sản phẩm mới.' },
      { role: 'seller', jp: 'シミュレーションで衝突がないか確認しましたか。', vn: 'Anh đã kiểm tra mô phỏng xem có bị va chạm không chưa?' },
      { role: 'buyer', jp: 'はい。まずはドライランで慎重にテストします。', vn: 'Vâng. Đầu tiên tôi sẽ test cẩn thận bằng chế độ chạy không tải (dry run).' }
    ]
  },
  {
    id: 'd93',
    title: 'Kiểm tra độ cứng vật liệu (Material Hardness Check)',
    lines: [
      { role: 'buyer', jp: 'この材料の硬度は規定通りですか。', vn: 'Độ cứng của vật liệu này có đúng theo quy định không?' },
      { role: 'seller', jp: 'ロックウェル硬度計で測定したところ、HRC45でした。', vn: 'Đo bằng máy đo độ cứng Rockwell thì kết quả là HRC45.' },
      { role: 'buyer', jp: '少し硬すぎますね。熱処理の条件を確認してください。', vn: 'Hơi cứng quá nhỉ. Hãy kiểm tra lại điều kiện nhiệt luyện.' }
    ]
  },
  {
    id: 'd94',
    title: 'Yêu cầu về độ nhám bề mặt (Surface Roughness)',
    lines: [
      { role: 'buyer', jp: 'この面はRa0.8以下で仕上げてください。', vn: 'Hãy gia công bề mặt này đạt độ nhám Ra0.8 trở xuống.' },
      { role: 'seller', jp: '研磨工程を追加する必要がありますね。', vn: 'Vậy thì cần phải thêm công đoạn mài bóng rồi.' },
      { role: 'buyer', jp: 'コストがかかってもいいので、鏡面仕上げに近づけてください。', vn: 'Dây chuyền chấp nhận tốn kém, nên hãy làm cho nó gần như đánh bóng gương.' }
    ]
  },
  {
    id: 'd95',
    title: 'Đặt hàng dụng cụ cắt đặc biệt (Special Tool Order)',
    lines: [
      { role: 'buyer', jp: '特殊な形状のエンドミルを注文したいです。', vn: 'Tôi muốn đặt mua dao phay ngón có hình dạng đặc biệt.' },
      { role: 'seller', jp: '納期は通常より1ヶ月ほど長くかかります。', vn: 'Thời gian giao hàng sẽ mất lâu hơn bình thường khoảng 1 tháng.' },
      { role: 'buyer', jp: '在庫が切れる前に早めに発注しておきます。', vn: 'Tôi sẽ đặt hàng sớm trước khi hết hàng tồn.' }
    ]
  },
  {
    id: 'd96',
    title: 'Cải thiện chiếu sáng nhà xưởng (Factory Lighting)',
    lines: [
      { role: 'buyer', jp: '検品エリアが暗いので、LED照明を追加してください。', vn: 'Khu vực kiểm hàng hơi tối, hãy lắp thêm đèn LED.' },
      { role: 'seller', jp: '手元の明るさを500ルクス以上に調整します。', vn: 'Tôi sẽ điều chỉnh độ sáng tại chỗ làm việc lên trên 500 lux.' },
      { role: 'buyer', jp: 'ありがとうございます。これで細かい傷も見つけやすくなります。', vn: 'Cảm ơn anh. Như vậy sẽ dễ dàng phát hiện các vết trầy xước nhỏ hơn.' }
    ]
  },
  {
    id: 'd97',
    title: 'Yêu cầu xe cẩu nâng vật nặng (Crane for Heavy Lifting)',
    lines: [
      { role: 'buyer', jp: '5トンの金型を移動させるので、クレーンをお願いします。', vn: 'Tôi sẽ di chuyển khuôn mẫu 5 tấn, hãy cho tôi mượn xe cẩu.' },
      { role: 'seller', jp: '有資格者の合図に従って作業してください。', vn: 'Hãy làm việc theo tín hiệu của người có chứng chỉ (người ra hiệu).' },
      { role: 'buyer', jp: 'はい、周囲の安全を十分に確認します。', vn: 'Vâng, tôi sẽ xác nhận đầy đủ an toàn xung quanh.' }
    ]
  },
  {
    id: 'd98',
    title: 'Rò rỉ khí trong hệ thống (Pneumatic Leak)',
    lines: [
      { role: 'buyer', jp: 'エアー配管から漏れる音が聞こえます。', vn: 'Tôi nghe thấy tiếng khí rò rỉ từ đường ống dẫn khí nén.' },
      { role: 'seller', jp: '石鹸水を使って漏れ箇所を特定しましょう。', vn: 'Chúng ta hãy dùng nước xà phòng để xác định vị trí rò rỉ.' },
      { role: 'buyer', jp: '継手の締め付けが緩んでいるだけのようです。', vn: 'Có vẻ như chỉ là do đầu nối (cút nối) bị lỏng thôi.' }
    ]
  },
  {
    id: 'd99',
    title: 'Kiểm tra nồng độ dầu làm mát (Coolant Concentration)',
    lines: [
      { role: 'buyer', jp: '切削液（クーラント）の濃度を測定してください。', vn: 'Hãy đo nồng độ dung dịch cắt gọt (nước làm mát).' },
      { role: 'seller', jp: '糖度計での測定結果は3％でした。少し薄いです。', vn: 'Kết quả đo bằng khúc xạ kế là 3%. Hơi bị loãng.' },
      { role: 'buyer', jp: '原液を補充して5％まで上げてください。', vn: 'Hãy bổ sung thêm dung dịch nguyên chất để nâng lên mức 5%.' }
    ]
  },
  {
    id: 'd100',
    title: 'Xác nhận xuất hàng cuối cùng (Final Shipment)',
    lines: [
      { role: 'buyer', jp: '最終製品の梱包が完了しました。明日出荷します。', vn: 'Việc đóng gói sản phẩm cuối cùng đã hoàn tất. Mai sẽ xuất hàng.' },
      { role: 'seller', jp: '送り状と現品票の照合は終わりましたか。', vn: 'Anh đã đối chiếu xong vận đơn và phiếu gửi hàng chưa?' },
      { role: 'buyer', jp: 'はい、全て一致しています。トラックの手配も済みました。', vn: 'Vâng, tất cả đều khớp. Việc sắp xếp xe tải cũng đã xong.' }
    ]
  },
  {
    id: 'd101',
    title: 'Kiểm tra đấu nối điện (Electrical Wiring)',
    lines: [
      { role: 'buyer', jp: '制御盤内の配線に緩みがないか確認してください。', vn: 'Hãy kiểm tra xem các đấu nối dây điện trong tủ điều khiển có bị lỏng không.' },
      { role: 'seller', jp: '端子台のネジを全て増し締めしました。', vn: 'Tôi đã siết chặt lại toàn bộ ốc vít ở các đầu cốt (terminal block).' },
      { role: 'buyer', jp: '回路図通りに配線されているかも、テスターでチェックしましょう。', vn: 'Chúng ta cũng hãy dùng đồng hồ vạn năng để kiểm tra xem dây có được đấu đúng như sơ đồ mạch không.' }
    ]
  },
  {
    id: 'd102',
    title: 'Sửa chữa hệ thống thủy lực (Hydraulic Repair)',
    lines: [
      { role: 'buyer', jp: '油圧シリンダーから作動油が漏れています。', vn: 'Dầu thủy lực đang bị rò rỉ từ xi lanh thủy lực.' },
      { role: 'seller', jp: 'パッキン（シール）の劣化が原因のようです。', vn: 'Nguyên nhân có vẻ là do gioăng phớt (seal) bị lão hóa.' },
      { role: 'buyer', jp: 'すぐに交換用パーツを発注してください。', vn: 'Hãy đặt hàng phụ tùng thay thế ngay lập tức.' }
    ]
  },
  {
    id: 'd103',
    title: 'Giao hàng bằng container (Container Loading)',
    lines: [
      { role: 'buyer', jp: '40フィートのコンテナに荷物を積み込みます。', vn: 'Chúng tôi sẽ xếp hàng vào container 40 feet.' },
      { role: 'seller', jp: '重量バランスを考えて配置してください。', vn: 'Hãy bố trí hàng hóa cân đối trọng lượng.' },
      { role: 'buyer', jp: 'ラッシング（固定）をしっかり行い、荷崩れを防ぎます。', vn: 'Chúng tôi sẽ chằng buộc kĩ càng để ngăn chặn việc hàng hóa bị đổ vỡ.' }
    ]
  },
  {
    id: 'd104',
    title: 'Chuẩn bị đánh giá ISO (ISO Audit Prep)',
    lines: [
      { role: 'buyer', jp: '来週、ISO外部審査のアドバイザーが来ます。', vn: 'Tuần sau sẽ có cố vấn đánh giá bên ngoài của ISO đến.' },
      { role: 'seller', jp: '計測器の校正証明書は全て揃っていますか。', vn: 'Các giấy chứng nhận hiệu chuẩn thiết bị đo đã có đủ hết chưa?' },
      { role: 'buyer', jp: 'はい、有効期限内のものをファイルにまとめました。', vn: 'Rồi, tôi đã tập hợp các chứng chỉ còn thời hạn vào hồ sơ.' }
    ]
  },
  {
    id: 'd105',
    title: 'Cân chỉnh thăng bằng máy (Machine Leveling)',
    lines: [
      { role: 'buyer', jp: '旋盤の据え付け位置で、水準器を使って水平を出してください。', vn: 'Hãy dùng nivo (thước cân bằng) để lấy thăng bằng tại vị trí lắp đặt máy tiện.' },
      { role: 'seller', jp: '床のアンカーボルトを調整して固定します。', vn: 'Tôi sẽ điều chỉnh các bu lông neo dưới sàn để cố định.' },
      { role: 'buyer', jp: '精度に影響するので、慎重にお願いします。', vn: 'Việc này ảnh hưởng đến độ chính xác nên làm ơn hãy thực hiện cẩn thận.' }
    ]
  },
  {
    id: 'd106',
    title: 'Thảo luận về khuyết tật mối hàn (Welding Defects)',
    lines: [
      { role: 'buyer', jp: '溶接ビードにピット（小さな穴）が発生しています。', vn: 'Xuất hiện các lỗ khí (pit) trên đường hàn.' },
      { role: 'seller', jp: 'シールドガスの流量が不足しているかもしれません。', vn: 'Có thể là do lưu lượng khí bảo vệ không đủ.' },
      { role: 'buyer', jp: '母材の油分もしっかり取り除いてから作業してください。', vn: 'Hãy tẩy sạch dầu mỡ trên vật liệu nền trước khi làm việc nhé.' }
    ]
  },
  {
    id: 'd107',
    title: 'Sử dụng thước kẹp Vernier (Using Calipers)',
    lines: [
      { role: 'buyer', jp: 'ノギスで外径を測ってください。公差はプラスマイナス0.05です。', vn: 'Hãy dùng thước kẹp để đo đường kính ngoài. Dung sai là +/- 0.05.' },
      { role: 'seller', jp: '測定値は20.02mmでした。合格範囲内です。', vn: 'Giá trị đo là 20.02mm. Nằm trong phạm vi đạt.' },
      { role: 'buyer', jp: 'ゼロ点合わせを忘れずに行ってください。', vn: 'Đừng quên thực hiện việc chỉnh điểm 0.' }
    ]
  },
  {
    id: 'd108',
    title: 'Vấn đề bong tróc sơn (Paint Peeling)',
    lines: [
      { role: 'buyer', jp: '塗装が剥がれやすくなっています。下地処理に問題がありますか。', vn: 'Sơn đang bị dễ bong tróc. Liệu có vấn đề gì ở công đoạn xử lý bề mặt không?' },
      { role: 'seller', jp: '脱脂が不十分だった可能性があります。', vn: 'Có khả năng là việc tẩy dầu mỡ chưa được triệt để.' },
      { role: 'buyer', jp: '洗浄工程の温度を上げて、乾燥時間を長くしましょう。', vn: 'Hãy nâng nhiệt độ của công đoạn rửa và kéo dài thời gian sấy.' }
    ]
  },
  {
    id: 'd109',
    title: 'Quản lý phụ tùng dự phòng (Spare Parts Mgmt)',
    lines: [
      { role: 'buyer', jp: '非常用予備部品のリストを更新してください。', vn: 'Hãy cập nhật danh sách phụ tùng dự phòng khẩn cấp.' },
      { role: 'seller', jp: '消耗の激しいベアリングとVベルトを優先的に発注します。', vn: 'Tôi sẽ ưu tiên đặt hàng vòng bi và dây curoa vì chúng nhanh mòn.' },
      { role: 'buyer', jp: '在庫切れはライン停止に直結するので、厳重に管理しましょう。', vn: 'Hết hàng tồn kho sẽ dẫn đến dừng dây chuyền ngay lập tức, nên hãy quản lý nghiêm ngặt nhé.' }
    ]
  },
  {
    id: 'd110',
    title: 'Tra mỡ bôi trơn máy (Greasing Machine)',
    lines: [
      { role: 'buyer', jp: '可動部にグリスを給油してください。', vn: 'Hãy bơm mỡ bôi trơn vào các bộ phận chuyển động.' },
      { role: 'seller', jp: 'グリスニップルが詰まっていて入らない箇所があります。', vn: 'Có vị trí vú mỡ bị tắc nên mỡ không vào được.' },
      { role: 'buyer', jp: '新しいニップルに交換して、確実に給油してください。', vn: 'Hãy thay vú mỡ mới và đảm bảo bơm mỡ chắc chắn nhé.' }
    ]
  },
  {
    id: 'd111',
    title: 'Xử lý rò rỉ nước làm mát (Coolant Leak)',
    lines: [
      { role: 'buyer', jp: '旋盤の足元が切削油で汚れています。どこかで漏れています。', vn: 'Dưới chân máy tiện đang bị bẩn do dầu cắt gọt. Đang bị rò rỉ ở đâu đó.' },
      { role: 'seller', jp: 'ホースの接続部が劣化して割れています。', vn: 'Phần nối ống dẫn bị lão hóa và bị nứt.' },
      { role: 'buyer', jp: 'すぐに新しい耐油ホースに交換しましょう。', vn: 'Hãy thay ngay ống dẫn chịu dầu mới đi.' }
    ]
  },
  {
    id: 'd112',
    title: 'Bàn luận về chi phí khuôn mới (Die Life/Cost)',
    lines: [
      { role: 'buyer', jp: '金型の摩耗が進んで、製品の寸法が安定しません。', vn: 'Khuôn đã mòn nhiều nên kích thước sản phẩm không ổn định.' },
      { role: 'seller', jp: '再研磨（リグラインド）で対応できますか。', vn: 'Liệu có thể xử lý bằng cách mài lại không?' },
      { role: 'buyer', jp: 'すでに削り代がないので、新しい金型を作る必要があります。', vn: 'Vì đã không còn lượng dư để mài nữa nên cần phải làm khuôn mới.' }
    ]
  },
  {
    id: 'd113',
    title: 'Hệ thống thông gió nhà xưởng (Workshop Ventilation)',
    lines: [
      { role: 'buyer', jp: '溶接の煙で工場内の空気が悪いです。', vn: 'Không khí trong nhà xưởng đang rất tệ do khói hàn.' },
      { role: 'seller', jp: '集塵機のフィルターが目詰まりしているようです。', vn: 'Có vẻ như bộ lọc của máy hút bụi/khói đang bị tắc.' },
      { role: 'buyer', jp: 'ダクトの清掃も合わせて行って、換気能力を戻しましょう。', vn: 'Hãy kết hợp làm vệ sinh cả đường ống để khôi phục khả năng thông gió.' }
    ]
  },
  {
    id: 'd114',
    title: 'Kiểm tra bình chữa cháy (Fire Extinguisher Check)',
    lines: [
      { role: 'buyer', jp: '今月の消防設備点検を行います。', vn: 'Chúng ta sẽ thực hiện kiểm tra thiết bị phòng cháy chữa cháy tháng này.' },
      { role: 'seller', jp: 'この消火器は使用期限が過ぎていますね。', vn: 'Bình chữa cháy này đã quá hạn sử dụng rồi nhỉ.' },
      { role: 'buyer', jp: '予備のものと交換して、ラベルを新しく貼り替えてください。', vn: 'Hãy thay bằng bình dự phòng và dán lại nhãn mới nhé.' }
    ]
  },
  {
    id: 'd115',
    title: 'Quy trình vận hành chuẩn - SOP (Standard Operating Procedure)',
    lines: [
      { role: 'buyer', jp: '作業標準書（SOP）通りに手順を守ってください。', vn: 'Hãy tuân thủ các bước theo Bản hướng dẫn quy trình làm việc chuẩn (SOP).' },
      { role: 'seller', jp: '自己流でやると事故の元になります。', vn: 'Làm theo cách riêng của mình sẽ là nguyên nhân gây ra tai nạn.' },
      { role: 'buyer', jp: '定期的に手順の見直しを行い、安全性を向上させましょう。', vn: 'Chúng ta hãy định kỳ xem lại các bước để nâng cao tính an toàn.' }
    ]
  },
  {
    id: 'd116',
    title: 'Hiệu chuẩn cảm biến nhiệt độ (Temp Sensor Calib)',
    lines: [
      { role: 'buyer', jp: '熱処理炉の温度センサーが正確か確認してください。', vn: 'Hãy kiểm tra xem cảm biến nhiệt độ của lò nhiệt luyện có chính xác không.' },
      { role: 'seller', jp: '基準計と10度の誤差があります。キャリブレーションが必要です。', vn: 'Có sai số 10 độ so với máy đo chuẩn. Cần phải hiệu chuẩn lại.' },
      { role: 'buyer', jp: 'オフセット値を調整して、記録を保存してください。', vn: 'Hãy điều chỉnh giá trị offset và lưu lại bản ghi nhé.' }
    ]
  },
  {
    id: 'd117',
    title: 'Xứ lý khi mất điện đột ngột (Power Outage)',
    lines: [
      { role: 'buyer', jp: '停電が起きました！すぐに非常用電源を確認してください。', vn: 'Đã xảy ra mất điện! Hãy kiểm tra nguồn điện dự phòng ngay lập tức.' },
      { role: 'seller', jp: '自家発電機が自動で起動しました。主要なラインは維持されています。', vn: 'Máy phát điện riêng đã tự động khởi động. Các dây chuyền chính đang được duy trì.' },
      { role: 'buyer', jp: '復旧した際の電圧サージに注意して、機器を保護してください。', vn: 'Hãy chú ý đến hiện tượng sốc điện khi có điện trở lại và bảo vệ thiết bị.' }
    ]
  },
  {
    id: 'd118',
    title: 'Đặt hàng nguyên liệu thô (Raw Material Order)',
    lines: [
      { role: 'buyer', jp: '特殊鋼の在庫が少なくなっています。10トン発注してください。', vn: 'Tồn kho thép đặc chủng đang ít đi. Hãy đặt hàng 10 tấn.' },
      { role: 'seller', jp: '現在の市場価格を確認してから見積もりを取ります。', vn: 'Tôi sẽ kiểm tra giá thị trường hiện tại rồi lấy báo giá.' },
      { role: 'buyer', jp: '急ぎなので、納期重視で業者を選んでください。', vn: 'Vì đang gấp nên hãy chọn đơn vị cung cấp chú trọng vào thời gian giao hàng.' }
    ]
  },
  {
    id: 'd119',
    title: 'Sổ tay hướng dẫn an toàn hóa chất (MSDS)',
    lines: [
      { role: 'buyer', jp: 'この洗浄剤の安全データシート（MSDS）はどこにありますか。', vn: 'Bảng chỉ dẫn an toàn hóa chất (MSDS) của chất tẩy rửa này để ở đâu?' },
      { role: 'seller', jp: '薬品保管庫の入り口にファイルが置いてあります。', vn: 'Có một tập hồ sơ đặt ở cửa vào kho chứa hóa chất.' },
      { role: 'buyer', jp: '万が一、皮膚に付着した時の処置を確認しておいてください。', vn: 'Hãy kiểm tra trước các biện pháp xử lý trong trường hợp chẳng may bị dính vào da.' }
    ]
  },
  {
    id: 'd120',
    title: 'Lỗi hư hỏng do tĩnh điện (ESD Damage)',
    lines: [
      { role: 'buyer', jp: '電子基板の不良率が上がっています。静電気対策は万全ですか。', vn: 'Tỷ lệ lỗi bảng mạch điện tử đang tăng lên. Việc đối phó với tĩnh điện đã ổn chưa?' },
      { role: 'seller', jp: 'リストストラップの点検を毎朝行っていますが、床の導電性が落ちているかもしれません。', vn: 'Chúng tôi kiểm tra vòng đeo tay chống tĩnh điện mỗi sáng, nhưng có thể độ dẫn điện của sàn đang bị giảm.' },
      { role: 'buyer', jp: '加湿器を入れて、湿度を管理することも検討しましょう。', vn: 'Hãy cân nhắc cả việc dùng máy tạo ẩm để quản lý độ ẩm nữa.' }
    ]
  },
  {
    id: 'd121',
    title: 'Vệ sinh máy sau ca làm việc (Post-shift Cleaning)',
    lines: [
      { role: 'buyer', jp: '終業前に、旋盤の切り屑をきれいに取り除いてください。', vn: 'Trước khi kết thúc ca, hãy dọn sạch phoi (vỏ bào) trên máy tiện.' },
      { role: 'seller', jp: 'エアーガンで吹き飛ばす際に、飛散に注意します。', vn: 'Tôi sẽ chú ý để không làm bắn phoi khi dùng súng xịt khí.' },
      { role: 'buyer', jp: '摺動面には防錆油を塗っておください。', vn: 'Hãy bôi dầu chống rỉ lên các bề mặt trượt.' }
    ]
  },
  {
    id: 'd122',
    title: 'Cập nhật phần mềm PLC (PLC Software Update)',
    lines: [
      { role: 'buyer', jp: 'PLCのプログラムを最新バージョンに更新します。', vn: 'Chúng tôi sẽ cập nhật chương trình PLC lên phiên bản mới nhất.' },
      { role: 'seller', jp: 'アップデート中、通信エラーが発生しないか不安です。', vn: 'Tôi lo không biết có xảy ra lỗi truyền thông trong lúc update không.' },
      { role: 'buyer', jp: 'バックアップは取ってあるので、もしもの時も復元可能です。', vn: 'Vì đã lấy bản backup rồi nên dù có chuyện gì cũng có thể khôi phục lại được.' }
    ]
  },
  {
    id: 'd123',
    title: 'Thiết kế công thái học tại chỗ làm (Ergonomics)',
    lines: [
      { role: 'buyer', jp: '立ち作業が多いので、足元に疲労軽減マットを敷いてください。', vn: 'Vì đứng làm việc nhiều nên hãy trải thảm giảm mệt mỏi dưới chân.' },
      { role: 'seller', jp: '作業台の高さも、体格に合わせて調整できるようにしましょう。', vn: 'Cũng hãy làm cho chiều cao bàn làm việc có thể điều chỉnh phù hợp với vóc dáng nhé.' },
      { role: 'buyer', jp: '腰痛予防のため、正しい持ち上げ方も指導しましょう。', vn: 'Để phòng đau lưng, chúng ta cũng hãy hướng dẫn cách bê đồ đúng cách.' }
    ]
  },
  {
    id: 'd124',
    title: 'Đo mức độ tiếng ồn nhà xưởng (Noise Level Check)',
    lines: [
      { role: 'buyer', jp: '騒音レベルが基準を超えていないか、騒音計で測りましょう。', vn: 'Hãy dùng máy đo tiếng ồn để đo xem mức độ tiếng ồn có vượt quá tiêu chuẩn không.' },
      { role: 'seller', jp: 'コンプレッサー周辺は85デシベルを超えています。', vn: 'Khu vực xung quanh máy nén khí vượt quá 85 decibel.' },
      { role: 'buyer', jp: '防音壁を設置するか、耳栓の着用を義務付けましょう。', vn: 'Chúng ta hãy lắp vách cách âm hoặc bắt buộc phải đeo nút tai.' }
    ]
  },
  {
    id: 'd125',
    title: 'Phun thuốc diệt côn trùng trong kho (Warehouse Pest Control)',
    lines: [
      { role: 'buyer', jp: '梱包材（ダンボール）に虫が付かないよう、くん蒸処理を行います。', vn: 'Chúng tôi sẽ thực hiện hun trùng để côn trùng không bám vào vật liệu đóng gói (thùng carton).' },
      { role: 'seller', jp: '処理中は立ち入り禁止にして、換気を徹底する必要があります。', vn: 'Cần phải cấm ra vào trong lúc xử lý và thực hiện thông gió triệt để.' },
      { role: 'buyer', jp: '週末の休業時間中に行うのがベストですね。', vn: 'Làm vào thời gian nghỉ cuối tuần là tốt nhất nhỉ.' }
    ]
  },
  {
    id: 'd126',
    title: 'Bảo trì máy nén khí (Compressed Air Maint.)',
    lines: [
      { role: 'buyer', jp: 'エアーコンプレッサーのドレン抜きを毎日行ってください。', vn: 'Hãy thực hiện xả nước ngưng tụ (xả đáy) máy nén khí hàng ngày.' },
      { role: 'seller', jp: 'タンク内に水が溜まると、配管の錆の原因になります。', vn: 'Nếu nước đọng trong bình chứa sẽ là nguyên nhân gây rỉ sét đường ống.' },
      { role: 'buyer', jp: 'オイルの汚れもチェックして、必要なら交換しましょう。', vn: 'Cũng hãy kiểm tra độ bẩn của dầu, nếu cần hãy thay nhé.' }
    ]
  },
  {
    id: 'd127',
    title: 'An toàn khi vận hành xe nâng (Forklift Safety)',
    lines: [
      { role: 'buyer', jp: 'フォークリフトを運転する際は、制限速度を守ってください。', vn: 'Khi lái xe nâng, hãy tuân thủ giới hạn tốc độ.' },
      { role: 'seller', jp: '交差点では一時停止し、指差し確認を行います。', vn: 'Tại các ngã rẽ tôi sẽ dừng tạm thời và thực hiện chỉ tay xác nhận.' },
      { role: 'buyer', jp: '荷物を高く上げたまま走行するのは厳禁です。', vn: 'Nghiêm cấm việc vừa chạy vừa nâng hàng lên cao.' }
    ]
  },
  {
    id: 'd128',
    title: 'Lối thoát hiểm bị chặn (Blocked Emergency Exit)',
    lines: [
      { role: 'buyer', jp: '非常口の前に荷物を置かないでください。', vn: 'Đừng để hàng hóa trước lối thoát hiểm.' },
      { role: 'seller', jp: '一時的な仮置きのつもりでしたが、すぐに移動させます。', vn: 'Tôi định chỉ để tạm thời thôi, nhưng tôi sẽ di chuyển ngay.' },
      { role: 'buyer', jp: '火災時に避難できなくなるので、常に開けておいてください。', vn: 'Vì lúc hỏa hoạn sẽ không thể sơ tán được nên hãy luôn để trống chỗ đó.' }
    ]
  },
  {
    id: 'd129',
    title: 'Huấn luyện sơ cứu (First Aid Training)',
    lines: [
      { role: 'buyer', jp: '午後のミーティングで、AEDの使い方を復習しましょう。', vn: 'Trong buổi họp chiều nay, chúng ta hãy ôn tập lại cách dùng máy khử rung tim (AED).' },
      { role: 'seller', jp: '救急隊が到着するまでの応急処置が重要ですね。', vn: 'Việc sơ cứu cho đến khi đội cứu hộ đến là rất quan trọng nhỉ.' },
      { role: 'buyer', jp: 'はい、落ち着いて行動できるよう繰り返し練習が必要です。', vn: 'Vâng, cần phải luyện tập lặp đi lặp lại để có thể hành động bình tĩnh.' }
    ]
  },
  {
    id: 'd130',
    title: 'Họp nhóm nâng cao năng suất (Productivity Meeting)',
    lines: [
      { role: 'buyer', jp: 'サイクルタイムを短縮するための改善案はありますか。', vn: 'Anh có đề án cải tiến nào để rút ngắn thời gian chu kỳ (cycle time) không?' },
      { role: 'seller', jp: 'ジグ（治具）の形状を変えれば、着脱の時間を削れると思います。', vn: 'Tôi nghĩ nếu thay đổi hình dạng đồ gá (jig) thì có thể cắt giảm thời gian tháo lắp.' },
      { role: 'buyer', jp: '試作品を作ってみましょう。効果があれば全ラインに導入します。', vn: 'Chúng ta hãy làm thử mẫu đi. Nếu có hiệu quả sẽ áp dụng cho toàn dây chuyền.' }
    ]
  },
  {
    id: 'd131',
    title: 'Sắp xếp lại kho vật tư (Inventory Reorg)',
    lines: [
      { role: 'buyer', jp: '使用頻度の高い部品を、入り口近くに移動させましょう。', vn: 'Chúng ta hãy chuyển các bộ phận hay dùng đến gần cửa ra vào nhé.' },
      { role: 'seller', jp: '動線が短くなって、ピッキングの効率が上がりますね。', vn: 'Lối di chuyển sẽ ngắn lại và hiệu suất lấy hàng sẽ tăng lên nhỉ.' },
      { role: 'buyer', jp: '場所を示すラベルも新しくして、誰でも分かるようにしてください。', vn: 'Hãy làm mới các nhãn chỉ vị trí để ai nhìn cũng hiểu được.' }
    ]
  },
  {
    id: 'd132',
    title: 'Đào tạo máy cắt Laser mới (Laser Cutter Training)',
    lines: [
      { role: 'buyer', jp: '新型レーザー加工機の操作説明を行います。', vn: 'Tôi sẽ giải thích cách thao tác máy gia công laser đời mới.' },
      { role: 'seller', jp: '焦点距離の設定が以前のモデルと違うようです。', vn: 'Có vẻ như việc thiết lập tiêu cự khác với các model trước đây.' },
      { role: 'buyer', jp: 'はい、自動セッティング機能が追加されています。', vn: 'Vâng, đã có thêm chức năng tự động thiết lập.' }
    ]
  },
  {
    id: 'd133',
    title: 'Xử lý sự cố tràn dầu thủy lực (Hydraulic Spill)',
    lines: [
      { role: 'buyer', jp: '油が床に漏れています！オイル吸着マットを持ってきてください。', vn: 'Dầu đang bị tràn ra sàn! Hãy mang thảm thấm dầu đến đây.' },
      { role: 'seller', jp: '中和剤も撒いたほうがいいですか。', vn: 'Có nên rắc cả chất trung hòa không?' },
      { role: 'buyer', jp: 'はい、滑りやすいので周囲に警告標識を立ててください。', vn: 'Có, vì sàn rất trơn nên hãy đặt biển cảnh báo xung quanh nhé.' }
    ]
  },
  {
    id: 'd134',
    title: 'Thiết lập trạm làm việc tạm thời (Temp Workstation)',
    lines: [
      { role: 'buyer', jp: '繁忙期の間だけ、ここに仮の検品台を設置します。', vn: 'Tôi sẽ lắp một bàn kiểm hàng tạm thời ở đây chỉ trong mùa bận rộn.' },
      { role: 'seller', jp: '電源コードが通路を横切らないように配慮してください。', vn: 'Hãy chú ý để dây điện không vắt ngang qua lối đi.' },
      { role: 'buyer', jp: 'モールでカバーして、転倒防止を徹底します。', vn: 'Tôi sẽ dùng nẹp che lại và thực hiện triệt để việc chống vấp ngã.' }
    ]
  },
  {
    id: 'd135',
    title: 'Kiểm tra mái nhà xưởng bị dột (Roof Leak Check)',
    lines: [
      { role: 'buyer', jp: '雨漏りがしているので、屋根の状態を確認してください。', vn: 'Trần đang bị dột, hãy kiểm tra tình trạng mái nhà.' },
      { role: 'seller', jp: 'コーキングが剥がれている箇所が見つかりました。', vn: 'Đã tìm thấy vị trí lớp keo chống thấm bị bong tróc.' },
      { role: 'buyer', jp: '製品が濡れると大変なので、早急に補修をお願いします。', vn: 'Sản phẩm mà bị ướt thì nguy lắm, nên làm ơn hãy sửa chữa càng sớm càng tốt.' }
    ]
  },
  {
    id: 'd136',
    title: 'Rà soát biển báo an toàn (Safety Signage Review)',
    lines: [
      { role: 'buyer', jp: '色あせた安全標識を新しいものに取り替えましょう。', vn: 'Chúng ta hãy thay các biển báo an toàn đã bị phai màu bằng các biển mới.' },
      { role: 'seller', jp: '多言語（ベトナム語と英語）の併記が必要ですね。', vn: 'Cần phải ghi chú đa ngôn ngữ (tiếng Việt và tiếng Anh) nhỉ.' },
      { role: 'buyer', jp: 'はい、外国人作業員にも確実に伝わるようにします。', vn: 'Vâng, để đảm bảo các công nhân người nước ngoài cũng có thể hiểu được chắc chắn.' }
    ]
  },
  {
    id: 'd137',
    title: 'Kiểm tra hệ thống báo cháy (Fire Alarm Test)',
    lines: [
      { role: 'buyer', jp: '本日15時から火災報知器の動作テストを行います。', vn: 'Từ 15 giờ hôm nay chúng tôi sẽ tiến hành test hoạt động của máy báo cháy.' },
      { role: 'seller', jp: 'ベルが鳴りますが、火事ではないのでパニックにならないでください。', vn: 'Chuông sẽ kêu nhưng không phải là hỏa hoạn nên xin đừng hoảng loạn.' },
      { role: 'buyer', jp: '放送設備も正常に機能するか確認します。', vn: 'Chúng tôi cũng sẽ kiểm tra xem thiết bị phát thanh có hoạt động bình thường không.' }
    ]
  },
  {
    id: 'd138',
    title: 'Số hóa nhật ký bảo trì (Digital Maint. Log)',
    lines: [
      { role: 'buyer', jp: '紙の点検記録を廃止して、タブレット入力に移行します。', vn: 'Chúng ta sẽ bãi bỏ việc ghi chép kiểm tra bằng giấy và chuyển sang nhập liệu bằng máy tính bảng.' },
      { role: 'seller', jp: '写真も一緒に保存できるので、不具合の状況が分かりやすいですね。', vn: 'Vì có thể lưu cả ảnh cùng lúc nên sẽ dễ hiểu tình trạng hỏng hóc hơn nhỉ.' },
      { role: 'buyer', jp: 'データの集計も自動で行えるようになります。', vn: 'Việc tổng hợp dữ liệu cũng sẽ có thể thực hiện tự động.' }
    ]
  },
  {
    id: 'd139',
    title: 'Thảo luận biện pháp tiết kiệm điện (Energy Saving)',
    lines: [
      { role: 'buyer', jp: '待機電力を減らすため、昼休みは照明を消してください。', vn: 'Trong giờ nghỉ trưa hãy tắt đèn để giảm điện năng chờ.' },
      { role: 'seller', jp: 'コンプレッサーのエアー漏れを直すのも節電に繋がりますね。', vn: 'Việc sửa rò rỉ khí của máy nén khí cũng giúp tiết kiệm điện nhỉ.' },
      { role: 'buyer', jp: '小さな積み重ねが大きな経費削減になります。', vn: 'Những tích tiểu thành đại sẽ trở thành việc cắt giảm kinh phí lớn.' }
    ]
  },
  {
    id: 'd140',
    title: 'Tổ chức tiệc trưa gắn kết đội ngũ (Team Lunch)',
    lines: [
      { role: 'buyer', jp: '親睦を深めるために、金曜日はデリバリーを頼みましょう。', vn: 'Để thắt chặt tình đoàn kết, thứ sáu này chúng ta hãy gọi đồ ăn ngoài (delivery) nhé.' },
      { role: 'seller', jp: '何を食べたいか、みんなにアンケートを取ります。', vn: 'Tôi sẽ làm khảo sát xem mọi người muốn ăn gì.' },
      { role: 'buyer', jp: 'たまには現場を離れてリラックスする時間も必要です。', vn: 'Thỉnh thoảng cũng cần thời gian rời xa công trường để thư giãn.' }
    ]
  },
  {
    id: 'd141',
    title: 'Kiểm tra lỗi đúc sản phẩm (Casting Defects)',
    lines: [
      { role: 'buyer', jp: '鋳造品に巣（小さな穴）が発生しています。', vn: 'Đang có hiện tượng bị rỗ khí (lỗ hổng) trên vật đúc.' },
      { role: 'seller', jp: '溶湯の温度が低すぎるのが原因かもしれません。', vn: 'Có thể nguyên nhân là do nhiệt độ của kim loại lỏng quá thấp.' },
      { role: 'buyer', jp: '注湯速度を調整して、空気の巻き込みを防ぎましょう。', vn: 'Chúng ta hãy điều chỉnh tốc độ rót để ngăn chặn việc bị cuốn không khí vào.' }
    ]
  },
  {
    id: 'd142',
    title: 'Hướng dẫn sử dụng cần siết lực (Torque Wrench)',
    lines: [
      { role: 'buyer', jp: 'このボルトは50ニュートンで締めてください。', vn: 'Hãy siết bu lông này với lực 50 Newton.' },
      { role: 'seller', jp: 'トルクレンチのメモリをセットします。カチッと音がするまでですね。', vn: 'Tôi sẽ thiết lập vạch chia trên cần siết lực. Siết cho đến khi nghe tiếng "tạch" đúng không.' },
      { role: 'buyer', jp: 'はい。締めすぎは破損、締め不足は緩みの原因になります。', vn: 'Vâng. Siết quá tay sẽ gây hư hỏng, siết chưa đủ sẽ gây lỏng lẻo.' }
    ]
  },
  {
    id: 'd143',
    title: 'Thảo luận về độ bền mỏi vật liệu (Fatigue Failure)',
    lines: [
      { role: 'buyer', jp: 'シャフトが破断しました。疲労破壊の可能性があります。', vn: 'Trục đã bị gãy. Có khả năng là do phá hủy vì mỏi (vật liệu).' },
      { role: 'seller', jp: '繰り返し荷重がかかる場所なので、断面を分析しましょう。', vn: 'Vì đây là nơi chịu tải trọng lặp đi lặp lại nên chúng ta hãy phân tích mặt cắt nhé.' },
      { role: 'buyer', jp: '設計変更をして、コーナーのR（丸み）を大きくしたほうがいいです。', vn: 'Nên thay đổi thiết kế và làm cho phần bo tròn (R) ở góc lớn hơn.' }
    ]
  },
  {
    id: 'd144',
    title: 'Kiểm tra độ cân bằng động (Dynamic Balancing)',
    lines: [
      { role: 'buyer', jp: 'ローターの芯出し（バランス調整）を行ってください。', vn: 'Hãy thực hiện việc lấy tâm (điều chỉnh cân bằng) cho rotor.' },
      { role: 'seller', jp: 'バランサーで測定した結果、3グラムのズレがあります。', vn: 'Kết quả đo bằng máy cân bằng là có độ lệch 3 gram.' },
      { role: 'buyer', jp: 'おもりを追加して、振動がなくなるまで調整しましょう。', vn: 'Hãy thêm đối trọng và điều chỉnh cho đến khi mất rung lắc.' }
    ]
  },
  {
    id: 'd145',
    title: 'Bảo trì hệ thống lọc nước (Water Filtration)',
    lines: [
      { role: 'buyer', jp: '冷却水の不純物が増えています。フィルターを洗浄してください。', vn: 'Tạp chất trong nước làm mát đang tăng lên. Hãy rửa bộ lọc.' },
      { role: 'seller', jp: '逆洗浄（バックウォッシュ）を行いましたが、改善しません。', vn: 'Tôi đã thực hiện sục rửa ngược (backwash) nhưng không thấy cải thiện.' },
      { role: 'buyer', jp: 'ろ材が寿命かもしれません。全交換を検討しましょう。', vn: 'Có thể vật liệu lọc đã hết hạn sử dụng. Hãy cân nhắc việc thay thế toàn bộ.' }
    ]
  },
  {
    id: 'd146',
    title: 'Yêu cầu về độ trong suốt (Clarity/Transparency)',
    lines: [
      { role: 'buyer', jp: '成形品の透明度が足りません。曇っています。', vn: 'Độ trong suốt của sản phẩm đúc không đạt yêu cầu. Đang bị mờ.' },
      { role: 'seller', jp: '金型の表面温度が低すぎるのかもしれません。', vn: 'Có thể là do nhiệt độ bề mặt khuôn quá thấp.' },
      { role: 'buyer', jp: '金型温度調節機（温調機）の設定を10度上げてください。', vn: 'Hãy nâng thiết lập của máy điều khiển nhiệt độ khuôn lên 10 độ.' }
    ]
  },
  {
    id: 'd147',
    title: 'Bàn luận về phế phẩm sản xuất (Scrap Rate)',
    lines: [
      { role: 'buyer', jp: '今月の歩留まり（製品率）が悪いです。', vn: 'Tỷ lệ thành phẩm (hiệu suất sản xuất) tháng này đang rất kém.' },
      { role: 'seller', jp: '立ち上げ時のパージ材の廃棄量が多いのが原因です。', vn: 'Nguyên nhân là do lượng nhựa phế (purge) thải ra lúc bắt đầu máy quá nhiều.' },
      { role: 'buyer', jp: 'パージ時間を短縮できる設定を検討してください。', vn: 'Hãy nghiên cứu thiết lập có thể rút ngắn thời gian xả nhựa phế.' }
    ]
  },
  {
    id: 'd148',
    title: 'Báo cáo về việc hỏng khuôn (Mold Damage)',
    lines: [
      { role: 'buyer', jp: '金型にキズが入ってしまいました。', vn: 'Khuôn đã bị trầy xước rồi.' },
      { role: 'seller', jp: '製品の取り出し時に、無理な力がかかりましたか。', vn: 'Liệu có bị tác động lực quá mức lúc lấy sản phẩm ra không?' },
      { role: 'buyer', jp: 'エジェクタピン（押し出しピン）の動きが渋かったようです。', vn: 'Có vẻ như chuyển động của chốt đẩy (ejector pin) bị rít.' }
    ]
  },
  {
    id: 'd149',
    title: 'Xác nhận mã màu sơn (Paint Color Code)',
    lines: [
      { role: 'buyer', jp: 'このパーツの塗装色はマンセル値で指定されていますか。', vn: 'Màu sơn của bộ phận này được chỉ định theo giá trị Munsell phải không?' },
      { role: 'seller', jp: 'はい、5Y7/1です。色見本（色票）と比較しましょう。', vn: 'Vâng, là 5Y7/1. Chúng ta hãy đối chiếu với bảng màu mẫu nhé.' },
      { role: 'buyer', jp: '光の当たり方で見え方が変わるので、ブース内で確認してください。', vn: 'Cách nhìn sẽ thay đổi tùy theo hướng ánh sáng, nên hãy kiểm tra trong buồng sơn.' }
    ]
  },
  {
    id: 'd150',
    title: 'Thảo luận về hợp đồng bảo trì (Maintenance Contract)',
    lines: [
      { role: 'buyer', jp: 'メーカーとの保守契約（メンテナンス契約）を更新しますか。', vn: 'Chúng ta có gia hạn hợp đồng bảo trì với nhà sản xuất không?' },
      { role: 'seller', jp: '年間の点検回数を増やしたプランに変更したいです。', vn: 'Tôi muốn đổi sang gói tăng số lần kiểm tra định kỳ trong năm.' },
      { role: 'buyer', jp: '故障時の優先対応が含まれているか、確認しておきます。', vn: 'Tôi sẽ kiểm tra xem có bao gồm cả việc ưu tiên xử lý khi hỏng hóc không.' }
    ]
  }
];
