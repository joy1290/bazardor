// https://api.api-store.workers.dev/api/bazardor/categories


export interface ProductCategoriesDataType{
    id: string;
    slug: string;
    nameBn: string;
    icon: string
}

interface ChangeType{
    dir: string;
    pct: number;
}
interface MarketType{
    market: string;
    division: string;
    min: number;
    max: number;
}

export interface ProductCommonDataType{
    id: number;
    slug: string;
    nameBn: string;
    category: string;
    categoryNameBn: string;
    categoryIcon: string;
    unit: string;
    image: string;
    today: number;
    yesterday: number;
    lastWeek: number;
    lastMonth: number;
    change: ChangeType;
    markets: MarketType[];
}

// id": 1,
//     "slug": "sorno-machi-chal",
//     "nameBn": "স্বর্ণমাছি চাল",
//     "category": "chal",
//     "categoryNameBn": "চাল",
//     "categoryIcon": "🍚",
//     "unit": "kg",
//     "image": "🍚",
//     "today": 148,
//     "yesterday": 145,
//     "lastWeek": 142,
//     "lastMonth": 138,
//     "change": {
//       "dir": "up",
//       "pct": 2.1
//     },
//     "markets": [
//       {
//         "market": "কারওয়ান বাজার",
//         "division": "ঢাকা",
//         "min": 146,
//         "max": 165
//       },