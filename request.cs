using System;
using System.Collections.Generic;

using System.Globalization;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace QuickType
{
  

    public partial class Welcome
    {
        [JsonProperty("paging")]
        public Paging Paging { get; set; }

        [JsonProperty("filter")]
        public Filter Filter { get; set; }

        [JsonProperty("sort")]
        public Sort Sort { get; set; }
    }

    public partial class Filter
    {
        [JsonProperty("engagement_rate")]
        public EngagementRate EngagementRate { get; set; }

        [JsonProperty("engagements")]
        public NumberRage Engagements { get; set; }

        [JsonProperty("followers")]
        public NumberRage Followers { get; set; }

        [JsonProperty("views")]
        public NumberRage Views { get; set; }

        [JsonProperty("audience_gender")]
        public AudienceGender AudienceGender { get; set; }

        [JsonProperty("audience_race")]
        public AudienceGender AudienceRace { get; set; }

        [JsonProperty("race")]
        public AudienceGender Race { get; set; }

        [JsonProperty("gender")]
        public AudienceGender Gender { get; set; }

        [JsonProperty("last_posted")]
        public int LastPosted { get; set; }

        [JsonProperty("has_audience_data")]
        public bool HasAudienceData { get; set; }

        [JsonProperty("only")]
        public string Only { get; set; }

        [JsonProperty("is_hidden")]
        public bool IsHidden { get; set; }

        [JsonProperty("is_verified")]
        public bool IsVerified { get; set; }

        [JsonProperty("has_ads")]
        public bool HasAds { get; set; }

        [JsonProperty("audience_geo")]
        public AudienceBrand[] AudienceGeo { get; set; }

        [JsonProperty("geo")]
        public AudienceBrand[] Geo { get; set; }

        [JsonProperty("lang")]
        public Lang Lang { get; set; }

        [JsonProperty("audience_lang")]
        public AudienceGender AudienceLang { get; set; }

        [JsonProperty("age")]
        public NumberRage Age { get; set; }

        [JsonProperty("audience_age")]
        public AudienceGender[] AudienceAge { get; set; }

        [JsonProperty("audience_brand")]
        public AudienceBrand[] AudienceBrand { get; set; }

        [JsonProperty("audience_brand_category")]
        public AudienceBrand[] AudienceBrandCategory { get; set; }

        [JsonProperty("brand")]
        public int[] Brand { get; set; }

        [JsonProperty("brand_category")]
        public int[] BrandCategory { get; set; }

        [JsonProperty("relevance")]
        public Relevance Relevance { get; set; }

        [JsonProperty("audience_relevance")]
        public AudienceRelevance AudienceRelevance { get; set; }

        [JsonProperty("text")]
        public string Text { get; set; }

        [JsonProperty("with_contact")]
        public WithContact[] WithContact { get; set; }

        [JsonProperty("audience_credibility_class")]
        public string[] AudienceCredibilityClass { get; set; }

        [JsonProperty("account_type")]
        public int[] AccountType { get; set; }
    }

    public partial class NumberRage
    {
        [JsonProperty("left_number")]
        public int LeftNumber { get; set; }

        [JsonProperty("right_number")]
        public int RightNumber { get; set; }
    }

    public partial class AudienceGender
    {
        [JsonProperty("code")]
        public string Code { get; set; }

        [JsonProperty("weight")]
        public double Weight { get; set; }
    }

    public partial class AudienceBrand
    {
        [JsonProperty("id")]
        public int Id { get; set; }

        [JsonProperty("weight")]
        public double Weight { get; set; }
    }

    public partial class AudienceRelevance
    {
        [JsonProperty("value")]
        public string Value { get; set; }
    }

    public partial class EngagementRate
    {
        [JsonProperty("value")]
        public double Value { get; set; }

        [JsonProperty("operator")]
        public string Operator { get; set; }
    }

    public partial class Lang
    {
        [JsonProperty("code")]
        public string Code { get; set; }
    }

    public partial class Relevance
    {
        [JsonProperty("value")]
        public string Value { get; set; }

        [JsonProperty("weight")]
        public int Weight { get; set; }
    }

    public partial class WithContact
    {
        [JsonProperty("type")]
        public string Type { get; set; }

        [JsonProperty("action")]
        public string Action { get; set; }
    }

    public partial class Paging
    {
        [JsonProperty("skip")]
        public object Skip { get; set; }

        [JsonProperty("limit")]
        public int Limit { get; set; }
    }

    public partial class Sort
    {
        [JsonProperty("field")]
        public string Field { get; set; }

        [JsonProperty("direction")]
        public string Direction { get; set; }

        [JsonProperty("audience_source")]
        public string AudienceSource { get; set; }
    }
}