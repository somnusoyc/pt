import { ReactNode } from "react";

export interface Sku {
  id: string;
  name: string;
  brand: string;
  form: string;
  price: number;
  desc: string;
  img: string;
}

export interface CartItem extends Sku {
  qty: number;
}

export interface PrescriptionItem {
  nutrient: string;
  dose: string;
  freq: string;
  durationDays: number;
  caution: string;
}

export interface Plan {
  patient: {
    name: string;
    age: number;
    weight: number;
  };
  prescription: PrescriptionItem[];
  doctor: {
    cardNo: string;
  };
}

export interface ScienceTopic {
  topicId: string;
  title: string | ReactNode;
  subTitle?: string;
  introImage: string;
  introText: ReactNode;
  ratingData?: {
    years: string;
    count1: string;
    count2: string;
    count3: string;
  };
  conclusion1?: {
    text: ReactNode;
    citations: string;
    source: string;
  };
  conclusion2?: {
    text: ReactNode;
    citations: string;
    source: string;
  };
  isArticle?: boolean;
  buttonText?: string;
  source?: string;
}

export type Tab = 'scan' | 'report' | 'plan' | 'catalog' | 'cart' | 'me' | 'history' | 'dhaDetail' | 'psDetail' | 'gabaDetail' | 'ggDetail' | 'saDetail' | 'result' | 'paySuccess' | 'orderDetail' | 'otherDetail';

export interface PayState {
  address: string;
  spec: string;
  coupon: number;
  coin: number;
  shipping: number;
  duty: number;
  agree: boolean;
  expandSupp: boolean;
}

export interface AppState {
  tab: Tab;
  history: Tab[]; // Navigation stack
  parsedPlan: Plan | null;
  cart: CartItem[];
  orderSubmitted: boolean;
  hasNewShipment: boolean;
  isLoading: boolean;
  showPayModal: boolean;
  showUsageModal: boolean;
  showSupportChat: boolean;
  showNoticeModal: boolean;
  showHospitalModal: boolean;
  showPrescriptionModal: boolean;
  pay: PayState;
}

export interface AppContextType extends AppState {
  setTab: (tab: Tab) => void; // Pushes to history
  switchTab: (tab: Tab) => void; // Resets history (for bottom bar)
  goBack: () => void; // Pops history
  addToCart: (sku: Sku) => void;
  removeFromCart: (id: string) => void;
  toggleCart: (sku: Sku) => void;
  setParsedPlan: (plan: Plan | null) => void;
  setLoading: (loading: boolean) => void;
  submitOrder: () => void;
  closeModals: () => void;
  openPayModal: () => void;
  openUsageModal: () => void;
  openSupportChat: () => void;
  openNoticeModal: () => void;
  openHospitalModal: () => void;
  openPrescriptionModal: () => void;
  setPayState: (pay: Partial<PayState>) => void;
}