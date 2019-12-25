export default class TaxonomyCountry {
    public id: number;
    public type: string[];
    public pct: number;
    public name: string;
    public title: string;
    public country: CountryList;
}

export class CountryList {
    public id: number;
    public code: string;
}
