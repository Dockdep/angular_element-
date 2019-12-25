export interface RequestBody {
    paging: Paging;
    filter: Filter;
    sort: Sort;
}

export interface Filter {
    engagementRate: EngagementRate;
    engagements: NumberRage;
    followers: NumberRage;
    views: NumberRage;
    audienceGender: AudienceGender;
    audienceRace: AudienceGender;
    race: AudienceGender;
    gender: AudienceGender;
    lastPosted: number;
    hasAudienceData: boolean;
    only: string;
    isHidden: boolean;
    isVerified: boolean;
    hasAds: boolean;
    audienceGeo: FilterData[];
    geo: FilterData[];
    lang: Lang;
    audienceLang: AudienceGender;
    age: NumberRage;
    audienceAge: AudienceGender[];
    audienceBrand: FilterData[];
    audienceBrandCategory: FilterData[];
    brand: number[];
    brandCategory: number[];
    relevance: Relevance;
    audienceRelevance: AudienceRelevance;
    text: string;
    withContact: WithContact[];
    audienceCredibilityClass: string[];
    accountType: number[];
}

export interface NumberRage {
    leftNumber: number;
    rightNumber: number;
}

export interface AudienceGender {
    code: string;
    weight: number;
}

export interface FilterData {
    id: number;
    weight: number;
}

export interface AudienceRelevance {
    value: string;
}

export interface EngagementRate {
    value: number;
    operator: string;
}

export interface Lang {
    code: string;
}

export interface Relevance {
    value: string;
    weight: number;
}

export interface WithContact {
    type: string;
    action: string;
}

export interface Paging {
    skip: any;
    limit: number;
}

export interface Sort {
    field: string;
    direction: string;
    audienceSource: string;
}
