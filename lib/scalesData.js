export const scalesData = {
  "metadata": {
    "version": "2.0",
    "lastUpdated": "2026-02-08",
    "totalScales": 83,
    "description": "Comprehensive database of workplace-relevant psychology scales"
  },
  "scales": [
    {
      "id": "tipi",
      "name": "Ten Item Personality Inventory",
      "shortName": "TIPI",
      "construct": "Personality Traits",
      "category": "Personality",
      "description": "Measures the Big Five personality dimensions using ten items (two per dimension). Provides a brief assessment of openness, conscientiousness, extraversion, agreeableness, and neuroticism.",
      "authors": "Gosling, S. D., Rentfrow, P. J., & Swann, W. B., Jr.",
      "year": 2003,
      "citations": [
        "Gosling, S. D., Rentfrow, P. J., & Swann, W. B., Jr. (2003). A very brief measure of the Big-Five personality domains. Journal of Research in Personality, 37(6), 504-528."
      ],
      "numberOfItems": 10,
      "estimatedMinutes": 2,
      "items": [
        {
          "id": 1,
          "text": "I am extraverted, enthusiastic",
          "subscale": "Extraversion",
          "reverse": false
        },
        {
          "id": 2,
          "text": "I am reserved, quiet",
          "subscale": "Extraversion",
          "reverse": true
        },
        {
          "id": 3,
          "text": "I am critical, quarrelsome",
          "subscale": "Agreeableness",
          "reverse": true
        },
        {
          "id": 4,
          "text": "I am sympathetic, warm",
          "subscale": "Agreeableness",
          "reverse": false
        },
        {
          "id": 5,
          "text": "I am dependable, self-disciplined",
          "subscale": "Conscientiousness",
          "reverse": false
        },
        {
          "id": 6,
          "text": "I am disorganized, careless",
          "subscale": "Conscientiousness",
          "reverse": true
        },
        {
          "id": 7,
          "text": "I am anxious, easily upset",
          "subscale": "Neuroticism",
          "reverse": false
        },
        {
          "id": 8,
          "text": "I am calm, emotionally stable",
          "subscale": "Neuroticism",
          "reverse": true
        },
        {
          "id": 9,
          "text": "I am open to new experiences, complex",
          "subscale": "Openness",
          "reverse": false
        },
        {
          "id": 10,
          "text": "I am conventional, uncreative",
          "subscale": "Openness",
          "reverse": true
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 7,
        "labels": {
          "1": "Disagree Strongly",
          "2": "Disagree",
          "3": "Disagree Slightly",
          "4": "Neutral",
          "5": "Agree Slightly",
          "6": "Agree",
          "7": "Agree Strongly"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {
          "Extraversion": {
            "items": [
              1,
              2
            ],
            "description": "Talkativeness, assertiveness, and sociability"
          },
          "Agreeableness": {
            "items": [
              3,
              4
            ],
            "description": "Compassion, cooperation, and trust"
          },
          "Conscientiousness": {
            "items": [
              5,
              6
            ],
            "description": "Organization, diligence, and discipline"
          },
          "Neuroticism": {
            "items": [
              7,
              8
            ],
            "description": "Emotional stability and anxiety"
          },
          "Openness": {
            "items": [
              9,
              10
            ],
            "description": "Creativity, curiosity, and intellectual engagement"
          }
        },
        "overall": {
          "method": "none",
          "description": "Report individual subscale scores"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 3,
              "label": "Low",
              "description": "Below average on this trait"
            },
            {
              "min": 3,
              "max": 5,
              "label": "Moderate",
              "description": "Average on this trait"
            },
            {
              "min": 5,
              "max": 7,
              "label": "High",
              "description": "Above average on this trait"
            }
          ]
        }
      },
      "useCases": [
        "personality assessment",
        "team composition analysis",
        "self-awareness workshops"
      ],
      "relatedConstructs": [
        "Big Five personality",
        "temperament",
        "leadership potential"
      ],
      "keywords": [
        "personality",
        "Big Five",
        "traits",
        "extraversion",
        "agreeableness",
        "conscientiousness"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "bfi-10",
      "name": "Big Five Inventory-10",
      "shortName": "BFI-10",
      "construct": "Personality Traits",
      "category": "Personality",
      "description": "Ultra-brief Big Five assessment measuring extraversion, agreeableness, conscientiousness, neuroticism, and openness with two items per dimension.",
      "authors": "Rammstedt, B., & John, O. P.",
      "year": 2007,
      "citations": [
        "Rammstedt, B., & John, O. P. (2007). Measuring personality in one minute or less: A 10-item short version of the Big Five Inventory in English and German. Journal of Research in Personality, 41(1), 203-212."
      ],
      "numberOfItems": 10,
      "estimatedMinutes": 1,
      "items": [
        {
          "id": 1,
          "text": "I see myself as somewhat reserved, quiet",
          "subscale": "Extraversion",
          "reverse": true
        },
        {
          "id": 2,
          "text": "I see myself as generally trusting",
          "subscale": "Agreeableness",
          "reverse": false
        },
        {
          "id": 3,
          "text": "I see myself as tending to be disorganized",
          "subscale": "Conscientiousness",
          "reverse": true
        },
        {
          "id": 4,
          "text": "I see myself as tending to be anxious",
          "subscale": "Neuroticism",
          "reverse": false
        },
        {
          "id": 5,
          "text": "I see myself as open to new experiences, complex",
          "subscale": "Openness",
          "reverse": false
        },
        {
          "id": 6,
          "text": "I see myself as outgoing, energetic",
          "subscale": "Extraversion",
          "reverse": false
        },
        {
          "id": 7,
          "text": "I see myself as sometimes rude to others",
          "subscale": "Agreeableness",
          "reverse": true
        },
        {
          "id": 8,
          "text": "I see myself as doing a thorough job",
          "subscale": "Conscientiousness",
          "reverse": false
        },
        {
          "id": 9,
          "text": "I see myself as depressed, blue",
          "subscale": "Neuroticism",
          "reverse": true
        },
        {
          "id": 10,
          "text": "I see myself as conventional, uncreative",
          "subscale": "Openness",
          "reverse": true
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 5,
        "labels": {
          "1": "Disagree Strongly",
          "2": "Disagree",
          "3": "Neutral",
          "4": "Agree",
          "5": "Agree Strongly"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {
          "Extraversion": {
            "items": [
              1,
              6
            ],
            "description": "Social engagement and energy"
          },
          "Agreeableness": {
            "items": [
              2,
              7
            ],
            "description": "Compassion and cooperation"
          },
          "Conscientiousness": {
            "items": [
              3,
              8
            ],
            "description": "Organization and diligence"
          },
          "Neuroticism": {
            "items": [
              4,
              9
            ],
            "description": "Emotional stability"
          },
          "Openness": {
            "items": [
              5,
              10
            ],
            "description": "Intellectual engagement and creativity"
          }
        },
        "overall": {
          "method": "none",
          "description": "Report individual subscale scores"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 2.5,
              "label": "Low",
              "description": "Below average on this trait"
            },
            {
              "min": 2.5,
              "max": 3.5,
              "label": "Moderate",
              "description": "Average on this trait"
            },
            {
              "min": 3.5,
              "max": 5,
              "label": "High",
              "description": "Above average on this trait"
            }
          ]
        }
      },
      "useCases": [
        "quick personality screening",
        "employee selection",
        "team dynamics assessment"
      ],
      "relatedConstructs": [
        "Big Five personality",
        "personality traits"
      ],
      "keywords": [
        "personality",
        "Big Five",
        "brief assessment",
        "extraversion"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "dark-triad-dd",
      "name": "Dark Triad Dirty Dozen",
      "shortName": "Dark Triad DD",
      "construct": "Dark Personality Traits",
      "category": "Personality",
      "description": "Assesses narcissism, psychopathy, and Machiavellianism using 12 items. Useful for identifying counterproductive workplace behaviors and risk factors.",
      "authors": "Jonason, P. K., & Webster, G. D.",
      "year": 2010,
      "citations": [
        "Jonason, P. K., & Webster, G. D. (2010). The Dirty Dozen: A concise measure of the Dark Triad. Psychological Assessment, 22(2), 420-432."
      ],
      "numberOfItems": 12,
      "estimatedMinutes": 3,
      "items": [
        {
          "id": 1,
          "text": "I tend to manipulate others to get my way",
          "subscale": "Machiavellianism",
          "reverse": false
        },
        {
          "id": 2,
          "text": "I have used deceit or deception to get ahead",
          "subscale": "Machiavellianism",
          "reverse": false
        },
        {
          "id": 3,
          "text": "I have callous emotional reactions",
          "subscale": "Psychopathy",
          "reverse": false
        },
        {
          "id": 4,
          "text": "I am unconcerned with the morality of my actions",
          "subscale": "Psychopathy",
          "reverse": false
        },
        {
          "id": 5,
          "text": "I want others to admire me",
          "subscale": "Narcissism",
          "reverse": false
        },
        {
          "id": 6,
          "text": "I tend to want others to pay attention to me",
          "subscale": "Narcissism",
          "reverse": false
        },
        {
          "id": 7,
          "text": "I have a grandiose sense of my importance",
          "subscale": "Narcissism",
          "reverse": false
        },
        {
          "id": 8,
          "text": "I tend to lack remorse",
          "subscale": "Psychopathy",
          "reverse": false
        },
        {
          "id": 9,
          "text": "I tend to be cynical",
          "subscale": "Machiavellianism",
          "reverse": false
        },
        {
          "id": 10,
          "text": "I tend to be callous or insensitive",
          "subscale": "Psychopathy",
          "reverse": false
        },
        {
          "id": 11,
          "text": "I feel entitled to more of things than other people",
          "subscale": "Narcissism",
          "reverse": false
        },
        {
          "id": 12,
          "text": "I tend to exploit others toward my own gain",
          "subscale": "Machiavellianism",
          "reverse": false
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 5,
        "labels": {
          "1": "Disagree Strongly",
          "2": "Disagree",
          "3": "Neutral",
          "4": "Agree",
          "5": "Agree Strongly"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {
          "Narcissism": {
            "items": [
              5,
              6,
              7,
              11
            ],
            "description": "Grandiosity, entitlement, and need for admiration"
          },
          "Psychopathy": {
            "items": [
              3,
              4,
              8,
              10
            ],
            "description": "Callousness, lack of empathy, and remorselessness"
          },
          "Machiavellianism": {
            "items": [
              1,
              2,
              9,
              12
            ],
            "description": "Manipulation, deception, and cynicism"
          }
        },
        "overall": {
          "method": "mean_of_all",
          "description": "Overall Dark Triad score"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 2.5,
              "label": "Low",
              "description": "Low dark trait expression"
            },
            {
              "min": 2.5,
              "max": 3.5,
              "label": "Moderate",
              "description": "Moderate dark trait expression"
            },
            {
              "min": 3.5,
              "max": 5,
              "label": "High",
              "description": "High dark trait expression - risk factor"
            }
          ]
        }
      },
      "useCases": [
        "risk assessment",
        "ethical climate evaluation",
        "counterproductive behavior identification"
      ],
      "relatedConstructs": [
        "narcissism",
        "psychopathy",
        "Machiavellianism",
        "unethical behavior"
      ],
      "keywords": [
        "dark triad",
        "narcissism",
        "psychopathy",
        "Machiavellianism",
        "ethics"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "growth-mindset",
      "name": "Growth Mindset Scale",
      "shortName": "Growth Mindset",
      "construct": "Mindset",
      "category": "Personality",
      "description": "Assesses the belief that abilities and intelligence can be developed through effort and learning, versus the belief that they are fixed. Critical for understanding employee learning potential.",
      "authors": "Dweck, C. S.",
      "year": 2006,
      "citations": [
        "Dweck, C. S. (2006). Mindset: The new psychology of success. Random House."
      ],
      "numberOfItems": 8,
      "estimatedMinutes": 2,
      "itemsNote": "Items based on Dweck's published research on mindset; exact wording may vary in different validated instruments",
      "items": [
        {
          "id": 1,
          "text": "You can always substantially change how intelligent you are",
          "subscale": "Growth Mindset",
          "reverse": false
        },
        {
          "id": 2,
          "text": "You can do things differently, but the important parts of who you are can't really be changed",
          "subscale": "Fixed Mindset",
          "reverse": false
        },
        {
          "id": 3,
          "text": "No matter who you are, you can significantly change your intellectual abilities",
          "subscale": "Growth Mindset",
          "reverse": false
        },
        {
          "id": 4,
          "text": "Regardless of your current intelligence, you can develop it quite a bit",
          "subscale": "Growth Mindset",
          "reverse": false
        },
        {
          "id": 5,
          "text": "You have a certain amount of intelligence, and you can't do much to change it",
          "subscale": "Fixed Mindset",
          "reverse": false
        },
        {
          "id": 6,
          "text": "Your intelligence is something about you that you can't change very much",
          "subscale": "Fixed Mindset",
          "reverse": false
        },
        {
          "id": 7,
          "text": "To be successful, you need to be naturally intelligent",
          "subscale": "Fixed Mindset",
          "reverse": false
        },
        {
          "id": 8,
          "text": "You can develop your intelligence through hard work and training",
          "subscale": "Growth Mindset",
          "reverse": false
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 6,
        "labels": {
          "1": "Strongly Disagree",
          "2": "Disagree",
          "3": "Somewhat Disagree",
          "4": "Somewhat Agree",
          "5": "Agree",
          "6": "Strongly Agree"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {
          "Growth Mindset": {
            "items": [
              1,
              3,
              4,
              8
            ],
            "description": "Belief in developing abilities through effort"
          },
          "Fixed Mindset": {
            "items": [
              2,
              5,
              6,
              7
            ],
            "description": "Belief that abilities are innate and unchangeable"
          }
        },
        "overall": {
          "method": "reverse_fixed_then_mean",
          "description": "Reverse score fixed mindset items, then calculate mean (higher = more growth mindset)"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 2.5,
              "label": "Strong Fixed Mindset",
              "description": "Believes abilities are innate"
            },
            {
              "min": 2.5,
              "max": 4,
              "label": "Mixed Mindset",
              "description": "Some growth and some fixed beliefs"
            },
            {
              "min": 4,
              "max": 6,
              "label": "Strong Growth Mindset",
              "description": "Believes abilities develop through effort"
            }
          ]
        }
      },
      "useCases": [
        "learning and development programs",
        "talent management",
        "culture change initiatives"
      ],
      "relatedConstructs": [
        "self-efficacy",
        "learning orientation",
        "resilience"
      ],
      "keywords": [
        "mindset",
        "growth",
        "learning",
        "intelligence",
        "development",
        "effort"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "grit-s",
      "name": "Grit Scale - Short Form",
      "shortName": "Grit-S",
      "construct": "Perseverance and Passion",
      "category": "Personality",
      "description": "Measures perseverance of effort and consistency of interest in pursuing long-term goals. Short 8-item version ideal for workplace performance prediction.",
      "authors": "Duckworth, A. L., & Quinn, P. D.",
      "year": 2009,
      "citations": [
        "Duckworth, A. L., & Quinn, P. D. (2009). Development and validation of the Short Grit Scale (Grit-S). Journal of Personality Assessment, 91(2), 166-174."
      ],
      "numberOfItems": 8,
      "estimatedMinutes": 2,
      "items": [
        {
          "id": 1,
          "text": "I have overcome setbacks to conquer an important challenge",
          "subscale": "Perseverance of Effort",
          "reverse": false
        },
        {
          "id": 2,
          "text": "New ideas and projects sometimes distract me from previous ones",
          "subscale": "Consistency of Interest",
          "reverse": true
        },
        {
          "id": 3,
          "text": "My interests change from year to year",
          "subscale": "Consistency of Interest",
          "reverse": true
        },
        {
          "id": 4,
          "text": "I am diligent",
          "subscale": "Perseverance of Effort",
          "reverse": false
        },
        {
          "id": 5,
          "text": "I have difficulty maintaining my focus on projects that take more than a few months to complete",
          "subscale": "Perseverance of Effort",
          "reverse": true
        },
        {
          "id": 6,
          "text": "I finish whatever I begin",
          "subscale": "Perseverance of Effort",
          "reverse": false
        },
        {
          "id": 7,
          "text": "I often set a goal but later choose to pursue a different one",
          "subscale": "Consistency of Interest",
          "reverse": true
        },
        {
          "id": 8,
          "text": "I have been obsessed with a certain idea or project for a short time but later lost interest",
          "subscale": "Consistency of Interest",
          "reverse": true
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 5,
        "labels": {
          "1": "Not Like Me At All",
          "2": "Not Much Like Me",
          "3": "Somewhat Like Me",
          "4": "Mostly Like Me",
          "5": "Very Much Like Me"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {
          "Perseverance of Effort": {
            "items": [
              1,
              4,
              5,
              6
            ],
            "description": "Determination to overcome obstacles and complete goals"
          },
          "Consistency of Interest": {
            "items": [
              2,
              3,
              7,
              8
            ],
            "description": "Maintaining focus on long-term goals"
          }
        },
        "overall": {
          "method": "mean_of_all",
          "description": "Overall grit score (perseverance + consistency)"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 2.5,
              "label": "Low Grit",
              "description": "Low perseverance and goal commitment"
            },
            {
              "min": 2.5,
              "max": 3.5,
              "label": "Moderate Grit",
              "description": "Moderate perseverance and goal commitment"
            },
            {
              "min": 3.5,
              "max": 5,
              "label": "High Grit",
              "description": "High perseverance and goal commitment"
            }
          ]
        }
      },
      "useCases": [
        "talent assessment",
        "career counseling",
        "leadership development",
        "performance prediction"
      ],
      "relatedConstructs": [
        "conscientiousness",
        "resilience",
        "achievement motivation",
        "self-discipline"
      ],
      "keywords": [
        "grit",
        "perseverance",
        "passion",
        "goal commitment",
        "resilience",
        "determination"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "uwes-9",
      "name": "Utrecht Work Engagement Scale",
      "shortName": "UWES-9",
      "construct": "Work Engagement",
      "category": "Engagement & Satisfaction",
      "description": "Measures the positive state of work engagement across vigor, dedication, and absorption. Strong predictor of employee performance and retention.",
      "authors": "Schaufeli, W. B., Bakker, A. B., & Salanova, M.",
      "year": 2006,
      "citations": [
        "Schaufeli, W. B., Bakker, A. B., & Salanova, M. (2006). The measurement of work engagement with a short questionnaire. Educational and Psychological Measurement, 66(4), 701-716."
      ],
      "numberOfItems": 9,
      "estimatedMinutes": 3,
      "items": [
        {
          "id": 1,
          "text": "At my work, I feel bursting with energy",
          "subscale": "Vigor",
          "reverse": false
        },
        {
          "id": 2,
          "text": "I find the work that I do full of meaning and purpose",
          "subscale": "Dedication",
          "reverse": false
        },
        {
          "id": 3,
          "text": "Time flies when I'm working",
          "subscale": "Absorption",
          "reverse": false
        },
        {
          "id": 4,
          "text": "At my job, I feel strong and vigorous",
          "subscale": "Vigor",
          "reverse": false
        },
        {
          "id": 5,
          "text": "I am enthusiastic about my job",
          "subscale": "Dedication",
          "reverse": false
        },
        {
          "id": 6,
          "text": "My job inspires me",
          "subscale": "Absorption",
          "reverse": false
        },
        {
          "id": 7,
          "text": "When I get up in the morning, I feel like going to work",
          "subscale": "Vigor",
          "reverse": false
        },
        {
          "id": 8,
          "text": "I feel happy when I am working intensely",
          "subscale": "Dedication",
          "reverse": false
        },
        {
          "id": 9,
          "text": "I am immersed in my work",
          "subscale": "Absorption",
          "reverse": false
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 7,
        "labels": {
          "0": "Never",
          "1": "Almost Never",
          "2": "Rarely",
          "3": "Sometimes",
          "4": "Often",
          "5": "Very Often",
          "6": "Always"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {
          "Vigor": {
            "items": [
              1,
              4,
              7
            ],
            "description": "Energy and mental resilience at work"
          },
          "Dedication": {
            "items": [
              2,
              5,
              8
            ],
            "description": "Sense of significance and enthusiasm"
          },
          "Absorption": {
            "items": [
              3,
              6,
              9
            ],
            "description": "Full concentration and engagement"
          }
        },
        "overall": {
          "method": "mean_of_all",
          "description": "Overall work engagement score"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 0,
              "max": 2,
              "label": "Low",
              "description": "Low engagement"
            },
            {
              "min": 2,
              "max": 4,
              "label": "Moderate",
              "description": "Moderate engagement"
            },
            {
              "min": 4,
              "max": 6,
              "label": "High",
              "description": "High engagement"
            }
          ]
        }
      },
      "useCases": [
        "employee engagement surveys",
        "burnout prevention",
        "organizational development",
        "performance management"
      ],
      "relatedConstructs": [
        "burnout",
        "job satisfaction",
        "motivation",
        "flow",
        "performance"
      ],
      "keywords": [
        "engagement",
        "vigor",
        "dedication",
        "absorption",
        "energy",
        "enthusiasm",
        "meaning"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "bpnw",
      "name": "Basic Psychological Needs at Work Scale",
      "shortName": "BPNW",
      "construct": "Psychological Need Satisfaction",
      "category": "Engagement & Satisfaction",
      "description": "Assesses fulfillment of autonomy, competence, and relatedness needs at work based on Self-Determination Theory. Critical for understanding intrinsic motivation.",
      "authors": "Deci, E. L., Ryan, R. M., Gagne, M., Leone, L., Ustin, H., & Kornazheva, B. P.",
      "year": 2001,
      "citations": [
        "Deci, E. L., Ryan, R. M., Gagne, M., Leone, L., Ustin, H., & Kornazheva, B. P. (2001). Need satisfaction and the theory of psychological well-being and ill-being. In S. L. Friedman (Ed.), Supporting child and family mental health. Kluwer Academic."
      ],
      "numberOfItems": 12,
      "estimatedMinutes": 3,
      "itemsNote": "Based on Self-Determination Theory framework; specific item wording varies across studies",
      "items": [
        {
          "id": 1,
          "text": "I feel like I can make decisions about how to perform my job",
          "subscale": "Autonomy",
          "reverse": false
        },
        {
          "id": 2,
          "text": "I feel like I have a say in what happens in my job",
          "subscale": "Autonomy",
          "reverse": false
        },
        {
          "id": 3,
          "text": "I feel that my job allows me to be who I really am",
          "subscale": "Autonomy",
          "reverse": false
        },
        {
          "id": 4,
          "text": "I feel capable of accomplishing the goals my job requires",
          "subscale": "Competence",
          "reverse": false
        },
        {
          "id": 5,
          "text": "I feel confident that I can do well at my job",
          "subscale": "Competence",
          "reverse": false
        },
        {
          "id": 6,
          "text": "I feel effective at my job",
          "subscale": "Competence",
          "reverse": false
        },
        {
          "id": 7,
          "text": "I feel connected to my coworkers at work",
          "subscale": "Relatedness",
          "reverse": false
        },
        {
          "id": 8,
          "text": "I feel that my coworkers care about me as a person",
          "subscale": "Relatedness",
          "reverse": false
        },
        {
          "id": 9,
          "text": "I feel close to the people I work with",
          "subscale": "Relatedness",
          "reverse": false
        },
        {
          "id": 10,
          "text": "I do not feel in control of my work tasks",
          "subscale": "Autonomy",
          "reverse": true
        },
        {
          "id": 11,
          "text": "I struggle with my job responsibilities",
          "subscale": "Competence",
          "reverse": true
        },
        {
          "id": 12,
          "text": "I feel isolated from my colleagues at work",
          "subscale": "Relatedness",
          "reverse": true
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 7,
        "labels": {
          "1": "Not At All True",
          "2": "Mostly Not True",
          "3": "Somewhat Not True",
          "4": "Neutral",
          "5": "Somewhat True",
          "6": "Mostly True",
          "7": "Very True"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {
          "Autonomy": {
            "items": [
              1,
              2,
              3,
              10
            ],
            "description": "Feeling of choice and control in work"
          },
          "Competence": {
            "items": [
              4,
              5,
              6,
              11
            ],
            "description": "Feeling of effectiveness and capability"
          },
          "Relatedness": {
            "items": [
              7,
              8,
              9,
              12
            ],
            "description": "Feeling of connection and belonging"
          }
        },
        "overall": {
          "method": "mean_of_all",
          "description": "Overall psychological need satisfaction"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 3.5,
              "label": "Low",
              "description": "Low need satisfaction"
            },
            {
              "min": 3.5,
              "max": 5.5,
              "label": "Moderate",
              "description": "Moderate need satisfaction"
            },
            {
              "min": 5.5,
              "max": 7,
              "label": "High",
              "description": "High need satisfaction"
            }
          ]
        }
      },
      "useCases": [
        "motivation assessment",
        "job design evaluation",
        "team culture analysis",
        "engagement drivers"
      ],
      "relatedConstructs": [
        "intrinsic motivation",
        "engagement",
        "well-being",
        "self-determination"
      ],
      "keywords": [
        "autonomy",
        "competence",
        "relatedness",
        "needs",
        "motivation",
        "self-determination"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "cbi",
      "name": "Copenhagen Burnout Inventory",
      "shortName": "CBI",
      "construct": "Burnout",
      "category": "Burnout & Stress",
      "description": "Measures work-related burnout across personal burnout, work-related burnout, and client-related burnout dimensions. Comprehensive assessment of exhaustion and disengagement.",
      "authors": "Kristensen, T. S., Borritz, M., Villadsen, E., & Christensen, K. B.",
      "year": 2005,
      "citations": [
        "Kristensen, T. S., Borritz, M., Villadsen, E., & Christensen, K. B. (2005). The Copenhagen Burnout Inventory: A new tool for the assessment of burnout. Work & Stress, 19(3), 192-207."
      ],
      "numberOfItems": 19,
      "estimatedMinutes": 5,
      "itemsNote": "Items represent the three CBI dimensions; verify against original publication for exact wording",
      "items": [
        {
          "id": 1,
          "text": "How often do you feel tired?",
          "subscale": "Personal Burnout",
          "reverse": false
        },
        {
          "id": 2,
          "text": "How often are you emotionally exhausted?",
          "subscale": "Personal Burnout",
          "reverse": false
        },
        {
          "id": 3,
          "text": "How often do you feel weak and listless?",
          "subscale": "Personal Burnout",
          "reverse": false
        },
        {
          "id": 4,
          "text": "How often do you feel irritable in contact with colleagues?",
          "subscale": "Work-Related Burnout",
          "reverse": false
        },
        {
          "id": 5,
          "text": "How often do you feel like you are at the end of your rope?",
          "subscale": "Personal Burnout",
          "reverse": false
        },
        {
          "id": 6,
          "text": "How often do you feel worn out and used up?",
          "subscale": "Personal Burnout",
          "reverse": false
        },
        {
          "id": 7,
          "text": "How often do you feel frustrated by your work?",
          "subscale": "Work-Related Burnout",
          "reverse": false
        },
        {
          "id": 8,
          "text": "How often do you feel burned out from your work?",
          "subscale": "Work-Related Burnout",
          "reverse": false
        },
        {
          "id": 9,
          "text": "How often do you feel depressed and melancholic?",
          "subscale": "Personal Burnout",
          "reverse": false
        },
        {
          "id": 10,
          "text": "Does your work feel meaningless to you?",
          "subscale": "Work-Related Burnout",
          "reverse": false
        },
        {
          "id": 11,
          "text": "How often do you feel you lack energy for intimate contact with colleagues?",
          "subscale": "Client-Related Burnout",
          "reverse": false
        },
        {
          "id": 12,
          "text": "How often do you feel you have become more callous towards people?",
          "subscale": "Client-Related Burnout",
          "reverse": false
        },
        {
          "id": 13,
          "text": "How often do you feel that you are working too hard on your job?",
          "subscale": "Work-Related Burnout",
          "reverse": false
        },
        {
          "id": 14,
          "text": "How often do you feel that uncertainty about what is expected of you at work causes you stress?",
          "subscale": "Work-Related Burnout",
          "reverse": false
        },
        {
          "id": 15,
          "text": "How often do you feel inadequate when working with clients or patients?",
          "subscale": "Client-Related Burnout",
          "reverse": false
        },
        {
          "id": 16,
          "text": "How often do you feel you lack the energy to be empathetic with clients?",
          "subscale": "Client-Related Burnout",
          "reverse": false
        },
        {
          "id": 17,
          "text": "How often do you feel emotionally hardened in your work?",
          "subscale": "Client-Related Burnout",
          "reverse": false
        },
        {
          "id": 18,
          "text": "How often do you feel that you are a positive influence on others through your work?",
          "subscale": "Work-Related Burnout",
          "reverse": true
        },
        {
          "id": 19,
          "text": "How often do you feel that your work gives you a sense of accomplishment?",
          "subscale": "Work-Related Burnout",
          "reverse": true
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 5,
        "labels": {
          "0": "Never/Almost Never",
          "1": "Seldom",
          "2": "Sometimes",
          "3": "Often",
          "4": "Always"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {
          "Personal Burnout": {
            "items": [
              1,
              2,
              3,
              5,
              6,
              9
            ],
            "description": "Physical and emotional exhaustion"
          },
          "Work-Related Burnout": {
            "items": [
              4,
              7,
              8,
              10,
              13,
              14,
              18,
              19
            ],
            "description": "Exhaustion and cynicism related to work"
          },
          "Client-Related Burnout": {
            "items": [
              11,
              12,
              15,
              16,
              17
            ],
            "description": "Loss of empathy and callousness toward clients/colleagues"
          }
        },
        "overall": {
          "method": "mean_of_all",
          "description": "Overall burnout score"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 0,
              "max": 1.5,
              "label": "Low",
              "description": "Low burnout risk"
            },
            {
              "min": 1.5,
              "max": 2.5,
              "label": "Moderate",
              "description": "Moderate burnout risk"
            },
            {
              "min": 2.5,
              "max": 4,
              "label": "High",
              "description": "High burnout risk - intervention needed"
            }
          ]
        }
      },
      "useCases": [
        "burnout assessment and monitoring",
        "occupational health screening",
        "intervention effectiveness evaluation"
      ],
      "relatedConstructs": [
        "burnout",
        "exhaustion",
        "cynicism",
        "mental health",
        "work stress"
      ],
      "keywords": [
        "burnout",
        "exhaustion",
        "fatigue",
        "depersonalization",
        "client care",
        "stress"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "pss-10",
      "name": "Perceived Stress Scale",
      "shortName": "PSS-10",
      "construct": "Perceived Stress",
      "category": "Burnout & Stress",
      "description": "Measures the degree to which situations in life are perceived as stressful. Most widely used psychological stress scale, assessing feelings of being overwhelmed and loss of control.",
      "authors": "Cohen, S., Kamarck, T., & Mermelstein, R.",
      "year": 1983,
      "citations": [
        "Cohen, S., Kamarck, T., & Mermelstein, R. (1983). A global measure of perceived stress. Journal of Health and Social Behavior, 24(4), 385-396."
      ],
      "numberOfItems": 10,
      "estimatedMinutes": 3,
      "items": [
        {
          "id": 1,
          "text": "In the last month, how often have you been upset because of something that happened unexpectedly?",
          "subscale": "Stress",
          "reverse": false
        },
        {
          "id": 2,
          "text": "In the last month, how often have you felt unable to control the important things in your life?",
          "subscale": "Stress",
          "reverse": false
        },
        {
          "id": 3,
          "text": "In the last month, how often have you felt nervous and stressed?",
          "subscale": "Stress",
          "reverse": false
        },
        {
          "id": 4,
          "text": "In the last month, how often have you dealt successfully with day-to-day problems and annoyances?",
          "subscale": "Coping",
          "reverse": true
        },
        {
          "id": 5,
          "text": "In the last month, how often have you felt that you were effectively coping with important changes occurring in your life?",
          "subscale": "Coping",
          "reverse": true
        },
        {
          "id": 6,
          "text": "In the last month, how often have you felt confident about your ability to handle your personal problems?",
          "subscale": "Coping",
          "reverse": true
        },
        {
          "id": 7,
          "text": "In the last month, how often have you felt that things were going your way?",
          "subscale": "Coping",
          "reverse": true
        },
        {
          "id": 8,
          "text": "In the last month, how often have you found that you could not cope with all the things that you had to do?",
          "subscale": "Stress",
          "reverse": false
        },
        {
          "id": 9,
          "text": "In the last month, how often have you been able to control irritations in your life?",
          "subscale": "Coping",
          "reverse": true
        },
        {
          "id": 10,
          "text": "In the last month, how often have you felt that you were on top of things?",
          "subscale": "Coping",
          "reverse": true
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 5,
        "labels": {
          "0": "Never",
          "1": "Almost Never",
          "2": "Sometimes",
          "3": "Fairly Often",
          "4": "Very Often"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {
          "Perceived Stress": {
            "items": [
              1,
              2,
              3,
              8
            ],
            "description": "Feelings of being overwhelmed and lack of control"
          },
          "Coping": {
            "items": [
              4,
              5,
              6,
              7,
              9,
              10
            ],
            "description": "Perceived ability to cope and control"
          }
        },
        "overall": {
          "method": "mean_of_all",
          "description": "Overall perceived stress score"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 0,
              "max": 1.3,
              "label": "Low",
              "description": "Low perceived stress"
            },
            {
              "min": 1.3,
              "max": 2.6,
              "label": "Moderate",
              "description": "Moderate perceived stress"
            },
            {
              "min": 2.6,
              "max": 4,
              "label": "High",
              "description": "High perceived stress - intervention recommended"
            }
          ]
        }
      },
      "useCases": [
        "stress assessment",
        "wellness programs",
        "mental health screening",
        "intervention evaluation"
      ],
      "relatedConstructs": [
        "burnout",
        "anxiety",
        "coping",
        "resilience",
        "mental health"
      ],
      "keywords": [
        "stress",
        "perceived",
        "overwhelmed",
        "control",
        "coping",
        "anxiety"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "olbi",
      "name": "Oldenburg Burnout Inventory",
      "shortName": "OLBI",
      "construct": "Burnout",
      "category": "Burnout & Stress",
      "description": "Assesses burnout through exhaustion and disengagement dimensions. Addresses limitations of earlier scales by measuring disengagement as withdrawal rather than cynicism.",
      "authors": "Demerouti, E., Bakker, A. B., Nachreiner, F., & Schaufeli, W. B.",
      "year": 2003,
      "citations": [
        "Demerouti, E., Bakker, A. B., Nachreiner, F., & Schaufeli, W. B. (2003). The old and the new: Differential validity of the global burnout measure in relation to the Oldenburg Burnout Inventory. Journal of Occupational and Organizational Psychology, 76(2), 173-189."
      ],
      "numberOfItems": 16,
      "estimatedMinutes": 4,
      "itemsNote": "Items based on OLBI dimensions; exact wording should be verified against original publication",
      "items": [
        {
          "id": 1,
          "text": "There are days when I feel tired before my work has even started",
          "subscale": "Exhaustion",
          "reverse": false
        },
        {
          "id": 2,
          "text": "It happens more and more often that I talk about my work in a derogatory manner",
          "subscale": "Disengagement",
          "reverse": false
        },
        {
          "id": 3,
          "text": "After my work, I usually feel worn out and exhausted",
          "subscale": "Exhaustion",
          "reverse": false
        },
        {
          "id": 4,
          "text": "I can tolerate the pressure of my work well",
          "subscale": "Exhaustion",
          "reverse": true
        },
        {
          "id": 5,
          "text": "Lately, I tend to think less at work and do my job almost mechanically",
          "subscale": "Disengagement",
          "reverse": false
        },
        {
          "id": 6,
          "text": "I find my work to be a positive challenge",
          "subscale": "Disengagement",
          "reverse": true
        },
        {
          "id": 7,
          "text": "During my work, I often feel emotionally drained",
          "subscale": "Exhaustion",
          "reverse": false
        },
        {
          "id": 8,
          "text": "Over time, one can become an older and wiser person through their work, but I have not",
          "subscale": "Disengagement",
          "reverse": false
        },
        {
          "id": 9,
          "text": "There are days when I feel tired after I have just arrived at work",
          "subscale": "Exhaustion",
          "reverse": false
        },
        {
          "id": 10,
          "text": "I think that I perform my work with much enthusiasm",
          "subscale": "Disengagement",
          "reverse": true
        },
        {
          "id": 11,
          "text": "I feel mentally strong and alert while at work",
          "subscale": "Exhaustion",
          "reverse": true
        },
        {
          "id": 12,
          "text": "My job makes me feel indifferent about achieving professional goals that I previously valued",
          "subscale": "Disengagement",
          "reverse": false
        },
        {
          "id": 13,
          "text": "I have become more callous towards people since I took this job",
          "subscale": "Disengagement",
          "reverse": false
        },
        {
          "id": 14,
          "text": "I feel a lot of energy when I work",
          "subscale": "Exhaustion",
          "reverse": true
        },
        {
          "id": 15,
          "text": "Working here has made me realize how little influence I have on work outcomes",
          "subscale": "Disengagement",
          "reverse": false
        },
        {
          "id": 16,
          "text": "I feel frustrated with my job",
          "subscale": "Exhaustion",
          "reverse": false
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 4,
        "labels": {
          "1": "Completely Disagree",
          "2": "Disagree",
          "3": "Agree",
          "4": "Completely Agree"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {
          "Exhaustion": {
            "items": [
              1,
              3,
              4,
              7,
              9,
              11,
              14,
              16
            ],
            "description": "Physical and emotional fatigue from work demands"
          },
          "Disengagement": {
            "items": [
              2,
              5,
              6,
              8,
              10,
              12,
              13,
              15
            ],
            "description": "Withdrawal and loss of enthusiasm toward work"
          }
        },
        "overall": {
          "method": "mean_of_all",
          "description": "Overall burnout score"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 2,
              "label": "Low",
              "description": "Low burnout risk"
            },
            {
              "min": 2,
              "max": 3,
              "label": "Moderate",
              "description": "Moderate burnout risk"
            },
            {
              "min": 3,
              "max": 4,
              "label": "High",
              "description": "High burnout risk"
            }
          ]
        }
      },
      "useCases": [
        "burnout prevention",
        "occupational health monitoring",
        "work environment assessment"
      ],
      "relatedConstructs": [
        "burnout",
        "exhaustion",
        "disengagement",
        "engagement",
        "work stress"
      ],
      "keywords": [
        "burnout",
        "exhaustion",
        "disengagement",
        "fatigue",
        "withdrawal",
        "energy"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "brs",
      "name": "Brief Resilience Scale",
      "shortName": "BRS",
      "construct": "Resilience",
      "category": "Burnout & Stress",
      "description": "Measures the ability to bounce back from stress and adversity. Quick assessment of personal resilience and stress recovery capacity.",
      "authors": "Smith, B. W., Dalen, J., Wiggins, K., Tooley, E., Christopher, P., & Bernard, J.",
      "year": 2008,
      "citations": [
        "Smith, B. W., Dalen, J., Wiggins, K., Tooley, E., Christopher, P., & Bernard, J. (2008). The Brief Resilience Scale: Assessing the ability to bounce back. International Journal of Behavioral Medicine, 15(3), 194-200."
      ],
      "numberOfItems": 6,
      "estimatedMinutes": 2,
      "items": [
        {
          "id": 1,
          "text": "I tend to bounce back quickly after hard times",
          "subscale": "Resilience",
          "reverse": false
        },
        {
          "id": 2,
          "text": "I have a hard time making it through stressful events",
          "subscale": "Resilience",
          "reverse": true
        },
        {
          "id": 3,
          "text": "It does not take me long to recover from a stressful event",
          "subscale": "Resilience",
          "reverse": false
        },
        {
          "id": 4,
          "text": "It is hard for me to snap back when something bad happens",
          "subscale": "Resilience",
          "reverse": true
        },
        {
          "id": 5,
          "text": "I usually come through difficult times with little stress",
          "subscale": "Resilience",
          "reverse": false
        },
        {
          "id": 6,
          "text": "I tend to take a long time to get over set-backs in my life",
          "subscale": "Resilience",
          "reverse": true
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 5,
        "labels": {
          "1": "Strongly Disagree",
          "2": "Disagree",
          "3": "Neutral",
          "4": "Agree",
          "5": "Strongly Agree"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {},
        "overall": {
          "method": "mean_of_all",
          "description": "Overall resilience score"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 2.5,
              "label": "Low",
              "description": "Low resilience and recovery from stress"
            },
            {
              "min": 2.5,
              "max": 3.5,
              "label": "Moderate",
              "description": "Moderate resilience and recovery"
            },
            {
              "min": 3.5,
              "max": 5,
              "label": "High",
              "description": "High resilience and stress recovery"
            }
          ]
        }
      },
      "useCases": [
        "resilience training evaluation",
        "stress management assessment",
        "employee wellness programs"
      ],
      "relatedConstructs": [
        "stress",
        "coping",
        "adaptability",
        "mental health",
        "recovery"
      ],
      "keywords": [
        "resilience",
        "bounce back",
        "recovery",
        "stress",
        "adversity",
        "adaptation"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "lmx-7",
      "name": "Leader-Member Exchange Scale",
      "shortName": "LMX-7",
      "construct": "Leader-Member Relationship Quality",
      "category": "Leadership & Teams",
      "description": "Measures the quality of the dyadic relationship between leaders and their direct reports. Predicts performance, commitment, and organizational citizenship.",
      "authors": "Graen, G. B., & Uhl-Bien, M.",
      "year": 1995,
      "citations": [
        "Graen, G. B., & Uhl-Bien, M. (1995). Relationship-based approach to leadership: Development of leader-member exchange (LMX) theory of leadership over 25 years. Leadership Quarterly, 6(2), 219-247."
      ],
      "numberOfItems": 7,
      "estimatedMinutes": 2,
      "items": [
        {
          "id": 1,
          "text": "How well does your manager understand your job problems and needs?",
          "subscale": "LMX",
          "reverse": false
        },
        {
          "id": 2,
          "text": "How well does your manager recognize your potential?",
          "subscale": "LMX",
          "reverse": false
        },
        {
          "id": 3,
          "text": "How would you characterize your working relationship with your manager?",
          "subscale": "LMX",
          "reverse": false
        },
        {
          "id": 4,
          "text": "How often does your manager express appreciation for your work?",
          "subscale": "LMX",
          "reverse": false
        },
        {
          "id": 5,
          "text": "To what extent can you count on your manager to bail you out at their own expense when you face difficulties?",
          "subscale": "LMX",
          "reverse": false
        },
        {
          "id": 6,
          "text": "I have enough confidence in my manager that I would defend and justify their decisions if they were not present to do so",
          "subscale": "LMX",
          "reverse": false
        },
        {
          "id": 7,
          "text": "How would you rate your working relationship with your manager?",
          "subscale": "LMX",
          "reverse": false
        }
      ],
      "responseFormat": {
        "type": "mixed",
        "notes": "Items use different response scales; items 1-2 use 5-point agreement, 3 and 7 use rating scales, 4 uses frequency, 5-6 use 5-point agreement"
      },
      "scoring": {
        "method": "mean",
        "subscales": {},
        "overall": {
          "method": "mean_of_all",
          "description": "Overall quality of leader-member exchange relationship"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 2.5,
              "label": "Low LMX",
              "description": "Low-quality leader-member relationship"
            },
            {
              "min": 2.5,
              "max": 3.5,
              "label": "Moderate LMX",
              "description": "Moderate relationship quality"
            },
            {
              "min": 3.5,
              "max": 5,
              "label": "High LMX",
              "description": "High-quality leader-member relationship"
            }
          ]
        }
      },
      "useCases": [
        "leadership effectiveness assessment",
        "team dynamics evaluation",
        "retention prediction"
      ],
      "relatedConstructs": [
        "leadership",
        "trust",
        "communication",
        "performance",
        "commitment"
      ],
      "keywords": [
        "leader-member exchange",
        "LMX",
        "leadership",
        "relationship",
        "manager",
        "trust"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "psy-safety",
      "name": "Psychological Safety Scale",
      "shortName": "Psychological Safety",
      "construct": "Team Psychological Safety",
      "category": "Leadership & Teams",
      "description": "Measures shared belief that the team is safe for interpersonal risk-taking. Essential for understanding team innovation, learning, and performance.",
      "authors": "Edmondson, A. C.",
      "year": 1999,
      "citations": [
        "Edmondson, A. C. (1999). Psychological safety and learning behavior in work teams. Administrative Science Quarterly, 44(2), 350-383."
      ],
      "numberOfItems": 7,
      "estimatedMinutes": 2,
      "items": [
        {
          "id": 1,
          "text": "If you make a mistake on this team, it is often held against you",
          "subscale": "Psychological Safety",
          "reverse": true
        },
        {
          "id": 2,
          "text": "Members of this team are able to bring up problems and tough issues",
          "subscale": "Psychological Safety",
          "reverse": false
        },
        {
          "id": 3,
          "text": "People on this team sometimes reject others for being different",
          "subscale": "Psychological Safety",
          "reverse": true
        },
        {
          "id": 4,
          "text": "It is safe to take an interpersonal risk on this team",
          "subscale": "Psychological Safety",
          "reverse": false
        },
        {
          "id": 5,
          "text": "It is difficult to ask other members of this team for help",
          "subscale": "Psychological Safety",
          "reverse": true
        },
        {
          "id": 6,
          "text": "No one on this team would deliberately act in a way that undermines my efforts",
          "subscale": "Psychological Safety",
          "reverse": false
        },
        {
          "id": 7,
          "text": "Working with members of this team, my unique skills and talents are valued and utilized",
          "subscale": "Psychological Safety",
          "reverse": false
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 7,
        "labels": {
          "1": "Strongly Disagree",
          "2": "Disagree",
          "3": "Somewhat Disagree",
          "4": "Neutral",
          "5": "Somewhat Agree",
          "6": "Agree",
          "7": "Strongly Agree"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {},
        "overall": {
          "method": "mean_of_all",
          "description": "Overall team psychological safety score"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 3,
              "label": "Low",
              "description": "Low psychological safety - risk-averse culture"
            },
            {
              "min": 3,
              "max": 5,
              "label": "Moderate",
              "description": "Moderate psychological safety"
            },
            {
              "min": 5,
              "max": 7,
              "label": "High",
              "description": "High psychological safety - innovative culture"
            }
          ]
        }
      },
      "useCases": [
        "team effectiveness assessment",
        "innovation culture evaluation",
        "trust building initiatives"
      ],
      "relatedConstructs": [
        "trust",
        "team effectiveness",
        "innovation",
        "psychological safety",
        "engagement"
      ],
      "keywords": [
        "psychological safety",
        "team",
        "risk-taking",
        "trust",
        "openness",
        "learning"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "sls-7",
      "name": "Servant Leadership Scale - Short Form",
      "shortName": "SLS-7",
      "construct": "Servant Leadership",
      "category": "Leadership & Teams",
      "description": "Measures servant leadership behaviors including empowerment, direction, and dependability. Predicts employee commitment and organizational citizenship.",
      "authors": "Liden, R. C., Wayne, S. J., Zhao, H., & Henderson, D.",
      "year": 2015,
      "citations": [
        "Liden, R. C., Wayne, S. J., Zhao, H., & Henderson, D. (2015). Servant leadership: Development of a multidimensional measure and multi-level assessment. Leadership Quarterly, 26(2), 171-194."
      ],
      "numberOfItems": 7,
      "estimatedMinutes": 2,
      "itemsNote": "Short form items selected from longer instrument; verify against original for clinical use",
      "items": [
        {
          "id": 1,
          "text": "My manager emphasizes the importance of focusing on the well-being of others",
          "subscale": "Servant Leadership",
          "reverse": false
        },
        {
          "id": 2,
          "text": "My manager is interested in making sure that I succeed",
          "subscale": "Servant Leadership",
          "reverse": false
        },
        {
          "id": 3,
          "text": "My manager is interested in how my work relates to my career development",
          "subscale": "Servant Leadership",
          "reverse": false
        },
        {
          "id": 4,
          "text": "My manager is genuinely concerned about my well-being",
          "subscale": "Servant Leadership",
          "reverse": false
        },
        {
          "id": 5,
          "text": "My manager holds dear the importance of helping people grow in their careers",
          "subscale": "Servant Leadership",
          "reverse": false
        },
        {
          "id": 6,
          "text": "My manager gives me the confidence to act on my own initiative",
          "subscale": "Servant Leadership",
          "reverse": false
        },
        {
          "id": 7,
          "text": "My manager champions my ideas even if they would create more work for them",
          "subscale": "Servant Leadership",
          "reverse": false
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 5,
        "labels": {
          "1": "Strongly Disagree",
          "2": "Disagree",
          "3": "Neutral",
          "4": "Agree",
          "5": "Strongly Agree"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {},
        "overall": {
          "method": "mean_of_all",
          "description": "Overall servant leadership perception"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 2.5,
              "label": "Low",
              "description": "Low servant leadership behaviors"
            },
            {
              "min": 2.5,
              "max": 3.5,
              "label": "Moderate",
              "description": "Moderate servant leadership"
            },
            {
              "min": 3.5,
              "max": 5,
              "label": "High",
              "description": "High servant leadership - people-focused"
            }
          ]
        }
      },
      "useCases": [
        "leadership development",
        "management effectiveness evaluation",
        "culture assessment"
      ],
      "relatedConstructs": [
        "transformational leadership",
        "empowerment",
        "trust",
        "commitment"
      ],
      "keywords": [
        "servant leadership",
        "empowerment",
        "well-being",
        "development",
        "trust",
        "care"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "swls",
      "name": "Satisfaction with Life Scale",
      "shortName": "SWLS",
      "construct": "Life Satisfaction",
      "category": "Wellbeing & Flourishing",
      "description": "Measures overall cognitive judgment of life satisfaction. Brief instrument relevant for workplace wellbeing and quality of life assessment.",
      "authors": "Diener, E., Emmons, R. A., Larsen, R. J., & Griffin, S.",
      "year": 1985,
      "citations": [
        "Diener, E., Emmons, R. A., Larsen, R. J., & Griffin, S. (1985). The Satisfaction with Life Scale. Journal of Personality Assessment, 49(1), 71-75."
      ],
      "numberOfItems": 5,
      "estimatedMinutes": 1,
      "items": [
        {
          "id": 1,
          "text": "In most ways my life is close to my ideal",
          "subscale": "Life Satisfaction",
          "reverse": false
        },
        {
          "id": 2,
          "text": "The conditions of my life are excellent",
          "subscale": "Life Satisfaction",
          "reverse": false
        },
        {
          "id": 3,
          "text": "I am satisfied with my life",
          "subscale": "Life Satisfaction",
          "reverse": false
        },
        {
          "id": 4,
          "text": "So far I have gotten the important things I want in life",
          "subscale": "Life Satisfaction",
          "reverse": false
        },
        {
          "id": 5,
          "text": "If I could live my life over, I would change almost nothing",
          "subscale": "Life Satisfaction",
          "reverse": false
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 7,
        "labels": {
          "1": "Strongly Disagree",
          "2": "Disagree",
          "3": "Slightly Disagree",
          "4": "Neutral",
          "5": "Slightly Agree",
          "6": "Agree",
          "7": "Strongly Agree"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {},
        "overall": {
          "method": "mean_of_all",
          "description": "Overall life satisfaction score"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 2.5,
              "label": "Low",
              "description": "Low life satisfaction"
            },
            {
              "min": 2.5,
              "max": 5,
              "label": "Moderate",
              "description": "Moderate life satisfaction"
            },
            {
              "min": 5,
              "max": 7,
              "label": "High",
              "description": "High life satisfaction"
            }
          ]
        }
      },
      "useCases": [
        "employee wellbeing assessment",
        "quality of life evaluation",
        "burnout prevention"
      ],
      "relatedConstructs": [
        "well-being",
        "happiness",
        "life quality",
        "flourishing"
      ],
      "keywords": [
        "satisfaction",
        "life",
        "well-being",
        "happiness",
        "quality of life"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "flourishing",
      "name": "Flourishing Scale",
      "shortName": "FS",
      "construct": "Flourishing and Wellbeing",
      "category": "Wellbeing & Flourishing",
      "description": "Measures psychological flourishing through purpose, engagement, relationships, and accomplishment. Captures the positive aspects of mental health and well-being.",
      "authors": "Diener, E., Wirtz, D., Tov, W., Kim-Prieto, C., Choi, D., Oishi, S., & Biswas-Diener, R.",
      "year": 2010,
      "citations": [
        "Diener, E., Wirtz, D., Tov, W., Kim-Prieto, C., Choi, D., Oishi, S., & Biswas-Diener, R. (2010). New well-being measures: Short scales to assess flourishing and positive and negative feelings. Social Indicators Research, 97(2), 143-156."
      ],
      "numberOfItems": 8,
      "estimatedMinutes": 2,
      "items": [
        {
          "id": 1,
          "text": "I lead a purposeful and meaningful life",
          "subscale": "Flourishing",
          "reverse": false
        },
        {
          "id": 2,
          "text": "My social relationships are supportive and rewarding",
          "subscale": "Flourishing",
          "reverse": false
        },
        {
          "id": 3,
          "text": "I am engaged and interested in my daily activities",
          "subscale": "Flourishing",
          "reverse": false
        },
        {
          "id": 4,
          "text": "I actively contribute to the happiness and well-being of others",
          "subscale": "Flourishing",
          "reverse": false
        },
        {
          "id": 5,
          "text": "I am competent and capable in the activities that are important to me",
          "subscale": "Flourishing",
          "reverse": false
        },
        {
          "id": 6,
          "text": "I have a sense of direction and purpose in my life",
          "subscale": "Flourishing",
          "reverse": false
        },
        {
          "id": 7,
          "text": "I am optimistic about my future",
          "subscale": "Flourishing",
          "reverse": false
        },
        {
          "id": 8,
          "text": "People respect me",
          "subscale": "Flourishing",
          "reverse": false
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 7,
        "labels": {
          "1": "Strongly Disagree",
          "2": "Disagree",
          "3": "Slightly Disagree",
          "4": "Mixed/Neutral",
          "5": "Slightly Agree",
          "6": "Agree",
          "7": "Strongly Agree"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {},
        "overall": {
          "method": "mean_of_all",
          "description": "Overall flourishing score"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 3,
              "label": "Low",
              "description": "Low flourishing"
            },
            {
              "min": 3,
              "max": 5,
              "label": "Moderate",
              "description": "Moderate flourishing"
            },
            {
              "min": 5,
              "max": 7,
              "label": "High",
              "description": "High flourishing and well-being"
            }
          ]
        }
      },
      "useCases": [
        "employee wellness programs",
        "organizational development",
        "quality of life assessment"
      ],
      "relatedConstructs": [
        "well-being",
        "happiness",
        "life satisfaction",
        "engagement",
        "purpose"
      ],
      "keywords": [
        "flourishing",
        "well-being",
        "purpose",
        "engagement",
        "meaning",
        "relationships"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "spane",
      "name": "Scale of Positive and Negative Experience",
      "shortName": "SPANE",
      "construct": "Emotional Well-being",
      "category": "Wellbeing & Flourishing",
      "description": "Measures affective well-being through both positive and negative emotional experiences. Brief assessment of emotional balance in life and work.",
      "authors": "Diener, E., Wirtz, D., Tov, W., Kim-Prieto, C., Choi, D., Oishi, S., & Biswas-Diener, R.",
      "year": 2010,
      "citations": [
        "Diener, E., Wirtz, D., Tov, W., Kim-Prieto, C., Choi, D., Oishi, S., & Biswas-Diener, R. (2010). New well-being measures: Short scales to assess flourishing and positive and negative feelings. Social Indicators Research, 97(2), 143-156."
      ],
      "numberOfItems": 12,
      "estimatedMinutes": 2,
      "items": [
        {
          "id": 1,
          "text": "I felt joyful",
          "subscale": "Positive Affect",
          "reverse": false
        },
        {
          "id": 2,
          "text": "I felt anxious",
          "subscale": "Negative Affect",
          "reverse": false
        },
        {
          "id": 3,
          "text": "I felt sad",
          "subscale": "Negative Affect",
          "reverse": false
        },
        {
          "id": 4,
          "text": "I felt afraid",
          "subscale": "Negative Affect",
          "reverse": false
        },
        {
          "id": 5,
          "text": "I felt angry",
          "subscale": "Negative Affect",
          "reverse": false
        },
        {
          "id": 6,
          "text": "I felt ashamed",
          "subscale": "Negative Affect",
          "reverse": false
        },
        {
          "id": 7,
          "text": "I felt happy",
          "subscale": "Positive Affect",
          "reverse": false
        },
        {
          "id": 8,
          "text": "I felt contented",
          "subscale": "Positive Affect",
          "reverse": false
        },
        {
          "id": 9,
          "text": "I felt grateful",
          "subscale": "Positive Affect",
          "reverse": false
        },
        {
          "id": 10,
          "text": "I felt depressed",
          "subscale": "Negative Affect",
          "reverse": false
        },
        {
          "id": 11,
          "text": "I felt hopeful",
          "subscale": "Positive Affect",
          "reverse": false
        },
        {
          "id": 12,
          "text": "I felt upset",
          "subscale": "Negative Affect",
          "reverse": false
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 5,
        "labels": {
          "1": "Very Rarely or Never",
          "2": "Rarely",
          "3": "Sometimes",
          "4": "Often",
          "5": "Very Often or Always"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {
          "Positive Affect": {
            "items": [
              1,
              7,
              8,
              9,
              11
            ],
            "description": "Frequency of positive emotions"
          },
          "Negative Affect": {
            "items": [
              2,
              3,
              4,
              5,
              6,
              10,
              12
            ],
            "description": "Frequency of negative emotions"
          }
        },
        "overall": {
          "method": "pos_minus_neg",
          "description": "Net emotional balance (positive score - negative score)"
        },
        "interpretation": {
          "ranges": [
            {
              "min": -4,
              "max": -1,
              "label": "Negative Balance",
              "description": "More negative than positive emotions"
            },
            {
              "min": -1,
              "max": 1,
              "label": "Neutral Balance",
              "description": "Equal positive and negative emotions"
            },
            {
              "min": 1,
              "max": 4,
              "label": "Positive Balance",
              "description": "More positive than negative emotions"
            }
          ]
        }
      },
      "useCases": [
        "mood and affect assessment",
        "emotional well-being tracking",
        "workplace climate evaluation"
      ],
      "relatedConstructs": [
        "emotional well-being",
        "mood",
        "emotions",
        "affect balance"
      ],
      "keywords": [
        "positive affect",
        "negative affect",
        "emotions",
        "well-being",
        "happiness",
        "distress"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "who-5",
      "name": "WHO-5 Well-Being Index",
      "shortName": "WHO-5",
      "construct": "Psychological Well-being",
      "category": "Wellbeing & Flourishing",
      "description": "Brief five-item measure of well-being assessing mood, vitality, and interests. Widely used in occupational health and positive psychology research.",
      "authors": "World Health Organization",
      "year": 1998,
      "citations": [
        "Bech, P., Olsen, L. R., Kjoller, M., & Rasmussen, N. K. (2003). Measuring well-being rather than illness: Is it relevant in relation to health care quality? Quality of Life Research, 12(8), 1007-1018."
      ],
      "numberOfItems": 5,
      "estimatedMinutes": 1,
      "items": [
        {
          "id": 1,
          "text": "I have felt cheerful and in good spirits",
          "subscale": "Well-being",
          "reverse": false
        },
        {
          "id": 2,
          "text": "I have felt calm and relaxed",
          "subscale": "Well-being",
          "reverse": false
        },
        {
          "id": 3,
          "text": "I have felt active and vigorous",
          "subscale": "Well-being",
          "reverse": false
        },
        {
          "id": 4,
          "text": "I woke up feeling fresh and rested",
          "subscale": "Well-being",
          "reverse": false
        },
        {
          "id": 5,
          "text": "My daily life has been filled with things that interest me",
          "subscale": "Well-being",
          "reverse": false
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 6,
        "labels": {
          "0": "All of the Time",
          "1": "Most of the Time",
          "2": "More than Half the Time",
          "3": "Less than Half the Time",
          "4": "Some of the Time",
          "5": "At No Time"
        }
      },
      "scoring": {
        "method": "raw_sum_then_multiply",
        "subscales": {},
        "overall": {
          "method": "sum_then_times_4",
          "description": "Sum items 1-5 and multiply by 4 to get 0-100 scale"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 0,
              "max": 50,
              "label": "Low",
              "description": "Low well-being, possible depression"
            },
            {
              "min": 50,
              "max": 75,
              "label": "Moderate",
              "description": "Moderate well-being"
            },
            {
              "min": 75,
              "max": 100,
              "label": "High",
              "description": "High well-being"
            }
          ]
        }
      },
      "useCases": [
        "occupational health screening",
        "mental health assessment",
        "employee wellness programs"
      ],
      "relatedConstructs": [
        "well-being",
        "mood",
        "vitality",
        "mental health"
      ],
      "keywords": [
        "well-being",
        "mood",
        "spirit",
        "calm",
        "active",
        "rested",
        "interest"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "gse",
      "name": "General Self-Efficacy Scale",
      "shortName": "GSE",
      "construct": "Self-efficacy",
      "category": "Wellbeing & Flourishing",
      "description": "Measures general confidence in personal ability to handle difficult situations and cope with challenges. Predicts job performance and career success.",
      "authors": "Schwarzer, R., & Jerusalem, M.",
      "year": 1995,
      "citations": [
        "Schwarzer, R., & Jerusalem, M. (1995). Generalized Self-Efficacy Scale. In J. Weinman, S. Wright, & M. Johnston (Eds.), Measures in health psychology: A user's portfolio. NFER-NELSON."
      ],
      "numberOfItems": 10,
      "estimatedMinutes": 2,
      "items": [
        {
          "id": 1,
          "text": "I can always manage to solve difficult problems if I try hard enough",
          "subscale": "Self-efficacy",
          "reverse": false
        },
        {
          "id": 2,
          "text": "If someone opposes me, I can find the means and ways to get what I want",
          "subscale": "Self-efficacy",
          "reverse": false
        },
        {
          "id": 3,
          "text": "It is easy for me to stick to my aims and accomplish my goals",
          "subscale": "Self-efficacy",
          "reverse": false
        },
        {
          "id": 4,
          "text": "I am confident that I could deal efficiently with unexpected events",
          "subscale": "Self-efficacy",
          "reverse": false
        },
        {
          "id": 5,
          "text": "Thanks to my resourcefulness, I know how to handle unforeseen situations",
          "subscale": "Self-efficacy",
          "reverse": false
        },
        {
          "id": 6,
          "text": "I can solve most problems if I invest the necessary effort",
          "subscale": "Self-efficacy",
          "reverse": false
        },
        {
          "id": 7,
          "text": "I can remain calm when facing difficulties because I can rely on my coping abilities",
          "subscale": "Self-efficacy",
          "reverse": false
        },
        {
          "id": 8,
          "text": "When I am confronted with a problem, I can usually find several solutions",
          "subscale": "Self-efficacy",
          "reverse": false
        },
        {
          "id": 9,
          "text": "If I am in trouble, I can usually think of a solution",
          "subscale": "Self-efficacy",
          "reverse": false
        },
        {
          "id": 10,
          "text": "I can usually handle whatever comes my way",
          "subscale": "Self-efficacy",
          "reverse": false
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 4,
        "labels": {
          "1": "Not at All True",
          "2": "Barely True",
          "3": "Moderately True",
          "4": "Exactly True"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {},
        "overall": {
          "method": "mean_of_all",
          "description": "Overall general self-efficacy score"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 1.75,
              "label": "Low",
              "description": "Low confidence in handling challenges"
            },
            {
              "min": 1.75,
              "max": 2.75,
              "label": "Moderate",
              "description": "Moderate self-efficacy"
            },
            {
              "min": 2.75,
              "max": 4,
              "label": "High",
              "description": "High confidence in handling challenges"
            }
          ]
        }
      },
      "useCases": [
        "career development",
        "performance management",
        "training evaluation",
        "resilience building"
      ],
      "relatedConstructs": [
        "self-efficacy",
        "confidence",
        "coping",
        "resilience",
        "achievement"
      ],
      "keywords": [
        "self-efficacy",
        "confidence",
        "capable",
        "resourcefulness",
        "coping",
        "ability"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "caas-sf",
      "name": "Career Adapt-Abilities Scale - Short Form",
      "shortName": "CAAS-SF",
      "construct": "Career Adaptability",
      "category": "Career & Development",
      "description": "Measures ability to adapt to career change and challenges through concern, control, curiosity, and confidence. Critical in uncertain job markets.",
      "authors": "Savickas, M. L., & Porfeli, E. J.",
      "year": 2012,
      "citations": [
        "Savickas, M. L., & Porfeli, E. J. (2012). Career Adapt-Abilities Scale: Construction, reliability, and measurement equivalence across 13 countries. Journal of Career Assessment, 20(1), 55-76."
      ],
      "numberOfItems": 12,
      "estimatedMinutes": 3,
      "itemsNote": "Short form items; verify against original publication for exact wording",
      "items": [
        {
          "id": 1,
          "text": "Worrying about my career future",
          "subscale": "Concern",
          "reverse": false
        },
        {
          "id": 2,
          "text": "Thinking about what my career will be in the future",
          "subscale": "Concern",
          "reverse": false
        },
        {
          "id": 3,
          "text": "Realizing that my career choice requires my efforts",
          "subscale": "Concern",
          "reverse": false
        },
        {
          "id": 4,
          "text": "Making decisions by myself about my career",
          "subscale": "Control",
          "reverse": false
        },
        {
          "id": 5,
          "text": "Taking responsibility for my career development",
          "subscale": "Control",
          "reverse": false
        },
        {
          "id": 6,
          "text": "Keeping myself informed about my career options",
          "subscale": "Control",
          "reverse": false
        },
        {
          "id": 7,
          "text": "Exploring different career possibilities",
          "subscale": "Curiosity",
          "reverse": false
        },
        {
          "id": 8,
          "text": "Investigating options before making a career decision",
          "subscale": "Curiosity",
          "reverse": false
        },
        {
          "id": 9,
          "text": "Trying to understand myself as a career person",
          "subscale": "Curiosity",
          "reverse": false
        },
        {
          "id": 10,
          "text": "Performing well in new situations",
          "subscale": "Confidence",
          "reverse": false
        },
        {
          "id": 11,
          "text": "Solving the problems I encounter",
          "subscale": "Confidence",
          "reverse": false
        },
        {
          "id": 12,
          "text": "Learning new skills for the future",
          "subscale": "Confidence",
          "reverse": false
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 5,
        "labels": {
          "1": "Not Strong",
          "2": "A Little Strong",
          "3": "Somewhat Strong",
          "4": "Strong",
          "5": "Very Strong"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {
          "Concern": {
            "items": [
              1,
              2,
              3
            ],
            "description": "Awareness of and engagement with career development"
          },
          "Control": {
            "items": [
              4,
              5,
              6
            ],
            "description": "Ability to manage one's career actively"
          },
          "Curiosity": {
            "items": [
              7,
              8,
              9
            ],
            "description": "Exploration and self-knowledge in career planning"
          },
          "Confidence": {
            "items": [
              10,
              11,
              12
            ],
            "description": "Capacity to perform in new career situations"
          }
        },
        "overall": {
          "method": "mean_of_all",
          "description": "Overall career adaptability"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 2.5,
              "label": "Low",
              "description": "Low career adaptability"
            },
            {
              "min": 2.5,
              "max": 3.5,
              "label": "Moderate",
              "description": "Moderate career adaptability"
            },
            {
              "min": 3.5,
              "max": 5,
              "label": "High",
              "description": "High career adaptability and resilience"
            }
          ]
        }
      },
      "useCases": [
        "career counseling",
        "development planning",
        "succession planning",
        "organizational change"
      ],
      "relatedConstructs": [
        "career development",
        "adaptability",
        "resilience",
        "self-awareness",
        "learning"
      ],
      "keywords": [
        "career",
        "adaptability",
        "change",
        "planning",
        "confidence",
        "control",
        "curiosity"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "pps-short",
      "name": "Proactive Personality Scale - Short Form",
      "shortName": "PPS-Short",
      "construct": "Proactive Personality",
      "category": "Career & Development",
      "description": "Measures tendency to take initiative and create positive change. Predicts entrepreneurship, leadership emergence, and career advancement.",
      "authors": "Seibert, S. E., Crant, J. M., & Kraimer, M. L.",
      "year": 1999,
      "citations": [
        "Seibert, S. E., Crant, J. M., & Kraimer, M. L. (1999). Proactive personality and career success. Journal of Applied Psychology, 86(3), 416-427."
      ],
      "numberOfItems": 10,
      "estimatedMinutes": 2,
      "itemsNote": "Short form of original 17-item scale; verify against original for clinical use",
      "items": [
        {
          "id": 1,
          "text": "I am constantly on the lookout for new ways to improve my life",
          "subscale": "Proactive Personality",
          "reverse": false
        },
        {
          "id": 2,
          "text": "I feel driven to make a difference in my community",
          "subscale": "Proactive Personality",
          "reverse": false
        },
        {
          "id": 3,
          "text": "I am always looking for better ways to do things",
          "subscale": "Proactive Personality",
          "reverse": false
        },
        {
          "id": 4,
          "text": "If I see something I don't like, I fix it",
          "subscale": "Proactive Personality",
          "reverse": false
        },
        {
          "id": 5,
          "text": "I am often the first to notice problems in my environment",
          "subscale": "Proactive Personality",
          "reverse": false
        },
        {
          "id": 6,
          "text": "I prefer to learn about my environment through experimentation rather than reading about it",
          "subscale": "Proactive Personality",
          "reverse": false
        },
        {
          "id": 7,
          "text": "I tend to let others take the initiative to start new projects",
          "subscale": "Proactive Personality",
          "reverse": true
        },
        {
          "id": 8,
          "text": "I am generally cautious when adapting to new environments",
          "subscale": "Proactive Personality",
          "reverse": true
        },
        {
          "id": 9,
          "text": "I rarely think about ways to improve the status quo",
          "subscale": "Proactive Personality",
          "reverse": true
        },
        {
          "id": 10,
          "text": "I sometimes feel that I am a passive observer in the world around me",
          "subscale": "Proactive Personality",
          "reverse": true
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 7,
        "labels": {
          "1": "Strongly Disagree",
          "2": "Disagree",
          "3": "Slightly Disagree",
          "4": "Neutral",
          "5": "Slightly Agree",
          "6": "Agree",
          "7": "Strongly Agree"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {},
        "overall": {
          "method": "mean_of_all",
          "description": "Overall proactive personality score"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 3,
              "label": "Low",
              "description": "Low proactive tendency"
            },
            {
              "min": 3,
              "max": 5,
              "label": "Moderate",
              "description": "Moderate proactive tendency"
            },
            {
              "min": 5,
              "max": 7,
              "label": "High",
              "description": "High proactive personality - driver of change"
            }
          ]
        }
      },
      "useCases": [
        "leadership development",
        "entrepreneurship assessment",
        "talent identification",
        "innovation culture"
      ],
      "relatedConstructs": [
        "proactivity",
        "initiative",
        "innovation",
        "leadership",
        "change orientation"
      ],
      "keywords": [
        "proactive",
        "initiative",
        "change",
        "improvement",
        "leadership",
        "innovation"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "cses",
      "name": "Core Self-Evaluations Scale",
      "shortName": "CSES",
      "construct": "Core Self-Evaluations",
      "category": "Career & Development",
      "description": "Measures fundamental self-concept through self-esteem, self-efficacy, locus of control, and emotional stability. Strong predictor of job satisfaction and performance.",
      "authors": "Judge, T. A., Erez, A., Bono, J. E., & Thoresen, C. J.",
      "year": 2003,
      "citations": [
        "Judge, T. A., Erez, A., Bono, J. E., & Thoresen, C. J. (2003). The Core Self-Evaluations Scale: Development of a measure. Personnel Psychology, 56(2), 303-331."
      ],
      "numberOfItems": 12,
      "estimatedMinutes": 3,
      "items": [
        {
          "id": 1,
          "text": "I am confident I get the success I deserve in my life",
          "subscale": "Core Self-Evaluations",
          "reverse": false
        },
        {
          "id": 2,
          "text": "Sometimes I feel depressed",
          "subscale": "Core Self-Evaluations",
          "reverse": true
        },
        {
          "id": 3,
          "text": "When I try, I generally succeed",
          "subscale": "Core Self-Evaluations",
          "reverse": false
        },
        {
          "id": 4,
          "text": "Sometimes when I fail I feel worthless",
          "subscale": "Core Self-Evaluations",
          "reverse": true
        },
        {
          "id": 5,
          "text": "I complete tasks successfully",
          "subscale": "Core Self-Evaluations",
          "reverse": false
        },
        {
          "id": 6,
          "text": "Sometimes I do not feel in control of my work",
          "subscale": "Core Self-Evaluations",
          "reverse": true
        },
        {
          "id": 7,
          "text": "I am capable of coping with most of my problems",
          "subscale": "Core Self-Evaluations",
          "reverse": false
        },
        {
          "id": 8,
          "text": "There are times when things look pretty bleak and hopeless to me",
          "subscale": "Core Self-Evaluations",
          "reverse": true
        },
        {
          "id": 9,
          "text": "I feel in control of my professional future",
          "subscale": "Core Self-Evaluations",
          "reverse": false
        },
        {
          "id": 10,
          "text": "I often feel frustrated",
          "subscale": "Core Self-Evaluations",
          "reverse": true
        },
        {
          "id": 11,
          "text": "My life has purpose and meaning",
          "subscale": "Core Self-Evaluations",
          "reverse": false
        },
        {
          "id": 12,
          "text": "I make my own decisions",
          "subscale": "Core Self-Evaluations",
          "reverse": false
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 5,
        "labels": {
          "1": "Strongly Disagree",
          "2": "Disagree",
          "3": "Neutral",
          "4": "Agree",
          "5": "Strongly Agree"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {},
        "overall": {
          "method": "mean_of_all",
          "description": "Overall core self-evaluations score"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 2.5,
              "label": "Low",
              "description": "Low self-evaluation and confidence"
            },
            {
              "min": 2.5,
              "max": 3.5,
              "label": "Moderate",
              "description": "Moderate self-evaluation"
            },
            {
              "min": 3.5,
              "max": 5,
              "label": "High",
              "description": "High core self-evaluations"
            }
          ]
        }
      },
      "useCases": [
        "talent assessment",
        "performance prediction",
        "leadership development",
        "career coaching"
      ],
      "relatedConstructs": [
        "self-esteem",
        "self-efficacy",
        "locus of control",
        "emotional stability",
        "neuroticism"
      ],
      "keywords": [
        "self-evaluation",
        "self-esteem",
        "efficacy",
        "control",
        "confidence",
        "purpose"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "wleis",
      "name": "Wong and Law Emotional Intelligence Scale",
      "shortName": "WLEIS",
      "construct": "Emotional Intelligence",
      "category": "Career & Development",
      "description": "Measures emotional intelligence through self-emotion appraisal, others' emotion appraisal, emotion use, and emotion regulation. Predicts team performance and leadership.",
      "authors": "Wong, C. S., & Law, K. S.",
      "year": 2002,
      "citations": [
        "Wong, C. S., & Law, K. S. (2002). The effects of leader and follower emotional intelligence on performance and attitude: An exploratory study. Leadership Quarterly, 13(3), 243-274."
      ],
      "numberOfItems": 16,
      "estimatedMinutes": 4,
      "itemsNote": "Items represent four EI dimensions; verify against original publication",
      "items": [
        {
          "id": 1,
          "text": "I have a good understanding of my own emotions",
          "subscale": "Self-Emotion Appraisal",
          "reverse": false
        },
        {
          "id": 2,
          "text": "I really understand what I feel",
          "subscale": "Self-Emotion Appraisal",
          "reverse": false
        },
        {
          "id": 3,
          "text": "I always know whether or not I am happy",
          "subscale": "Self-Emotion Appraisal",
          "reverse": false
        },
        {
          "id": 4,
          "text": "I always know my friends' emotions from their behavior",
          "subscale": "Others' Emotion Appraisal",
          "reverse": false
        },
        {
          "id": 5,
          "text": "I have good understanding of the emotions of people around me",
          "subscale": "Others' Emotion Appraisal",
          "reverse": false
        },
        {
          "id": 6,
          "text": "I am a good observer of others' emotions",
          "subscale": "Others' Emotion Appraisal",
          "reverse": false
        },
        {
          "id": 7,
          "text": "I always know if my friend is happy",
          "subscale": "Others' Emotion Appraisal",
          "reverse": false
        },
        {
          "id": 8,
          "text": "I am able to control my temper so that I can cope with difficulties",
          "subscale": "Emotion Regulation",
          "reverse": false
        },
        {
          "id": 9,
          "text": "I am able to control my emotions",
          "subscale": "Emotion Regulation",
          "reverse": false
        },
        {
          "id": 10,
          "text": "I have good control over my emotions",
          "subscale": "Emotion Regulation",
          "reverse": false
        },
        {
          "id": 11,
          "text": "I always set goals for myself and then try my best to achieve them",
          "subscale": "Use of Emotion",
          "reverse": false
        },
        {
          "id": 12,
          "text": "I always tell myself I am a competent person",
          "subscale": "Use of Emotion",
          "reverse": false
        },
        {
          "id": 13,
          "text": "I am a self-motivated person",
          "subscale": "Use of Emotion",
          "reverse": false
        },
        {
          "id": 14,
          "text": "I would always encourage myself to do my best",
          "subscale": "Use of Emotion",
          "reverse": false
        },
        {
          "id": 15,
          "text": "I am able to recognize my emotions as I experience them",
          "subscale": "Self-Emotion Appraisal",
          "reverse": false
        },
        {
          "id": 16,
          "text": "I understand why I feel the way I do",
          "subscale": "Self-Emotion Appraisal",
          "reverse": false
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 7,
        "labels": {
          "1": "Totally Disagree",
          "2": "Disagree",
          "3": "Slightly Disagree",
          "4": "Neutral",
          "5": "Slightly Agree",
          "6": "Agree",
          "7": "Totally Agree"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {
          "Self-Emotion Appraisal": {
            "items": [
              1,
              2,
              3,
              15,
              16
            ],
            "description": "Understanding one's own emotions"
          },
          "Others' Emotion Appraisal": {
            "items": [
              4,
              5,
              6,
              7
            ],
            "description": "Understanding others' emotions"
          },
          "Use of Emotion": {
            "items": [
              11,
              12,
              13,
              14
            ],
            "description": "Using emotion to motivate and achieve"
          },
          "Emotion Regulation": {
            "items": [
              8,
              9,
              10
            ],
            "description": "Controlling and regulating emotions"
          }
        },
        "overall": {
          "method": "mean_of_all",
          "description": "Overall emotional intelligence score"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 3,
              "label": "Low",
              "description": "Low emotional intelligence"
            },
            {
              "min": 3,
              "max": 5,
              "label": "Moderate",
              "description": "Moderate emotional intelligence"
            },
            {
              "min": 5,
              "max": 7,
              "label": "High",
              "description": "High emotional intelligence"
            }
          ]
        }
      },
      "useCases": [
        "leadership development",
        "team building",
        "emotional skills training",
        "performance management"
      ],
      "relatedConstructs": [
        "emotional intelligence",
        "empathy",
        "self-awareness",
        "social awareness",
        "relationship management"
      ],
      "keywords": [
        "emotional intelligence",
        "emotions",
        "self-awareness",
        "empathy",
        "regulation",
        "motivation"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "sms-13",
      "name": "Self-Monitoring Scale (13-item Revised)",
      "shortName": "SMS-13",
      "construct": "Tendency to monitor and adjust self-presentation in social situations",
      "category": "Personality",
      "description": "Measures the ability and tendency to adjust behavior and self-presentation across different social contexts. Important for understanding adaptability and social intelligence in organizations.",
      "authors": "Lennox, R. D., & Wolfe, R. N.",
      "year": 1984,
      "citations": [
        "Lennox, R. D., & Wolfe, R. N. (1984). Revision of the self-monitoring scale. Journal of Personality Assessment, 46(4), 324-334."
      ],
      "numberOfItems": 13,
      "estimatedMinutes": 3,
      "items": [
        {
          "id": 1,
          "text": "I find it hard to imitate the behavior of other people",
          "subscale": "Ability to modify self-presentation",
          "reverse": true
        },
        {
          "id": 2,
          "text": "I guess I put on a show to impress or entertain people",
          "subscale": "Tendency to be high self-monitor",
          "reverse": false
        },
        {
          "id": 3,
          "text": "I would probably make a good actor",
          "subscale": "Ability to modify self-presentation",
          "reverse": false
        },
        {
          "id": 4,
          "text": "I'm curious about the way people sometimes behave around me",
          "subscale": "Sensitivity to others",
          "reverse": false
        },
        {
          "id": 5,
          "text": "I'm not particularly good at making other people like me",
          "subscale": "Ability to modify self-presentation",
          "reverse": true
        },
        {
          "id": 6,
          "text": "I feel a bit awkward in company and do not show up quite so well as I should",
          "subscale": "Sensitivity to others",
          "reverse": true
        },
        {
          "id": 7,
          "text": "I can look anyone in the eye and tell a complete lie (if I find it necessary)",
          "subscale": "Ability to modify self-presentation",
          "reverse": false
        },
        {
          "id": 8,
          "text": "I pay close attention to the reactions of other people when I am with them",
          "subscale": "Sensitivity to others",
          "reverse": false
        },
        {
          "id": 9,
          "text": "My powers of intuition are quite good when it comes to understanding others' emotions and motivations",
          "subscale": "Sensitivity to others",
          "reverse": false
        },
        {
          "id": 10,
          "text": "I let people see the real, true original me in almost all situations",
          "subscale": "Tendency to be high self-monitor",
          "reverse": true
        },
        {
          "id": 11,
          "text": "I would not be good playing the role of a person of a very different sort of person from what I really am",
          "subscale": "Ability to modify self-presentation",
          "reverse": true
        },
        {
          "id": 12,
          "text": "It's important to me to fit in with the group",
          "subscale": "Tendency to be high self-monitor",
          "reverse": false
        },
        {
          "id": 13,
          "text": "I may deceive people by being friendly when I really dislike them",
          "subscale": "Ability to modify self-presentation",
          "reverse": false
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 5,
        "labels": {
          "1": "Strongly Disagree",
          "2": "Disagree",
          "3": "Neutral",
          "4": "Agree",
          "5": "Strongly Agree"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {
          "Ability to modify self-presentation": {
            "items": [
              1,
              3,
              5,
              7,
              11,
              13
            ],
            "description": "Capacity to adjust behavior and impression management"
          },
          "Sensitivity to others": {
            "items": [
              4,
              6,
              8,
              9
            ],
            "description": "Attunement to others' reactions and emotions"
          }
        },
        "overall": {
          "method": "mean_of_all",
          "description": "Overall self-monitoring tendency (range 1-5)"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 2.5,
              "label": "Low Self-Monitor",
              "description": "Less attention to others' cues, more authentic self-presentation"
            },
            {
              "min": 2.5,
              "max": 3.5,
              "label": "Moderate Self-Monitor",
              "description": "Moderate adaptation to social contexts"
            },
            {
              "min": 3.5,
              "max": 5,
              "label": "High Self-Monitor",
              "description": "High adaptability and impression management"
            }
          ]
        }
      },
      "useCases": [
        "Role flexibility assessment",
        "Leadership adaptability",
        "Team communication styles",
        "Customer-facing roles evaluation"
      ],
      "relatedConstructs": [
        "Emotional intelligence",
        "Extraversion",
        "Agreeableness",
        "Social adaptability"
      ],
      "keywords": [
        "self-monitoring",
        "self-presentation",
        "social adaptability",
        "impression management"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "ncs-18",
      "name": "Need for Cognition Scale (18-item Short Form)",
      "shortName": "NCS-18",
      "construct": "Individual differences in tendency to engage in and enjoy cognitive effort",
      "category": "Personality",
      "description": "Assesses motivation and ability to engage in effortful cognitive activities. Relevant for roles requiring analysis, problem-solving, and complex decision-making.",
      "authors": "Cacioppo, J. T., Petty, R. E., & Kao, C. F.",
      "year": 1984,
      "citations": [
        "Cacioppo, J. T., Petty, R. E., & Kao, C. F. (1984). The efficient assessment of need for cognition. Journal of Personality Assessment, 48(3), 306-307."
      ],
      "numberOfItems": 18,
      "estimatedMinutes": 4,
      "items": [
        {
          "id": 1,
          "text": "I would prefer complex to simple problems",
          "subscale": "Overall",
          "reverse": false
        },
        {
          "id": 2,
          "text": "I like to have the responsibility of handling a situation that requires a lot of thinking",
          "subscale": "Overall",
          "reverse": false
        },
        {
          "id": 3,
          "text": "Thinking is not my idea of fun",
          "subscale": "Overall",
          "reverse": true
        },
        {
          "id": 4,
          "text": "I would avoid a task that requires a lot of deep thinking about its content",
          "subscale": "Overall",
          "reverse": true
        },
        {
          "id": 5,
          "text": "I really enjoy a task that involves coming up with new solutions to problems",
          "subscale": "Overall",
          "reverse": false
        },
        {
          "id": 6,
          "text": "Learning new ways to think doesn't excite me very much",
          "subscale": "Overall",
          "reverse": true
        },
        {
          "id": 7,
          "text": "I prefer my life to be filled with puzzles that I must solve",
          "subscale": "Overall",
          "reverse": false
        },
        {
          "id": 8,
          "text": "The idea of relying on thought to get ahead in life appeals to me",
          "subscale": "Overall",
          "reverse": false
        },
        {
          "id": 9,
          "text": "I would prefer a job that requires little thought to one that is very thoughtful, but perhaps would be boring",
          "subscale": "Overall",
          "reverse": true
        },
        {
          "id": 10,
          "text": "I tend to set goals that can be accomplished by putting in a moderate amount of effort",
          "subscale": "Overall",
          "reverse": false
        },
        {
          "id": 11,
          "text": "I can spend hours on a single problem trying to work out a solution",
          "subscale": "Overall",
          "reverse": false
        },
        {
          "id": 12,
          "text": "I only think as hard as I have to",
          "subscale": "Overall",
          "reverse": true
        },
        {
          "id": 13,
          "text": "I like tasks that require me to think through information very carefully",
          "subscale": "Overall",
          "reverse": false
        },
        {
          "id": 14,
          "text": "I am not naturally drawn to complicated problems",
          "subscale": "Overall",
          "reverse": true
        },
        {
          "id": 15,
          "text": "I don't like to have to do a lot of thinking",
          "subscale": "Overall",
          "reverse": true
        },
        {
          "id": 16,
          "text": "I enjoy thinking in abstract terms",
          "subscale": "Overall",
          "reverse": false
        },
        {
          "id": 17,
          "text": "I prefer activities that don't require much thinking",
          "subscale": "Overall",
          "reverse": true
        },
        {
          "id": 18,
          "text": "I like to understand things thoroughly",
          "subscale": "Overall",
          "reverse": false
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 5,
        "labels": {
          "1": "Strongly Disagree",
          "2": "Disagree",
          "3": "Neutral",
          "4": "Agree",
          "5": "Strongly Agree"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {
          "Overall": {
            "items": [
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10,
              11,
              12,
              13,
              14,
              15,
              16,
              17,
              18
            ],
            "description": "Need for cognition"
          }
        },
        "overall": {
          "method": "mean_of_all",
          "description": "Overall need for cognition score (range 1-5)"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 2.5,
              "label": "Low Need for Cognition",
              "description": "Prefers simple tasks and avoids complex thinking"
            },
            {
              "min": 2.5,
              "max": 3.5,
              "label": "Moderate Need for Cognition",
              "description": "Moderate preference for cognitive challenge"
            },
            {
              "min": 3.5,
              "max": 5,
              "label": "High Need for Cognition",
              "description": "Strong preference for complex problems and analytical thinking"
            }
          ]
        }
      },
      "useCases": [
        "Job placement for analytical roles",
        "Training program design",
        "Innovation team selection",
        "Research and development roles"
      ],
      "relatedConstructs": [
        "Openness to experience",
        "Intelligence",
        "Learning motivation",
        "Problem-solving ability"
      ],
      "keywords": [
        "need for cognition",
        "cognitive engagement",
        "intellectual curiosity",
        "analytical thinking"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "rfq",
      "name": "Regulatory Focus Questionnaire",
      "shortName": "RFQ",
      "construct": "Individual differences in promotion focus (growth) versus prevention focus (safety)",
      "category": "Personality",
      "description": "Measures dispositional regulatory focus - the tendency to pursue gains and achievements (promotion) or avoid losses and maintain security (prevention). Relevant for understanding motivation and decision-making styles.",
      "authors": "Higgins, E. T., Friedman, R. S., Harlow, R. E., Idson, L. C., Ayduk, O. N., & Taylor, A.",
      "year": 2001,
      "citations": [
        "Higgins, E. T., Friedman, R. S., Harlow, R. E., Idson, L. C., Ayduk, O. N., & Taylor, A. (2001). Achievement orientations from positive and negative past events: Regulatory focus and historical time. Journal of Personality and Social Psychology, 81(8), 1129-1143."
      ],
      "numberOfItems": 11,
      "estimatedMinutes": 3,
      "items": [
        {
          "id": 1,
          "text": "I am concerned with doing better in my life relative to my past",
          "subscale": "Promotion Focus",
          "reverse": false
        },
        {
          "id": 2,
          "text": "I feel like I have made progress toward being successful in my life",
          "subscale": "Promotion Focus",
          "reverse": false
        },
        {
          "id": 3,
          "text": "I have frequently accomplished things that I hoped to do",
          "subscale": "Promotion Focus",
          "reverse": false
        },
        {
          "id": 4,
          "text": "I often think about the person I am afraid I might become in the future",
          "subscale": "Prevention Focus",
          "reverse": false
        },
        {
          "id": 5,
          "text": "I think it is important that I protect myself against negative events in my life",
          "subscale": "Prevention Focus",
          "reverse": false
        },
        {
          "id": 6,
          "text": "I am more oriented toward preventing losses than ensuring gains in my life",
          "subscale": "Prevention Focus",
          "reverse": false
        },
        {
          "id": 7,
          "text": "In general, I am focused on achieving positive outcomes in my life",
          "subscale": "Promotion Focus",
          "reverse": false
        },
        {
          "id": 8,
          "text": "I see myself as someone who is primarily striving to reach my 'ideal self' - to fulfill my hopes, wishes, and aspirations",
          "subscale": "Promotion Focus",
          "reverse": false
        },
        {
          "id": 9,
          "text": "I see myself as someone who is primarily striving to avoid becoming someone I don't want to be - to fulfill my obligations and responsibilities",
          "subscale": "Prevention Focus",
          "reverse": false
        },
        {
          "id": 10,
          "text": "I typically focus on the success I hope to achieve in my life",
          "subscale": "Promotion Focus",
          "reverse": false
        },
        {
          "id": 11,
          "text": "I typically focus on the failures I hope to avoid in my life",
          "subscale": "Prevention Focus",
          "reverse": false
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 5,
        "labels": {
          "1": "Not at all true",
          "2": "Mostly not true",
          "3": "Somewhat true",
          "4": "Mostly true",
          "5": "Very true"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {
          "Promotion Focus": {
            "items": [
              1,
              2,
              3,
              7,
              8,
              10
            ],
            "description": "Orientation toward growth, aspirations, and gains"
          },
          "Prevention Focus": {
            "items": [
              4,
              5,
              6,
              9,
              11
            ],
            "description": "Orientation toward security, obligations, and loss avoidance"
          }
        },
        "overall": {
          "method": "ratio",
          "description": "Promotion/Prevention ratio (higher = stronger promotion focus)"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 2,
              "label": "Strong Prevention Focus",
              "description": "Primarily motivated by avoiding losses and maintaining security"
            },
            {
              "min": 2,
              "max": 3,
              "label": "Balanced Focus",
              "description": "Equal motivation toward growth and security"
            },
            {
              "min": 3,
              "max": 5,
              "label": "Strong Promotion Focus",
              "description": "Primarily motivated by achieving gains and growth"
            }
          ]
        }
      },
      "useCases": [
        "Career development planning",
        "Leadership style assessment",
        "Risk tolerance evaluation",
        "Strategic decision-making styles"
      ],
      "relatedConstructs": [
        "Motivation",
        "Risk perception",
        "Goal orientation",
        "Achievement motivation"
      ],
      "keywords": [
        "regulatory focus",
        "promotion",
        "prevention",
        "motivation",
        "goal orientation"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "locs-short",
      "name": "Locus of Control Scale (Short Form)",
      "shortName": "LOCS",
      "construct": "Belief about the degree to which outcomes are controlled by personal effort versus external forces",
      "category": "Personality",
      "description": "Measures whether individuals believe outcomes are self-determined (internal locus) or determined by external factors (external locus). Critical for understanding employee agency and responsibility.",
      "authors": "Rotter, J. B.",
      "year": 1966,
      "citations": [
        "Rotter, J. B. (1966). Generalized expectancies for internal versus external control of reinforcement. Psychological Monographs, 80(1), 1-28."
      ],
      "numberOfItems": 10,
      "estimatedMinutes": 3,
      "items": [
        {
          "id": 1,
          "text": "The world is run by the few people in power, and there is not much the little guy can do about it",
          "subscale": "External Control",
          "reverse": false
        },
        {
          "id": 2,
          "text": "When I make plans, I am almost certain to make them work",
          "subscale": "Internal Control",
          "reverse": false
        },
        {
          "id": 3,
          "text": "It's not always wise to plan too far ahead because many things turn out to be a matter of good or bad fortune anyway",
          "subscale": "External Control",
          "reverse": false
        },
        {
          "id": 4,
          "text": "Getting promoted is really a matter of being in the right place at the right time",
          "subscale": "External Control",
          "reverse": false
        },
        {
          "id": 5,
          "text": "My life is determined by my own actions",
          "subscale": "Internal Control",
          "reverse": false
        },
        {
          "id": 6,
          "text": "If it's meant to be, it will happen whether I worry about it or not",
          "subscale": "External Control",
          "reverse": false
        },
        {
          "id": 7,
          "text": "I have little influence over the things that happen to me",
          "subscale": "External Control",
          "reverse": false
        },
        {
          "id": 8,
          "text": "I am responsible for my own success or failure at work",
          "subscale": "Internal Control",
          "reverse": false
        },
        {
          "id": 9,
          "text": "Most people don't realize the extent to which their lives are controlled by accidental happenings",
          "subscale": "External Control",
          "reverse": false
        },
        {
          "id": 10,
          "text": "I can control my destiny",
          "subscale": "Internal Control",
          "reverse": false
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 5,
        "labels": {
          "1": "Strongly Disagree",
          "2": "Disagree",
          "3": "Neutral",
          "4": "Agree",
          "5": "Strongly Agree"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {
          "Internal Control": {
            "items": [
              2,
              5,
              8,
              10
            ],
            "description": "Belief that outcomes are self-determined"
          },
          "External Control": {
            "items": [
              1,
              3,
              4,
              6,
              7,
              9
            ],
            "description": "Belief that outcomes are determined by external forces"
          }
        },
        "overall": {
          "method": "difference",
          "description": "Internal Control score - External Control score (range -3 to 3, positive = internal locus)"
        },
        "interpretation": {
          "ranges": [
            {
              "min": -3,
              "max": -1,
              "label": "External Locus of Control",
              "description": "Strong belief that outcomes are determined by external forces"
            },
            {
              "min": -1,
              "max": 1,
              "label": "Balanced Locus of Control",
              "description": "Mixed beliefs about control"
            },
            {
              "min": 1,
              "max": 3,
              "label": "Internal Locus of Control",
              "description": "Strong belief that outcomes are self-determined"
            }
          ]
        }
      },
      "useCases": [
        "Employee accountability assessment",
        "Performance expectations",
        "Training program suitability",
        "Leadership potential evaluation"
      ],
      "relatedConstructs": [
        "Conscientiousness",
        "Self-efficacy",
        "Responsibility",
        "Agency"
      ],
      "keywords": [
        "locus of control",
        "internal",
        "external",
        "personal agency",
        "self-determination"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "imi-enjoyment",
      "name": "Intrinsic Motivation Inventory - Interest/Enjoyment Subscale",
      "shortName": "IMI-EE",
      "construct": "Intrinsic motivation and enjoyment derived from a task or activity",
      "category": "Motivation",
      "description": "Assesses the degree to which individuals find a task interesting and enjoyable. Valuable for understanding engagement levels and task appeal in organizational settings.",
      "authors": "Ryan, R. M.",
      "year": 1982,
      "citations": [
        "Ryan, R. M. (1982). Control and information in the intrapersonal sphere: An extension of cognitive evaluation theory. Journal of Personality and Social Psychology, 43(3), 450-461."
      ],
      "numberOfItems": 7,
      "estimatedMinutes": 2,
      "items": [
        {
          "id": 1,
          "text": "I enjoyed this task very much",
          "subscale": "Interest/Enjoyment",
          "reverse": false
        },
        {
          "id": 2,
          "text": "This task was fun to do",
          "subscale": "Interest/Enjoyment",
          "reverse": false
        },
        {
          "id": 3,
          "text": "I thought this was a boring task",
          "subscale": "Interest/Enjoyment",
          "reverse": true
        },
        {
          "id": 4,
          "text": "This task did not hold my attention at all",
          "subscale": "Interest/Enjoyment",
          "reverse": true
        },
        {
          "id": 5,
          "text": "I would be willing to do this task again because it is fun",
          "subscale": "Interest/Enjoyment",
          "reverse": false
        },
        {
          "id": 6,
          "text": "This activity was interesting",
          "subscale": "Interest/Enjoyment",
          "reverse": false
        },
        {
          "id": 7,
          "text": "This task was not very interesting",
          "subscale": "Interest/Enjoyment",
          "reverse": true
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 7,
        "labels": {
          "1": "Not at all true",
          "2": "",
          "3": "",
          "4": "Somewhat true",
          "5": "",
          "6": "",
          "7": "Very true"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {
          "Interest/Enjoyment": {
            "items": [
              1,
              2,
              3,
              4,
              5,
              6,
              7
            ],
            "description": "Level of task enjoyment and interest"
          }
        },
        "overall": {
          "method": "mean_of_all",
          "description": "Overall intrinsic motivation score (range 1-7)"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 3,
              "label": "Low Intrinsic Motivation",
              "description": "Task perceived as boring and uninteresting"
            },
            {
              "min": 3,
              "max": 5,
              "label": "Moderate Intrinsic Motivation",
              "description": "Task moderately interesting and enjoyable"
            },
            {
              "min": 5,
              "max": 7,
              "label": "High Intrinsic Motivation",
              "description": "Task highly interesting and enjoyable"
            }
          ]
        }
      },
      "useCases": [
        "Job engagement assessment",
        "Training program evaluation",
        "Task redesign evaluation",
        "Work enrichment initiatives"
      ],
      "relatedConstructs": [
        "Intrinsic motivation",
        "Work engagement",
        "Task enjoyment",
        "Flow experience"
      ],
      "keywords": [
        "intrinsic motivation",
        "enjoyment",
        "interest",
        "engagement",
        "task appeal"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "weims",
      "name": "Work Extrinsic and Intrinsic Motivation Scale",
      "shortName": "WEIMS",
      "construct": "Self-determined forms of work motivation from intrinsic to extrinsic",
      "category": "Motivation",
      "description": "Measures work motivation across the self-determination spectrum from intrinsic motivation through various forms of extrinsic motivation to amotivation. Essential for understanding what drives employee performance.",
      "authors": "Tremblay, M. A., Blanchard, C. M., Taylor, S., Pelletier, L. G., & Villeneuve, M.",
      "year": 2009,
      "citations": [
        "Tremblay, M. A., Blanchard, C. M., Taylor, S., Pelletier, L. G., & Villeneuve, M. (2009). Work Extrinsic and Intrinsic Motivation Scale: Its value for organizational psychology research. Journal of Applied Social Psychology, 39(10), 2633-2646."
      ],
      "numberOfItems": 19,
      "estimatedMinutes": 4,
      "items": [
        {
          "id": 1,
          "text": "Because I find my work interesting",
          "subscale": "Intrinsic Motivation",
          "reverse": false
        },
        {
          "id": 2,
          "text": "Because of the paycheck I get",
          "subscale": "External Regulation",
          "reverse": false
        },
        {
          "id": 3,
          "text": "Because I feel obligated to do so",
          "subscale": "Introjected Regulation",
          "reverse": false
        },
        {
          "id": 4,
          "text": "Because the work gives me a sense of accomplishment",
          "subscale": "Identified Regulation",
          "reverse": false
        },
        {
          "id": 5,
          "text": "For the satisfaction I feel when I succeed at challenging tasks",
          "subscale": "Intrinsic Motivation",
          "reverse": false
        },
        {
          "id": 6,
          "text": "To avoid being criticized",
          "subscale": "Introjected Regulation",
          "reverse": false
        },
        {
          "id": 7,
          "text": "Because it is aligned with my values",
          "subscale": "Integrated Regulation",
          "reverse": false
        },
        {
          "id": 8,
          "text": "For the income it provides",
          "subscale": "External Regulation",
          "reverse": false
        },
        {
          "id": 9,
          "text": "Because I feel forced to do so",
          "subscale": "External Regulation",
          "reverse": false
        },
        {
          "id": 10,
          "text": "For the satisfaction of learning new skills",
          "subscale": "Intrinsic Motivation",
          "reverse": false
        },
        {
          "id": 11,
          "text": "Because my job is part of my life goals",
          "subscale": "Integrated Regulation",
          "reverse": false
        },
        {
          "id": 12,
          "text": "To maintain my self-image",
          "subscale": "Introjected Regulation",
          "reverse": false
        },
        {
          "id": 13,
          "text": "I don't really know why I'm doing this job anymore",
          "subscale": "Amotivation",
          "reverse": false
        },
        {
          "id": 14,
          "text": "Because it is important to me to do well in this job",
          "subscale": "Identified Regulation",
          "reverse": false
        },
        {
          "id": 15,
          "text": "For the satisfaction I experience when I perform well",
          "subscale": "Intrinsic Motivation",
          "reverse": false
        },
        {
          "id": 16,
          "text": "Because I would feel ashamed if I didn't",
          "subscale": "Introjected Regulation",
          "reverse": false
        },
        {
          "id": 17,
          "text": "Because it is meaningful to me",
          "subscale": "Integrated Regulation",
          "reverse": false
        },
        {
          "id": 18,
          "text": "I don't see the point of working here anymore",
          "subscale": "Amotivation",
          "reverse": false
        },
        {
          "id": 19,
          "text": "Because I want to keep my job",
          "subscale": "External Regulation",
          "reverse": false
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 7,
        "labels": {
          "1": "Does not correspond at all",
          "2": "Corresponds a little",
          "3": "Corresponds somewhat",
          "4": "Corresponds moderately",
          "5": "Corresponds a lot",
          "6": "Corresponds greatly",
          "7": "Corresponds exactly"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {
          "Intrinsic Motivation": {
            "items": [
              1,
              5,
              10,
              15
            ],
            "description": "Motivation driven by inherent satisfaction and interest"
          },
          "Integrated Regulation": {
            "items": [
              7,
              11,
              17
            ],
            "description": "Motivation aligned with personal identity and values"
          },
          "Identified Regulation": {
            "items": [
              4,
              14
            ],
            "description": "Motivation based on perceived value and importance"
          },
          "Introjected Regulation": {
            "items": [
              3,
              6,
              12,
              16
            ],
            "description": "Motivation driven by internal pressures and shame avoidance"
          },
          "External Regulation": {
            "items": [
              2,
              8,
              9,
              19
            ],
            "description": "Motivation driven by external rewards and punishments"
          },
          "Amotivation": {
            "items": [
              13,
              18
            ],
            "description": "Lack of motivation and sense of purpose"
          }
        },
        "overall": {
          "method": "relative_autonomy_index",
          "description": "Self-Determination Index = (Intrinsic + Integrated + Identified) - (Introjected + External + Amotivation)"
        },
        "interpretation": {
          "ranges": [
            {
              "min": -21,
              "max": -7,
              "label": "Controlled Motivation",
              "description": "Primarily externally regulated"
            },
            {
              "min": -7,
              "max": 7,
              "label": "Mixed Motivation",
              "description": "Balance of autonomous and controlled"
            },
            {
              "min": 7,
              "max": 21,
              "label": "Autonomous Motivation",
              "description": "Primarily self-determined and intrinsic"
            }
          ]
        }
      },
      "useCases": [
        "Employee motivation assessment",
        "Job design optimization",
        "Retention strategy development",
        "Career development planning"
      ],
      "relatedConstructs": [
        "Self-determination theory",
        "Intrinsic motivation",
        "Employee engagement",
        "Job satisfaction"
      ],
      "keywords": [
        "work motivation",
        "self-determination",
        "intrinsic",
        "extrinsic",
        "autonomy"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "agq",
      "name": "Achievement Goal Questionnaire",
      "shortName": "AGQ",
      "construct": "Goal orientation toward mastery, performance-approach, and performance-avoidance",
      "category": "Motivation",
      "description": "Measures dispositional achievement goals affecting how individuals approach work and performance. Important for understanding competitive drive, learning orientation, and anxiety management.",
      "authors": "Elliot, A. J., & McGregor, H. A.",
      "year": 2001,
      "citations": [
        "Elliot, A. J., & McGregor, H. A. (2001). A 2x2 achievement goal framework. Journal of Personality and Social Psychology, 80(3), 501-519."
      ],
      "numberOfItems": 12,
      "estimatedMinutes": 3,
      "items": [
        {
          "id": 1,
          "text": "I want to do well in this class because it is important to me to understand the material",
          "subscale": "Mastery Approach",
          "reverse": false
        },
        {
          "id": 2,
          "text": "It is important to me that I do well in this class",
          "subscale": "Performance Approach",
          "reverse": false
        },
        {
          "id": 3,
          "text": "I want to do well in this class to avoid doing poorly relative to others",
          "subscale": "Performance Avoidance",
          "reverse": false
        },
        {
          "id": 4,
          "text": "I want to have the best outcomes in this class",
          "subscale": "Performance Approach",
          "reverse": false
        },
        {
          "id": 5,
          "text": "My goal in this class is to improve my abilities and skills",
          "subscale": "Mastery Approach",
          "reverse": false
        },
        {
          "id": 6,
          "text": "I worry that I may not do well enough in this class",
          "subscale": "Performance Avoidance",
          "reverse": false
        },
        {
          "id": 7,
          "text": "I want to learn as much as possible in this class",
          "subscale": "Mastery Approach",
          "reverse": false
        },
        {
          "id": 8,
          "text": "I am striving to do well compared to other students in this class",
          "subscale": "Performance Approach",
          "reverse": false
        },
        {
          "id": 9,
          "text": "I am concerned about performing worse than other students in this class",
          "subscale": "Performance Avoidance",
          "reverse": false
        },
        {
          "id": 10,
          "text": "I want to do better than other students in this class",
          "subscale": "Performance Approach",
          "reverse": false
        },
        {
          "id": 11,
          "text": "It is important for me to understand what I am learning in this class",
          "subscale": "Mastery Approach",
          "reverse": false
        },
        {
          "id": 12,
          "text": "I am concerned that I may not do well in this class",
          "subscale": "Performance Avoidance",
          "reverse": false
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 7,
        "labels": {
          "1": "Strongly Disagree",
          "2": "Disagree",
          "3": "Somewhat Disagree",
          "4": "Neutral",
          "5": "Somewhat Agree",
          "6": "Agree",
          "7": "Strongly Agree"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {
          "Mastery Approach": {
            "items": [
              1,
              5,
              7,
              11
            ],
            "description": "Focus on developing competence and learning"
          },
          "Performance Approach": {
            "items": [
              2,
              4,
              8,
              10
            ],
            "description": "Focus on demonstrating superior performance relative to others"
          },
          "Performance Avoidance": {
            "items": [
              3,
              6,
              9,
              12
            ],
            "description": "Focus on avoiding incompetence and poor relative performance"
          }
        },
        "overall": {
          "method": "subscale_profiles",
          "description": "Achievement goal profile based on high/low combinations of subscales"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 3.5,
              "label": "Low Achievement Goal",
              "description": "Low commitment to this goal orientation"
            },
            {
              "min": 3.5,
              "max": 5.5,
              "label": "Moderate Achievement Goal",
              "description": "Moderate commitment to this goal orientation"
            },
            {
              "min": 5.5,
              "max": 7,
              "label": "High Achievement Goal",
              "description": "Strong commitment to this goal orientation"
            }
          ]
        }
      },
      "useCases": [
        "Training effectiveness assessment",
        "Learning program design",
        "Performance management",
        "Competitive team selection"
      ],
      "relatedConstructs": [
        "Achievement motivation",
        "Goal orientation",
        "Competitive drive",
        "Learning orientation"
      ],
      "keywords": [
        "achievement goals",
        "mastery",
        "performance",
        "goal orientation",
        "competence"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "sds",
      "name": "Self-Determination Scale",
      "shortName": "SDS",
      "construct": "Perception of autonomy, competence, and relatedness in activities or relationships",
      "category": "Motivation",
      "description": "Measures the degree to which individuals feel self-determined in their activities through autonomy, competence, and relatedness. Central to understanding intrinsic motivation and psychological need satisfaction.",
      "authors": "Sheldon, K. M., & Deci, E. L.",
      "year": 1996,
      "citations": [
        "Sheldon, K. M., & Deci, E. L. (1996). The Self-Determination Scale: A measure of autonomy, competence, and relatedness. Unpublished manuscript, University of Rochester."
      ],
      "numberOfItems": 24,
      "estimatedMinutes": 4,
      "itemsNote": "Items should be verified against original publication for exact wording",
      "items": [
        {
          "id": 1,
          "text": "I feel like I am free to decide for myself how to live my life",
          "subscale": "Autonomy",
          "reverse": false
        },
        {
          "id": 2,
          "text": "I feel like most of the things I do are because I have no choice",
          "subscale": "Autonomy",
          "reverse": true
        },
        {
          "id": 3,
          "text": "I feel free to be who I am",
          "subscale": "Autonomy",
          "reverse": false
        },
        {
          "id": 4,
          "text": "I feel like I am just going through the motions in my daily routine",
          "subscale": "Autonomy",
          "reverse": true
        },
        {
          "id": 5,
          "text": "I feel that I am doing what I really want to be doing",
          "subscale": "Autonomy",
          "reverse": false
        },
        {
          "id": 6,
          "text": "I do not feel like I have much choice in what I am doing",
          "subscale": "Autonomy",
          "reverse": true
        },
        {
          "id": 7,
          "text": "I feel like I am good at what I do",
          "subscale": "Competence",
          "reverse": false
        },
        {
          "id": 8,
          "text": "I feel capable and skillful",
          "subscale": "Competence",
          "reverse": false
        },
        {
          "id": 9,
          "text": "I feel like I am not very good at what I do",
          "subscale": "Competence",
          "reverse": true
        },
        {
          "id": 10,
          "text": "I feel that I have been able to learn interesting new skills recently",
          "subscale": "Competence",
          "reverse": false
        },
        {
          "id": 11,
          "text": "I feel incompetent when I am around people who are more capable than me in areas I am interested in",
          "subscale": "Competence",
          "reverse": true
        },
        {
          "id": 12,
          "text": "I feel quite capable and effective",
          "subscale": "Competence",
          "reverse": false
        },
        {
          "id": 13,
          "text": "I feel very attentive to people I am close to",
          "subscale": "Relatedness",
          "reverse": false
        },
        {
          "id": 14,
          "text": "I feel distant and disconnected from people around me",
          "subscale": "Relatedness",
          "reverse": true
        },
        {
          "id": 15,
          "text": "I feel a sense of contact and intimacy with people around me",
          "subscale": "Relatedness",
          "reverse": false
        },
        {
          "id": 16,
          "text": "I feel alienated by people around me",
          "subscale": "Relatedness",
          "reverse": true
        },
        {
          "id": 17,
          "text": "I feel close and connected to other people who are important to me",
          "subscale": "Relatedness",
          "reverse": false
        },
        {
          "id": 18,
          "text": "I feel lonely and disconnected from my peer group",
          "subscale": "Relatedness",
          "reverse": true
        },
        {
          "id": 19,
          "text": "I feel a lot of distance in my close relationships",
          "subscale": "Relatedness",
          "reverse": true
        },
        {
          "id": 20,
          "text": "I feel very involved and absorbed in what I am doing",
          "subscale": "Autonomy",
          "reverse": false
        },
        {
          "id": 21,
          "text": "I feel like I have to do things rather than wanting to do them",
          "subscale": "Autonomy",
          "reverse": true
        },
        {
          "id": 22,
          "text": "I feel excited about most of the things I have to do each day",
          "subscale": "Autonomy",
          "reverse": false
        },
        {
          "id": 23,
          "text": "I feel that I am being myself",
          "subscale": "Autonomy",
          "reverse": false
        },
        {
          "id": 24,
          "text": "I feel like I understand people and am understood by them",
          "subscale": "Relatedness",
          "reverse": false
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 5,
        "labels": {
          "1": "Not at all true",
          "2": "Somewhat untrue",
          "3": "Neutral",
          "4": "Somewhat true",
          "5": "Very true"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {
          "Autonomy": {
            "items": [
              1,
              2,
              3,
              4,
              5,
              6,
              20,
              21,
              22,
              23
            ],
            "description": "Feeling of self-direction and choice"
          },
          "Competence": {
            "items": [
              7,
              8,
              9,
              10,
              11,
              12
            ],
            "description": "Feeling capable and effective"
          },
          "Relatedness": {
            "items": [
              13,
              14,
              15,
              16,
              17,
              18,
              19,
              24
            ],
            "description": "Feeling connected to and understood by others"
          }
        },
        "overall": {
          "method": "mean_of_all",
          "description": "Overall self-determination score (range 1-5)"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 2.5,
              "label": "Low Self-Determination",
              "description": "Low autonomy, competence, or relatedness"
            },
            {
              "min": 2.5,
              "max": 3.5,
              "label": "Moderate Self-Determination",
              "description": "Moderate levels of autonomy, competence, and relatedness"
            },
            {
              "min": 3.5,
              "max": 5,
              "label": "High Self-Determination",
              "description": "High autonomy, competence, and relatedness"
            }
          ]
        }
      },
      "useCases": [
        "Workplace autonomy assessment",
        "Team cohesion evaluation",
        "Job satisfaction measurement",
        "Organizational culture assessment"
      ],
      "relatedConstructs": [
        "Self-determination theory",
        "Autonomy",
        "Competence",
        "Belonging",
        "Intrinsic motivation"
      ],
      "keywords": [
        "self-determination",
        "autonomy",
        "competence",
        "relatedness",
        "psychological needs"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "ocq-9",
      "name": "Organizational Commitment Questionnaire (9-item Short Form)",
      "shortName": "OCQ-9",
      "construct": "Affective commitment to the organization",
      "category": "Organizational Behavior",
      "description": "Measures the strength of employee's psychological attachment and commitment to their organization. A primary predictor of retention, performance, and organizational citizenship.",
      "authors": "Mowday, R. T., Steers, R. M., & Porter, L. W.",
      "year": 1979,
      "citations": [
        "Mowday, R. T., Steers, R. M., & Porter, L. W. (1979). The measurement of organizational commitment. Journal of Vocational Behavior, 14(2), 224-247."
      ],
      "numberOfItems": 9,
      "estimatedMinutes": 2,
      "items": [
        {
          "id": 1,
          "text": "I am willing to put in a great deal of effort beyond that normally expected in order to help this organization be successful",
          "subscale": "Overall",
          "reverse": false
        },
        {
          "id": 2,
          "text": "I talk up this organization to my friends as a great organization to work for",
          "subscale": "Overall",
          "reverse": false
        },
        {
          "id": 3,
          "text": "I feel very little loyalty to this organization",
          "subscale": "Overall",
          "reverse": true
        },
        {
          "id": 4,
          "text": "I would accept almost any type of job assignment in order to keep working for this organization",
          "subscale": "Overall",
          "reverse": false
        },
        {
          "id": 5,
          "text": "I find that my values and the organization's values are very similar",
          "subscale": "Overall",
          "reverse": false
        },
        {
          "id": 6,
          "text": "I am proud to tell others that I am part of this organization",
          "subscale": "Overall",
          "reverse": false
        },
        {
          "id": 7,
          "text": "I could just as well be working for a different organization as long as the type of work were similar",
          "subscale": "Overall",
          "reverse": true
        },
        {
          "id": 8,
          "text": "This organization really inspires the very best in me in the way of job performance",
          "subscale": "Overall",
          "reverse": false
        },
        {
          "id": 9,
          "text": "It would be very hard for me to leave this organization right now even if I wanted to",
          "subscale": "Overall",
          "reverse": false
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 7,
        "labels": {
          "1": "Strongly Disagree",
          "2": "Disagree",
          "3": "Somewhat Disagree",
          "4": "Neutral",
          "5": "Somewhat Agree",
          "6": "Agree",
          "7": "Strongly Agree"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {
          "Overall": {
            "items": [
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9
            ],
            "description": "Affective commitment to the organization"
          }
        },
        "overall": {
          "method": "mean_of_all",
          "description": "Overall organizational commitment score (range 1-7)"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 3,
              "label": "Low Commitment",
              "description": "Minimal psychological attachment to organization"
            },
            {
              "min": 3,
              "max": 5,
              "label": "Moderate Commitment",
              "description": "Moderate attachment to organization"
            },
            {
              "min": 5,
              "max": 7,
              "label": "High Commitment",
              "description": "Strong psychological attachment to organization"
            }
          ]
        }
      },
      "useCases": [
        "Retention risk assessment",
        "Organizational culture evaluation",
        "Employee engagement surveys",
        "Merger integration assessment"
      ],
      "relatedConstructs": [
        "Organizational commitment",
        "Employee loyalty",
        "Intent to stay",
        "Organizational identification"
      ],
      "keywords": [
        "organizational commitment",
        "loyalty",
        "attachment",
        "retention",
        "engagement"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "oj-colquitt",
      "name": "Organizational Justice Scale (Colquitt)",
      "shortName": "OJ",
      "construct": "Perceptions of procedural, distributive, and interactional justice in organizations",
      "category": "Organizational Behavior",
      "description": "Measures perceptions of fairness in organizational decisions, procedures, and interpersonal treatment. Critical for understanding satisfaction, trust, and compliance.",
      "authors": "Colquitt, J. A.",
      "year": 2001,
      "citations": [
        "Colquitt, J. A. (2001). On the dimensionality of organizational justice: A construct validation of a measure. Journal of Applied Psychology, 86(3), 386-400."
      ],
      "numberOfItems": 20,
      "estimatedMinutes": 4,
      "items": [
        {
          "id": 1,
          "text": "I have been able to express my views and feelings during those procedures",
          "subscale": "Procedural Justice",
          "reverse": false
        },
        {
          "id": 2,
          "text": "I have had influence over the decisions reached by those procedures",
          "subscale": "Procedural Justice",
          "reverse": false
        },
        {
          "id": 3,
          "text": "Those procedures have been applied consistently",
          "subscale": "Procedural Justice",
          "reverse": false
        },
        {
          "id": 4,
          "text": "Those procedures have been free of bias",
          "subscale": "Procedural Justice",
          "reverse": false
        },
        {
          "id": 5,
          "text": "I have been able to appeal the decisions made by those procedures",
          "subscale": "Procedural Justice",
          "reverse": false
        },
        {
          "id": 6,
          "text": "Those procedures have been based on accurate information",
          "subscale": "Procedural Justice",
          "reverse": false
        },
        {
          "id": 7,
          "text": "My outcome has reflected the effort I have put into my work",
          "subscale": "Distributive Justice",
          "reverse": false
        },
        {
          "id": 8,
          "text": "My outcome has been appropriate for the work I have completed",
          "subscale": "Distributive Justice",
          "reverse": false
        },
        {
          "id": 9,
          "text": "My outcome has been justified, given my performance",
          "subscale": "Distributive Justice",
          "reverse": false
        },
        {
          "id": 10,
          "text": "My outcome has been reasonable",
          "subscale": "Distributive Justice",
          "reverse": false
        },
        {
          "id": 11,
          "text": "My supervisor has treated me with kindness and consideration",
          "subscale": "Interactional Justice",
          "reverse": false
        },
        {
          "id": 12,
          "text": "My supervisor has treated me with respect and dignity",
          "subscale": "Interactional Justice",
          "reverse": false
        },
        {
          "id": 13,
          "text": "My supervisor has informed me thoroughly about the procedures affecting me",
          "subscale": "Informational Justice",
          "reverse": false
        },
        {
          "id": 14,
          "text": "My supervisor has communicated details in a timely manner",
          "subscale": "Informational Justice",
          "reverse": false
        },
        {
          "id": 15,
          "text": "My supervisor has explained the decisions thoroughly",
          "subscale": "Informational Justice",
          "reverse": false
        },
        {
          "id": 16,
          "text": "My supervisor's explanations regarding the decisions have been reasonable",
          "subscale": "Informational Justice",
          "reverse": false
        },
        {
          "id": 17,
          "text": "Has your supervisor refrained from improper remarks or comments",
          "subscale": "Interpersonal Justice",
          "reverse": false
        },
        {
          "id": 18,
          "text": "Has your supervisor been candid in their communication with me",
          "subscale": "Interpersonal Justice",
          "reverse": false
        },
        {
          "id": 19,
          "text": "My organization's decisions have been made ethically",
          "subscale": "Distributive Justice",
          "reverse": false
        },
        {
          "id": 20,
          "text": "I consider the process used to be fair",
          "subscale": "Procedural Justice",
          "reverse": false
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 5,
        "labels": {
          "1": "Strongly Disagree",
          "2": "Disagree",
          "3": "Neutral",
          "4": "Agree",
          "5": "Strongly Agree"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {
          "Procedural Justice": {
            "items": [
              1,
              2,
              3,
              4,
              5,
              6,
              20
            ],
            "description": "Fairness of procedures and processes"
          },
          "Distributive Justice": {
            "items": [
              7,
              8,
              9,
              10,
              19
            ],
            "description": "Fairness of outcomes and rewards"
          },
          "Informational Justice": {
            "items": [
              13,
              14,
              15,
              16
            ],
            "description": "Quality and timeliness of explanations"
          },
          "Interpersonal Justice": {
            "items": [
              11,
              12,
              17,
              18
            ],
            "description": "Respectful and considerate treatment"
          }
        },
        "overall": {
          "method": "mean_of_all",
          "description": "Overall organizational justice score (range 1-5)"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 2.5,
              "label": "Low Justice Perception",
              "description": "Significant unfairness perceptions"
            },
            {
              "min": 2.5,
              "max": 3.5,
              "label": "Moderate Justice Perception",
              "description": "Mixed fairness perceptions"
            },
            {
              "min": 3.5,
              "max": 5,
              "label": "High Justice Perception",
              "description": "Strong fairness perceptions"
            }
          ]
        }
      },
      "useCases": [
        "Workplace fairness assessment",
        "HR policy evaluation",
        "Grievance analysis",
        "Organizational change management"
      ],
      "relatedConstructs": [
        "Organizational justice",
        "Fairness",
        "Trust",
        "Satisfaction",
        "Commitment"
      ],
      "keywords": [
        "organizational justice",
        "fairness",
        "procedural justice",
        "distributive justice",
        "trust"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "ocb-c",
      "name": "Organizational Citizenship Behavior Checklist",
      "shortName": "OCB-C",
      "construct": "Extra-role behaviors benefiting the organization beyond job requirements",
      "category": "Organizational Behavior",
      "description": "Measures voluntary behaviors that go beyond formal job requirements, including helping colleagues, civic virtue, and conscientiousness. Essential indicator of organizational health and teamwork.",
      "authors": "Fox, S., Spector, P. E., Goh, A., Bruursema, K., & Kessler, S. R.",
      "year": 2012,
      "citations": [
        "Fox, S., Spector, P. E., Goh, A., Bruursema, K., & Kessler, S. R. (2012). The deviant citizen: Measuring individual differences in assembly, assertiveness, rule breaking and hostility. Journal of Occupational Health Psychology, 17(3), 312-320."
      ],
      "numberOfItems": 16,
      "estimatedMinutes": 3,
      "items": [
        {
          "id": 1,
          "text": "Helped others on your job",
          "subscale": "Helping/Altruism",
          "reverse": false
        },
        {
          "id": 2,
          "text": "Went out of your way to help orient a new colleague",
          "subscale": "Helping/Altruism",
          "reverse": false
        },
        {
          "id": 3,
          "text": "Volunteered for additional assignments",
          "subscale": "Conscientiousness",
          "reverse": false
        },
        {
          "id": 4,
          "text": "Said positive things about the organization",
          "subscale": "Civic Virtue",
          "reverse": false
        },
        {
          "id": 5,
          "text": "Attended meetings that were not mandatory",
          "subscale": "Civic Virtue",
          "reverse": false
        },
        {
          "id": 6,
          "text": "Took time to advise, mentor, or encourage a colleague",
          "subscale": "Sportsmanship",
          "reverse": false
        },
        {
          "id": 7,
          "text": "Helped keep the work area clean and organized",
          "subscale": "Conscientiousness",
          "reverse": false
        },
        {
          "id": 8,
          "text": "Made suggestions about organizational improvements",
          "subscale": "Civic Virtue",
          "reverse": false
        },
        {
          "id": 9,
          "text": "Worked extra hours",
          "subscale": "Conscientiousness",
          "reverse": false
        },
        {
          "id": 10,
          "text": "Helped others catch up with work",
          "subscale": "Helping/Altruism",
          "reverse": false
        },
        {
          "id": 11,
          "text": "Covered others' shifts or tasks",
          "subscale": "Helping/Altruism",
          "reverse": false
        },
        {
          "id": 12,
          "text": "Expressed concern about the organization's well-being",
          "subscale": "Civic Virtue",
          "reverse": false
        },
        {
          "id": 13,
          "text": "Attended social events sponsored by the organization",
          "subscale": "Civic Virtue",
          "reverse": false
        },
        {
          "id": 14,
          "text": "Maintained a neat and clean work area",
          "subscale": "Conscientiousness",
          "reverse": false
        },
        {
          "id": 15,
          "text": "Helped others with difficult tasks",
          "subscale": "Helping/Altruism",
          "reverse": false
        },
        {
          "id": 16,
          "text": "Continued working when tasks were not completed",
          "subscale": "Conscientiousness",
          "reverse": false
        }
      ],
      "responseFormat": {
        "type": "frequency",
        "points": 5,
        "labels": {
          "1": "Never",
          "2": "Rarely",
          "3": "Sometimes",
          "4": "Often",
          "5": "Very Often"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {
          "Helping/Altruism": {
            "items": [
              1,
              2,
              10,
              11,
              15
            ],
            "description": "Helping colleagues with work-related tasks"
          },
          "Civic Virtue": {
            "items": [
              4,
              5,
              8,
              12,
              13
            ],
            "description": "Participation in and advocacy for the organization"
          },
          "Conscientiousness": {
            "items": [
              3,
              7,
              9,
              14,
              16
            ],
            "description": "Going beyond requirements in one's own work"
          },
          "Sportsmanship": {
            "items": [
              6
            ],
            "description": "Supporting others and organizational goals"
          }
        },
        "overall": {
          "method": "mean_of_all",
          "description": "Overall organizational citizenship behavior score (range 1-5)"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 2.5,
              "label": "Low OCB",
              "description": "Minimal extra-role behaviors"
            },
            {
              "min": 2.5,
              "max": 3.5,
              "label": "Moderate OCB",
              "description": "Moderate extra-role behaviors"
            },
            {
              "min": 3.5,
              "max": 5,
              "label": "High OCB",
              "description": "Frequent extra-role behaviors"
            }
          ]
        }
      },
      "useCases": [
        "Team effectiveness measurement",
        "Performance evaluation",
        "Organizational culture assessment",
        "Promotion and reward decisions"
      ],
      "relatedConstructs": [
        "Organizational citizenship behavior",
        "Teamwork",
        "Engagement",
        "Organizational commitment"
      ],
      "keywords": [
        "organizational citizenship behavior",
        "helping",
        "altruism",
        "conscientiousness",
        "civic virtue"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "tis-6",
      "name": "Turnover Intention Scale (6-item)",
      "shortName": "TIS-6",
      "construct": "Intention to leave or stay with the organization",
      "category": "Organizational Behavior",
      "description": "Measures likelihood that an employee will search for a new job and leave the organization. Highly predictive of actual turnover and valuable for retention management.",
      "authors": "Bothma, F. C., & Roodt, G.",
      "year": 2013,
      "citations": [
        "Bothma, F. C., & Roodt, G. (2013). The validation of the Turnover Intention Scale. African Journal of Business Management, 7(12), 944-953."
      ],
      "numberOfItems": 6,
      "estimatedMinutes": 1,
      "items": [
        {
          "id": 1,
          "text": "I often think about quitting this job",
          "subscale": "Overall",
          "reverse": false
        },
        {
          "id": 2,
          "text": "If I had the opportunity, I would leave this organization",
          "subscale": "Overall",
          "reverse": false
        },
        {
          "id": 3,
          "text": "I am planning to look for a new job within the next year",
          "subscale": "Overall",
          "reverse": false
        },
        {
          "id": 4,
          "text": "I would be better off working for a different organization",
          "subscale": "Overall",
          "reverse": false
        },
        {
          "id": 5,
          "text": "I intend to remain with this organization for at least another 2 years",
          "subscale": "Overall",
          "reverse": true
        },
        {
          "id": 6,
          "text": "I am committed to staying in this organization",
          "subscale": "Overall",
          "reverse": true
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 5,
        "labels": {
          "1": "Strongly Disagree",
          "2": "Disagree",
          "3": "Neutral",
          "4": "Agree",
          "5": "Strongly Agree"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {
          "Overall": {
            "items": [
              1,
              2,
              3,
              4,
              5,
              6
            ],
            "description": "Overall intention to leave the organization"
          }
        },
        "overall": {
          "method": "mean_of_all",
          "description": "Turnover intention score (range 1-5)"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 2.5,
              "label": "Low Turnover Intention",
              "description": "Strong intent to remain with organization"
            },
            {
              "min": 2.5,
              "max": 3.5,
              "label": "Moderate Turnover Intention",
              "description": "Uncertain about staying with organization"
            },
            {
              "min": 3.5,
              "max": 5,
              "label": "High Turnover Intention",
              "description": "Strong intent to leave organization"
            }
          ]
        }
      },
      "useCases": [
        "Retention risk identification",
        "HR intervention planning",
        "Exit interview context",
        "Department/team assessment"
      ],
      "relatedConstructs": [
        "Turnover",
        "Retention",
        "Job satisfaction",
        "Organizational commitment"
      ],
      "keywords": [
        "turnover intention",
        "job search",
        "retention risk",
        "intent to leave",
        "exit"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "rc-role",
      "name": "Role Conflict and Role Ambiguity Scale",
      "shortName": "RC",
      "construct": "Clarity of job expectations and conflicting job demands",
      "category": "Organizational Behavior",
      "description": "Measures the extent to which job holders experience unclear expectations (ambiguity) and conflicting demands (conflict). Key stressors affecting satisfaction, performance, and commitment.",
      "authors": "Rizzo, J. R., House, R. J., & Lirtzman, S. I.",
      "year": 1970,
      "citations": [
        "Rizzo, J. R., House, R. J., & Lirtzman, S. I. (1970). Role conflict and ambiguity in complex organizations. Administrative Science Quarterly, 15(2), 150-163."
      ],
      "numberOfItems": 14,
      "estimatedMinutes": 3,
      "items": [
        {
          "id": 1,
          "text": "I am not sure what my responsibilities are",
          "subscale": "Role Ambiguity",
          "reverse": false
        },
        {
          "id": 2,
          "text": "I have clear, planned goals and objectives for my job",
          "subscale": "Role Ambiguity",
          "reverse": true
        },
        {
          "id": 3,
          "text": "I perform tasks that serve no purpose",
          "subscale": "Role Ambiguity",
          "reverse": false
        },
        {
          "id": 4,
          "text": "I know I have divided my time properly among my various tasks",
          "subscale": "Role Ambiguity",
          "reverse": true
        },
        {
          "id": 5,
          "text": "I do things that should be done differently",
          "subscale": "Role Conflict",
          "reverse": false
        },
        {
          "id": 6,
          "text": "I receive an assignment without adequate resources and materials to execute it",
          "subscale": "Role Conflict",
          "reverse": false
        },
        {
          "id": 7,
          "text": "I know what my responsibilities are",
          "subscale": "Role Ambiguity",
          "reverse": true
        },
        {
          "id": 8,
          "text": "I work on unnecessary things",
          "subscale": "Role Ambiguity",
          "reverse": false
        },
        {
          "id": 9,
          "text": "I have to violate a rule or policy to adequately perform my job",
          "subscale": "Role Conflict",
          "reverse": false
        },
        {
          "id": 10,
          "text": "I receive incompatible requests from two or more people",
          "subscale": "Role Conflict",
          "reverse": false
        },
        {
          "id": 11,
          "text": "I know what is expected of me on the job",
          "subscale": "Role Ambiguity",
          "reverse": true
        },
        {
          "id": 12,
          "text": "I am told I do not have enough authority to carry out my responsibilities",
          "subscale": "Role Conflict",
          "reverse": false
        },
        {
          "id": 13,
          "text": "My job responsibilities are clearly defined",
          "subscale": "Role Ambiguity",
          "reverse": true
        },
        {
          "id": 14,
          "text": "I work under incompatible policies and guidelines",
          "subscale": "Role Conflict",
          "reverse": false
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 5,
        "labels": {
          "1": "Strongly Disagree",
          "2": "Disagree",
          "3": "Neutral",
          "4": "Agree",
          "5": "Strongly Agree"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {
          "Role Ambiguity": {
            "items": [
              1,
              2,
              3,
              4,
              7,
              8,
              11,
              13
            ],
            "description": "Clarity and understanding of job expectations"
          },
          "Role Conflict": {
            "items": [
              5,
              6,
              9,
              10,
              12,
              14
            ],
            "description": "Conflicting demands and incompatible expectations"
          }
        },
        "overall": {
          "method": "mean_of_subscales",
          "description": "Average of role conflict and role ambiguity"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 2.5,
              "label": "Low Role Stress",
              "description": "Clear expectations, minimal conflicts"
            },
            {
              "min": 2.5,
              "max": 3.5,
              "label": "Moderate Role Stress",
              "description": "Some ambiguity or conflicting demands"
            },
            {
              "min": 3.5,
              "max": 5,
              "label": "High Role Stress",
              "description": "Significant ambiguity and/or conflicts"
            }
          ]
        }
      },
      "useCases": [
        "Job design evaluation",
        "Stress assessment",
        "Organizational clarity improvement",
        "Team effectiveness diagnosis"
      ],
      "relatedConstructs": [
        "Role stress",
        "Job clarity",
        "Organizational communication",
        "Work stress"
      ],
      "keywords": [
        "role conflict",
        "role ambiguity",
        "job clarity",
        "role stress",
        "expectations"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "je-short",
      "name": "Job Embeddedness Scale (Short Form)",
      "shortName": "JE",
      "construct": "Attachment to job, organization, and community through fit, links, and sacrifice",
      "category": "Organizational Behavior",
      "description": "Measures the extent to which employees are embedded in their jobs and communities through connections, fit with organizational culture, and perceived costs of leaving. Predicts retention above and beyond satisfaction.",
      "authors": "Crossley, C. D., Bennett, R. J., Jex, S. M., & Burnfield, J. L.",
      "year": 2007,
      "citations": [
        "Crossley, C. D., Bennett, R. J., Jex, S. M., & Burnfield, J. L. (2007). Development of a global measure of job embeddedness and integration into a traditional model of voluntary turnover. Journal of Applied Psychology, 92(4), 1031-1042."
      ],
      "numberOfItems": 12,
      "estimatedMinutes": 2,
      "items": [
        {
          "id": 1,
          "text": "I fit with the culture of this organization",
          "subscale": "Fit",
          "reverse": false
        },
        {
          "id": 2,
          "text": "My job utilizes my skills and talents well",
          "subscale": "Fit",
          "reverse": false
        },
        {
          "id": 3,
          "text": "I see myself as part of the fabric of this organization",
          "subscale": "Fit",
          "reverse": false
        },
        {
          "id": 4,
          "text": "I have close relationships with colleagues",
          "subscale": "Links",
          "reverse": false
        },
        {
          "id": 5,
          "text": "I have a lot of friends at this organization",
          "subscale": "Links",
          "reverse": false
        },
        {
          "id": 6,
          "text": "I am tied to this community",
          "subscale": "Links",
          "reverse": false
        },
        {
          "id": 7,
          "text": "It would be difficult to leave my organization right now even if I wanted to",
          "subscale": "Sacrifice",
          "reverse": false
        },
        {
          "id": 8,
          "text": "A lot would have to change for me to consider leaving this organization",
          "subscale": "Sacrifice",
          "reverse": false
        },
        {
          "id": 9,
          "text": "It would be very costly for me to leave this organization",
          "subscale": "Sacrifice",
          "reverse": false
        },
        {
          "id": 10,
          "text": "My career opportunities are strongly tied to this organization",
          "subscale": "Links",
          "reverse": false
        },
        {
          "id": 11,
          "text": "My long-term career prospects are dependent on this organization",
          "subscale": "Sacrifice",
          "reverse": false
        },
        {
          "id": 12,
          "text": "I feel caught up in this organization",
          "subscale": "Sacrifice",
          "reverse": false
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 5,
        "labels": {
          "1": "Strongly Disagree",
          "2": "Disagree",
          "3": "Neutral",
          "4": "Agree",
          "5": "Strongly Agree"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {
          "Fit": {
            "items": [
              1,
              2,
              3
            ],
            "description": "Congruence between person and job/organization"
          },
          "Links": {
            "items": [
              4,
              5,
              6,
              10
            ],
            "description": "Connections to people and community"
          },
          "Sacrifice": {
            "items": [
              7,
              8,
              9,
              11,
              12
            ],
            "description": "Perceived costs of leaving"
          }
        },
        "overall": {
          "method": "mean_of_all",
          "description": "Overall job embeddedness score (range 1-5)"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 2.5,
              "label": "Low Embeddedness",
              "description": "Low embeddedness, high turnover risk"
            },
            {
              "min": 2.5,
              "max": 3.5,
              "label": "Moderate Embeddedness",
              "description": "Moderate embeddedness and retention"
            },
            {
              "min": 3.5,
              "max": 5,
              "label": "High Embeddedness",
              "description": "High embeddedness, low turnover risk"
            }
          ]
        }
      },
      "useCases": [
        "Retention prediction",
        "Onboarding effectiveness",
        "Relocation impact assessment",
        "Career development planning"
      ],
      "relatedConstructs": [
        "Organizational commitment",
        "Retention",
        "Fit",
        "Attachment",
        "Integration"
      ],
      "keywords": [
        "job embeddedness",
        "retention",
        "fit",
        "links",
        "sacrifice"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "pos-8",
      "name": "Perceived Organizational Support Scale (8-item Short Form)",
      "shortName": "POS-8",
      "construct": "Perception of organizational concern for employee wellbeing and support",
      "category": "Organizational Behavior",
      "description": "Measures employees' beliefs about the extent to which the organization values their contributions and cares about their wellbeing. Strongly predicts commitment, performance, and citizenship behaviors.",
      "authors": "Eisenberger, R., Huntington, R., Hutchinson, S., & Sowa, D.",
      "year": 1986,
      "citations": [
        "Eisenberger, R., Huntington, R., Hutchinson, S., & Sowa, D. (1986). Perceived organizational support. Journal of Applied Psychology, 71(3), 500-507."
      ],
      "numberOfItems": 8,
      "estimatedMinutes": 2,
      "items": [
        {
          "id": 1,
          "text": "The organization cares about my opinions",
          "subscale": "Overall",
          "reverse": false
        },
        {
          "id": 2,
          "text": "The organization values my contributions to its well-being",
          "subscale": "Overall",
          "reverse": false
        },
        {
          "id": 3,
          "text": "The organization would forgive an honest mistake on my part",
          "subscale": "Overall",
          "reverse": false
        },
        {
          "id": 4,
          "text": "The organization is willing to extend itself in order to help me perform my job to the best of my ability",
          "subscale": "Overall",
          "reverse": false
        },
        {
          "id": 5,
          "text": "The organization cares about my general satisfaction at work",
          "subscale": "Overall",
          "reverse": false
        },
        {
          "id": 6,
          "text": "The organization considers my goals and values",
          "subscale": "Overall",
          "reverse": false
        },
        {
          "id": 7,
          "text": "The organization shows little concern for me",
          "subscale": "Overall",
          "reverse": true
        },
        {
          "id": 8,
          "text": "The organization is willing to help me when I need a special favor",
          "subscale": "Overall",
          "reverse": false
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 7,
        "labels": {
          "1": "Strongly Disagree",
          "2": "Disagree",
          "3": "Somewhat Disagree",
          "4": "Neutral",
          "5": "Somewhat Agree",
          "6": "Agree",
          "7": "Strongly Agree"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {
          "Overall": {
            "items": [
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8
            ],
            "description": "Overall perceived organizational support"
          }
        },
        "overall": {
          "method": "mean_of_all",
          "description": "Perceived organizational support score (range 1-7)"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 3,
              "label": "Low Perceived Support",
              "description": "Low perception of organizational support and care"
            },
            {
              "min": 3,
              "max": 5,
              "label": "Moderate Perceived Support",
              "description": "Moderate perception of organizational support"
            },
            {
              "min": 5,
              "max": 7,
              "label": "High Perceived Support",
              "description": "High perception of organizational support and care"
            }
          ]
        }
      },
      "useCases": [
        "Organizational culture assessment",
        "Manager effectiveness evaluation",
        "HR policy impact measurement",
        "Employee satisfaction diagnostics"
      ],
      "relatedConstructs": [
        "Organizational support",
        "Leader support",
        "Psychological contract",
        "Organizational commitment"
      ],
      "keywords": [
        "perceived organizational support",
        "organizational care",
        "employee support",
        "organizational concern"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "cwb-short",
      "name": "Counterproductive Work Behavior Scale (Short Form)",
      "shortName": "CWB-S",
      "construct": "Intentional behaviors that harm the organization or its members",
      "category": "Organizational Behavior",
      "description": "Measures the frequency of counterproductive behaviors including theft, sabotage, absenteeism, and interpersonal aggression. Important for understanding organizational risk and culture.",
      "authors": "Spector, P. E., Fox, S., Penney, L. M., Bruursema, K., Goh, A., & Kessler, S.",
      "year": 2006,
      "citations": [
        "Spector, P. E., Fox, S., Penney, L. M., Bruursema, K., Goh, A., & Kessler, S. (2006). The dimensionality of counterproductivity: Factor structure and validation of a measure. Journal of Occupational Health Psychology, 11(4), 346-357."
      ],
      "numberOfItems": 12,
      "estimatedMinutes": 2,
      "items": [
        {
          "id": 1,
          "text": "Came to work late without permission",
          "subscale": "Absenteeism/Lateness",
          "reverse": false
        },
        {
          "id": 2,
          "text": "Missed work without permission",
          "subscale": "Absenteeism/Lateness",
          "reverse": false
        },
        {
          "id": 3,
          "text": "Took a long lunch or break when not allowed",
          "subscale": "Absenteeism/Lateness",
          "reverse": false
        },
        {
          "id": 4,
          "text": "Took supplies or tools home without permission",
          "subscale": "Theft",
          "reverse": false
        },
        {
          "id": 5,
          "text": "Took money from the organization",
          "subscale": "Theft",
          "reverse": false
        },
        {
          "id": 6,
          "text": "Purposely damaged company equipment or property",
          "subscale": "Sabotage",
          "reverse": false
        },
        {
          "id": 7,
          "text": "Purposely wasted company materials or resources",
          "subscale": "Sabotage",
          "reverse": false
        },
        {
          "id": 8,
          "text": "Made rude comments to a colleague",
          "subscale": "Interpersonal Aggression",
          "reverse": false
        },
        {
          "id": 9,
          "text": "Argued with a colleague at work",
          "subscale": "Interpersonal Aggression",
          "reverse": false
        },
        {
          "id": 10,
          "text": "Gossiped about a colleague",
          "subscale": "Interpersonal Aggression",
          "reverse": false
        },
        {
          "id": 11,
          "text": "Deliberately did work incorrectly",
          "subscale": "Sabotage",
          "reverse": false
        },
        {
          "id": 12,
          "text": "Refused to help a colleague with a work task",
          "subscale": "Interpersonal Aggression",
          "reverse": false
        }
      ],
      "responseFormat": {
        "type": "frequency",
        "points": 5,
        "labels": {
          "1": "Never",
          "2": "Rarely",
          "3": "Sometimes",
          "4": "Often",
          "5": "Very Often"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {
          "Absenteeism/Lateness": {
            "items": [
              1,
              2,
              3
            ],
            "description": "Unauthorized absence or tardiness"
          },
          "Theft": {
            "items": [
              4,
              5
            ],
            "description": "Unauthorized taking of organizational property"
          },
          "Sabotage": {
            "items": [
              6,
              7,
              11
            ],
            "description": "Deliberate damage or waste"
          },
          "Interpersonal Aggression": {
            "items": [
              8,
              9,
              10,
              12
            ],
            "description": "Hostile interpersonal behaviors"
          }
        },
        "overall": {
          "method": "mean_of_all",
          "description": "Overall counterproductive behavior frequency (range 1-5)"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 2,
              "label": "Low CWB",
              "description": "Minimal counterproductive behaviors"
            },
            {
              "min": 2,
              "max": 3,
              "label": "Moderate CWB",
              "description": "Occasional counterproductive behaviors"
            },
            {
              "min": 3,
              "max": 5,
              "label": "High CWB",
              "description": "Frequent counterproductive behaviors"
            }
          ]
        }
      },
      "useCases": [
        "Organizational culture assessment",
        "Policy violation risk assessment",
        "Team dynamics evaluation",
        "Intervention planning"
      ],
      "relatedConstructs": [
        "Counterproductive work behavior",
        "Organizational citizenship behavior",
        "Deviance",
        "Misconduct"
      ],
      "keywords": [
        "counterproductive work behavior",
        "deviance",
        "theft",
        "sabotage",
        "interpersonal aggression"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "els-10",
      "name": "Ethical Leadership Scale",
      "shortName": "ELS-10",
      "construct": "Ethical Leadership",
      "category": "Leadership",
      "description": "Measures the extent to which leaders demonstrate ethical conduct, transparency, and fairness. Assesses leaders' role-modeling of ethical behavior and their discipline of unethical conduct.",
      "authors": "Brown, M. E., Treviño, L. K., & Harrison, D. A.",
      "year": 2005,
      "citations": [
        "Brown, M. E., Treviño, L. K., & Harrison, D. A. (2005). Ethical leadership: A social learning perspective for construct development and testing. Organizational Behavior and Human Decision Processes, 97(2), 117-134."
      ],
      "numberOfItems": 10,
      "estimatedMinutes": 2,
      "items": [
        {
          "id": 1,
          "text": "This leader listens to what employees have to say",
          "subscale": "Overall Ethical Leadership",
          "reverse": false
        },
        {
          "id": 2,
          "text": "This leader disciplines employees who violate ethical standards",
          "subscale": "Overall Ethical Leadership",
          "reverse": false
        },
        {
          "id": 3,
          "text": "This leader conducts his/her personal life in an ethical manner",
          "subscale": "Overall Ethical Leadership",
          "reverse": false
        },
        {
          "id": 4,
          "text": "This leader has the best interests of employees in mind",
          "subscale": "Overall Ethical Leadership",
          "reverse": false
        },
        {
          "id": 5,
          "text": "This leader makes fair and balanced decisions",
          "subscale": "Overall Ethical Leadership",
          "reverse": false
        },
        {
          "id": 6,
          "text": "This leader can be trusted",
          "subscale": "Overall Ethical Leadership",
          "reverse": false
        },
        {
          "id": 7,
          "text": "This leader discusses business ethics or values with employees",
          "subscale": "Overall Ethical Leadership",
          "reverse": false
        },
        {
          "id": 8,
          "text": "This leader sets an example of ethical behavior",
          "subscale": "Overall Ethical Leadership",
          "reverse": false
        },
        {
          "id": 9,
          "text": "This leader defines success not just by results but the way that they are obtained",
          "subscale": "Overall Ethical Leadership",
          "reverse": false
        },
        {
          "id": 10,
          "text": "This leader when making decisions, asks 'what is the right thing to do?'",
          "subscale": "Overall Ethical Leadership",
          "reverse": false
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 5,
        "labels": {
          "1": "Strongly disagree",
          "2": "Disagree",
          "3": "Neutral",
          "4": "Agree",
          "5": "Strongly agree"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {
          "Overall Ethical Leadership": {
            "items": [
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10
            ],
            "description": "Overall ethical leadership behavior"
          }
        },
        "overall": {
          "method": "mean_of_all",
          "description": "Overall ethical leadership score"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 2.33,
              "label": "Low",
              "description": "Low ethical leadership"
            },
            {
              "min": 2.33,
              "max": 3.67,
              "label": "Moderate",
              "description": "Moderate ethical leadership"
            },
            {
              "min": 3.67,
              "max": 5,
              "label": "High",
              "description": "High ethical leadership"
            }
          ]
        }
      },
      "useCases": [
        "Organizational ethics training",
        "Leadership selection and development",
        "Ethical culture assessment",
        "Corruption prevention initiatives"
      ],
      "relatedConstructs": [
        "Authentic Leadership",
        "Integrity",
        "Organizational Justice"
      ],
      "keywords": [
        "ethical leadership",
        "moral leadership",
        "trustworthiness",
        "fairness"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "elq-short",
      "name": "Empowering Leadership Questionnaire (Short)",
      "shortName": "ELQ-Short",
      "construct": "Empowering Leadership",
      "category": "Leadership",
      "description": "Measures leaders' delegation of authority, encouragement of participation in decision-making, and development of subordinate competence and confidence.",
      "authors": "Ahearne, M., Mathieu, J., & Rapp, A.",
      "year": 2005,
      "citations": [
        "Ahearne, M., Mathieu, J., & Rapp, A. (2005). To empower or not to empower your sales force? An empirical examination of the influence of leadership empowerment behavior on customer satisfaction and performance. Journal of Applied Psychology, 90(5), 945-955."
      ],
      "numberOfItems": 12,
      "estimatedMinutes": 3,
      "items": [
        {
          "id": 1,
          "text": "My manager delegates tasks and responsibilities to me",
          "subscale": "Delegation",
          "reverse": false
        },
        {
          "id": 2,
          "text": "My manager allows me to make meaningful decisions about my work",
          "subscale": "Delegation",
          "reverse": false
        },
        {
          "id": 3,
          "text": "My manager encourages me to make decisions on my own",
          "subscale": "Delegation",
          "reverse": false
        },
        {
          "id": 4,
          "text": "My manager gives me the authority to make decisions in my job",
          "subscale": "Delegation",
          "reverse": false
        },
        {
          "id": 5,
          "text": "My manager encourages me to take on new challenges",
          "subscale": "Development",
          "reverse": false
        },
        {
          "id": 6,
          "text": "My manager helps me develop my skills and abilities",
          "subscale": "Development",
          "reverse": false
        },
        {
          "id": 7,
          "text": "My manager teaches me how to solve problems myself",
          "subscale": "Development",
          "reverse": false
        },
        {
          "id": 8,
          "text": "My manager expresses confidence in my ability to succeed",
          "subscale": "Development",
          "reverse": false
        },
        {
          "id": 9,
          "text": "My manager regularly asks for my input on important decisions",
          "subscale": "Participation",
          "reverse": false
        },
        {
          "id": 10,
          "text": "My manager values my ideas and suggestions",
          "subscale": "Participation",
          "reverse": false
        },
        {
          "id": 11,
          "text": "My manager involves me in decision-making processes",
          "subscale": "Participation",
          "reverse": false
        },
        {
          "id": 12,
          "text": "My manager listens to my concerns and takes them seriously",
          "subscale": "Participation",
          "reverse": false
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 5,
        "labels": {
          "1": "Strongly disagree",
          "2": "Disagree",
          "3": "Neutral",
          "4": "Agree",
          "5": "Strongly agree"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {
          "Delegation": {
            "items": [
              1,
              2,
              3,
              4
            ],
            "description": "Degree to which leader delegates authority and decision-making"
          },
          "Development": {
            "items": [
              5,
              6,
              7,
              8
            ],
            "description": "Extent to which leader develops competence and confidence"
          },
          "Participation": {
            "items": [
              9,
              10,
              11,
              12
            ],
            "description": "Level of encouragement for participation in decisions"
          }
        },
        "overall": {
          "method": "mean_of_all",
          "description": "Overall empowering leadership score"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 2.33,
              "label": "Low",
              "description": "Low empowering leadership"
            },
            {
              "min": 2.33,
              "max": 3.67,
              "label": "Moderate",
              "description": "Moderate empowering leadership"
            },
            {
              "min": 3.67,
              "max": 5,
              "label": "High",
              "description": "High empowering leadership"
            }
          ]
        }
      },
      "useCases": [
        "Employee empowerment assessment",
        "Leadership style evaluation",
        "Organizational autonomy measurement",
        "Team autonomy studies"
      ],
      "relatedConstructs": [
        "Leader Delegation",
        "Participative Leadership",
        "Empowerment"
      ],
      "keywords": [
        "empowerment",
        "delegation",
        "participation",
        "autonomy"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "ass-15",
      "name": "Abusive Supervision Scale",
      "shortName": "ASS-15",
      "construct": "Abusive Supervision",
      "category": "Leadership",
      "description": "Measures subordinate perceptions of leader hostility, undermining, rudeness, and mistreatment. Assesses the extent to which leaders engage in verbally or nonverbally abusive behaviors.",
      "authors": "Tepper, B. J.",
      "year": 2000,
      "citations": [
        "Tepper, B. J. (2000). Consequences of abusive supervision. Academy of Management Journal, 43(2), 178-190."
      ],
      "numberOfItems": 15,
      "estimatedMinutes": 3,
      "items": [
        {
          "id": 1,
          "text": "My supervisor ridicules me",
          "subscale": "Abusive Supervision",
          "reverse": false
        },
        {
          "id": 2,
          "text": "My supervisor tells me my thoughts or feelings are stupid",
          "subscale": "Abusive Supervision",
          "reverse": false
        },
        {
          "id": 3,
          "text": "My supervisor gives me the silent treatment",
          "subscale": "Abusive Supervision",
          "reverse": false
        },
        {
          "id": 4,
          "text": "My supervisor invades my privacy",
          "subscale": "Abusive Supervision",
          "reverse": false
        },
        {
          "id": 5,
          "text": "My supervisor reminds me of my past mistakes and failures",
          "subscale": "Abusive Supervision",
          "reverse": false
        },
        {
          "id": 6,
          "text": "My supervisor doesn't give me credit for jobs requiring a lot of effort",
          "subscale": "Abusive Supervision",
          "reverse": false
        },
        {
          "id": 7,
          "text": "My supervisor tells me I'm incompetent",
          "subscale": "Abusive Supervision",
          "reverse": false
        },
        {
          "id": 8,
          "text": "My supervisor doesn't allow me to talk or express myself",
          "subscale": "Abusive Supervision",
          "reverse": false
        },
        {
          "id": 9,
          "text": "My supervisor makes negative comments about me to other people",
          "subscale": "Abusive Supervision",
          "reverse": false
        },
        {
          "id": 10,
          "text": "My supervisor is rude to me",
          "subscale": "Abusive Supervision",
          "reverse": false
        },
        {
          "id": 11,
          "text": "My supervisor does not show me respect",
          "subscale": "Abusive Supervision",
          "reverse": false
        },
        {
          "id": 12,
          "text": "My supervisor is verbally abusive to me",
          "subscale": "Abusive Supervision",
          "reverse": false
        },
        {
          "id": 13,
          "text": "My supervisor makes fun of me in front of others",
          "subscale": "Abusive Supervision",
          "reverse": false
        },
        {
          "id": 14,
          "text": "My supervisor addresses me in inappropriate terms",
          "subscale": "Abusive Supervision",
          "reverse": false
        },
        {
          "id": 15,
          "text": "My supervisor treats me as if I am inferior",
          "subscale": "Abusive Supervision",
          "reverse": false
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 5,
        "labels": {
          "1": "I strongly disagree",
          "2": "I disagree",
          "3": "I'm neutral",
          "4": "I agree",
          "5": "I strongly agree"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {
          "Abusive Supervision": {
            "items": [
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10,
              11,
              12,
              13,
              14,
              15
            ],
            "description": "Overall level of supervisor abusive behavior"
          }
        },
        "overall": {
          "method": "mean_of_all",
          "description": "Overall abusive supervision score"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 2.33,
              "label": "Low",
              "description": "Low levels of abusive supervision"
            },
            {
              "min": 2.33,
              "max": 3.67,
              "label": "Moderate",
              "description": "Moderate levels of abusive supervision"
            },
            {
              "min": 3.67,
              "max": 5,
              "label": "High",
              "description": "High levels of abusive supervision"
            }
          ]
        }
      },
      "useCases": [
        "Workplace mistreatment assessment",
        "Toxic leadership identification",
        "Organizational health evaluations",
        "Employee wellbeing studies"
      ],
      "relatedConstructs": [
        "Leader Hostility",
        "Workplace Incivility",
        "Supervisory Undermining"
      ],
      "keywords": [
        "abusive supervision",
        "mistreatment",
        "hostility",
        "undermining"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "gtl-7",
      "name": "Global Transformational Leadership Scale",
      "shortName": "GTL-7",
      "construct": "Transformational Leadership",
      "category": "Leadership",
      "description": "Brief measure of transformational leadership assessing leaders' visioning, inspirational communication, and individualized consideration. Used across cultures and organizational contexts.",
      "authors": "Carless, S. A., Wearing, A. J., & Mann, L.",
      "year": 2000,
      "citations": [
        "Carless, S. A., Wearing, A. J., & Mann, L. (2000). A short measure of transformational leadership. Journal of Business and Psychology, 14(3), 389-405."
      ],
      "numberOfItems": 7,
      "estimatedMinutes": 2,
      "items": [
        {
          "id": 1,
          "text": "Provides me with new ways of looking at things that used to bother me",
          "subscale": "Intellectual Stimulation",
          "reverse": false
        },
        {
          "id": 2,
          "text": "Talks optimistically about the future",
          "subscale": "Inspirational Motivation",
          "reverse": false
        },
        {
          "id": 3,
          "text": "Treats me as an individual rather than just as a member of a group",
          "subscale": "Individualized Consideration",
          "reverse": false
        },
        {
          "id": 4,
          "text": "Expresses confidence that goals will be achieved",
          "subscale": "Inspirational Motivation",
          "reverse": false
        },
        {
          "id": 5,
          "text": "Instills pride in being associated with him/her",
          "subscale": "Inspirational Motivation",
          "reverse": false
        },
        {
          "id": 6,
          "text": "Gets me to look at problems from many different angles",
          "subscale": "Intellectual Stimulation",
          "reverse": false
        },
        {
          "id": 7,
          "text": "Gives me personal attention and treats me as an individual",
          "subscale": "Individualized Consideration",
          "reverse": false
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 5,
        "labels": {
          "1": "Not at all",
          "2": "Once in a while",
          "3": "Sometimes",
          "4": "Fairly often",
          "5": "Frequently, if not always"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {
          "Intellectual Stimulation": {
            "items": [
              1,
              6
            ],
            "description": "Leader encourages new perspectives and problem-solving"
          },
          "Inspirational Motivation": {
            "items": [
              2,
              4,
              5
            ],
            "description": "Leader motivates through vision and confidence"
          },
          "Individualized Consideration": {
            "items": [
              3,
              7
            ],
            "description": "Leader provides personal attention and support"
          }
        },
        "overall": {
          "method": "mean_of_all",
          "description": "Overall transformational leadership score"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 2.33,
              "label": "Low",
              "description": "Low transformational leadership"
            },
            {
              "min": 2.33,
              "max": 3.67,
              "label": "Moderate",
              "description": "Moderate transformational leadership"
            },
            {
              "min": 3.67,
              "max": 5,
              "label": "High",
              "description": "High transformational leadership"
            }
          ]
        }
      },
      "useCases": [
        "Quick leadership assessment",
        "International studies",
        "Organizational effectiveness research",
        "Leadership training evaluation"
      ],
      "relatedConstructs": [
        "Authentic Leadership",
        "Visionary Leadership",
        "Inspirational Leadership"
      ],
      "keywords": [
        "transformational leadership",
        "inspiration",
        "intellectual stimulation",
        "individualized consideration"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "ils-6",
      "name": "Inclusive Leadership Scale",
      "shortName": "ILS-6",
      "construct": "Inclusive Leadership",
      "category": "Leadership",
      "description": "Measures leaders' openness to diverse perspectives, encouraging employee voice and collaboration. Assesses degree to which leaders create psychologically safe environments for all team members.",
      "authors": "Carmeli, A., Reiter-Palmon, R., & Ziv, E.",
      "year": 2010,
      "citations": [
        "Carmeli, A., Reiter-Palmon, R., & Ziv, E. (2010). Inclusive leadership and employee involvement in creative tasks in the workplace: The mediating role of psychological safety. Creativity Research Journal, 22(3), 250-260."
      ],
      "numberOfItems": 6,
      "estimatedMinutes": 1,
      "items": [
        {
          "id": 1,
          "text": "My manager makes effort to hear different perspectives from team members",
          "subscale": "Inclusive Leadership",
          "reverse": false
        },
        {
          "id": 2,
          "text": "My manager shows genuine interest in the ideas and opinions of team members",
          "subscale": "Inclusive Leadership",
          "reverse": false
        },
        {
          "id": 3,
          "text": "My manager values the contribution of each team member",
          "subscale": "Inclusive Leadership",
          "reverse": false
        },
        {
          "id": 4,
          "text": "My manager takes into account different opinions during decision-making",
          "subscale": "Inclusive Leadership",
          "reverse": false
        },
        {
          "id": 5,
          "text": "My manager ensures that all voices are heard",
          "subscale": "Inclusive Leadership",
          "reverse": false
        },
        {
          "id": 6,
          "text": "My manager is open to different ways of doing things",
          "subscale": "Inclusive Leadership",
          "reverse": false
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 5,
        "labels": {
          "1": "Strongly disagree",
          "2": "Disagree",
          "3": "Neutral",
          "4": "Agree",
          "5": "Strongly agree"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {
          "Inclusive Leadership": {
            "items": [
              1,
              2,
              3,
              4,
              5,
              6
            ],
            "description": "Overall inclusive leadership behavior"
          }
        },
        "overall": {
          "method": "mean_of_all",
          "description": "Overall inclusive leadership score"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 2.33,
              "label": "Low",
              "description": "Low inclusive leadership"
            },
            {
              "min": 2.33,
              "max": 3.67,
              "label": "Moderate",
              "description": "Moderate inclusive leadership"
            },
            {
              "min": 3.67,
              "max": 5,
              "label": "High",
              "description": "High inclusive leadership"
            }
          ]
        }
      },
      "useCases": [
        "Diversity and inclusion initiatives",
        "Team psychological safety assessment",
        "Innovation climate measurement",
        "Employee voice research"
      ],
      "relatedConstructs": [
        "Psychological Safety",
        "Inclusive Climate",
        "Voice Climate"
      ],
      "keywords": [
        "inclusive leadership",
        "diversity",
        "voice",
        "psychological safety"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "gq-6",
      "name": "Group Cohesion Questionnaire",
      "shortName": "GCQ-6",
      "construct": "Team Cohesion",
      "category": "Teams & Collaboration",
      "description": "Measures the degree to which team members feel attracted to the team and motivated to remain with it. Captures both task and social cohesion in workplace teams.",
      "authors": "Carron, A. V., Widmeyer, W. N., & Brawley, L. R.",
      "year": 1985,
      "citations": [
        "Carron, A. V., Widmeyer, W. N., & Brawley, L. R. (1985). The development of an instrument to assess cohesion in sports teams: The Group Environment Questionnaire. Journal of Sport Psychology, 7(3), 244-266."
      ],
      "numberOfItems": 6,
      "estimatedMinutes": 1,
      "items": [
        {
          "id": 1,
          "text": "I feel strongly attached to this team",
          "subscale": "Individual Attraction to Group",
          "reverse": false
        },
        {
          "id": 2,
          "text": "This team is a close-knit team",
          "subscale": "Group Integration-Task",
          "reverse": false
        },
        {
          "id": 3,
          "text": "Our team members have a strong commitment to getting the job done",
          "subscale": "Group Integration-Task",
          "reverse": false
        },
        {
          "id": 4,
          "text": "I enjoy socializing with other team members",
          "subscale": "Individual Attraction to Group-Social",
          "reverse": false
        },
        {
          "id": 5,
          "text": "I would like to remain part of this team",
          "subscale": "Individual Attraction to Group",
          "reverse": false
        },
        {
          "id": 6,
          "text": "Team members get along well with each other",
          "subscale": "Group Integration-Social",
          "reverse": false
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 5,
        "labels": {
          "1": "Strongly disagree",
          "2": "Disagree",
          "3": "Neutral",
          "4": "Agree",
          "5": "Strongly agree"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {
          "Individual Attraction to Group": {
            "items": [
              1,
              5
            ],
            "description": "Personal attraction and commitment to team membership"
          },
          "Group Integration-Task": {
            "items": [
              2,
              3
            ],
            "description": "Team unity around task goals"
          },
          "Individual Attraction to Group-Social": {
            "items": [
              4
            ],
            "description": "Social attraction to team members"
          },
          "Group Integration-Social": {
            "items": [
              6
            ],
            "description": "Overall social cohesion of team"
          }
        },
        "overall": {
          "method": "mean_of_all",
          "description": "Overall team cohesion score"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 2.33,
              "label": "Low",
              "description": "Low team cohesion"
            },
            {
              "min": 2.33,
              "max": 3.67,
              "label": "Moderate",
              "description": "Moderate team cohesion"
            },
            {
              "min": 3.67,
              "max": 5,
              "label": "High",
              "description": "High team cohesion"
            }
          ]
        }
      },
      "useCases": [
        "Team effectiveness assessment",
        "Workplace team dynamics",
        "Group intervention evaluation",
        "Team building measurement"
      ],
      "relatedConstructs": [
        "Team Bonding",
        "Group Identity",
        "Team Performance"
      ],
      "keywords": [
        "team cohesion",
        "group cohesion",
        "team unity",
        "belonging"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "ics-8",
      "name": "Intragroup Conflict Scale",
      "shortName": "ICS-8",
      "construct": "Team Conflict",
      "category": "Teams & Collaboration",
      "description": "Measures task conflict and relationship conflict within teams. Assesses the extent to which team members experience disagreements about work and interpersonal tensions.",
      "authors": "Jehn, K. A.",
      "year": 1995,
      "citations": [
        "Jehn, K. A. (1995). A multimethod examination of the benefits and detriments of intragroup conflict. Administrative Science Quarterly, 40(2), 256-282."
      ],
      "numberOfItems": 8,
      "estimatedMinutes": 2,
      "items": [
        {
          "id": 1,
          "text": "There is disagreement about the task in this team",
          "subscale": "Task Conflict",
          "reverse": false
        },
        {
          "id": 2,
          "text": "There is conflict about the work we do in this team",
          "subscale": "Task Conflict",
          "reverse": false
        },
        {
          "id": 3,
          "text": "There is disagreement about the content of the decisions made in this team",
          "subscale": "Task Conflict",
          "reverse": false
        },
        {
          "id": 4,
          "text": "There is disagreement about how something should be done in this team",
          "subscale": "Task Conflict",
          "reverse": false
        },
        {
          "id": 5,
          "text": "There is tension between members in this team",
          "subscale": "Relationship Conflict",
          "reverse": false
        },
        {
          "id": 6,
          "text": "There is conflict between members in this team",
          "subscale": "Relationship Conflict",
          "reverse": false
        },
        {
          "id": 7,
          "text": "There are interpersonal incompatibilities in this team",
          "subscale": "Relationship Conflict",
          "reverse": false
        },
        {
          "id": 8,
          "text": "There are personality clashes within this team",
          "subscale": "Relationship Conflict",
          "reverse": false
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 5,
        "labels": {
          "1": "Strongly disagree",
          "2": "Disagree",
          "3": "Neutral",
          "4": "Agree",
          "5": "Strongly agree"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {
          "Task Conflict": {
            "items": [
              1,
              2,
              3,
              4
            ],
            "description": "Disagreements about work content and decisions"
          },
          "Relationship Conflict": {
            "items": [
              5,
              6,
              7,
              8
            ],
            "description": "Interpersonal tensions and incompatibilities"
          }
        },
        "overall": {
          "method": "mean_of_all",
          "description": "Overall intragroup conflict score"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 2.33,
              "label": "Low",
              "description": "Low intragroup conflict"
            },
            {
              "min": 2.33,
              "max": 3.67,
              "label": "Moderate",
              "description": "Moderate intragroup conflict"
            },
            {
              "min": 3.67,
              "max": 5,
              "label": "High",
              "description": "High intragroup conflict"
            }
          ]
        }
      },
      "useCases": [
        "Team conflict assessment",
        "Conflict management training",
        "Team dynamics evaluation",
        "Organizational health surveys"
      ],
      "relatedConstructs": [
        "Team Friction",
        "Interpersonal Conflict",
        "Task Disagreement"
      ],
      "keywords": [
        "conflict",
        "task conflict",
        "relationship conflict",
        "team tension"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "tts-6",
      "name": "Team Trust Scale",
      "shortName": "TTS-6",
      "construct": "Team Trust",
      "category": "Teams & Collaboration",
      "description": "Measures affect-based and cognition-based trust among team members. Captures both emotional trust and competence-based trust in team relationships.",
      "authors": "McAllister, D. J.",
      "year": 1995,
      "citations": [
        "McAllister, D. J. (1995). Affect-and cognition-based trust as foundations for interpersonal cooperation in organizations. Academy of Management Journal, 38(1), 24-59."
      ],
      "numberOfItems": 6,
      "estimatedMinutes": 2,
      "items": [
        {
          "id": 1,
          "text": "I can count on my teammates to back me up in difficult situations",
          "subscale": "Affect-Based Trust",
          "reverse": false
        },
        {
          "id": 2,
          "text": "My teammates care about my wellbeing",
          "subscale": "Affect-Based Trust",
          "reverse": false
        },
        {
          "id": 3,
          "text": "I feel a sense of friendship with my teammates",
          "subscale": "Affect-Based Trust",
          "reverse": false
        },
        {
          "id": 4,
          "text": "I have confidence in the technical abilities of my teammates",
          "subscale": "Cognition-Based Trust",
          "reverse": false
        },
        {
          "id": 5,
          "text": "My teammates are well qualified to do their jobs",
          "subscale": "Cognition-Based Trust",
          "reverse": false
        },
        {
          "id": 6,
          "text": "I believe my teammates can do their jobs well",
          "subscale": "Cognition-Based Trust",
          "reverse": false
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 5,
        "labels": {
          "1": "Strongly disagree",
          "2": "Disagree",
          "3": "Neutral",
          "4": "Agree",
          "5": "Strongly agree"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {
          "Affect-Based Trust": {
            "items": [
              1,
              2,
              3
            ],
            "description": "Emotional trust and care-based relationships"
          },
          "Cognition-Based Trust": {
            "items": [
              4,
              5,
              6
            ],
            "description": "Trust based on competence and capability"
          }
        },
        "overall": {
          "method": "mean_of_all",
          "description": "Overall team trust score"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 2.33,
              "label": "Low",
              "description": "Low team trust"
            },
            {
              "min": 2.33,
              "max": 3.67,
              "label": "Moderate",
              "description": "Moderate team trust"
            },
            {
              "min": 3.67,
              "max": 5,
              "label": "High",
              "description": "High team trust"
            }
          ]
        }
      },
      "useCases": [
        "Team effectiveness evaluation",
        "Trust-building interventions",
        "Collaboration research",
        "Organizational climate assessment"
      ],
      "relatedConstructs": [
        "Interpersonal Trust",
        "Team Reliability",
        "Competence Trust"
      ],
      "keywords": [
        "trust",
        "affect-based trust",
        "cognition-based trust",
        "team reliability"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "gps-4",
      "name": "Group Potency Scale",
      "shortName": "GPS-4",
      "construct": "Group Potency",
      "category": "Teams & Collaboration",
      "description": "Measures team members' collective belief in the group's capability to accomplish its goals. Short form assessing team confidence and efficacy.",
      "authors": "Guzzo, R. A., Yost, P. R., Campbell, R. J., & Shea, G. P.",
      "year": 1993,
      "citations": [
        "Guzzo, R. A., Yost, P. R., Campbell, R. J., & Shea, G. P. (1993). Potency in groups: Articulating a construct. British Journal of Social Psychology, 32(1), 87-106."
      ],
      "numberOfItems": 4,
      "estimatedMinutes": 1,
      "items": [
        {
          "id": 1,
          "text": "This team can accomplish its goals",
          "subscale": "Group Potency",
          "reverse": false
        },
        {
          "id": 2,
          "text": "This team will be able to handle future challenges well",
          "subscale": "Group Potency",
          "reverse": false
        },
        {
          "id": 3,
          "text": "I am confident this team can achieve its objectives",
          "subscale": "Group Potency",
          "reverse": false
        },
        {
          "id": 4,
          "text": "This team has the capability to perform effectively",
          "subscale": "Group Potency",
          "reverse": false
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 5,
        "labels": {
          "1": "Strongly disagree",
          "2": "Disagree",
          "3": "Neutral",
          "4": "Agree",
          "5": "Strongly agree"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {
          "Group Potency": {
            "items": [
              1,
              2,
              3,
              4
            ],
            "description": "Collective belief in group capability"
          }
        },
        "overall": {
          "method": "mean_of_all",
          "description": "Overall group potency score"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 2.33,
              "label": "Low",
              "description": "Low group potency"
            },
            {
              "min": 2.33,
              "max": 3.67,
              "label": "Moderate",
              "description": "Moderate group potency"
            },
            {
              "min": 3.67,
              "max": 5,
              "label": "High",
              "description": "High group potency"
            }
          ]
        }
      },
      "useCases": [
        "Team efficacy assessment",
        "Performance prediction",
        "Motivation measurement",
        "Team coaching effectiveness"
      ],
      "relatedConstructs": [
        "Collective Efficacy",
        "Team Confidence",
        "Group Self-Efficacy"
      ],
      "keywords": [
        "group potency",
        "collective efficacy",
        "team confidence",
        "group capability"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "ces-8",
      "name": "Collective Efficacy Scale",
      "shortName": "CES-8",
      "construct": "Collective Efficacy",
      "category": "Teams & Collaboration",
      "description": "Measures the shared belief among team members that they can organize and execute courses of action to accomplish group tasks and overcome obstacles.",
      "authors": "Riggs, M. L., Warka, J., Babasa, B., Betancourt, R., & Hooker, S.",
      "year": 1994,
      "citations": [
        "Riggs, M. L., Warka, J., Babasa, B., Betancourt, R., & Hooker, S. (1994). Development and validation of self-efficacy and outcome expectancy scales for job-related applications. Educational and Psychological Measurement, 54(4), 793-802."
      ],
      "numberOfItems": 8,
      "estimatedMinutes": 2,
      "items": [
        {
          "id": 1,
          "text": "Together, we can perform effectively on this task",
          "subscale": "Collective Efficacy",
          "reverse": false
        },
        {
          "id": 2,
          "text": "We can accomplish our goals despite obstacles",
          "subscale": "Collective Efficacy",
          "reverse": false
        },
        {
          "id": 3,
          "text": "We have the ability to accomplish this task",
          "subscale": "Collective Efficacy",
          "reverse": false
        },
        {
          "id": 4,
          "text": "As a team, we have the skills needed to succeed",
          "subscale": "Collective Efficacy",
          "reverse": false
        },
        {
          "id": 5,
          "text": "We believe we can handle challenging situations",
          "subscale": "Collective Efficacy",
          "reverse": false
        },
        {
          "id": 6,
          "text": "We are confident we can solve problems as a group",
          "subscale": "Collective Efficacy",
          "reverse": false
        },
        {
          "id": 7,
          "text": "We can overcome most challenges working together",
          "subscale": "Collective Efficacy",
          "reverse": false
        },
        {
          "id": 8,
          "text": "The team will perform well on this task",
          "subscale": "Collective Efficacy",
          "reverse": false
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 5,
        "labels": {
          "1": "Strongly disagree",
          "2": "Disagree",
          "3": "Neutral",
          "4": "Agree",
          "5": "Strongly agree"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {
          "Collective Efficacy": {
            "items": [
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8
            ],
            "description": "Shared team belief in capability and performance"
          }
        },
        "overall": {
          "method": "mean_of_all",
          "description": "Overall collective efficacy score"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 2.33,
              "label": "Low",
              "description": "Low collective efficacy"
            },
            {
              "min": 2.33,
              "max": 3.67,
              "label": "Moderate",
              "description": "Moderate collective efficacy"
            },
            {
              "min": 3.67,
              "max": 5,
              "label": "High",
              "description": "High collective efficacy"
            }
          ]
        }
      },
      "useCases": [
        "Team performance prediction",
        "Group goal-setting",
        "Motivation enhancement",
        "Organizational effectiveness research"
      ],
      "relatedConstructs": [
        "Group Potency",
        "Team Self-Efficacy",
        "Collective Competence"
      ],
      "keywords": [
        "collective efficacy",
        "group efficacy",
        "team confidence",
        "shared capability"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "slq-5",
      "name": "Shared Leadership Questionnaire",
      "shortName": "SLQ-5",
      "construct": "Shared Leadership",
      "category": "Teams & Collaboration",
      "description": "Measures the extent to which leadership functions are distributed across team members rather than concentrated in one leader. Assesses peer leadership and mutual influence.",
      "authors": "Pearce, C. L., & Sims, H. P., Jr.",
      "year": 2002,
      "citations": [
        "Pearce, C. L., & Sims, H. P., Jr. (2002). Vertical versus shared leadership as predictors of the effectiveness of change management teams: An examination of aversive, directive, transactional, transformational, and empowering leader behaviors. Group Dynamics: Theory, Research, and Practice, 6(2), 172-197."
      ],
      "numberOfItems": 5,
      "estimatedMinutes": 1,
      "items": [
        {
          "id": 1,
          "text": "Leadership in this team is shared among team members",
          "subscale": "Shared Leadership",
          "reverse": false
        },
        {
          "id": 2,
          "text": "Multiple team members exercise leadership functions",
          "subscale": "Shared Leadership",
          "reverse": false
        },
        {
          "id": 3,
          "text": "Our team members hold each other accountable for goals",
          "subscale": "Shared Leadership",
          "reverse": false
        },
        {
          "id": 4,
          "text": "Team members influence each other's thinking about work",
          "subscale": "Shared Leadership",
          "reverse": false
        },
        {
          "id": 5,
          "text": "Team members actively give each other coaching and feedback",
          "subscale": "Shared Leadership",
          "reverse": false
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 5,
        "labels": {
          "1": "Strongly disagree",
          "2": "Disagree",
          "3": "Neutral",
          "4": "Agree",
          "5": "Strongly agree"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {
          "Shared Leadership": {
            "items": [
              1,
              2,
              3,
              4,
              5
            ],
            "description": "Distribution of leadership across team members"
          }
        },
        "overall": {
          "method": "mean_of_all",
          "description": "Overall shared leadership score"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 2.33,
              "label": "Low",
              "description": "Low shared leadership"
            },
            {
              "min": 2.33,
              "max": 3.67,
              "label": "Moderate",
              "description": "Moderate shared leadership"
            },
            {
              "min": 3.67,
              "max": 5,
              "label": "High",
              "description": "High shared leadership"
            }
          ]
        }
      },
      "useCases": [
        "Self-managed team assessment",
        "Distributed leadership research",
        "Team development evaluation",
        "Organizational structure studies"
      ],
      "relatedConstructs": [
        "Peer Leadership",
        "Distributed Leadership",
        "Team Empowerment"
      ],
      "keywords": [
        "shared leadership",
        "distributed leadership",
        "peer leadership",
        "mutual influence"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "prca-24",
      "name": "Personal Report of Communication Apprehension",
      "shortName": "PRCA-24",
      "construct": "Communication Apprehension",
      "category": "Communication & Interpersonal",
      "description": "Measures anxiety and fear about communicating in various contexts. Includes subscales for group discussion, meetings, public speaking, and one-on-one conversations.",
      "authors": "McCroskey, J. C.",
      "year": 1982,
      "citations": [
        "McCroskey, J. C. (1982). Oral communication apprehension: A summary of recent theory and research. Human Communication Research, 4(1), 78-96."
      ],
      "numberOfItems": 24,
      "estimatedMinutes": 5,
      "items": [
        {
          "id": 1,
          "text": "I dislike participating in group discussions",
          "subscale": "Group Discussion",
          "reverse": false
        },
        {
          "id": 2,
          "text": "Generally, I am comfortable while participating in a group discussion",
          "subscale": "Group Discussion",
          "reverse": true
        },
        {
          "id": 3,
          "text": "I am tense and nervous while participating in group discussions",
          "subscale": "Group Discussion",
          "reverse": false
        },
        {
          "id": 4,
          "text": "I like to get involved in group discussions",
          "subscale": "Group Discussion",
          "reverse": true
        },
        {
          "id": 5,
          "text": "Engaging in a group discussion with new people makes me tense and nervous",
          "subscale": "Group Discussion",
          "reverse": false
        },
        {
          "id": 6,
          "text": "I am afraid of expressing myself in group discussions",
          "subscale": "Group Discussion",
          "reverse": false
        },
        {
          "id": 7,
          "text": "Communicating at meetings is something I dread",
          "subscale": "Meetings",
          "reverse": false
        },
        {
          "id": 8,
          "text": "I am very relaxed when answering questions at a meeting",
          "subscale": "Meetings",
          "reverse": true
        },
        {
          "id": 9,
          "text": "Problems often arise when I try to express my ideas at meetings",
          "subscale": "Meetings",
          "reverse": false
        },
        {
          "id": 10,
          "text": "I am terrified by the prospect of speaking in a meeting",
          "subscale": "Meetings",
          "reverse": false
        },
        {
          "id": 11,
          "text": "When communicating at meetings, I worry about making mistakes",
          "subscale": "Meetings",
          "reverse": false
        },
        {
          "id": 12,
          "text": "During meetings, I find myself dreading to speak up",
          "subscale": "Meetings",
          "reverse": false
        },
        {
          "id": 13,
          "text": "I do not like to communicate at meetings",
          "subscale": "Meetings",
          "reverse": false
        },
        {
          "id": 14,
          "text": "I am afraid to speak up to answer a question in class or meeting",
          "subscale": "Meetings",
          "reverse": false
        },
        {
          "id": 15,
          "text": "Certain parts of my schoolwork/job where I have to give presentations frighten me",
          "subscale": "Public Speaking",
          "reverse": false
        },
        {
          "id": 16,
          "text": "I look forward to expressing my ideas in class or at work",
          "subscale": "Public Speaking",
          "reverse": true
        },
        {
          "id": 17,
          "text": "I am afraid to go to meetings where I have to present my work",
          "subscale": "Public Speaking",
          "reverse": false
        },
        {
          "id": 18,
          "text": "I feel comfortably able to present a report at a meeting",
          "subscale": "Public Speaking",
          "reverse": true
        },
        {
          "id": 19,
          "text": "I am very fearful about giving presentations at work or in class",
          "subscale": "Public Speaking",
          "reverse": false
        },
        {
          "id": 20,
          "text": "My thoughts become confused and jumbled when I try to speak in front of an audience",
          "subscale": "Public Speaking",
          "reverse": false
        },
        {
          "id": 21,
          "text": "I have no fear of giving a speech",
          "subscale": "Public Speaking",
          "reverse": true
        },
        {
          "id": 22,
          "text": "Talking to people makes me nervous",
          "subscale": "One-on-One",
          "reverse": false
        },
        {
          "id": 23,
          "text": "I am afraid to speak up in conversations",
          "subscale": "One-on-One",
          "reverse": false
        },
        {
          "id": 24,
          "text": "I find conversing with others somewhat pleasant",
          "subscale": "One-on-One",
          "reverse": true
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 5,
        "labels": {
          "1": "Strongly agree",
          "2": "Agree",
          "3": "Neutral",
          "4": "Disagree",
          "5": "Strongly disagree"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {
          "Group Discussion": {
            "items": [
              1,
              2,
              3,
              4,
              5,
              6
            ],
            "description": "Anxiety about participating in group discussions"
          },
          "Meetings": {
            "items": [
              7,
              8,
              9,
              10,
              11,
              12,
              13,
              14
            ],
            "description": "Apprehension about speaking in meetings"
          },
          "Public Speaking": {
            "items": [
              15,
              16,
              17,
              18,
              19,
              20,
              21
            ],
            "description": "Fear of presentations and public speaking"
          },
          "One-on-One": {
            "items": [
              22,
              23,
              24
            ],
            "description": "Anxiety in interpersonal conversations"
          }
        },
        "overall": {
          "method": "mean_of_all",
          "description": "Overall communication apprehension"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 2.33,
              "label": "Low",
              "description": "Low communication apprehension"
            },
            {
              "min": 2.33,
              "max": 3.67,
              "label": "Moderate",
              "description": "Moderate communication apprehension"
            },
            {
              "min": 3.67,
              "max": 5,
              "label": "High",
              "description": "High communication apprehension"
            }
          ]
        }
      },
      "useCases": [
        "Communication skills training",
        "Public speaking anxiety assessment",
        "Career development counseling",
        "Organizational communication climate"
      ],
      "relatedConstructs": [
        "Social Anxiety",
        "Presentation Anxiety",
        "Shyness"
      ],
      "keywords": [
        "communication apprehension",
        "speaking anxiety",
        "social anxiety",
        "nervousness"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "as-short",
      "name": "Assertiveness Scale (Short Form)",
      "shortName": "AS-Short",
      "construct": "Assertiveness",
      "category": "Communication & Interpersonal",
      "description": "Measures the degree to which individuals express their opinions, feelings, and needs directly and appropriately. Reflects ability to stand up for oneself in social and work situations.",
      "authors": "Rathus, S. A.",
      "year": 1973,
      "citations": [
        "Rathus, S. A. (1973). A 30-item schedule for assessing assertive behavior. Behavior Therapy, 4(3), 398-406."
      ],
      "numberOfItems": 12,
      "estimatedMinutes": 2,
      "items": [
        {
          "id": 1,
          "text": "Most people seem to be more assertive or aggressive than I am",
          "subscale": "Assertiveness",
          "reverse": true
        },
        {
          "id": 2,
          "text": "I have hesitated to make or accept phone calls because of fear",
          "subscale": "Assertiveness",
          "reverse": true
        },
        {
          "id": 3,
          "text": "I prefer to watch others when in a social situation",
          "subscale": "Assertiveness",
          "reverse": true
        },
        {
          "id": 4,
          "text": "I would rather apply for a job or get a promotion by having someone else do it for me",
          "subscale": "Assertiveness",
          "reverse": true
        },
        {
          "id": 5,
          "text": "I find it difficult to ask other people for favors",
          "subscale": "Assertiveness",
          "reverse": true
        },
        {
          "id": 6,
          "text": "I tend to bottle up my emotions rather than make a scene",
          "subscale": "Assertiveness",
          "reverse": true
        },
        {
          "id": 7,
          "text": "People often take advantage of me",
          "subscale": "Assertiveness",
          "reverse": true
        },
        {
          "id": 8,
          "text": "I enjoy starting conversations with new acquaintances and strangers",
          "subscale": "Assertiveness",
          "reverse": false
        },
        {
          "id": 9,
          "text": "I often feel resentful when I do things because others request it",
          "subscale": "Assertiveness",
          "reverse": true
        },
        {
          "id": 10,
          "text": "I have avoided asking questions for fear of sounding stupid",
          "subscale": "Assertiveness",
          "reverse": true
        },
        {
          "id": 11,
          "text": "I am able to express my feelings honestly and directly",
          "subscale": "Assertiveness",
          "reverse": false
        },
        {
          "id": 12,
          "text": "I can comfortably disagree with people",
          "subscale": "Assertiveness",
          "reverse": false
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 5,
        "labels": {
          "1": "Not at all like me",
          "2": "Somewhat unlike me",
          "3": "Neither like nor unlike me",
          "4": "Somewhat like me",
          "5": "Very much like me"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {
          "Assertiveness": {
            "items": [
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10,
              11,
              12
            ],
            "description": "Overall assertiveness in expressing needs and opinions"
          }
        },
        "overall": {
          "method": "mean_of_all",
          "description": "Overall assertiveness score"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 2.33,
              "label": "Low",
              "description": "Low assertiveness"
            },
            {
              "min": 2.33,
              "max": 3.67,
              "label": "Moderate",
              "description": "Moderate assertiveness"
            },
            {
              "min": 3.67,
              "max": 5,
              "label": "High",
              "description": "High assertiveness"
            }
          ]
        }
      },
      "useCases": [
        "Assertiveness training",
        "Communication coaching",
        "Interpersonal effectiveness assessment",
        "Conflict resolution training"
      ],
      "relatedConstructs": [
        "Self-Expression",
        "Confidence",
        "Boundary Setting"
      ],
      "keywords": [
        "assertiveness",
        "self-expression",
        "confidence",
        "standing up for oneself"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "aels-9",
      "name": "Active-Empathic Listening Scale",
      "shortName": "AELS-9",
      "construct": "Active Listening",
      "category": "Communication & Interpersonal",
      "description": "Measures the ability and tendency to listen actively and empathically to others. Captures both cognitive and emotional engagement in listening processes.",
      "authors": "Bodie, G. D.",
      "year": 2011,
      "citations": [
        "Bodie, G. D. (2011). The Active-Empathic Listening Scale (AELS): Conceptualization and evidence of validity within the interpersonal domain. Communication Quarterly, 59(3), 277-295."
      ],
      "numberOfItems": 9,
      "estimatedMinutes": 2,
      "items": [
        {
          "id": 1,
          "text": "I make an effort to understand the message the other person is communicating",
          "subscale": "Active-Empathic Listening",
          "reverse": false
        },
        {
          "id": 2,
          "text": "I listen to understand what others are saying, not to formulate my response",
          "subscale": "Active-Empathic Listening",
          "reverse": false
        },
        {
          "id": 3,
          "text": "I think about how the other person feels during conversation",
          "subscale": "Active-Empathic Listening",
          "reverse": false
        },
        {
          "id": 4,
          "text": "I acknowledge others' feelings during conversations",
          "subscale": "Active-Empathic Listening",
          "reverse": false
        },
        {
          "id": 5,
          "text": "I respond to others in ways that show I understand their perspective",
          "subscale": "Active-Empathic Listening",
          "reverse": false
        },
        {
          "id": 6,
          "text": "I ask questions to help me understand others better",
          "subscale": "Active-Empathic Listening",
          "reverse": false
        },
        {
          "id": 7,
          "text": "I paraphrase what others say to ensure I understand them",
          "subscale": "Active-Empathic Listening",
          "reverse": false
        },
        {
          "id": 8,
          "text": "I look for areas of agreement when I disagree with others",
          "subscale": "Active-Empathic Listening",
          "reverse": false
        },
        {
          "id": 9,
          "text": "I focus my full attention on what others are communicating",
          "subscale": "Active-Empathic Listening",
          "reverse": false
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 5,
        "labels": {
          "1": "Strongly disagree",
          "2": "Disagree",
          "3": "Neutral",
          "4": "Agree",
          "5": "Strongly agree"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {
          "Active-Empathic Listening": {
            "items": [
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9
            ],
            "description": "Ability to listen actively and empathically to others"
          }
        },
        "overall": {
          "method": "mean_of_all",
          "description": "Overall active-empathic listening score"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 2.33,
              "label": "Low",
              "description": "Low active-empathic listening"
            },
            {
              "min": 2.33,
              "max": 3.67,
              "label": "Moderate",
              "description": "Moderate active-empathic listening"
            },
            {
              "min": 3.67,
              "max": 5,
              "label": "High",
              "description": "High active-empathic listening"
            }
          ]
        }
      },
      "useCases": [
        "Leadership communication training",
        "Team communication improvement",
        "Customer service excellence",
        "Counselor and therapist assessment"
      ],
      "relatedConstructs": [
        "Empathy",
        "Communication Skill",
        "Perspective Taking"
      ],
      "keywords": [
        "active listening",
        "empathic listening",
        "understanding",
        "attention"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "fos-9",
      "name": "Feedback Orientation Scale",
      "shortName": "FOS-9",
      "construct": "Feedback Orientation",
      "category": "Communication & Interpersonal",
      "description": "Measures individual differences in how people seek, accept, and respond to feedback. Captures motivation to get feedback and receptiveness to developmental information.",
      "authors": "Linderbaum, B. A., & Levy, P. E.",
      "year": 2010,
      "citations": [
        "Linderbaum, B. A., & Levy, P. E. (2010). The development and validation of the Feedback Orientation Scale. Journal of Management, 36(6), 1372-1405."
      ],
      "numberOfItems": 9,
      "estimatedMinutes": 2,
      "items": [
        {
          "id": 1,
          "text": "I actively seek feedback to learn how well I am doing",
          "subscale": "Feedback Seeking",
          "reverse": false
        },
        {
          "id": 2,
          "text": "I request feedback from my supervisor to help me improve",
          "subscale": "Feedback Seeking",
          "reverse": false
        },
        {
          "id": 3,
          "text": "I ask my colleagues how they would rate my performance",
          "subscale": "Feedback Seeking",
          "reverse": false
        },
        {
          "id": 4,
          "text": "I get defensive when I receive negative feedback",
          "subscale": "Feedback Receptiveness",
          "reverse": true
        },
        {
          "id": 5,
          "text": "I am open to constructive criticism",
          "subscale": "Feedback Receptiveness",
          "reverse": false
        },
        {
          "id": 6,
          "text": "I take feedback in stride",
          "subscale": "Feedback Receptiveness",
          "reverse": false
        },
        {
          "id": 7,
          "text": "I use feedback to improve my performance",
          "subscale": "Feedback Utility",
          "reverse": false
        },
        {
          "id": 8,
          "text": "Feedback helps me understand how to perform better",
          "subscale": "Feedback Utility",
          "reverse": false
        },
        {
          "id": 9,
          "text": "I find feedback valuable for my development",
          "subscale": "Feedback Utility",
          "reverse": false
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 5,
        "labels": {
          "1": "Strongly disagree",
          "2": "Disagree",
          "3": "Neutral",
          "4": "Agree",
          "5": "Strongly agree"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {
          "Feedback Seeking": {
            "items": [
              1,
              2,
              3
            ],
            "description": "Proactive seeking of feedback"
          },
          "Feedback Receptiveness": {
            "items": [
              4,
              5,
              6
            ],
            "description": "Openness to receiving feedback"
          },
          "Feedback Utility": {
            "items": [
              7,
              8,
              9
            ],
            "description": "Perceived usefulness and application of feedback"
          }
        },
        "overall": {
          "method": "mean_of_all",
          "description": "Overall feedback orientation score"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 2.33,
              "label": "Low",
              "description": "Low feedback orientation"
            },
            {
              "min": 2.33,
              "max": 3.67,
              "label": "Moderate",
              "description": "Moderate feedback orientation"
            },
            {
              "min": 3.67,
              "max": 5,
              "label": "High",
              "description": "High feedback orientation"
            }
          ]
        }
      },
      "useCases": [
        "Performance management systems",
        "Leadership development programs",
        "Organizational learning assessment",
        "Employee development planning"
      ],
      "relatedConstructs": [
        "Openness to Experience",
        "Receptiveness",
        "Continuous Learning"
      ],
      "keywords": [
        "feedback orientation",
        "feedback seeking",
        "receptiveness",
        "continuous improvement"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "iri-7",
      "name": "Interpersonal Reactivity Index (Short)",
      "shortName": "IRI-7",
      "construct": "Empathy",
      "category": "Communication & Interpersonal",
      "description": "Measures cognitive and affective empathy through perspective-taking and empathic concern subscales. Short form used in organizational and workplace settings.",
      "authors": "Davis, M. H.",
      "year": 1983,
      "citations": [
        "Davis, M. H. (1983). Measuring individual differences in empathy: Evidence for a multidimensional approach. Journal of Personality and Social Psychology, 44(1), 113-126."
      ],
      "numberOfItems": 7,
      "estimatedMinutes": 2,
      "items": [
        {
          "id": 1,
          "text": "I try to look at everybody's side of a disagreement before I make a decision",
          "subscale": "Perspective Taking",
          "reverse": false
        },
        {
          "id": 2,
          "text": "I sometimes find it difficult to see things from the other person's point of view",
          "subscale": "Perspective Taking",
          "reverse": true
        },
        {
          "id": 3,
          "text": "I try to understand my friends better by imagining how things look from their perspective",
          "subscale": "Perspective Taking",
          "reverse": false
        },
        {
          "id": 4,
          "text": "I am often quite touched by things that I see happen",
          "subscale": "Empathic Concern",
          "reverse": false
        },
        {
          "id": 5,
          "text": "I would describe myself as a pretty soft-hearted person",
          "subscale": "Empathic Concern",
          "reverse": false
        },
        {
          "id": 6,
          "text": "I feel concerned when I see other people being treated unfairly",
          "subscale": "Empathic Concern",
          "reverse": false
        },
        {
          "id": 7,
          "text": "I have a tendency to get emotionally involved with a friend's problems",
          "subscale": "Empathic Concern",
          "reverse": false
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 5,
        "labels": {
          "1": "Strongly disagree",
          "2": "Disagree",
          "3": "Neutral",
          "4": "Agree",
          "5": "Strongly agree"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {
          "Perspective Taking": {
            "items": [
              1,
              2,
              3
            ],
            "description": "Cognitive ability to understand others' viewpoints"
          },
          "Empathic Concern": {
            "items": [
              4,
              5,
              6,
              7
            ],
            "description": "Affective concern and compassion for others"
          }
        },
        "overall": {
          "method": "mean_of_all",
          "description": "Overall empathy score"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 2.33,
              "label": "Low",
              "description": "Low empathy"
            },
            {
              "min": 2.33,
              "max": 3.67,
              "label": "Moderate",
              "description": "Moderate empathy"
            },
            {
              "min": 3.67,
              "max": 5,
              "label": "High",
              "description": "High empathy"
            }
          ]
        }
      },
      "useCases": [
        "Interpersonal communication research",
        "Leadership selection",
        "Team dynamics assessment",
        "Emotional intelligence evaluation"
      ],
      "relatedConstructs": [
        "Empathic Accuracy",
        "Emotional Intelligence",
        "Social Sensitivity"
      ],
      "keywords": [
        "empathy",
        "perspective taking",
        "empathic concern",
        "understanding others"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "cses-4",
      "name": "Creative Self-Efficacy Scale",
      "shortName": "CSES-4",
      "construct": "Creative Self-Efficacy",
      "category": "Creativity & Innovation",
      "description": "Measures individuals' confidence in their ability to perform creative tasks and produce creative outcomes. Short form suitable for organizational research.",
      "authors": "Tierney, P., & Farmer, S. M.",
      "year": 2002,
      "citations": [
        "Tierney, P., & Farmer, S. M. (2002). Creative self-efficacy: Its potential antecedents and relationship to creative performance. Academy of Management Journal, 45(6), 1137-1148."
      ],
      "numberOfItems": 4,
      "estimatedMinutes": 1,
      "items": [
        {
          "id": 1,
          "text": "I have confidence in my ability to solve problems creatively",
          "subscale": "Creative Self-Efficacy",
          "reverse": false
        },
        {
          "id": 2,
          "text": "I am able to come up with creative solutions to problems",
          "subscale": "Creative Self-Efficacy",
          "reverse": false
        },
        {
          "id": 3,
          "text": "I feel confident that I can think creatively",
          "subscale": "Creative Self-Efficacy",
          "reverse": false
        },
        {
          "id": 4,
          "text": "I believe I can produce creative work in my job",
          "subscale": "Creative Self-Efficacy",
          "reverse": false
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 5,
        "labels": {
          "1": "Strongly disagree",
          "2": "Disagree",
          "3": "Neutral",
          "4": "Agree",
          "5": "Strongly agree"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {
          "Creative Self-Efficacy": {
            "items": [
              1,
              2,
              3,
              4
            ],
            "description": "Confidence in creative abilities"
          }
        },
        "overall": {
          "method": "mean_of_all",
          "description": "Overall creative self-efficacy score"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 2.33,
              "label": "Low",
              "description": "Low creative self-efficacy"
            },
            {
              "min": 2.33,
              "max": 3.67,
              "label": "Moderate",
              "description": "Moderate creative self-efficacy"
            },
            {
              "min": 3.67,
              "max": 5,
              "label": "High",
              "description": "High creative self-efficacy"
            }
          ]
        }
      },
      "useCases": [
        "Innovation climate assessment",
        "Creative performance prediction",
        "Employee development",
        "Organizational creativity research"
      ],
      "relatedConstructs": [
        "Creativity",
        "Innovation Capability",
        "Self-Efficacy"
      ],
      "keywords": [
        "creative self-efficacy",
        "creativity confidence",
        "creative problem solving"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "iwb-9",
      "name": "Innovative Work Behavior Scale",
      "shortName": "IWB-9",
      "construct": "Innovative Work Behavior",
      "category": "Creativity & Innovation",
      "description": "Measures the extent to which employees engage in idea generation, championing, and implementation of innovations at work. Captures both creative and implementation behaviors.",
      "authors": "Janssen, O.",
      "year": 2000,
      "citations": [
        "Janssen, O. (2000). Job demands, perceptions of effort-reward fairness and innovative work behaviour. Journal of Occupational and Organizational Psychology, 73(3), 287-302."
      ],
      "numberOfItems": 9,
      "estimatedMinutes": 2,
      "items": [
        {
          "id": 1,
          "text": "I search out new technologies, processes, techniques, and/or product ideas",
          "subscale": "Idea Generation",
          "reverse": false
        },
        {
          "id": 2,
          "text": "I generate creative ideas",
          "subscale": "Idea Generation",
          "reverse": false
        },
        {
          "id": 3,
          "text": "I promote and champion new ideas to increase acceptance by colleagues",
          "subscale": "Idea Promotion",
          "reverse": false
        },
        {
          "id": 4,
          "text": "I attempt to gain support and commitment for innovative ideas",
          "subscale": "Idea Promotion",
          "reverse": false
        },
        {
          "id": 5,
          "text": "I transform innovative ideas into useful applications",
          "subscale": "Idea Implementation",
          "reverse": false
        },
        {
          "id": 6,
          "text": "I introduce innovative ideas into my work in a systematic way",
          "subscale": "Idea Implementation",
          "reverse": false
        },
        {
          "id": 7,
          "text": "I evaluate the benefits and drawbacks of innovative ideas",
          "subscale": "Idea Implementation",
          "reverse": false
        },
        {
          "id": 8,
          "text": "I take the initiative to remove obstacles for the implementation of innovative ideas",
          "subscale": "Idea Implementation",
          "reverse": false
        },
        {
          "id": 9,
          "text": "I innovate in ways that create new business opportunities",
          "subscale": "Idea Implementation",
          "reverse": false
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 5,
        "labels": {
          "1": "Never",
          "2": "Rarely",
          "3": "Sometimes",
          "4": "Often",
          "5": "Always"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {
          "Idea Generation": {
            "items": [
              1,
              2
            ],
            "description": "Generation of novel and useful ideas"
          },
          "Idea Promotion": {
            "items": [
              3,
              4
            ],
            "description": "Championing and gaining support for ideas"
          },
          "Idea Implementation": {
            "items": [
              5,
              6,
              7,
              8,
              9
            ],
            "description": "Implementation and practical application of ideas"
          }
        },
        "overall": {
          "method": "mean_of_all",
          "description": "Overall innovative work behavior score"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 2.33,
              "label": "Low",
              "description": "Low innovative work behavior"
            },
            {
              "min": 2.33,
              "max": 3.67,
              "label": "Moderate",
              "description": "Moderate innovative work behavior"
            },
            {
              "min": 3.67,
              "max": 5,
              "label": "High",
              "description": "High innovative work behavior"
            }
          ]
        }
      },
      "useCases": [
        "Innovation assessment",
        "Employee creativity evaluation",
        "Organizational innovation culture",
        "Performance management"
      ],
      "relatedConstructs": [
        "Creativity",
        "Initiative",
        "Organizational Innovation"
      ],
      "keywords": [
        "innovative work behavior",
        "idea generation",
        "idea promotion",
        "idea implementation"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "cps-18",
      "name": "Creative Personality Scale",
      "shortName": "CPS-18",
      "construct": "Creative Personality",
      "category": "Creativity & Innovation",
      "description": "Measures personality traits associated with creativity including flexibility, imaginativeness, and originality. Assesses creative potential and creative orientation.",
      "authors": "Gough, H. G.",
      "year": 1979,
      "citations": [
        "Gough, H. G. (1979). A creative personality scale for the Adjective Check List. Journal of Personality and Social Psychology, 37(8), 1398-1405."
      ],
      "numberOfItems": 18,
      "estimatedMinutes": 3,
      "items": [
        {
          "id": 1,
          "text": "I am original in my thinking and behavior",
          "subscale": "Creative Personality",
          "reverse": false
        },
        {
          "id": 2,
          "text": "I am able to think of unusual solutions to problems",
          "subscale": "Creative Personality",
          "reverse": false
        },
        {
          "id": 3,
          "text": "I am drawn to artistic or creative activities",
          "subscale": "Creative Personality",
          "reverse": false
        },
        {
          "id": 4,
          "text": "I have a strong imagination",
          "subscale": "Creative Personality",
          "reverse": false
        },
        {
          "id": 5,
          "text": "I like to try new and different things",
          "subscale": "Creative Personality",
          "reverse": false
        },
        {
          "id": 6,
          "text": "I am inventive",
          "subscale": "Creative Personality",
          "reverse": false
        },
        {
          "id": 7,
          "text": "I notice things others overlook",
          "subscale": "Creative Personality",
          "reverse": false
        },
        {
          "id": 8,
          "text": "I am independent in my thinking",
          "subscale": "Creative Personality",
          "reverse": false
        },
        {
          "id": 9,
          "text": "I have unconventional ideas",
          "subscale": "Creative Personality",
          "reverse": false
        },
        {
          "id": 10,
          "text": "I am curious about many things",
          "subscale": "Creative Personality",
          "reverse": false
        },
        {
          "id": 11,
          "text": "I enjoy exploring new ideas",
          "subscale": "Creative Personality",
          "reverse": false
        },
        {
          "id": 12,
          "text": "I am good at coming up with new ideas",
          "subscale": "Creative Personality",
          "reverse": false
        },
        {
          "id": 13,
          "text": "I like to experiment with new approaches",
          "subscale": "Creative Personality",
          "reverse": false
        },
        {
          "id": 14,
          "text": "I am flexible in my thinking",
          "subscale": "Creative Personality",
          "reverse": false
        },
        {
          "id": 15,
          "text": "I appreciate art and creative expression",
          "subscale": "Creative Personality",
          "reverse": false
        },
        {
          "id": 16,
          "text": "I am philosophical in my outlook",
          "subscale": "Creative Personality",
          "reverse": false
        },
        {
          "id": 17,
          "text": "I think in unique ways",
          "subscale": "Creative Personality",
          "reverse": false
        },
        {
          "id": 18,
          "text": "I have diverse interests and talents",
          "subscale": "Creative Personality",
          "reverse": false
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 5,
        "labels": {
          "1": "Strongly disagree",
          "2": "Disagree",
          "3": "Neutral",
          "4": "Agree",
          "5": "Strongly agree"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {
          "Creative Personality": {
            "items": [
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10,
              11,
              12,
              13,
              14,
              15,
              16,
              17,
              18
            ],
            "description": "Overall creative personality traits"
          }
        },
        "overall": {
          "method": "mean_of_all",
          "description": "Overall creative personality score"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 2.33,
              "label": "Low",
              "description": "Low creative personality"
            },
            {
              "min": 2.33,
              "max": 3.67,
              "label": "Moderate",
              "description": "Moderate creative personality"
            },
            {
              "min": 3.67,
              "max": 5,
              "label": "High",
              "description": "High creative personality"
            }
          ]
        }
      },
      "useCases": [
        "Employee selection for creative roles",
        "Innovation potential assessment",
        "Team composition planning",
        "Career counseling"
      ],
      "relatedConstructs": [
        "Openness to Experience",
        "Divergent Thinking",
        "Artistic Orientation"
      ],
      "keywords": [
        "creative personality",
        "originality",
        "imagination",
        "unconventional thinking"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "oe-10",
      "name": "Openness to Experience (IPIP-10)",
      "shortName": "OE-10",
      "construct": "Openness to Experience",
      "category": "Creativity & Innovation",
      "description": "Measures receptiveness to new experiences, intellectual curiosity, imagination, and willingness to question authority. Key personality predictor of innovation and creativity.",
      "authors": "Goldberg, L. R.",
      "year": 1999,
      "citations": [
        "Goldberg, L. R. (1999). A broad-bandwidth, public domain, personality inventory measuring the lower-level facets of several five-factor models. In I. Mervielde, I. Deary, F. De Fruyt, & F. Ostendorf (Eds.), Personality Psychology in Europe (Vol. 7, pp. 7-28). Tilburg University Press."
      ],
      "numberOfItems": 10,
      "estimatedMinutes": 2,
      "items": [
        {
          "id": 1,
          "text": "I am full of ideas",
          "subscale": "Openness to Experience",
          "reverse": false
        },
        {
          "id": 2,
          "text": "I am not interested in abstract ideas",
          "subscale": "Openness to Experience",
          "reverse": true
        },
        {
          "id": 3,
          "text": "I have a rich vocabulary",
          "subscale": "Openness to Experience",
          "reverse": false
        },
        {
          "id": 4,
          "text": "I have difficulty understanding abstract ideas",
          "subscale": "Openness to Experience",
          "reverse": true
        },
        {
          "id": 5,
          "text": "I am quick to understand things",
          "subscale": "Openness to Experience",
          "reverse": false
        },
        {
          "id": 6,
          "text": "I use difficult words",
          "subscale": "Openness to Experience",
          "reverse": false
        },
        {
          "id": 7,
          "text": "I spend time reflecting on things",
          "subscale": "Openness to Experience",
          "reverse": false
        },
        {
          "id": 8,
          "text": "I am not interested in other people's lives",
          "subscale": "Openness to Experience",
          "reverse": true
        },
        {
          "id": 9,
          "text": "I am interested in many different things",
          "subscale": "Openness to Experience",
          "reverse": false
        },
        {
          "id": 10,
          "text": "I like to think about new ideas and possibilities",
          "subscale": "Openness to Experience",
          "reverse": false
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 5,
        "labels": {
          "1": "Strongly disagree",
          "2": "Disagree",
          "3": "Neutral",
          "4": "Agree",
          "5": "Strongly agree"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {
          "Openness to Experience": {
            "items": [
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10
            ],
            "description": "Overall openness to new experiences and ideas"
          }
        },
        "overall": {
          "method": "mean_of_all",
          "description": "Overall openness to experience score"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 2.33,
              "label": "Low",
              "description": "Low openness to experience"
            },
            {
              "min": 2.33,
              "max": 3.67,
              "label": "Moderate",
              "description": "Moderate openness to experience"
            },
            {
              "min": 3.67,
              "max": 5,
              "label": "High",
              "description": "High openness to experience"
            }
          ]
        }
      },
      "useCases": [
        "Big Five personality assessment",
        "Innovation capability assessment",
        "Team diversity analysis",
        "Leadership potential evaluation"
      ],
      "relatedConstructs": [
        "Curiosity",
        "Intellectual Engagement",
        "Creativity Potential"
      ],
      "keywords": [
        "openness to experience",
        "intellectual curiosity",
        "imagination",
        "idea generation"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "gad-7",
      "name": "Generalized Anxiety Disorder Scale-7",
      "shortName": "GAD-7",
      "construct": "Generalized Anxiety Severity",
      "category": "Wellbeing & Mental Health Screening",
      "description": "Measures severity of generalized anxiety symptoms over the past two weeks. Brief 7-item screener useful for identifying anxious employees and monitoring anxiety interventions in workplace settings.",
      "authors": "Spitzer, R. L., Kroenke, K., Williams, J. B., & Löwe, B.",
      "year": 2006,
      "citations": [
        "Spitzer, R. L., Kroenke, K., Williams, J. B., & Löwe, B. (2006). A brief measure for assessing generalized anxiety disorder: the GAD-7. Archives of Internal Medicine, 166(10), 1092-1097."
      ],
      "numberOfItems": 7,
      "estimatedMinutes": 2,
      "items": [
        {
          "id": 1,
          "text": "Feeling nervous, anxious or on edge",
          "subscale": "General Anxiety",
          "reverse": false
        },
        {
          "id": 2,
          "text": "Not being able to stop or control worrying",
          "subscale": "General Anxiety",
          "reverse": false
        },
        {
          "id": 3,
          "text": "Worrying too much about different things",
          "subscale": "General Anxiety",
          "reverse": false
        },
        {
          "id": 4,
          "text": "Trouble relaxing",
          "subscale": "Somatic Symptoms",
          "reverse": false
        },
        {
          "id": 5,
          "text": "Being so restless that it is hard to sit still",
          "subscale": "Somatic Symptoms",
          "reverse": false
        },
        {
          "id": 6,
          "text": "Becoming easily annoyed or irritable",
          "subscale": "Irritability",
          "reverse": false
        },
        {
          "id": 7,
          "text": "Feeling afraid as if something awful might happen",
          "subscale": "Fear",
          "reverse": false
        }
      ],
      "responseFormat": {
        "type": "frequency",
        "points": 4,
        "labels": {
          "0": "Not at all",
          "1": "Several days",
          "2": "More than half the days",
          "3": "Nearly every day"
        }
      },
      "scoring": {
        "method": "sum",
        "subscales": {
          "General Anxiety": {
            "items": [
              1,
              2,
              3
            ],
            "description": "Worry and anxious thoughts"
          },
          "Somatic Symptoms": {
            "items": [
              4,
              5
            ],
            "description": "Physical anxiety symptoms"
          },
          "Irritability": {
            "items": [
              6
            ],
            "description": "Irritability and frustration"
          },
          "Fear": {
            "items": [
              7
            ],
            "description": "Fear and panic"
          }
        },
        "overall": {
          "method": "sum_all",
          "description": "Total anxiety severity score"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 0,
              "max": 4,
              "label": "Minimal",
              "description": "No or minimal anxiety"
            },
            {
              "min": 5,
              "max": 9,
              "label": "Mild",
              "description": "Mild anxiety"
            },
            {
              "min": 10,
              "max": 14,
              "label": "Moderate",
              "description": "Moderate anxiety"
            },
            {
              "min": 15,
              "max": 21,
              "label": "Severe",
              "description": "Severe anxiety"
            }
          ]
        }
      },
      "useCases": [
        "Anxiety screening in occupational health",
        "Employee stress assessment",
        "Evaluation of anxiety interventions",
        "Identifying at-risk individuals"
      ],
      "relatedConstructs": [
        "Worry",
        "Stress",
        "Psychological Distress",
        "Fear"
      ],
      "keywords": [
        "anxiety",
        "generalized anxiety",
        "mental health",
        "screening"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "panas",
      "name": "Positive and Negative Affect Schedule",
      "shortName": "PANAS",
      "construct": "Positive and Negative Affective States",
      "category": "Wellbeing & Mental Health Screening",
      "description": "Measures positive and negative affect experienced over a specified time period. Captures momentary emotional states relevant to workplace mood, job satisfaction, and emotional wellbeing.",
      "authors": "Watson, D., Clark, L. A., & Tellegen, A.",
      "year": 1988,
      "citations": [
        "Watson, D., Clark, L. A., & Tellegen, A. (1988). Development and validation of brief measures of positive and negative affect: the PANAS scales. Journal of Personality and Social Psychology, 54(6), 1063-1070."
      ],
      "numberOfItems": 20,
      "estimatedMinutes": 3,
      "items": [
        {
          "id": 1,
          "text": "Interested",
          "subscale": "Positive Affect",
          "reverse": false
        },
        {
          "id": 2,
          "text": "Distressed",
          "subscale": "Negative Affect",
          "reverse": false
        },
        {
          "id": 3,
          "text": "Excited",
          "subscale": "Positive Affect",
          "reverse": false
        },
        {
          "id": 4,
          "text": "Upset",
          "subscale": "Negative Affect",
          "reverse": false
        },
        {
          "id": 5,
          "text": "Strong",
          "subscale": "Positive Affect",
          "reverse": false
        },
        {
          "id": 6,
          "text": "Guilty",
          "subscale": "Negative Affect",
          "reverse": false
        },
        {
          "id": 7,
          "text": "Scared",
          "subscale": "Negative Affect",
          "reverse": false
        },
        {
          "id": 8,
          "text": "Hostile",
          "subscale": "Negative Affect",
          "reverse": false
        },
        {
          "id": 9,
          "text": "Enthusiastic",
          "subscale": "Positive Affect",
          "reverse": false
        },
        {
          "id": 10,
          "text": "Proud",
          "subscale": "Positive Affect",
          "reverse": false
        },
        {
          "id": 11,
          "text": "Irritable",
          "subscale": "Negative Affect",
          "reverse": false
        },
        {
          "id": 12,
          "text": "Alert",
          "subscale": "Positive Affect",
          "reverse": false
        },
        {
          "id": 13,
          "text": "Ashamed",
          "subscale": "Negative Affect",
          "reverse": false
        },
        {
          "id": 14,
          "text": "Inspired",
          "subscale": "Positive Affect",
          "reverse": false
        },
        {
          "id": 15,
          "text": "Nervous",
          "subscale": "Negative Affect",
          "reverse": false
        },
        {
          "id": 16,
          "text": "Determined",
          "subscale": "Positive Affect",
          "reverse": false
        },
        {
          "id": 17,
          "text": "Attentive",
          "subscale": "Positive Affect",
          "reverse": false
        },
        {
          "id": 18,
          "text": "Jittery",
          "subscale": "Negative Affect",
          "reverse": false
        },
        {
          "id": 19,
          "text": "Active",
          "subscale": "Positive Affect",
          "reverse": false
        },
        {
          "id": 20,
          "text": "Afraid",
          "subscale": "Negative Affect",
          "reverse": false
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 5,
        "labels": {
          "1": "Very slightly or not at all",
          "2": "A little",
          "3": "Moderately",
          "4": "Quite a bit",
          "5": "Extremely"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {
          "Positive Affect": {
            "items": [
              1,
              3,
              5,
              9,
              10,
              12,
              14,
              16,
              17,
              19
            ],
            "description": "Experience of positive emotions and engagement"
          },
          "Negative Affect": {
            "items": [
              2,
              4,
              6,
              7,
              8,
              11,
              13,
              15,
              18,
              20
            ],
            "description": "Experience of negative emotions and distress"
          }
        },
        "overall": {
          "method": "separate_subscales",
          "description": "Two independent scores for positive and negative affect"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 2,
              "label": "Low",
              "description": "Low level of affect"
            },
            {
              "min": 2,
              "max": 3.5,
              "label": "Moderate",
              "description": "Moderate level of affect"
            },
            {
              "min": 3.5,
              "max": 5,
              "label": "High",
              "description": "High level of affect"
            }
          ]
        }
      },
      "useCases": [
        "Monitoring employee emotional states",
        "Evaluating impact of workplace interventions on mood",
        "Daily or weekly affect tracking",
        "Research on job satisfaction and wellbeing"
      ],
      "relatedConstructs": [
        "Mood",
        "Emotional Experience",
        "Job Satisfaction",
        "Wellbeing"
      ],
      "keywords": [
        "affect",
        "emotion",
        "positive mood",
        "negative mood",
        "emotional state"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "shs",
      "name": "Subjective Happiness Scale",
      "shortName": "SHS",
      "construct": "Overall Life Happiness",
      "category": "Wellbeing & Mental Health Screening",
      "description": "Brief 4-item measure of global subjective happiness and life satisfaction. Captures overall happiness independent of specific life domains, useful for monitoring employee wellbeing.",
      "authors": "Lyubomirsky, S., & Lepper, H. S.",
      "year": 1999,
      "citations": [
        "Lyubomirsky, S., & Lepper, H. S. (1999). A measure of subjective happiness: Preliminary reliability and construct validation. Social Indicators Research, 46(2), 137-155."
      ],
      "numberOfItems": 4,
      "estimatedMinutes": 1,
      "items": [
        {
          "id": 1,
          "text": "In general, I consider myself:",
          "subscale": "Direct Assessment",
          "reverse": false
        },
        {
          "id": 2,
          "text": "Compared to most of my peers, I consider myself:",
          "subscale": "Comparative Assessment",
          "reverse": false
        },
        {
          "id": 3,
          "text": "Some people are generally very happy. They enjoy life regardless of what is going on, getting the most from everything. To what extent does this characterization describe you?",
          "subscale": "Characterization",
          "reverse": false
        },
        {
          "id": 4,
          "text": "Some people are generally not very happy. Although they are not depressed, they never seem as happy as they might be. To what extent does this characterization describe you?",
          "subscale": "Reverse Characterization",
          "reverse": true
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 7,
        "labels": {
          "1": "Not a very happy person / Much less happy than most",
          "2": "2",
          "3": "3",
          "4": "Moderately happy / About as happy as most",
          "5": "5",
          "6": "6",
          "7": "A very happy person / Much happier than most"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {},
        "overall": {
          "method": "mean_all",
          "description": "Overall subjective happiness score"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 3,
              "label": "Low Happiness",
              "description": "Lower levels of subjective happiness"
            },
            {
              "min": 3,
              "max": 5,
              "label": "Moderate Happiness",
              "description": "Moderate levels of subjective happiness"
            },
            {
              "min": 5,
              "max": 7,
              "label": "High Happiness",
              "description": "High levels of subjective happiness"
            }
          ]
        }
      },
      "useCases": [
        "Quick assessment of employee life satisfaction",
        "Monitoring overall workplace wellbeing",
        "Evaluating organizational culture impact on happiness",
        "Longitudinal wellbeing tracking"
      ],
      "relatedConstructs": [
        "Life Satisfaction",
        "Subjective Wellbeing",
        "Quality of Life"
      ],
      "keywords": [
        "happiness",
        "subjective wellbeing",
        "life satisfaction",
        "contentment"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "wemwbs",
      "name": "Warwick-Edinburgh Mental Wellbeing Scale",
      "shortName": "WEMWBS-14",
      "construct": "Mental Wellbeing and Psychological Functioning",
      "category": "Wellbeing & Mental Health Screening",
      "description": "Comprehensive 14-item measure of mental wellbeing including positive affect, satisfying relationships, and psychological functioning. Focuses on wellbeing rather than illness, making it ideal for occupational health and positive organizational culture assessment.",
      "authors": "Tennant, R., Hiller, L., Fishwick, R., Platt, S., Joseph, S., Weich, S., ... & Stewart-Brown, S.",
      "year": 2007,
      "citations": [
        "Tennant, R., Hiller, L., Fishwick, R., Platt, S., Joseph, S., Weich, S., ... & Stewart-Brown, S. (2007). The Warwick-Edinburgh Mental Well-being Scale (WEMWBS): Development and UK validation. Health and Quality of Life Outcomes, 5(1), 63."
      ],
      "numberOfItems": 14,
      "estimatedMinutes": 3,
      "items": [
        {
          "id": 1,
          "text": "I've been feeling optimistic about the future",
          "subscale": "Positive Affect",
          "reverse": false
        },
        {
          "id": 2,
          "text": "I've been feeling useful",
          "subscale": "Functioning",
          "reverse": false
        },
        {
          "id": 3,
          "text": "I've been feeling relaxed",
          "subscale": "Positive Affect",
          "reverse": false
        },
        {
          "id": 4,
          "text": "I've been dealing with problems well",
          "subscale": "Coping",
          "reverse": false
        },
        {
          "id": 5,
          "text": "I've been thinking clearly",
          "subscale": "Functioning",
          "reverse": false
        },
        {
          "id": 6,
          "text": "I've been feeling good about myself",
          "subscale": "Self-Perception",
          "reverse": false
        },
        {
          "id": 7,
          "text": "I've been feeling close to other people",
          "subscale": "Relationships",
          "reverse": false
        },
        {
          "id": 8,
          "text": "I've been able to make up my own mind about things",
          "subscale": "Autonomy",
          "reverse": false
        },
        {
          "id": 9,
          "text": "I've been feeling interested in new things",
          "subscale": "Positive Affect",
          "reverse": false
        },
        {
          "id": 10,
          "text": "I've had energy to spare",
          "subscale": "Energy",
          "reverse": false
        },
        {
          "id": 11,
          "text": "I've been feeling loved",
          "subscale": "Relationships",
          "reverse": false
        },
        {
          "id": 12,
          "text": "I've been interested in other people",
          "subscale": "Relationships",
          "reverse": false
        },
        {
          "id": 13,
          "text": "I've been having good experiences",
          "subscale": "Positive Affect",
          "reverse": false
        },
        {
          "id": 14,
          "text": "I've been feeling cheerful",
          "subscale": "Positive Affect",
          "reverse": false
        }
      ],
      "responseFormat": {
        "type": "frequency",
        "points": 5,
        "labels": {
          "1": "None of the time",
          "2": "Rarely",
          "3": "Some of the time",
          "4": "Often",
          "5": "All of the time"
        }
      },
      "scoring": {
        "method": "sum",
        "subscales": {
          "Positive Affect": {
            "items": [
              1,
              3,
              9,
              13,
              14
            ],
            "description": "Positive emotions and outlook"
          },
          "Functioning": {
            "items": [
              2,
              5
            ],
            "description": "Cognitive and practical functioning"
          },
          "Relationships": {
            "items": [
              7,
              11,
              12
            ],
            "description": "Social connections and closeness"
          },
          "Autonomy": {
            "items": [
              8
            ],
            "description": "Independence and decision-making"
          },
          "Coping": {
            "items": [
              4
            ],
            "description": "Ability to handle challenges"
          },
          "Energy": {
            "items": [
              10
            ],
            "description": "Vitality and motivation"
          }
        },
        "overall": {
          "method": "sum_all",
          "description": "Total mental wellbeing score"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 14,
              "max": 42,
              "label": "Low Wellbeing",
              "description": "Low mental wellbeing"
            },
            {
              "min": 42,
              "max": 56,
              "label": "Moderate Wellbeing",
              "description": "Moderate mental wellbeing"
            },
            {
              "min": 56,
              "max": 70,
              "label": "High Wellbeing",
              "description": "High mental wellbeing"
            }
          ]
        }
      },
      "useCases": [
        "Workplace mental health surveillance",
        "Assessment of organizational wellbeing programs",
        "Employee engagement and culture measurement",
        "Population health monitoring"
      ],
      "relatedConstructs": [
        "Mental Health",
        "Life Satisfaction",
        "Psychological Functioning",
        "Quality of Life"
      ],
      "keywords": [
        "mental wellbeing",
        "positive psychology",
        "functioning",
        "health"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "maas",
      "name": "Mindful Attention Awareness Scale",
      "shortName": "MAAS",
      "construct": "Trait Mindfulness and Present-Moment Awareness",
      "category": "Mindfulness & Self-Regulation",
      "description": "15-item measure of trait mindfulness, specifically the tendency to maintain present-moment attention. Assesses dispositional mindfulness relevant to workplace focus, stress reduction, and attention management.",
      "authors": "Brown, K. W., & Ryan, R. M.",
      "year": 2003,
      "citations": [
        "Brown, K. W., & Ryan, R. M. (2003). The benefits of being present: Mindfulness and its role in psychological well-being. Journal of Personality and Social Psychology, 84(4), 822-848."
      ],
      "numberOfItems": 15,
      "estimatedMinutes": 3,
      "items": [
        {
          "id": 1,
          "text": "I find it difficult to stay focused on what's happening in the present",
          "subscale": "Attention Lapses",
          "reverse": true
        },
        {
          "id": 2,
          "text": "I am doing something, and I suddenly realize I've been doing it on 'automatic pilot' without really being aware of it",
          "subscale": "Automatic Responding",
          "reverse": true
        },
        {
          "id": 3,
          "text": "I rush through activities without being really attentive to them",
          "subscale": "Automatic Responding",
          "reverse": true
        },
        {
          "id": 4,
          "text": "I get so focused on the goal I want to achieve that I lose touch with what I'm doing right now to get there",
          "subscale": "Goal-Focused Inattention",
          "reverse": true
        },
        {
          "id": 5,
          "text": "I do jobs or tasks automatically, without being aware of what I'm doing",
          "subscale": "Automatic Responding",
          "reverse": true
        },
        {
          "id": 6,
          "text": "I snack without being aware that I'm eating",
          "subscale": "Automatic Responding",
          "reverse": true
        },
        {
          "id": 7,
          "text": "I drive on automatic pilot and then wonder where I went",
          "subscale": "Automatic Responding",
          "reverse": true
        },
        {
          "id": 8,
          "text": "I find myself preoccupied with the future or the past",
          "subscale": "Mind-Wandering",
          "reverse": true
        },
        {
          "id": 9,
          "text": "I find it difficult to stay present in situations where I'm anxious or uncomfortable",
          "subscale": "Attention Lapses",
          "reverse": true
        },
        {
          "id": 10,
          "text": "I am aware of what's happening around me, even when I'm focused on something else",
          "subscale": "Present Awareness",
          "reverse": false
        },
        {
          "id": 11,
          "text": "I pay close attention to the sensations, such as the wind in my hair or sun on my face",
          "subscale": "Sensory Awareness",
          "reverse": false
        },
        {
          "id": 12,
          "text": "I deliberately stay aware of my feelings without getting caught up in them",
          "subscale": "Emotional Awareness",
          "reverse": false
        },
        {
          "id": 13,
          "text": "I can describe my internal experience in detail",
          "subscale": "Self-Awareness",
          "reverse": false
        },
        {
          "id": 14,
          "text": "I notice how foods and drinks affect my thoughts, bodily sensations, and emotions",
          "subscale": "Sensory Awareness",
          "reverse": false
        },
        {
          "id": 15,
          "text": "I pay attention to sensations, such as how my clothes feel on my skin or the feeling of my feet touching the ground",
          "subscale": "Sensory Awareness",
          "reverse": false
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 6,
        "labels": {
          "1": "Almost always",
          "2": "Very frequently",
          "3": "Somewhat frequently",
          "4": "Somewhat infrequently",
          "5": "Very infrequently",
          "6": "Almost never"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {
          "Attention Lapses": {
            "items": [
              1,
              9
            ],
            "description": "Difficulty maintaining focus"
          },
          "Automatic Responding": {
            "items": [
              2,
              3,
              5,
              6,
              7
            ],
            "description": "Operating on autopilot"
          },
          "Goal-Focused Inattention": {
            "items": [
              4
            ],
            "description": "Future-oriented at expense of present"
          },
          "Mind-Wandering": {
            "items": [
              8
            ],
            "description": "Preoccupation with past or future"
          },
          "Present Awareness": {
            "items": [
              10
            ],
            "description": "Awareness of present environment"
          },
          "Sensory Awareness": {
            "items": [
              11,
              14,
              15
            ],
            "description": "Attention to bodily sensations"
          },
          "Emotional Awareness": {
            "items": [
              12
            ],
            "description": "Awareness of emotions without reactivity"
          },
          "Self-Awareness": {
            "items": [
              13
            ],
            "description": "Understanding internal experiences"
          }
        },
        "overall": {
          "method": "mean_all",
          "description": "Overall mindfulness and present-moment awareness"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 2.5,
              "label": "Low Mindfulness",
              "description": "Lower present-moment awareness and attention"
            },
            {
              "min": 2.5,
              "max": 4.5,
              "label": "Moderate Mindfulness",
              "description": "Moderate present-moment awareness"
            },
            {
              "min": 4.5,
              "max": 6,
              "label": "High Mindfulness",
              "description": "High present-moment awareness and attention"
            }
          ]
        }
      },
      "useCases": [
        "Evaluating mindfulness training effectiveness",
        "Assessing baseline attention and awareness",
        "Research on focus and present-moment engagement",
        "Monitoring impact of stress reduction programs"
      ],
      "relatedConstructs": [
        "Attention",
        "Present-Moment Awareness",
        "Mindfulness",
        "Self-Awareness"
      ],
      "keywords": [
        "mindfulness",
        "attention",
        "awareness",
        "focus",
        "present moment"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "erq",
      "name": "Emotion Regulation Questionnaire",
      "shortName": "ERQ",
      "construct": "Emotion Regulation Strategies",
      "category": "Mindfulness & Self-Regulation",
      "description": "10-item measure of two emotion regulation strategies: cognitive reappraisal and expressive suppression. Assesses habitual ways employees manage their emotions at work and emotional well-being.",
      "authors": "Gross, J. J., & John, O. P.",
      "year": 2003,
      "citations": [
        "Gross, J. J., & John, O. P. (2003). Individual differences in two emotion regulation processes: Implications for affect, relationships, and well-being. Journal of Personality and Social Psychology, 85(2), 348-362."
      ],
      "numberOfItems": 10,
      "estimatedMinutes": 2,
      "items": [
        {
          "id": 1,
          "text": "When I want to feel more positive emotion (such as joy or amusement), I change the way I'm thinking about the situation",
          "subscale": "Cognitive Reappraisal",
          "reverse": false
        },
        {
          "id": 2,
          "text": "I keep my emotions to myself",
          "subscale": "Expressive Suppression",
          "reverse": false
        },
        {
          "id": 3,
          "text": "When I want to feel less negative emotion (such as sadness or anger), I change the way I'm thinking about the situation",
          "subscale": "Cognitive Reappraisal",
          "reverse": false
        },
        {
          "id": 4,
          "text": "When I am feeling positive emotions, I am careful not to express them",
          "subscale": "Expressive Suppression",
          "reverse": false
        },
        {
          "id": 5,
          "text": "When faced with a stressful situation, I make myself think about it in a way that helps me stay calm",
          "subscale": "Cognitive Reappraisal",
          "reverse": false
        },
        {
          "id": 6,
          "text": "I control my emotions by not expressing them",
          "subscale": "Expressive Suppression",
          "reverse": false
        },
        {
          "id": 7,
          "text": "When I want to feel more positive emotion, I change the way I'm thinking about the situation",
          "subscale": "Cognitive Reappraisal",
          "reverse": false
        },
        {
          "id": 8,
          "text": "When I am feeling negative emotions, I make sure not to express them",
          "subscale": "Expressive Suppression",
          "reverse": false
        },
        {
          "id": 9,
          "text": "When I want to feel less negative emotion, I change the way I'm thinking about the situation",
          "subscale": "Cognitive Reappraisal",
          "reverse": false
        },
        {
          "id": 10,
          "text": "When I am feeling positive emotions, I am careful not to express them",
          "subscale": "Expressive Suppression",
          "reverse": false
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 7,
        "labels": {
          "1": "Strongly disagree",
          "2": "Disagree",
          "3": "Slightly disagree",
          "4": "Neutral",
          "5": "Slightly agree",
          "6": "Agree",
          "7": "Strongly agree"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {
          "Cognitive Reappraisal": {
            "items": [
              1,
              3,
              5,
              7,
              9
            ],
            "description": "Changing one's thinking to regulate emotions"
          },
          "Expressive Suppression": {
            "items": [
              2,
              4,
              6,
              8,
              10
            ],
            "description": "Inhibiting emotional expression"
          }
        },
        "overall": {
          "method": "separate_subscales",
          "description": "Two independent strategies for emotion regulation"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 3,
              "label": "Low Use",
              "description": "Infrequent use of this strategy"
            },
            {
              "min": 3,
              "max": 5,
              "label": "Moderate Use",
              "description": "Moderate use of this strategy"
            },
            {
              "min": 5,
              "max": 7,
              "label": "High Use",
              "description": "Frequent use of this strategy"
            }
          ]
        }
      },
      "useCases": [
        "Assessing emotion management in workplace settings",
        "Evaluating emotional intelligence training",
        "Research on stress and coping",
        "Understanding emotional expression norms"
      ],
      "relatedConstructs": [
        "Emotion Management",
        "Coping",
        "Emotional Intelligence",
        "Psychological Adjustment"
      ],
      "keywords": [
        "emotion regulation",
        "reappraisal",
        "suppression",
        "coping",
        "emotional control"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "scs-sf",
      "name": "Self-Compassion Scale - Short Form",
      "shortName": "SCS-SF",
      "construct": "Self-Compassion",
      "category": "Mindfulness & Self-Regulation",
      "description": "12-item short version measuring self-compassion across three dimensions: self-kindness, common humanity, and mindfulness. Relevant to workplace resilience, self-care attitudes, and recovery from setbacks.",
      "authors": "Raes, F., Pommier, E., Neff, K. D., & Van Gucht, D.",
      "year": 2011,
      "citations": [
        "Raes, F., Pommier, E., Neff, K. D., & Van Gucht, D. (2011). Construction and factorial validation of a short form of the Self-Compassion Scale. Clinical Psychology & Psychotherapy, 18(3), 250-255."
      ],
      "numberOfItems": 12,
      "estimatedMinutes": 2,
      "items": [
        {
          "id": 1,
          "text": "I try to be kind to myself when I'm experiencing suffering",
          "subscale": "Self-Kindness",
          "reverse": false
        },
        {
          "id": 2,
          "text": "When I fail at something important to me I become consumed by feelings of inadequacy",
          "subscale": "Self-Kindness",
          "reverse": true
        },
        {
          "id": 3,
          "text": "When something painful happens I try to take a balanced view of the situation",
          "subscale": "Mindfulness",
          "reverse": false
        },
        {
          "id": 4,
          "text": "When I'm down and out, I remind myself that there are lots of other people in the world feeling like I am",
          "subscale": "Common Humanity",
          "reverse": false
        },
        {
          "id": 5,
          "text": "I try to see my failings as part of the human condition",
          "subscale": "Common Humanity",
          "reverse": false
        },
        {
          "id": 6,
          "text": "When I'm going through a very hard time, I give myself the caring and tenderness I need",
          "subscale": "Self-Kindness",
          "reverse": false
        },
        {
          "id": 7,
          "text": "When something upsets me I try to keep my emotions in balance",
          "subscale": "Mindfulness",
          "reverse": false
        },
        {
          "id": 8,
          "text": "When I suffer I tend to obsess and fixate on everything that's wrong",
          "subscale": "Mindfulness",
          "reverse": true
        },
        {
          "id": 9,
          "text": "When I fail I try to blame, criticize, and judge myself less, and just try to be supportive to myself",
          "subscale": "Self-Kindness",
          "reverse": false
        },
        {
          "id": 10,
          "text": "When I'm faced with struggles, I remember that difficulty is a part of life that everyone goes through",
          "subscale": "Common Humanity",
          "reverse": false
        },
        {
          "id": 11,
          "text": "During times of stress, I'm mean to myself because I feel like I deserve it",
          "subscale": "Self-Kindness",
          "reverse": true
        },
        {
          "id": 12,
          "text": "I can be a bit uncaring and unsympathetic to my own failings and inadequacies",
          "subscale": "Self-Kindness",
          "reverse": true
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 5,
        "labels": {
          "1": "Almost never",
          "2": "Rarely",
          "3": "Sometimes",
          "4": "Often",
          "5": "Almost always"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {
          "Self-Kindness": {
            "items": [
              1,
              2,
              6,
              9,
              11,
              12
            ],
            "description": "Treating oneself kindly rather than critically"
          },
          "Common Humanity": {
            "items": [
              4,
              5,
              10
            ],
            "description": "Recognizing struggles as part of shared human experience"
          },
          "Mindfulness": {
            "items": [
              3,
              7,
              8
            ],
            "description": "Balanced perspective toward painful thoughts and emotions"
          }
        },
        "overall": {
          "method": "mean_of_all",
          "description": "Overall self-compassion score"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 2.5,
              "label": "Low Self-Compassion",
              "description": "Low self-compassion and self-kindness"
            },
            {
              "min": 2.5,
              "max": 3.5,
              "label": "Moderate Self-Compassion",
              "description": "Moderate levels of self-compassion"
            },
            {
              "min": 3.5,
              "max": 5,
              "label": "High Self-Compassion",
              "description": "High self-compassion and self-kindness"
            }
          ]
        }
      },
      "useCases": [
        "Assessment in resilience and stress management programs",
        "Research on self-care and wellbeing",
        "Evaluating impact of mindfulness interventions",
        "Workplace mental health screening"
      ],
      "relatedConstructs": [
        "Self-Esteem",
        "Resilience",
        "Mindfulness",
        "Psychological Wellbeing"
      ],
      "keywords": [
        "self-compassion",
        "self-kindness",
        "mindfulness",
        "self-care",
        "resilience"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "wfc",
      "name": "Work-Family Conflict Scale",
      "shortName": "WFC",
      "construct": "Work-Family and Family-Work Conflict",
      "category": "Work-Life & Recovery",
      "description": "Measures bidirectional conflict between work and family roles. Assesses how work interferes with family life (WFC) and how family interferes with work (FWC), critical for understanding work-life balance and employee wellbeing.",
      "authors": "Netemeyer, R. G., Boles, J. S., & McMurrian, R.",
      "year": 1996,
      "citations": [
        "Netemeyer, R. G., Boles, J. S., & McMurrian, R. (1996). Development and validation of work-family conflict and family-work conflict scales. Journal of Applied Psychology, 81(4), 400-410."
      ],
      "numberOfItems": 18,
      "estimatedMinutes": 3,
      "items": [
        {
          "id": 1,
          "text": "The demands of my work interfere with my home and family life",
          "subscale": "Work-to-Family Conflict",
          "reverse": false
        },
        {
          "id": 2,
          "text": "The amount of time my job takes up makes it difficult to fulfill family responsibilities",
          "subscale": "Work-to-Family Conflict",
          "reverse": false
        },
        {
          "id": 3,
          "text": "Things I want to do at home do not get done because of the demands my job puts on me",
          "subscale": "Work-to-Family Conflict",
          "reverse": false
        },
        {
          "id": 4,
          "text": "My job produces strain that makes it difficult to fulfill family duties",
          "subscale": "Work-to-Family Conflict",
          "reverse": false
        },
        {
          "id": 5,
          "text": "Due to work-related duties, I have to make changes to my plans for family activities",
          "subscale": "Work-to-Family Conflict",
          "reverse": false
        },
        {
          "id": 6,
          "text": "The demands of my family or spouse/partner interfere with work-related activities",
          "subscale": "Family-to-Work Conflict",
          "reverse": false
        },
        {
          "id": 7,
          "text": "I have to put off doing things at work because of demands on my time by my family or spouse/partner",
          "subscale": "Family-to-Work Conflict",
          "reverse": false
        },
        {
          "id": 8,
          "text": "Things I want to do at work do not get done because of the demands of my family or spouse/partner",
          "subscale": "Family-to-Work Conflict",
          "reverse": false
        },
        {
          "id": 9,
          "text": "My family or spouse/partner interferes with my ability to perform job-related duties",
          "subscale": "Family-to-Work Conflict",
          "reverse": false
        },
        {
          "id": 10,
          "text": "Because my family or spouse/partner complains about how much time I spend on job responsibilities, I end up spending less time on job duties",
          "subscale": "Family-to-Work Conflict",
          "reverse": false
        },
        {
          "id": 11,
          "text": "I miss family activities due to the amount of time I spend on work responsibilities",
          "subscale": "Work-to-Family Conflict",
          "reverse": false
        },
        {
          "id": 12,
          "text": "I don't have enough time to do the things I need to do in my personal and family life because of my work commitments",
          "subscale": "Work-to-Family Conflict",
          "reverse": false
        },
        {
          "id": 13,
          "text": "My work takes up time that I'd like to spend with family",
          "subscale": "Work-to-Family Conflict",
          "reverse": false
        },
        {
          "id": 14,
          "text": "My job interferes with my ability to spend quality time with my family",
          "subscale": "Work-to-Family Conflict",
          "reverse": false
        },
        {
          "id": 15,
          "text": "When I come home from work I'm too frustrated to concentrate on normal family activities",
          "subscale": "Work-to-Family Conflict",
          "reverse": false
        },
        {
          "id": 16,
          "text": "My job makes me irritable, which hurts my relationship with my family",
          "subscale": "Work-to-Family Conflict",
          "reverse": false
        },
        {
          "id": 17,
          "text": "Stress from my family interferes with my ability to do my job well",
          "subscale": "Family-to-Work Conflict",
          "reverse": false
        },
        {
          "id": 18,
          "text": "My personal life prevents me from taking on additional responsibilities at work",
          "subscale": "Family-to-Work Conflict",
          "reverse": false
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 5,
        "labels": {
          "1": "Strongly disagree",
          "2": "Disagree",
          "3": "Neutral",
          "4": "Agree",
          "5": "Strongly agree"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {
          "Work-to-Family Conflict": {
            "items": [
              1,
              2,
              3,
              4,
              5,
              11,
              12,
              13,
              14,
              15,
              16
            ],
            "description": "Work interfering with family responsibilities and wellbeing"
          },
          "Family-to-Work Conflict": {
            "items": [
              6,
              7,
              8,
              9,
              10,
              17,
              18
            ],
            "description": "Family interfering with work performance and responsibilities"
          }
        },
        "overall": {
          "method": "mean_of_all",
          "description": "Overall bidirectional work-family conflict"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 2.5,
              "label": "Low Conflict",
              "description": "Low work-family conflict"
            },
            {
              "min": 2.5,
              "max": 3.5,
              "label": "Moderate Conflict",
              "description": "Moderate work-family conflict"
            },
            {
              "min": 3.5,
              "max": 5,
              "label": "High Conflict",
              "description": "High work-family conflict"
            }
          ]
        }
      },
      "useCases": [
        "Assessment of work-life balance policies",
        "Employee wellness program evaluation",
        "Research on organizational culture and family-friendliness",
        "Identifying support needs for working parents"
      ],
      "relatedConstructs": [
        "Work-Life Balance",
        "Role Conflict",
        "Stress",
        "Family Satisfaction"
      ],
      "keywords": [
        "work-family conflict",
        "work-life balance",
        "role conflict",
        "family interference"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "req",
      "name": "Recovery Experience Questionnaire",
      "shortName": "REQ",
      "construct": "Quality of Recovery and Psychological Detachment",
      "category": "Work-Life & Recovery",
      "description": "Measures employees' recovery experiences during non-work time across four dimensions: psychological detachment, relaxation, mastery, and control. Essential for understanding work-life balance and preventing burnout.",
      "authors": "Sonnentag, S., & Fritz, C.",
      "year": 2007,
      "citations": [
        "Sonnentag, S., & Fritz, C. (2007). The Recovery Experience Questionnaire: Development and validation of a measure for assessing recuperation and unwinding from work. Journal of Occupational Health Psychology, 12(3), 204-221."
      ],
      "numberOfItems": 16,
      "estimatedMinutes": 3,
      "items": [
        {
          "id": 1,
          "text": "I forget about work",
          "subscale": "Psychological Detachment",
          "reverse": false
        },
        {
          "id": 2,
          "text": "I distance myself from my work",
          "subscale": "Psychological Detachment",
          "reverse": false
        },
        {
          "id": 3,
          "text": "I leave my work behind",
          "subscale": "Psychological Detachment",
          "reverse": false
        },
        {
          "id": 4,
          "text": "I don't think about work at all",
          "subscale": "Psychological Detachment",
          "reverse": false
        },
        {
          "id": 5,
          "text": "I relax",
          "subscale": "Relaxation",
          "reverse": false
        },
        {
          "id": 6,
          "text": "I do things that help me relax",
          "subscale": "Relaxation",
          "reverse": false
        },
        {
          "id": 7,
          "text": "I take time for leisure activities",
          "subscale": "Relaxation",
          "reverse": false
        },
        {
          "id": 8,
          "text": "I engage in activities that are mentally refreshing for me",
          "subscale": "Relaxation",
          "reverse": false
        },
        {
          "id": 9,
          "text": "I do things that challenge me",
          "subscale": "Mastery",
          "reverse": false
        },
        {
          "id": 10,
          "text": "I do something to broaden my horizons",
          "subscale": "Mastery",
          "reverse": false
        },
        {
          "id": 11,
          "text": "I do things that are mentally challenging",
          "subscale": "Mastery",
          "reverse": false
        },
        {
          "id": 12,
          "text": "I do things that are good for my personal development",
          "subscale": "Mastery",
          "reverse": false
        },
        {
          "id": 13,
          "text": "I feel like I can decide freely what to do",
          "subscale": "Control",
          "reverse": false
        },
        {
          "id": 14,
          "text": "I determine for myself how my time is spent",
          "subscale": "Control",
          "reverse": false
        },
        {
          "id": 15,
          "text": "I feel free to do what I want",
          "subscale": "Control",
          "reverse": false
        },
        {
          "id": 16,
          "text": "I have a say in the decisions that affect my leisure time",
          "subscale": "Control",
          "reverse": false
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 5,
        "labels": {
          "1": "Strongly disagree",
          "2": "Disagree",
          "3": "Neutral",
          "4": "Agree",
          "5": "Strongly agree"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {
          "Psychological Detachment": {
            "items": [
              1,
              2,
              3,
              4
            ],
            "description": "Ability to mentally separate from work concerns"
          },
          "Relaxation": {
            "items": [
              5,
              6,
              7,
              8
            ],
            "description": "Engagement in relaxing and rejuvenating activities"
          },
          "Mastery": {
            "items": [
              9,
              10,
              11,
              12
            ],
            "description": "Engagement in challenging and developmental activities"
          },
          "Control": {
            "items": [
              13,
              14,
              15,
              16
            ],
            "description": "Autonomy and choice in leisure activities"
          }
        },
        "overall": {
          "method": "mean_of_all",
          "description": "Overall quality of recovery experience"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 2.5,
              "label": "Poor Recovery",
              "description": "Limited recovery and detachment from work"
            },
            {
              "min": 2.5,
              "max": 3.5,
              "label": "Moderate Recovery",
              "description": "Moderate recovery experiences"
            },
            {
              "min": 3.5,
              "max": 5,
              "label": "Good Recovery",
              "description": "Good recovery and effective detachment"
            }
          ]
        }
      },
      "useCases": [
        "Assessment of work-life balance and recovery",
        "Evaluation of flexible work arrangements",
        "Research on burnout prevention",
        "Monitoring employee wellbeing and stress levels"
      ],
      "relatedConstructs": [
        "Work-Life Balance",
        "Burnout",
        "Stress Recovery",
        "Psychological Wellbeing"
      ],
      "keywords": [
        "recovery",
        "detachment",
        "relaxation",
        "mastery",
        "leisure",
        "wellbeing"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "brief-cope",
      "name": "Brief COPE",
      "shortName": "Brief COPE",
      "construct": "Coping Strategies and Problem-Solving",
      "category": "Coping & Self-Care",
      "description": "28-item measure assessing 14 different coping strategies across problem-focused, emotion-focused, and dysfunctional categories. Helps identify how employees manage stress and challenges in workplace and life situations.",
      "authors": "Carver, C. S.",
      "year": 1997,
      "citations": [
        "Carver, C. S. (1997). You want to measure coping but your protocol's too long: Consider the Brief COPE. International Journal of Behavioral Medicine, 4(1), 92-100."
      ],
      "numberOfItems": 28,
      "estimatedMinutes": 4,
      "items": [
        {
          "id": 1,
          "text": "I've been turning to work or other activities to take my mind off things",
          "subscale": "Self-Distraction",
          "reverse": false
        },
        {
          "id": 2,
          "text": "I've been concentrating my efforts on doing something about the situation I'm in",
          "subscale": "Active Coping",
          "reverse": false
        },
        {
          "id": 3,
          "text": "I've been saying to myself 'this isn't real'",
          "subscale": "Denial",
          "reverse": false
        },
        {
          "id": 4,
          "text": "I've been using substance to make myself feel better",
          "subscale": "Substance Use",
          "reverse": false
        },
        {
          "id": 5,
          "text": "I've been getting emotional support from others",
          "subscale": "Use of Emotional Support",
          "reverse": false
        },
        {
          "id": 6,
          "text": "I've been giving up the attempt to cope",
          "subscale": "Behavioral Disengagement",
          "reverse": false
        },
        {
          "id": 7,
          "text": "I've been taking action to try to make the situation better",
          "subscale": "Active Coping",
          "reverse": false
        },
        {
          "id": 8,
          "text": "I've been refusing to believe that it has happened",
          "subscale": "Denial",
          "reverse": false
        },
        {
          "id": 9,
          "text": "I've been saying things to let my unpleasant feelings escape",
          "subscale": "Venting",
          "reverse": false
        },
        {
          "id": 10,
          "text": "I've been getting help and advice from other people",
          "subscale": "Use of Instrumental Support",
          "reverse": false
        },
        {
          "id": 11,
          "text": "I've been using a substance to help me get through it",
          "subscale": "Substance Use",
          "reverse": false
        },
        {
          "id": 12,
          "text": "I've been trying to see it in a different light to make it seem more positive",
          "subscale": "Positive Reframing",
          "reverse": false
        },
        {
          "id": 13,
          "text": "I've been criticizing myself",
          "subscale": "Self-Blame",
          "reverse": false
        },
        {
          "id": 14,
          "text": "I've been trying to come up with a strategy about what to do",
          "subscale": "Planning",
          "reverse": false
        },
        {
          "id": 15,
          "text": "I've been getting comfort and understanding from someone",
          "subscale": "Use of Emotional Support",
          "reverse": false
        },
        {
          "id": 16,
          "text": "I've been giving up on trying to deal with it",
          "subscale": "Behavioral Disengagement",
          "reverse": false
        },
        {
          "id": 17,
          "text": "I've been looking for something good in what is happening",
          "subscale": "Positive Reframing",
          "reverse": false
        },
        {
          "id": 18,
          "text": "I've been making jokes about it",
          "subscale": "Humor",
          "reverse": false
        },
        {
          "id": 19,
          "text": "I've been doing something to think about it less, such as going to movies, shopping, exercising",
          "subscale": "Self-Distraction",
          "reverse": false
        },
        {
          "id": 20,
          "text": "I've been accepting the reality of the fact that it happened",
          "subscale": "Acceptance",
          "reverse": false
        },
        {
          "id": 21,
          "text": "I've been expressing my negative feelings",
          "subscale": "Venting",
          "reverse": false
        },
        {
          "id": 22,
          "text": "I've been trying to find comfort in my religion or spiritual beliefs",
          "subscale": "Religion",
          "reverse": false
        },
        {
          "id": 23,
          "text": "I've been trying to get advice or help from other people about what to do",
          "subscale": "Use of Instrumental Support",
          "reverse": false
        },
        {
          "id": 24,
          "text": "I've been learning to live with it",
          "subscale": "Acceptance",
          "reverse": false
        },
        {
          "id": 25,
          "text": "I've been thinking hard about what steps to take",
          "subscale": "Planning",
          "reverse": false
        },
        {
          "id": 26,
          "text": "I've been blaming myself for things that happened",
          "subscale": "Self-Blame",
          "reverse": false
        },
        {
          "id": 27,
          "text": "I've been praying or meditating",
          "subscale": "Religion",
          "reverse": false
        },
        {
          "id": 28,
          "text": "I've been making fun of the situation",
          "subscale": "Humor",
          "reverse": false
        }
      ],
      "responseFormat": {
        "type": "frequency",
        "points": 4,
        "labels": {
          "1": "I haven't been doing this at all",
          "2": "I've been doing this a little bit",
          "3": "I've been doing this a medium amount",
          "4": "I've been doing this a lot"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {
          "Self-Distraction": {
            "items": [
              1,
              19
            ],
            "description": "Diverting attention from the stressor"
          },
          "Active Coping": {
            "items": [
              2,
              7
            ],
            "description": "Direct action to address the problem"
          },
          "Denial": {
            "items": [
              3,
              8
            ],
            "description": "Refusing to accept reality of stressor"
          },
          "Substance Use": {
            "items": [
              4,
              11
            ],
            "description": "Using alcohol or drugs to cope"
          },
          "Use of Emotional Support": {
            "items": [
              5,
              15
            ],
            "description": "Seeking emotional support from others"
          },
          "Behavioral Disengagement": {
            "items": [
              6,
              16
            ],
            "description": "Giving up on coping attempts"
          },
          "Venting": {
            "items": [
              9,
              21
            ],
            "description": "Expressing negative feelings"
          },
          "Positive Reframing": {
            "items": [
              12,
              17
            ],
            "description": "Reinterpreting situation in positive way"
          },
          "Planning": {
            "items": [
              14,
              25
            ],
            "description": "Planning action strategies"
          },
          "Use of Instrumental Support": {
            "items": [
              10,
              23
            ],
            "description": "Seeking practical advice and assistance"
          },
          "Self-Blame": {
            "items": [
              13,
              26
            ],
            "description": "Self-criticism and blame"
          },
          "Humor": {
            "items": [
              18,
              28
            ],
            "description": "Using humor to cope"
          },
          "Acceptance": {
            "items": [
              20,
              24
            ],
            "description": "Accepting the situation"
          },
          "Religion": {
            "items": [
              22,
              27
            ],
            "description": "Using spiritual or religious coping"
          }
        },
        "overall": {
          "method": "separate_subscales",
          "description": "14 independent coping strategy scores"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 1.75,
              "label": "Minimal Use",
              "description": "Rarely using this coping strategy"
            },
            {
              "min": 1.75,
              "max": 2.5,
              "label": "Low Use",
              "description": "Infrequent use of this strategy"
            },
            {
              "min": 2.5,
              "max": 3.25,
              "label": "Moderate Use",
              "description": "Regular use of this strategy"
            },
            {
              "min": 3.25,
              "max": 4,
              "label": "High Use",
              "description": "Frequent use of this strategy"
            }
          ]
        }
      },
      "useCases": [
        "Assessment of coping styles and stress management",
        "Evaluation of resilience and adaptability",
        "Research on occupational stress and coping",
        "Workplace intervention planning"
      ],
      "relatedConstructs": [
        "Stress Coping",
        "Resilience",
        "Adaptive Functioning",
        "Problem-Solving"
      ],
      "keywords": [
        "coping",
        "stress management",
        "adaptation",
        "problem-solving",
        "emotion regulation"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "cfs",
      "name": "Cognitive Flexibility Scale",
      "shortName": "CFS",
      "construct": "Cognitive Flexibility and Adaptive Thinking",
      "category": "Coping & Self-Care",
      "description": "12-item measure of cognitive flexibility, the ability to consider multiple perspectives, generate alternatives, and adapt thinking to new situations. Relevant to problem-solving, adaptation, and resilience in workplace changes.",
      "authors": "Martin, M. M., & Rubin, R. H.",
      "year": 1995,
      "citations": [
        "Martin, M. M., & Rubin, R. H. (1995). A new measure of cognitive flexibility. Psychological Reports, 76(2), 623-626."
      ],
      "numberOfItems": 12,
      "estimatedMinutes": 2,
      "items": [
        {
          "id": 1,
          "text": "I can adjust my behavior to any kind of situation",
          "subscale": "Ability to Adjust",
          "reverse": false
        },
        {
          "id": 2,
          "text": "I rarely rely on the same old patterns to make decisions",
          "subscale": "Desire for Change",
          "reverse": false
        },
        {
          "id": 3,
          "text": "I feel like I'm capable of coping with most situations",
          "subscale": "Ability to Cope",
          "reverse": false
        },
        {
          "id": 4,
          "text": "I prefer to have a set daily schedule so I don't have to think about what I'm going to do",
          "subscale": "Preference for Set Routines",
          "reverse": true
        },
        {
          "id": 5,
          "text": "I can think of several ways to get out of a jam",
          "subscale": "Alternative Generation",
          "reverse": false
        },
        {
          "id": 6,
          "text": "I often look at things from different angles",
          "subscale": "Perspective Taking",
          "reverse": false
        },
        {
          "id": 7,
          "text": "When I encounter a problem, I can usually think of several solutions",
          "subscale": "Problem-Solving",
          "reverse": false
        },
        {
          "id": 8,
          "text": "It takes me a while to get used to a new situation or circumstance",
          "subscale": "Adaptation Speed",
          "reverse": true
        },
        {
          "id": 9,
          "text": "I enjoy challenging situations because they require me to think in new ways",
          "subscale": "Challenge Orientation",
          "reverse": false
        },
        {
          "id": 10,
          "text": "I like to have a routine and plan ahead so there are no surprises",
          "subscale": "Preference for Set Routines",
          "reverse": true
        },
        {
          "id": 11,
          "text": "I can think about problems from many different perspectives",
          "subscale": "Perspective Taking",
          "reverse": false
        },
        {
          "id": 12,
          "text": "I can adjust my view on important issues based on new information",
          "subscale": "Openness to Change",
          "reverse": false
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 6,
        "labels": {
          "1": "Strongly disagree",
          "2": "Disagree",
          "3": "Somewhat disagree",
          "4": "Somewhat agree",
          "5": "Agree",
          "6": "Strongly agree"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {
          "Ability to Adjust": {
            "items": [
              1
            ],
            "description": "Capacity to modify behavior"
          },
          "Desire for Change": {
            "items": [
              2
            ],
            "description": "Openness to varying approaches"
          },
          "Ability to Cope": {
            "items": [
              3
            ],
            "description": "Confidence in managing situations"
          },
          "Alternative Generation": {
            "items": [
              5
            ],
            "description": "Ability to generate multiple solutions"
          },
          "Perspective Taking": {
            "items": [
              6,
              11
            ],
            "description": "Ability to view situations from multiple viewpoints"
          },
          "Problem-Solving": {
            "items": [
              7
            ],
            "description": "Solution-generation skills"
          },
          "Challenge Orientation": {
            "items": [
              9
            ],
            "description": "Viewing challenges as opportunities"
          },
          "Openness to Change": {
            "items": [
              12
            ],
            "description": "Willingness to revise views based on new information"
          }
        },
        "overall": {
          "method": "mean_all",
          "description": "Overall cognitive flexibility"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 2.5,
              "label": "Low Flexibility",
              "description": "Rigid thinking and limited adaptability"
            },
            {
              "min": 2.5,
              "max": 4.5,
              "label": "Moderate Flexibility",
              "description": "Moderate cognitive flexibility"
            },
            {
              "min": 4.5,
              "max": 6,
              "label": "High Flexibility",
              "description": "High cognitive flexibility and adaptability"
            }
          ]
        }
      },
      "useCases": [
        "Assessment of adaptability in organizational change",
        "Evaluation of problem-solving capabilities",
        "Research on resilience and coping",
        "Identifying training needs for complex work environments"
      ],
      "relatedConstructs": [
        "Problem-Solving",
        "Adaptability",
        "Resilience",
        "Creative Thinking"
      ],
      "keywords": [
        "cognitive flexibility",
        "adaptability",
        "problem-solving",
        "perspective-taking",
        "resilience"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "itws",
      "name": "Interpersonal Trust at Work Scale",
      "shortName": "ITWS",
      "construct": "Interpersonal Trust in Work Relationships",
      "category": "Trust & Safety",
      "description": "Assesses both cognitive and affective trust in work relationships. Measures trust as a foundation for effective collaboration, teamwork, and organizational functioning.",
      "authors": "McAllister, D. J.",
      "year": 1995,
      "citations": [
        "McAllister, D. J. (1995). Affect-and cognition-based trust as foundations for interpersonal cooperation in organizations. Academy of Management Journal, 38(1), 24-59."
      ],
      "numberOfItems": 20,
      "estimatedMinutes": 3,
      "items": [
        {
          "id": 1,
          "text": "I have complete faith in the integrity of this colleague",
          "subscale": "Cognitive Trust",
          "reverse": false
        },
        {
          "id": 2,
          "text": "I feel a sense of personal connection with this colleague",
          "subscale": "Affective Trust",
          "reverse": false
        },
        {
          "id": 3,
          "text": "If I shared my problems with this colleague, I know this colleague would respond constructively and caringly",
          "subscale": "Affective Trust",
          "reverse": false
        },
        {
          "id": 4,
          "text": "Considering this colleague's track record, this colleague is very reliable",
          "subscale": "Cognitive Trust",
          "reverse": false
        },
        {
          "id": 5,
          "text": "I feel like I can trust this colleague with confidences that I would not want widely spread",
          "subscale": "Cognitive Trust",
          "reverse": false
        },
        {
          "id": 6,
          "text": "Given this colleague's competence, I feel confident relying on this colleague to handle an important work problem",
          "subscale": "Cognitive Trust",
          "reverse": false
        },
        {
          "id": 7,
          "text": "I find this colleague to be truthful in dealings with me",
          "subscale": "Cognitive Trust",
          "reverse": false
        },
        {
          "id": 8,
          "text": "I would feel comfortable giving this colleague access to information or resources that could be sensitive or proprietary",
          "subscale": "Cognitive Trust",
          "reverse": false
        },
        {
          "id": 9,
          "text": "This colleague is someone I feel I can really rely on to get the job done right",
          "subscale": "Cognitive Trust",
          "reverse": false
        },
        {
          "id": 10,
          "text": "I feel a special bond with this colleague that goes beyond just working together",
          "subscale": "Affective Trust",
          "reverse": false
        },
        {
          "id": 11,
          "text": "I would trust this colleague to represent my interests if I had to be away from a project",
          "subscale": "Cognitive Trust",
          "reverse": false
        },
        {
          "id": 12,
          "text": "I think this colleague does an excellent job",
          "subscale": "Cognitive Trust",
          "reverse": false
        },
        {
          "id": 13,
          "text": "This colleague and I can freely discuss sensitive issues in a work context",
          "subscale": "Affective Trust",
          "reverse": false
        },
        {
          "id": 14,
          "text": "I would feel comfortable sharing my ideas and feelings with this colleague during work discussions",
          "subscale": "Affective Trust",
          "reverse": false
        },
        {
          "id": 15,
          "text": "This colleague has gone out of his or her way to help me when I have needed something",
          "subscale": "Affective Trust",
          "reverse": false
        },
        {
          "id": 16,
          "text": "I feel that I can confide in this colleague without it coming back to haunt me",
          "subscale": "Cognitive Trust",
          "reverse": false
        },
        {
          "id": 17,
          "text": "I think this colleague could be a good friend outside of work",
          "subscale": "Affective Trust",
          "reverse": false
        },
        {
          "id": 18,
          "text": "This colleague is competent at their job",
          "subscale": "Cognitive Trust",
          "reverse": false
        },
        {
          "id": 19,
          "text": "I respect this colleague's opinions",
          "subscale": "Cognitive Trust",
          "reverse": false
        },
        {
          "id": 20,
          "text": "This colleague would be willing to help if I had a work problem",
          "subscale": "Affective Trust",
          "reverse": false
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 5,
        "labels": {
          "1": "Strongly disagree",
          "2": "Disagree",
          "3": "Neutral",
          "4": "Agree",
          "5": "Strongly agree"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {
          "Cognitive Trust": {
            "items": [
              1,
              4,
              5,
              6,
              7,
              8,
              9,
              11,
              12,
              16,
              18,
              19
            ],
            "description": "Trust based on competence, reliability, and integrity"
          },
          "Affective Trust": {
            "items": [
              2,
              3,
              10,
              13,
              14,
              15,
              17,
              20
            ],
            "description": "Trust based on care, concern, and emotional bonds"
          }
        },
        "overall": {
          "method": "mean_of_all",
          "description": "Overall interpersonal trust in work relationships"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 2.5,
              "label": "Low Trust",
              "description": "Low trust in work relationships"
            },
            {
              "min": 2.5,
              "max": 3.5,
              "label": "Moderate Trust",
              "description": "Moderate trust in colleagues"
            },
            {
              "min": 3.5,
              "max": 5,
              "label": "High Trust",
              "description": "High trust and strong relationships"
            }
          ]
        }
      },
      "useCases": [
        "Assessment of team dynamics and cohesion",
        "Evaluation of organizational culture and psychological safety",
        "Research on collaborative effectiveness",
        "Identifying trust-building interventions"
      ],
      "relatedConstructs": [
        "Team Trust",
        "Psychological Safety",
        "Social Capital",
        "Organizational Climate"
      ],
      "keywords": [
        "trust",
        "interpersonal relationships",
        "collaboration",
        "reliability",
        "integrity"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "gts",
      "name": "Generalized Trust Scale",
      "shortName": "GTS",
      "construct": "General Propensity to Trust Others",
      "category": "Trust & Safety",
      "description": "Brief 6-item measure of generalized tendency to trust others as a dispositional trait. Captures dispositional trust relevant to organizational cooperation, teamwork, and positive workplace interactions.",
      "authors": "Yamagishi, T., & Yamagishi, M.",
      "year": 1994,
      "citations": [
        "Yamagishi, T., & Yamagishi, M. (1994). Trust and commitment in the United States and Japan. Motivation and Emotion, 18(2), 129-166."
      ],
      "numberOfItems": 6,
      "estimatedMinutes": 1,
      "items": [
        {
          "id": 1,
          "text": "Most people are basically honest",
          "subscale": "Belief in Honesty",
          "reverse": false
        },
        {
          "id": 2,
          "text": "Most people are trustworthy",
          "subscale": "General Trust Belief",
          "reverse": false
        },
        {
          "id": 3,
          "text": "Most people are basically good and kind",
          "subscale": "Belief in Goodness",
          "reverse": false
        },
        {
          "id": 4,
          "text": "I'm inclined to trust people",
          "subscale": "Trust Inclination",
          "reverse": false
        },
        {
          "id": 5,
          "text": "Most people can be trusted",
          "subscale": "General Trust Belief",
          "reverse": false
        },
        {
          "id": 6,
          "text": "People are generally helpful",
          "subscale": "Belief in Helpfulness",
          "reverse": false
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 5,
        "labels": {
          "1": "Strongly disagree",
          "2": "Disagree",
          "3": "Neutral",
          "4": "Agree",
          "5": "Strongly agree"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {},
        "overall": {
          "method": "mean_all",
          "description": "Overall generalized trust in others"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 2.5,
              "label": "Low Trust",
              "description": "Low generalized trust in others"
            },
            {
              "min": 2.5,
              "max": 3.5,
              "label": "Moderate Trust",
              "description": "Moderate generalized trust"
            },
            {
              "min": 3.5,
              "max": 5,
              "label": "High Trust",
              "description": "High generalized trust in others"
            }
          ]
        }
      },
      "useCases": [
        "Assessment of organizational trust climate",
        "Research on cooperation and altruism",
        "Identifying individual differences in trust propensity",
        "Evaluation of team collaboration readiness"
      ],
      "relatedConstructs": [
        "Interpersonal Trust",
        "Social Capital",
        "Psychological Safety",
        "Organizational Trust"
      ],
      "keywords": [
        "trust",
        "disposition",
        "honesty",
        "cooperation",
        "social capital"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "wis",
      "name": "Workplace Incivility Scale",
      "shortName": "WIS",
      "construct": "Perceived Workplace Incivility and Mistreatment",
      "category": "Trust & Safety",
      "description": "Measures the frequency of uncivil behaviors experienced in workplace, including rudeness, disrespect, and lack of consideration. Critical for assessing organizational culture, bullying, and psychological safety.",
      "authors": "Cortina, L. M., Magley, V. J., Williams, J. H., & Langhout, R. D.",
      "year": 2001,
      "citations": [
        "Cortina, L. M., Magley, V. J., Williams, J. H., & Langhout, R. D. (2001). Incivility in the workplace: Incident and impact. Journal of Occupational Health Psychology, 6(1), 64-80."
      ],
      "numberOfItems": 7,
      "estimatedMinutes": 2,
      "items": [
        {
          "id": 1,
          "text": "How often do people at work put you down or treat you disrespectfully?",
          "subscale": "Disrespect and Rudeness",
          "reverse": false
        },
        {
          "id": 2,
          "text": "How often do people at work ignore or exclude you socially?",
          "subscale": "Social Exclusion",
          "reverse": false
        },
        {
          "id": 3,
          "text": "How often are you interrupted while speaking at work?",
          "subscale": "Disrespect and Rudeness",
          "reverse": false
        },
        {
          "id": 4,
          "text": "How often do people at work make unwanted attempts to draw you into discussions about their personal problems?",
          "subscale": "Boundary Violations",
          "reverse": false
        },
        {
          "id": 5,
          "text": "How often do people at work make insulting or condescending remarks to you?",
          "subscale": "Disrespect and Rudeness",
          "reverse": false
        },
        {
          "id": 6,
          "text": "How often do people at work take credit for your work or ideas?",
          "subscale": "Unfair Treatment",
          "reverse": false
        },
        {
          "id": 7,
          "text": "How often do people at work refuse to listen to your side of a story?",
          "subscale": "Disrespect and Rudeness",
          "reverse": false
        }
      ],
      "responseFormat": {
        "type": "frequency",
        "points": 5,
        "labels": {
          "1": "Never",
          "2": "Rarely",
          "3": "Sometimes",
          "4": "Often",
          "5": "Very often"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {
          "Disrespect and Rudeness": {
            "items": [
              1,
              3,
              5,
              7
            ],
            "description": "Frequency of rude or disrespectful treatment"
          },
          "Social Exclusion": {
            "items": [
              2
            ],
            "description": "Social isolation or exclusion"
          },
          "Boundary Violations": {
            "items": [
              4
            ],
            "description": "Inappropriate personal discussions"
          },
          "Unfair Treatment": {
            "items": [
              6
            ],
            "description": "Credit-taking and unfair behaviors"
          }
        },
        "overall": {
          "method": "mean_all",
          "description": "Overall frequency of workplace incivility"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 2,
              "label": "Low Incivility",
              "description": "Rarely experiences uncivil treatment"
            },
            {
              "min": 2,
              "max": 3.5,
              "label": "Moderate Incivility",
              "description": "Sometimes experiences uncivil behavior"
            },
            {
              "min": 3.5,
              "max": 5,
              "label": "High Incivility",
              "description": "Frequently experiences uncivil treatment"
            }
          ]
        }
      },
      "useCases": [
        "Assessment of workplace culture and civility",
        "Identification of toxic behavior patterns",
        "Evaluation of HR interventions for civility",
        "Research on workplace mistreatment"
      ],
      "relatedConstructs": [
        "Workplace Bullying",
        "Psychological Safety",
        "Toxic Behavior",
        "Organizational Climate"
      ],
      "keywords": [
        "incivility",
        "rudeness",
        "disrespect",
        "mistreatment",
        "workplace behavior"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "wami",
      "name": "Work as Meaning Inventory",
      "shortName": "WAMI",
      "construct": "Meaning and Significance in Work",
      "category": "Values & Meaning",
      "description": "10-item measure of perceived meaning, purpose, and significance in work. Captures whether employees experience their work as meaningful and aligned with personal values, central to engagement and wellbeing.",
      "authors": "Steger, M. F., Dik, B. J., & Duffy, R. D.",
      "year": 2012,
      "citations": [
        "Steger, M. F., Dik, B. J., & Duffy, R. D. (2012). Measuring meaningful work: The Work and Meaning Inventory (WAMI). Journal of Career Assessment, 20(3), 322-337."
      ],
      "numberOfItems": 10,
      "estimatedMinutes": 2,
      "items": [
        {
          "id": 1,
          "text": "I have found a meaningful career path",
          "subscale": "Meaning",
          "reverse": false
        },
        {
          "id": 2,
          "text": "I understand how my work contributes to my life's meaning",
          "subscale": "Meaning",
          "reverse": false
        },
        {
          "id": 3,
          "text": "I have a good sense of what makes my job meaningful",
          "subscale": "Meaning",
          "reverse": false
        },
        {
          "id": 4,
          "text": "My work helps me live according to my values",
          "subscale": "Values Alignment",
          "reverse": false
        },
        {
          "id": 5,
          "text": "I view my work as contributing to my personal growth",
          "subscale": "Purpose",
          "reverse": false
        },
        {
          "id": 6,
          "text": "My work is one of the most important things in my life",
          "subscale": "Purpose",
          "reverse": false
        },
        {
          "id": 7,
          "text": "I am living my life purpose through my work",
          "subscale": "Purpose",
          "reverse": false
        },
        {
          "id": 8,
          "text": "My job makes a positive difference in the world",
          "subscale": "Significance",
          "reverse": false
        },
        {
          "id": 9,
          "text": "I know how to pursue a meaningful career path",
          "subscale": "Meaning",
          "reverse": false
        },
        {
          "id": 10,
          "text": "I can clearly articulate how my work contributes to my overall life goals",
          "subscale": "Purpose",
          "reverse": false
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 5,
        "labels": {
          "1": "Absolutely untrue",
          "2": "Mostly untrue",
          "3": "Somewhat true",
          "4": "Mostly true",
          "5": "Absolutely true"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {
          "Meaning": {
            "items": [
              1,
              2,
              3,
              9
            ],
            "description": "Understanding and sense of meaning in work"
          },
          "Values Alignment": {
            "items": [
              4
            ],
            "description": "Alignment with personal values"
          },
          "Purpose": {
            "items": [
              5,
              6,
              7,
              10
            ],
            "description": "Work as central to life purpose and goals"
          },
          "Significance": {
            "items": [
              8
            ],
            "description": "Perception of work contributing to greater good"
          }
        },
        "overall": {
          "method": "mean_of_all",
          "description": "Overall sense of work meaning and purpose"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 2.5,
              "label": "Low Meaning",
              "description": "Work lacks meaning and purpose"
            },
            {
              "min": 2.5,
              "max": 3.5,
              "label": "Moderate Meaning",
              "description": "Work has moderate sense of meaning"
            },
            {
              "min": 3.5,
              "max": 5,
              "label": "High Meaning",
              "description": "Work is highly meaningful and purposeful"
            }
          ]
        }
      },
      "useCases": [
        "Assessment of job satisfaction and engagement",
        "Research on meaningful work and flourishing",
        "Evaluation of organizational purpose communication",
        "Career development and counseling"
      ],
      "relatedConstructs": [
        "Job Meaning",
        "Purpose in Life",
        "Engagement",
        "Values Alignment"
      ],
      "keywords": [
        "meaning",
        "purpose",
        "values",
        "engagement",
        "significance"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "cvq",
      "name": "Calling and Vocation Questionnaire",
      "shortName": "CVQ",
      "construct": "Sense of Calling and Vocation in Work",
      "category": "Values & Meaning",
      "description": "Brief measure of experienced calling and vocation in work—the sense that one's work is meaningful, purposeful, and aligns with personal talents and destiny. Relevant to employee motivation, retention, and wellbeing.",
      "authors": "Dik, B. J., Eldridge, B. M., & Steger, M. F.",
      "year": 2008,
      "citations": [
        "Dik, B. J., Eldridge, B. M., & Steger, M. F. (2008). Development and validation of the Calling and Vocation Questionnaire (CVQ) and brief CVQ. Journal of Career Assessment, 16(3), 318-339."
      ],
      "numberOfItems": 12,
      "estimatedMinutes": 2,
      "items": [
        {
          "id": 1,
          "text": "I have a calling to a particular kind of work",
          "subscale": "Presence of Calling",
          "reverse": false
        },
        {
          "id": 2,
          "text": "My work is a calling for me",
          "subscale": "Presence of Calling",
          "reverse": false
        },
        {
          "id": 3,
          "text": "I see my work as a primary calling for me",
          "subscale": "Presence of Calling",
          "reverse": false
        },
        {
          "id": 4,
          "text": "I was drawn to my current line of work by a calling",
          "subscale": "Presence of Calling",
          "reverse": false
        },
        {
          "id": 5,
          "text": "I was put on this earth to do the kind of work I do",
          "subscale": "Presence of Calling",
          "reverse": false
        },
        {
          "id": 6,
          "text": "My work is aligned with my life purpose",
          "subscale": "Presence of Calling",
          "reverse": false
        },
        {
          "id": 7,
          "text": "I feel unsure whether I have a calling to do my job",
          "subscale": "Presence of Calling",
          "reverse": true
        },
        {
          "id": 8,
          "text": "My current job uses my talents and abilities well",
          "subscale": "Present Action on Calling",
          "reverse": false
        },
        {
          "id": 9,
          "text": "I am living out my calling through my job",
          "subscale": "Present Action on Calling",
          "reverse": false
        },
        {
          "id": 10,
          "text": "I have a sense that my job is one I am supposed to have",
          "subscale": "Present Action on Calling",
          "reverse": false
        },
        {
          "id": 11,
          "text": "I feel as though I am making a difference through my work",
          "subscale": "Present Action on Calling",
          "reverse": false
        },
        {
          "id": 12,
          "text": "My job does not provide me with a sense of purpose",
          "subscale": "Present Action on Calling",
          "reverse": true
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 5,
        "labels": {
          "1": "Not at all agree",
          "2": "Somewhat disagree",
          "3": "Neutral",
          "4": "Somewhat agree",
          "5": "Very much agree"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {
          "Presence of Calling": {
            "items": [
              1,
              2,
              3,
              4,
              5,
              6,
              7
            ],
            "description": "Experienced sense of calling and purpose"
          },
          "Present Action on Calling": {
            "items": [
              8,
              9,
              10,
              11,
              12
            ],
            "description": "Living out calling in current work"
          }
        },
        "overall": {
          "method": "mean_of_all",
          "description": "Overall sense of calling and vocation"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 2.5,
              "label": "Low Calling",
              "description": "Weak sense of calling and vocation"
            },
            {
              "min": 2.5,
              "max": 3.5,
              "label": "Moderate Calling",
              "description": "Moderate sense of calling"
            },
            {
              "min": 3.5,
              "max": 5,
              "label": "High Calling",
              "description": "Strong sense of calling and purpose"
            }
          ]
        }
      },
      "useCases": [
        "Assessment of career satisfaction and alignment",
        "Research on work meaning and engagement",
        "Talent retention and motivation programs",
        "Career counseling and development"
      ],
      "relatedConstructs": [
        "Calling",
        "Purpose",
        "Career Satisfaction",
        "Meaningful Work"
      ],
      "keywords": [
        "calling",
        "vocation",
        "purpose",
        "meaning",
        "career alignment"
      ],
      "license": "Freely available for academic and non-commercial research use"
    },
    {
      "id": "mini-ipip",
      "name": "Mini-IPIP",
      "shortName": "Mini-IPIP",
      "construct": "Big Five Personality Traits",
      "category": "Personality",
      "description": "A brief 20-item measure of the Big Five personality dimensions (Extraversion, Agreeableness, Conscientiousness, Neuroticism, and Openness/Intellect), with four items per dimension. Provides quick assessment of personality traits for research and screening contexts.",
      "authors": "Donnellan, M. B., Oswald, F. L., Baird, B. M., & Lucas, R. E.",
      "year": 2006,
      "citations": [
        "Donnellan, M. B., Oswald, F. L., Baird, B. M., & Lucas, R. E. (2006). The mini-IPIP scales: Tiny-yet-effective measures of the Big Five factors of personality. Psychological Assessment, 18(2), 192-203."
      ],
      "numberOfItems": 20,
      "estimatedMinutes": 3,
      "items": [
        {
          "id": 1,
          "text": "Am the life of the party",
          "subscale": "Extraversion",
          "reverse": false
        },
        {
          "id": 2,
          "text": "Don't talk a lot",
          "subscale": "Extraversion",
          "reverse": true
        },
        {
          "id": 3,
          "text": "Talk to a lot of different people at parties",
          "subscale": "Extraversion",
          "reverse": false
        },
        {
          "id": 4,
          "text": "Keep in the background",
          "subscale": "Extraversion",
          "reverse": true
        },
        {
          "id": 5,
          "text": "Sympathize with others' feelings",
          "subscale": "Agreeableness",
          "reverse": false
        },
        {
          "id": 6,
          "text": "Am not interested in other people's problems",
          "subscale": "Agreeableness",
          "reverse": true
        },
        {
          "id": 7,
          "text": "Feel others' emotions",
          "subscale": "Agreeableness",
          "reverse": false
        },
        {
          "id": 8,
          "text": "Am not really interested in others",
          "subscale": "Agreeableness",
          "reverse": true
        },
        {
          "id": 9,
          "text": "Get chores done right away",
          "subscale": "Conscientiousness",
          "reverse": false
        },
        {
          "id": 10,
          "text": "Often forget to put things back in their proper place",
          "subscale": "Conscientiousness",
          "reverse": true
        },
        {
          "id": 11,
          "text": "Like order",
          "subscale": "Conscientiousness",
          "reverse": false
        },
        {
          "id": 12,
          "text": "Make a mess of things",
          "subscale": "Conscientiousness",
          "reverse": true
        },
        {
          "id": 13,
          "text": "Have frequent mood swings",
          "subscale": "Neuroticism",
          "reverse": false
        },
        {
          "id": 14,
          "text": "Am relaxed most of the time",
          "subscale": "Neuroticism",
          "reverse": true
        },
        {
          "id": 15,
          "text": "Get upset easily",
          "subscale": "Neuroticism",
          "reverse": false
        },
        {
          "id": 16,
          "text": "Seldom feel blue",
          "subscale": "Neuroticism",
          "reverse": true
        },
        {
          "id": 17,
          "text": "Have a vivid imagination",
          "subscale": "Openness",
          "reverse": false
        },
        {
          "id": 18,
          "text": "Am not interested in abstract ideas",
          "subscale": "Openness",
          "reverse": true
        },
        {
          "id": 19,
          "text": "Have difficulty understanding abstract ideas",
          "subscale": "Openness",
          "reverse": true
        },
        {
          "id": 20,
          "text": "Do not have a good imagination",
          "subscale": "Openness",
          "reverse": true
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 5,
        "labels": {
          "1": "Very Inaccurate",
          "2": "Moderately Inaccurate",
          "3": "Neither Accurate Nor Inaccurate",
          "4": "Moderately Accurate",
          "5": "Very Accurate"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {
          "Extraversion": {
            "items": [
              1,
              2,
              3,
              4
            ],
            "description": "Sociability, talkativeness, and assertiveness in social situations"
          },
          "Agreeableness": {
            "items": [
              5,
              6,
              7,
              8
            ],
            "description": "Compassion, empathy, and concern for others' well-being"
          },
          "Conscientiousness": {
            "items": [
              9,
              10,
              11,
              12
            ],
            "description": "Organization, orderliness, and task completion"
          },
          "Neuroticism": {
            "items": [
              13,
              14,
              15,
              16
            ],
            "description": "Emotional stability and tendency toward negative affect"
          },
          "Openness": {
            "items": [
              17,
              18,
              19,
              20
            ],
            "description": "Imagination, curiosity, and openness to new experiences"
          }
        },
        "overall": {
          "method": "none",
          "description": "Report individual subscale scores for each Big Five dimension"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 2,
              "label": "Low",
              "description": "Low levels on this personality dimension"
            },
            {
              "min": 2.01,
              "max": 3,
              "label": "Below Average",
              "description": "Below average levels on this dimension"
            },
            {
              "min": 3.01,
              "max": 4,
              "label": "Above Average",
              "description": "Above average levels on this dimension"
            },
            {
              "min": 4.01,
              "max": 5,
              "label": "High",
              "description": "High levels on this personality dimension"
            }
          ]
        }
      },
      "useCases": [
        "quick personality screening",
        "team compatibility assessment",
        "research contexts requiring brief personality measure"
      ],
      "relatedConstructs": [
        "Big Five personality",
        "personality traits",
        "OCEAN model"
      ],
      "keywords": [
        "personality",
        "big five",
        "OCEAN",
        "extraversion",
        "agreeableness",
        "conscientiousness",
        "neuroticism",
        "openness",
        "brief assessment"
      ],
      "license": "Public domain (IPIP). Freely available for academic and non-commercial use."
    },
    {
      "id": "cpc-12r",
      "name": "Compound PsyCap Scale",
      "shortName": "CPC-12R",
      "construct": "Psychological Capital",
      "category": "Motivation",
      "description": "A 12-item measure of psychological capital (PsyCap) assessing four core components: Self-Efficacy, Hope, Resilience, and Optimism. Designed to measure positive psychological resources that enhance work performance and well-being.",
      "authors": "Lorenz, T., Beer, C., P\u00fctz, J., & Heinitz, K.",
      "year": 2016,
      "citations": [
        "Lorenz, T., Beer, C., P\u00fctz, J., & Heinitz, K. (2016). Psychological capital and entrepreneurship. In J. A. Kalkavan-S\u00f6zer & S. Telman (Eds.), Entrepreneurship and organization management. InTechOpen."
      ],
      "numberOfItems": 12,
      "estimatedMinutes": 2,
      "items": [
        {
          "id": 1,
          "text": "I can solve most problems if I put enough effort into it",
          "subscale": "Self-Efficacy",
          "reverse": false
        },
        {
          "id": 2,
          "text": "I feel confident that I can handle unexpected events effectively",
          "subscale": "Self-Efficacy",
          "reverse": false
        },
        {
          "id": 3,
          "text": "I can usually find several solutions to problems",
          "subscale": "Self-Efficacy",
          "reverse": false
        },
        {
          "id": 4,
          "text": "I energetically pursue my goals",
          "subscale": "Hope",
          "reverse": false
        },
        {
          "id": 5,
          "text": "I can think of many ways to reach my current goals",
          "subscale": "Hope",
          "reverse": false
        },
        {
          "id": 6,
          "text": "At the present time, I am meeting the goals that I have set for myself",
          "subscale": "Hope",
          "reverse": false
        },
        {
          "id": 7,
          "text": "I usually take stressful things in stride",
          "subscale": "Resilience",
          "reverse": false
        },
        {
          "id": 8,
          "text": "I can get through difficult times at work because I've experienced difficulty before",
          "subscale": "Resilience",
          "reverse": false
        },
        {
          "id": 9,
          "text": "I feel I can handle many things at a time",
          "subscale": "Resilience",
          "reverse": false
        },
        {
          "id": 10,
          "text": "In uncertain times, I usually expect the best",
          "subscale": "Optimism",
          "reverse": false
        },
        {
          "id": 11,
          "text": "I'm always optimistic about my future",
          "subscale": "Optimism",
          "reverse": false
        },
        {
          "id": 12,
          "text": "Overall, I expect more good things to happen to me than bad",
          "subscale": "Optimism",
          "reverse": false
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 6,
        "labels": {
          "1": "Strongly Disagree",
          "2": "Disagree",
          "3": "Slightly Disagree",
          "4": "Slightly Agree",
          "5": "Agree",
          "6": "Strongly Agree"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {
          "Self-Efficacy": {
            "items": [
              1,
              2,
              3
            ],
            "description": "Confidence in one's ability to solve problems and handle challenges"
          },
          "Hope": {
            "items": [
              4,
              5,
              6
            ],
            "description": "Goal-directed energy and ability to generate pathways to achieve goals"
          },
          "Resilience": {
            "items": [
              7,
              8,
              9
            ],
            "description": "Ability to bounce back from adversity and handle multiple demands"
          },
          "Optimism": {
            "items": [
              10,
              11,
              12
            ],
            "description": "Positive expectancy and belief in good outcomes"
          }
        },
        "overall": {
          "method": "mean",
          "description": "Calculate overall PsyCap score by averaging all 12 items"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 2.5,
              "label": "Low PsyCap",
              "description": "Low psychological capital and limited positive resources"
            },
            {
              "min": 2.51,
              "max": 3.5,
              "label": "Below Average",
              "description": "Below average levels of psychological capital"
            },
            {
              "min": 3.51,
              "max": 4.5,
              "label": "Average",
              "description": "Average levels of psychological capital"
            },
            {
              "min": 4.51,
              "max": 5.5,
              "label": "Above Average",
              "description": "Above average levels of psychological capital"
            },
            {
              "min": 5.51,
              "max": 6,
              "label": "High PsyCap",
              "description": "High psychological capital and strong positive resources"
            }
          ]
        }
      },
      "useCases": [
        "measuring psychological resources at work",
        "employee development programs",
        "resilience and wellbeing initiatives"
      ],
      "relatedConstructs": [
        "psychological capital",
        "positive psychology",
        "work engagement",
        "resilience",
        "well-being"
      ],
      "keywords": [
        "psychological capital",
        "psycap",
        "self-efficacy",
        "hope",
        "resilience",
        "optimism",
        "positive psychology",
        "work motivation"
      ],
      "license": "Open access (Creative Commons). Freely available for academic and non-commercial use."
    },
    {
      "id": "jss",
      "name": "Job Satisfaction Survey",
      "shortName": "JSS",
      "construct": "Job Satisfaction",
      "category": "Engagement & Satisfaction",
      "description": "A comprehensive measure of job satisfaction across nine facets: pay, promotion, supervision, fringe benefits, contingent rewards, operating conditions, coworkers, nature of work, and communication. Provides both subscale and overall satisfaction scores.",
      "authors": "Spector, P. E.",
      "year": 1985,
      "citations": [
        "Spector, P. E. (1985). Measurement of human service staff satisfaction: Development of the Job Satisfaction Survey. American Journal of Community Psychology, 13(6), 693-713."
      ],
      "numberOfItems": 36,
      "estimatedMinutes": 10,
      "items": [
        {
          "id": 1,
          "text": "I feel I am being paid a fair amount for the work I do",
          "subscale": "Pay",
          "reverse": false
        },
        {
          "id": 2,
          "text": "There is really too little chance for promotion on my job",
          "subscale": "Promotion",
          "reverse": true
        },
        {
          "id": 3,
          "text": "My supervisor is quite competent in doing his/her job",
          "subscale": "Supervision",
          "reverse": false
        },
        {
          "id": 4,
          "text": "I am not satisfied with the benefits I receive",
          "subscale": "Fringe Benefits",
          "reverse": true
        },
        {
          "id": 5,
          "text": "When I do a good job, I receive the recognition for it that I should receive",
          "subscale": "Contingent Rewards",
          "reverse": false
        },
        {
          "id": 6,
          "text": "Many of our rules and procedures make doing a good job difficult",
          "subscale": "Operating Conditions",
          "reverse": true
        },
        {
          "id": 7,
          "text": "I like the people I work with",
          "subscale": "Coworkers",
          "reverse": false
        },
        {
          "id": 8,
          "text": "I sometimes feel my job is meaningless",
          "subscale": "Nature of Work",
          "reverse": true
        },
        {
          "id": 9,
          "text": "Communications seem good within this organization",
          "subscale": "Communication",
          "reverse": false
        },
        {
          "id": 10,
          "text": "Raises are too few and far between",
          "subscale": "Pay",
          "reverse": true
        },
        {
          "id": 11,
          "text": "Those who do well on the job stand a fair chance of being promoted",
          "subscale": "Promotion",
          "reverse": false
        },
        {
          "id": 12,
          "text": "My supervisor is unfair to me",
          "subscale": "Supervision",
          "reverse": true
        },
        {
          "id": 13,
          "text": "The benefits we receive are as good as most other organizations offer",
          "subscale": "Fringe Benefits",
          "reverse": false
        },
        {
          "id": 14,
          "text": "I do not feel that the work I do is appreciated",
          "subscale": "Contingent Rewards",
          "reverse": true
        },
        {
          "id": 15,
          "text": "My efforts to do a good job are seldom blocked by red tape",
          "subscale": "Operating Conditions",
          "reverse": false
        },
        {
          "id": 16,
          "text": "I find I have to work harder at my job because of the incompetence of people I work with",
          "subscale": "Coworkers",
          "reverse": true
        },
        {
          "id": 17,
          "text": "I like doing the things I do at work",
          "subscale": "Nature of Work",
          "reverse": false
        },
        {
          "id": 18,
          "text": "The goals of this organization are not clear to me",
          "subscale": "Communication",
          "reverse": true
        },
        {
          "id": 19,
          "text": "I feel unappreciated by the organization when I think about what they pay me",
          "subscale": "Pay",
          "reverse": true
        },
        {
          "id": 20,
          "text": "People get ahead as fast here as they do in other places",
          "subscale": "Promotion",
          "reverse": false
        },
        {
          "id": 21,
          "text": "My supervisor shows too little interest in the feelings of subordinates",
          "subscale": "Supervision",
          "reverse": true
        },
        {
          "id": 22,
          "text": "The benefit package we have is equitable",
          "subscale": "Fringe Benefits",
          "reverse": false
        },
        {
          "id": 23,
          "text": "There are few rewards for those who work here",
          "subscale": "Contingent Rewards",
          "reverse": true
        },
        {
          "id": 24,
          "text": "I have too much to do at work",
          "subscale": "Operating Conditions",
          "reverse": true
        },
        {
          "id": 25,
          "text": "I enjoy my coworkers",
          "subscale": "Coworkers",
          "reverse": false
        },
        {
          "id": 26,
          "text": "I often feel that I do not know what is going on with the organization",
          "subscale": "Communication",
          "reverse": true
        },
        {
          "id": 27,
          "text": "I feel a sense of pride in doing my job",
          "subscale": "Nature of Work",
          "reverse": false
        },
        {
          "id": 28,
          "text": "I feel satisfied with my chances for salary increases",
          "subscale": "Pay",
          "reverse": false
        },
        {
          "id": 29,
          "text": "There are benefits we do not have which we should have",
          "subscale": "Fringe Benefits",
          "reverse": true
        },
        {
          "id": 30,
          "text": "I like my supervisor",
          "subscale": "Supervision",
          "reverse": false
        },
        {
          "id": 31,
          "text": "I have too much paperwork",
          "subscale": "Operating Conditions",
          "reverse": true
        },
        {
          "id": 32,
          "text": "I don't feel my efforts are rewarded the way they should be",
          "subscale": "Contingent Rewards",
          "reverse": true
        },
        {
          "id": 33,
          "text": "I am satisfied with my chances for promotion",
          "subscale": "Promotion",
          "reverse": false
        },
        {
          "id": 34,
          "text": "There is too much bickering and fighting at work",
          "subscale": "Coworkers",
          "reverse": true
        },
        {
          "id": 35,
          "text": "My job is enjoyable",
          "subscale": "Nature of Work",
          "reverse": false
        },
        {
          "id": 36,
          "text": "Work assignments are not fully explained",
          "subscale": "Communication",
          "reverse": true
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 6,
        "labels": {
          "1": "Disagree very much",
          "2": "Disagree moderately",
          "3": "Disagree slightly",
          "4": "Agree slightly",
          "5": "Agree moderately",
          "6": "Agree very much"
        }
      },
      "scoring": {
        "method": "sum",
        "subscales": {
          "Pay": {
            "items": [
              1,
              10,
              19,
              28
            ],
            "description": "Satisfaction with salary and compensation"
          },
          "Promotion": {
            "items": [
              2,
              11,
              20,
              33
            ],
            "description": "Satisfaction with advancement opportunities"
          },
          "Supervision": {
            "items": [
              3,
              12,
              21,
              30
            ],
            "description": "Satisfaction with direct supervisor and management"
          },
          "Fringe Benefits": {
            "items": [
              4,
              13,
              22,
              29
            ],
            "description": "Satisfaction with benefits package"
          },
          "Contingent Rewards": {
            "items": [
              5,
              14,
              23,
              32
            ],
            "description": "Satisfaction with recognition and rewards"
          },
          "Operating Conditions": {
            "items": [
              6,
              15,
              24,
              31
            ],
            "description": "Satisfaction with work environment and procedures"
          },
          "Coworkers": {
            "items": [
              7,
              16,
              25,
              34
            ],
            "description": "Satisfaction with colleagues and workplace relationships"
          },
          "Nature of Work": {
            "items": [
              8,
              17,
              27,
              35
            ],
            "description": "Satisfaction with the work itself and job meaning"
          },
          "Communication": {
            "items": [
              9,
              18,
              26,
              36
            ],
            "description": "Satisfaction with organizational communication"
          }
        },
        "overall": {
          "method": "sum",
          "description": "Sum of all 36 items for total job satisfaction score"
        },
        "interpretation": {
          "subscales": {
            "ranges": [
              {
                "min": 4,
                "max": 12,
                "label": "Dissatisfied",
                "description": "Low satisfaction on this dimension"
              },
              {
                "min": 13,
                "max": 16,
                "label": "Ambivalent",
                "description": "Mixed or neutral satisfaction on this dimension"
              },
              {
                "min": 17,
                "max": 24,
                "label": "Satisfied",
                "description": "High satisfaction on this dimension"
              }
            ]
          },
          "overall": {
            "ranges": [
              {
                "min": 36,
                "max": 108,
                "label": "Dissatisfied",
                "description": "Low overall job satisfaction"
              },
              {
                "min": 109,
                "max": 144,
                "label": "Ambivalent",
                "description": "Mixed or neutral overall job satisfaction"
              },
              {
                "min": 145,
                "max": 216,
                "label": "Satisfied",
                "description": "High overall job satisfaction"
              }
            ]
          }
        }
      },
      "useCases": [
        "Employee satisfaction surveys",
        "Organizational diagnostics",
        "HR climate assessment",
        "Turnover prediction"
      ],
      "relatedConstructs": [
        "Organizational commitment",
        "Employee engagement",
        "Burnout",
        "Turnover intention"
      ],
      "keywords": [
        "job satisfaction",
        "pay",
        "promotion",
        "supervision",
        "benefits",
        "rewards",
        "coworkers",
        "work conditions",
        "organizational satisfaction"
      ],
      "license": "Freely available for non-commercial research and educational use. Copyright Paul E. Spector, All rights reserved."
    },
    {
      "id": "uwes-17",
      "name": "Utrecht Work Engagement Scale - 17",
      "shortName": "UWES-17",
      "construct": "Work Engagement",
      "category": "Engagement & Satisfaction",
      "description": "Measures work engagement across three dimensions: vigor (energy and resilience), dedication (meaning and pride), and absorption (concentration and flow). Assesses the positive psychological state characterized by energy, commitment, and focused effort in work activities.",
      "authors": "Schaufeli, W. B., & Bakker, A. B.",
      "year": 2003,
      "citations": [
        "Schaufeli, W. B., & Bakker, A. B. (2003). Utrecht Work Engagement Scale: Preliminary manual. Occupational Health Psychology Unit, Utrecht University."
      ],
      "numberOfItems": 17,
      "estimatedMinutes": 5,
      "items": [
        {
          "id": 1,
          "text": "At my work, I feel bursting with energy",
          "subscale": "Vigor",
          "reverse": false
        },
        {
          "id": 2,
          "text": "At my job, I feel strong and vigorous",
          "subscale": "Vigor",
          "reverse": false
        },
        {
          "id": 3,
          "text": "When I get up in the morning, I feel like going to work",
          "subscale": "Vigor",
          "reverse": false
        },
        {
          "id": 4,
          "text": "I can continue working for very long periods at a time",
          "subscale": "Vigor",
          "reverse": false
        },
        {
          "id": 5,
          "text": "At my job, I am very resilient, mentally",
          "subscale": "Vigor",
          "reverse": false
        },
        {
          "id": 6,
          "text": "At my work I always persevere, even when things do not go well",
          "subscale": "Vigor",
          "reverse": false
        },
        {
          "id": 7,
          "text": "I find the work that I do full of meaning and purpose",
          "subscale": "Dedication",
          "reverse": false
        },
        {
          "id": 8,
          "text": "I am enthusiastic about my job",
          "subscale": "Dedication",
          "reverse": false
        },
        {
          "id": 9,
          "text": "My job inspires me",
          "subscale": "Dedication",
          "reverse": false
        },
        {
          "id": 10,
          "text": "I am proud of the work that I do",
          "subscale": "Dedication",
          "reverse": false
        },
        {
          "id": 11,
          "text": "To me, my job is challenging",
          "subscale": "Dedication",
          "reverse": false
        },
        {
          "id": 12,
          "text": "Time flies when I am working",
          "subscale": "Absorption",
          "reverse": false
        },
        {
          "id": 13,
          "text": "When I am working, I forget everything else around me",
          "subscale": "Absorption",
          "reverse": false
        },
        {
          "id": 14,
          "text": "I feel happy when I am working intensely",
          "subscale": "Absorption",
          "reverse": false
        },
        {
          "id": 15,
          "text": "I am immersed in my work",
          "subscale": "Absorption",
          "reverse": false
        },
        {
          "id": 16,
          "text": "I get carried away when I am working",
          "subscale": "Absorption",
          "reverse": false
        },
        {
          "id": 17,
          "text": "It is difficult to detach myself from my job",
          "subscale": "Absorption",
          "reverse": false
        }
      ],
      "responseFormat": {
        "type": "frequency",
        "points": 7,
        "labels": {
          "0": "Never",
          "1": "Almost Never (A few times a year or less)",
          "2": "Rarely (Once a month or less)",
          "3": "Sometimes (A few times a month)",
          "4": "Often (Once a week)",
          "5": "Very Often (A few times a week)",
          "6": "Always (Every day)"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {
          "Vigor": {
            "items": [
              1,
              2,
              3,
              4,
              5,
              6
            ],
            "description": "Energy, enthusiasm, and mental resilience at work"
          },
          "Dedication": {
            "items": [
              7,
              8,
              9,
              10,
              11
            ],
            "description": "Meaning, pride, and challenge in work"
          },
          "Absorption": {
            "items": [
              12,
              13,
              14,
              15,
              16,
              17
            ],
            "description": "Concentration, flow, and immersion in work"
          }
        },
        "overall": {
          "method": "mean",
          "description": "Mean of all 17 items for overall work engagement score"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 0,
              "max": 0.99,
              "label": "Very Low",
              "description": "Minimal engagement"
            },
            {
              "min": 1,
              "max": 2.33,
              "label": "Low",
              "description": "Below average engagement"
            },
            {
              "min": 2.34,
              "max": 3.66,
              "label": "Average",
              "description": "Moderate engagement"
            },
            {
              "min": 3.67,
              "max": 5,
              "label": "High",
              "description": "Above average engagement"
            },
            {
              "min": 5.01,
              "max": 6,
              "label": "Very High",
              "description": "Excellent engagement"
            }
          ]
        }
      },
      "useCases": [
        "Measuring employee engagement",
        "Organizational health assessment",
        "Burnout counterpart measurement",
        "Team energy diagnostics"
      ],
      "relatedConstructs": [
        "Job satisfaction",
        "Burnout",
        "Organizational commitment",
        "Flow state",
        "Employee well-being"
      ],
      "keywords": [
        "work engagement",
        "vigor",
        "dedication",
        "absorption",
        "employee engagement",
        "job engagement",
        "motivation",
        "flow",
        "psychological capital"
      ],
      "license": "Freely available for non-commercial research and educational use."
    },
    {
      "id": "ocs-meyer-allen",
      "name": "Meyer & Allen Organizational Commitment Scale",
      "shortName": "OCS",
      "construct": "Organizational Commitment",
      "category": "Organizational Behavior",
      "description": "Measures three dimensions of organizational commitment: affective commitment (emotional attachment), continuance commitment (cost-based attachment), and normative commitment (obligation-based attachment). Each dimension is assessed with 6 items using a 7-point Likert scale.",
      "authors": "Meyer, J. P., & Allen, N. J.",
      "year": 1991,
      "citations": [
        "Meyer, J. P., & Allen, N. J. (1991). A three-component conceptualization of organizational commitment. Human Resource Management Review, 1(1), 61-89.",
        "Meyer, J. P., Allen, N. J., & Smith, C. A. (1993). Commitment to organizations and occupations: Extension and test of a three-component conceptualization. Journal of Applied Psychology, 78(4), 538-551."
      ],
      "numberOfItems": 18,
      "estimatedMinutes": 5,
      "items": [
        {
          "id": 1,
          "text": "I would be very happy to spend the rest of my career with this organization",
          "subscale": "Affective Commitment",
          "reverse": false
        },
        {
          "id": 2,
          "text": "I enjoy discussing my organization with people outside it",
          "subscale": "Affective Commitment",
          "reverse": false
        },
        {
          "id": 3,
          "text": "I really feel as if this organization's problems are my own",
          "subscale": "Affective Commitment",
          "reverse": false
        },
        {
          "id": 4,
          "text": "I do not feel like 'part of the family' at my organization",
          "subscale": "Affective Commitment",
          "reverse": true
        },
        {
          "id": 5,
          "text": "I do not feel 'emotionally attached' to this organization",
          "subscale": "Affective Commitment",
          "reverse": true
        },
        {
          "id": 6,
          "text": "This organization has a great deal of personal meaning for me",
          "subscale": "Affective Commitment",
          "reverse": false
        },
        {
          "id": 7,
          "text": "It would be very hard for me to leave my organization right now, even if I wanted to",
          "subscale": "Continuance Commitment",
          "reverse": false
        },
        {
          "id": 8,
          "text": "Too much of my life would be disrupted if I decided to leave my organization now",
          "subscale": "Continuance Commitment",
          "reverse": false
        },
        {
          "id": 9,
          "text": "Right now, staying with my organization is a matter of necessity as much as desire",
          "subscale": "Continuance Commitment",
          "reverse": false
        },
        {
          "id": 10,
          "text": "I believe that I have too few options to consider leaving this organization",
          "subscale": "Continuance Commitment",
          "reverse": false
        },
        {
          "id": 11,
          "text": "One of the few negative consequences of leaving this organization would be the scarcity of available alternatives",
          "subscale": "Continuance Commitment",
          "reverse": false
        },
        {
          "id": 12,
          "text": "One of the major reasons I continue to work for this organization is that leaving would require considerable personal sacrifice",
          "subscale": "Continuance Commitment",
          "reverse": false
        },
        {
          "id": 13,
          "text": "I do not feel any obligation to remain with my current employer",
          "subscale": "Normative Commitment",
          "reverse": true
        },
        {
          "id": 14,
          "text": "Even if it were to my advantage, I do not feel it would be right to leave my organization now",
          "subscale": "Normative Commitment",
          "reverse": false
        },
        {
          "id": 15,
          "text": "I would feel guilty if I left my organization now",
          "subscale": "Normative Commitment",
          "reverse": false
        },
        {
          "id": 16,
          "text": "This organization deserves my loyalty",
          "subscale": "Normative Commitment",
          "reverse": false
        },
        {
          "id": 17,
          "text": "I would not leave my organization right now because I have a sense of obligation to the people in it",
          "subscale": "Normative Commitment",
          "reverse": false
        },
        {
          "id": 18,
          "text": "I owe a great deal to my organization",
          "subscale": "Normative Commitment",
          "reverse": false
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 7,
        "labels": {
          "1": "Strongly Disagree",
          "2": "Disagree",
          "3": "Slightly Disagree",
          "4": "Neither Agree nor Disagree",
          "5": "Slightly Agree",
          "6": "Agree",
          "7": "Strongly Agree"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {
          "Affective Commitment": {
            "items": [
              1,
              2,
              3,
              4,
              5,
              6
            ],
            "description": "Emotional attachment to the organization and identification with organizational goals"
          },
          "Continuance Commitment": {
            "items": [
              7,
              8,
              9,
              10,
              11,
              12
            ],
            "description": "Perceived cost of leaving the organization and lack of alternatives"
          },
          "Normative Commitment": {
            "items": [
              13,
              14,
              15,
              16,
              17,
              18
            ],
            "description": "Sense of obligation and duty to remain with the organization"
          }
        },
        "overall": {
          "method": "none",
          "description": "Report individual subscale scores"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 2.5,
              "label": "Low Commitment",
              "description": "Weak commitment on this dimension"
            },
            {
              "min": 2.51,
              "max": 4,
              "label": "Moderate Commitment",
              "description": "Moderate commitment on this dimension"
            },
            {
              "min": 4.01,
              "max": 5.5,
              "label": "High Commitment",
              "description": "Strong commitment on this dimension"
            },
            {
              "min": 5.51,
              "max": 7,
              "label": "Very High Commitment",
              "description": "Very strong commitment on this dimension"
            }
          ]
        }
      },
      "useCases": [
        "Employee retention analysis",
        "Organizational culture assessment",
        "Understanding why employees stay",
        "Predicting turnover",
        "HR development programs"
      ],
      "relatedConstructs": [
        "Employee turnover",
        "Job satisfaction",
        "Organizational identification",
        "Employee engagement"
      ],
      "keywords": [
        "organizational commitment",
        "affective commitment",
        "continuance commitment",
        "normative commitment",
        "employee retention",
        "loyalty",
        "turnover prediction"
      ],
      "license": "Published in academic literature. Widely used in research without licensing. Items are publicly available for academic and non-commercial use."
    },
    {
      "id": "pglq",
      "name": "Path-Goal Leadership Questionnaire",
      "shortName": "PGLQ",
      "construct": "Leadership Style",
      "category": "Leadership",
      "description": "Assesses four dimensions of leadership style based on path-goal theory: directive leadership (providing clear expectations), supportive leadership (showing concern for followers), participative leadership (consulting followers), and achievement-oriented leadership (setting challenging goals).",
      "authors": "House, R. J., & Mitchell, T. R.",
      "year": 1974,
      "citations": [
        "House, R. J., & Mitchell, T. R. (1974). Path-goal theory of leadership. Contemporary Business, 3(1), 81-98.",
        "Indvik, J. (1985). A path-goal analysis of supervisor influence on subordinate performance. Journal of Academy of Management, 28(3), 639-652.",
        "Indvik, J. (1988). A more complete testing of path-goal theory. Academy of Management Journal, 31(3), 656-666."
      ],
      "numberOfItems": 20,
      "estimatedMinutes": 5,
      "items": [
        {
          "id": 1,
          "text": "I let followers know what is expected of them",
          "subscale": "Directive Leadership",
          "reverse": false
        },
        {
          "id": 2,
          "text": "I inform followers about what needs to be done and how it needs to be done",
          "subscale": "Directive Leadership",
          "reverse": false
        },
        {
          "id": 3,
          "text": "I ask followers to follow standard rules and regulations",
          "subscale": "Directive Leadership",
          "reverse": false
        },
        {
          "id": 4,
          "text": "I explain the level of performance that is expected of followers",
          "subscale": "Directive Leadership",
          "reverse": false
        },
        {
          "id": 5,
          "text": "I give vague explanations of what is expected of followers on the job",
          "subscale": "Directive Leadership",
          "reverse": true
        },
        {
          "id": 6,
          "text": "I show concern for the well-being of followers",
          "subscale": "Supportive Leadership",
          "reverse": false
        },
        {
          "id": 7,
          "text": "I am friendly and approachable",
          "subscale": "Supportive Leadership",
          "reverse": false
        },
        {
          "id": 8,
          "text": "I treat followers as equals",
          "subscale": "Supportive Leadership",
          "reverse": false
        },
        {
          "id": 9,
          "text": "I do little things to make it pleasant to be a member of the group",
          "subscale": "Supportive Leadership",
          "reverse": false
        },
        {
          "id": 10,
          "text": "I make the work more pleasant",
          "subscale": "Supportive Leadership",
          "reverse": false
        },
        {
          "id": 11,
          "text": "I consult with followers when facing a problem",
          "subscale": "Participative Leadership",
          "reverse": false
        },
        {
          "id": 12,
          "text": "I listen receptively to followers' ideas and suggestions",
          "subscale": "Participative Leadership",
          "reverse": false
        },
        {
          "id": 13,
          "text": "I act without consulting my followers",
          "subscale": "Participative Leadership",
          "reverse": true
        },
        {
          "id": 14,
          "text": "I ask followers for suggestions about upcoming assignments",
          "subscale": "Participative Leadership",
          "reverse": false
        },
        {
          "id": 15,
          "text": "I ask for suggestions from followers concerning how to carry out assignments",
          "subscale": "Participative Leadership",
          "reverse": false
        },
        {
          "id": 16,
          "text": "I set goals that challenge followers",
          "subscale": "Achievement-Oriented Leadership",
          "reverse": false
        },
        {
          "id": 17,
          "text": "I encourage continual improvement in followers' performance",
          "subscale": "Achievement-Oriented Leadership",
          "reverse": false
        },
        {
          "id": 18,
          "text": "I show that I have confidence in my followers' abilities",
          "subscale": "Achievement-Oriented Leadership",
          "reverse": false
        },
        {
          "id": 19,
          "text": "I expect followers to perform at their highest level",
          "subscale": "Achievement-Oriented Leadership",
          "reverse": false
        },
        {
          "id": 20,
          "text": "I encourage followers to consistently achieve excellence",
          "subscale": "Achievement-Oriented Leadership",
          "reverse": false
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 7,
        "labels": {
          "1": "Never",
          "2": "Hardly Ever",
          "3": "Seldom",
          "4": "Occasionally",
          "5": "Often",
          "6": "Usually",
          "7": "Always"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {
          "Directive Leadership": {
            "items": [
              1,
              2,
              3,
              4,
              5
            ],
            "description": "Providing clear expectations, standards, and procedures for followers"
          },
          "Supportive Leadership": {
            "items": [
              6,
              7,
              8,
              9,
              10
            ],
            "description": "Showing concern for followers' well-being and creating a friendly work environment"
          },
          "Participative Leadership": {
            "items": [
              11,
              12,
              13,
              14,
              15
            ],
            "description": "Consulting with followers and involving them in decision-making"
          },
          "Achievement-Oriented Leadership": {
            "items": [
              16,
              17,
              18,
              19,
              20
            ],
            "description": "Setting challenging goals and expressing confidence in followers' abilities"
          }
        },
        "overall": {
          "method": "none",
          "description": "Report individual subscale scores"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 2.5,
              "label": "Low",
              "description": "Leader rarely demonstrates this leadership style"
            },
            {
              "min": 2.51,
              "max": 4,
              "label": "Moderate",
              "description": "Leader occasionally demonstrates this leadership style"
            },
            {
              "min": 4.01,
              "max": 5.5,
              "label": "High",
              "description": "Leader frequently demonstrates this leadership style"
            },
            {
              "min": 5.51,
              "max": 7,
              "label": "Very High",
              "description": "Leader consistently demonstrates this leadership style"
            }
          ]
        }
      },
      "useCases": [
        "Leadership development",
        "Manager feedback and coaching",
        "Leadership style assessment",
        "Management training programs",
        "Team effectiveness evaluation"
      ],
      "relatedConstructs": [
        "Path-goal theory",
        "Leadership effectiveness",
        "Follower satisfaction",
        "Organizational performance"
      ],
      "keywords": [
        "leadership style",
        "directive leadership",
        "supportive leadership",
        "participative leadership",
        "achievement oriented",
        "path goal theory",
        "management",
        "leader behavior"
      ],
      "license": "Published in academic literature. Widely used in leadership education. Items are publicly available for academic and non-commercial use."
    },
    {
      "id": "ipip-bfm-50",
      "name": "IPIP Big Five Factor Markers",
      "shortName": "IPIP-50",
      "construct": "Big Five Personality Traits",
      "category": "Personality",
      "description": "Comprehensive assessment of the Big Five personality dimensions (Extraversion, Agreeableness, Conscientiousness, Neuroticism, and Openness/Intellect) using 50 items from the International Personality Item Pool. Ten items measure each of the five major personality factors.",
      "authors": "Goldberg, L. R.",
      "year": 1992,
      "citations": [
        "Goldberg, L. R. (1992). The development of markers for the Big-Five factor structure. Psychological Assessment, 4(1), 26-42."
      ],
      "numberOfItems": 50,
      "estimatedMinutes": 12,
      "items": [
        {
          "id": 1,
          "text": "Am the life of the party",
          "subscale": "Extraversion",
          "reverse": false
        },
        {
          "id": 2,
          "text": "Don't talk a lot",
          "subscale": "Extraversion",
          "reverse": true
        },
        {
          "id": 3,
          "text": "Feel comfortable around people",
          "subscale": "Extraversion",
          "reverse": false
        },
        {
          "id": 4,
          "text": "Keep in the background",
          "subscale": "Extraversion",
          "reverse": true
        },
        {
          "id": 5,
          "text": "Start conversations",
          "subscale": "Extraversion",
          "reverse": false
        },
        {
          "id": 6,
          "text": "Have little to say",
          "subscale": "Extraversion",
          "reverse": true
        },
        {
          "id": 7,
          "text": "Talk to a lot of different people at parties",
          "subscale": "Extraversion",
          "reverse": false
        },
        {
          "id": 8,
          "text": "Don't like to draw attention to myself",
          "subscale": "Extraversion",
          "reverse": true
        },
        {
          "id": 9,
          "text": "Don't mind being the center of attention",
          "subscale": "Extraversion",
          "reverse": false
        },
        {
          "id": 10,
          "text": "Am quiet around strangers",
          "subscale": "Extraversion",
          "reverse": true
        },
        {
          "id": 11,
          "text": "Feel little concern for others",
          "subscale": "Agreeableness",
          "reverse": true
        },
        {
          "id": 12,
          "text": "Am interested in people",
          "subscale": "Agreeableness",
          "reverse": false
        },
        {
          "id": 13,
          "text": "Insult people",
          "subscale": "Agreeableness",
          "reverse": true
        },
        {
          "id": 14,
          "text": "Sympathize with others' feelings",
          "subscale": "Agreeableness",
          "reverse": false
        },
        {
          "id": 15,
          "text": "Am not interested in other people's problems",
          "subscale": "Agreeableness",
          "reverse": true
        },
        {
          "id": 16,
          "text": "Have a soft heart",
          "subscale": "Agreeableness",
          "reverse": false
        },
        {
          "id": 17,
          "text": "Am not really interested in others",
          "subscale": "Agreeableness",
          "reverse": true
        },
        {
          "id": 18,
          "text": "Take time out for others",
          "subscale": "Agreeableness",
          "reverse": false
        },
        {
          "id": 19,
          "text": "Feel others' emotions",
          "subscale": "Agreeableness",
          "reverse": false
        },
        {
          "id": 20,
          "text": "Make people feel at ease",
          "subscale": "Agreeableness",
          "reverse": false
        },
        {
          "id": 21,
          "text": "Am always prepared",
          "subscale": "Conscientiousness",
          "reverse": false
        },
        {
          "id": 22,
          "text": "Leave my belongings around",
          "subscale": "Conscientiousness",
          "reverse": true
        },
        {
          "id": 23,
          "text": "Pay attention to details",
          "subscale": "Conscientiousness",
          "reverse": false
        },
        {
          "id": 24,
          "text": "Make a mess of things",
          "subscale": "Conscientiousness",
          "reverse": true
        },
        {
          "id": 25,
          "text": "Get chores done right away",
          "subscale": "Conscientiousness",
          "reverse": false
        },
        {
          "id": 26,
          "text": "Often forget to put things back in their proper place",
          "subscale": "Conscientiousness",
          "reverse": true
        },
        {
          "id": 27,
          "text": "Like order",
          "subscale": "Conscientiousness",
          "reverse": false
        },
        {
          "id": 28,
          "text": "Shirk my duties",
          "subscale": "Conscientiousness",
          "reverse": true
        },
        {
          "id": 29,
          "text": "Follow a schedule",
          "subscale": "Conscientiousness",
          "reverse": false
        },
        {
          "id": 30,
          "text": "Am exacting in my work",
          "subscale": "Conscientiousness",
          "reverse": false
        },
        {
          "id": 31,
          "text": "Get stressed out easily",
          "subscale": "Neuroticism",
          "reverse": false
        },
        {
          "id": 32,
          "text": "Am relaxed most of the time",
          "subscale": "Neuroticism",
          "reverse": true
        },
        {
          "id": 33,
          "text": "Worry about things",
          "subscale": "Neuroticism",
          "reverse": false
        },
        {
          "id": 34,
          "text": "Seldom feel blue",
          "subscale": "Neuroticism",
          "reverse": true
        },
        {
          "id": 35,
          "text": "Am easily disturbed",
          "subscale": "Neuroticism",
          "reverse": false
        },
        {
          "id": 36,
          "text": "Get upset easily",
          "subscale": "Neuroticism",
          "reverse": false
        },
        {
          "id": 37,
          "text": "Change my mood a lot",
          "subscale": "Neuroticism",
          "reverse": false
        },
        {
          "id": 38,
          "text": "Have frequent mood swings",
          "subscale": "Neuroticism",
          "reverse": false
        },
        {
          "id": 39,
          "text": "Get irritated easily",
          "subscale": "Neuroticism",
          "reverse": false
        },
        {
          "id": 40,
          "text": "Often feel blue",
          "subscale": "Neuroticism",
          "reverse": false
        },
        {
          "id": 41,
          "text": "Have a rich vocabulary",
          "subscale": "Openness/Intellect",
          "reverse": false
        },
        {
          "id": 42,
          "text": "Have difficulty understanding abstract ideas",
          "subscale": "Openness/Intellect",
          "reverse": true
        },
        {
          "id": 43,
          "text": "Have a vivid imagination",
          "subscale": "Openness/Intellect",
          "reverse": false
        },
        {
          "id": 44,
          "text": "Am not interested in abstract ideas",
          "subscale": "Openness/Intellect",
          "reverse": true
        },
        {
          "id": 45,
          "text": "Have excellent ideas",
          "subscale": "Openness/Intellect",
          "reverse": false
        },
        {
          "id": 46,
          "text": "Do not have a good imagination",
          "subscale": "Openness/Intellect",
          "reverse": true
        },
        {
          "id": 47,
          "text": "Am quick to understand things",
          "subscale": "Openness/Intellect",
          "reverse": false
        },
        {
          "id": 48,
          "text": "Use difficult words",
          "subscale": "Openness/Intellect",
          "reverse": false
        },
        {
          "id": 49,
          "text": "Spend time reflecting on things",
          "subscale": "Openness/Intellect",
          "reverse": false
        },
        {
          "id": 50,
          "text": "Am full of ideas",
          "subscale": "Openness/Intellect",
          "reverse": false
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 5,
        "labels": {
          "1": "Very Inaccurate",
          "2": "Moderately Inaccurate",
          "3": "Neither Accurate Nor Inaccurate",
          "4": "Moderately Accurate",
          "5": "Very Accurate"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {
          "Extraversion": {
            "items": [
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10
            ],
            "description": "Sociability, assertiveness, and active engagement with others"
          },
          "Agreeableness": {
            "items": [
              11,
              12,
              13,
              14,
              15,
              16,
              17,
              18,
              19,
              20
            ],
            "description": "Compassion, cooperation, and concern for others"
          },
          "Conscientiousness": {
            "items": [
              21,
              22,
              23,
              24,
              25,
              26,
              27,
              28,
              29,
              30
            ],
            "description": "Organization, discipline, and goal-directed behavior"
          },
          "Neuroticism": {
            "items": [
              31,
              32,
              33,
              34,
              35,
              36,
              37,
              38,
              39,
              40
            ],
            "description": "Emotional instability, anxiety, and negative affect"
          },
          "Openness/Intellect": {
            "items": [
              41,
              42,
              43,
              44,
              45,
              46,
              47,
              48,
              49,
              50
            ],
            "description": "Creativity, intellectual curiosity, and cognitive complexity"
          }
        },
        "overall": {
          "method": "none",
          "description": "Report individual subscale means"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 2,
              "label": "Low",
              "description": "Below average on this trait"
            },
            {
              "min": 2.01,
              "max": 3,
              "label": "Below Average",
              "description": "Somewhat below average on this trait"
            },
            {
              "min": 3.01,
              "max": 4,
              "label": "Above Average",
              "description": "Somewhat above average on this trait"
            },
            {
              "min": 4.01,
              "max": 5,
              "label": "High",
              "description": "Well above average on this trait"
            }
          ]
        }
      },
      "useCases": [
        "Comprehensive personality assessment",
        "Team personality profiles",
        "Employee development and coaching",
        "Self-awareness workshops",
        "Career planning and job fit analysis"
      ],
      "relatedConstructs": [
        "Big Five personality model",
        "OCEAN framework",
        "Work performance prediction",
        "Team dynamics"
      ],
      "keywords": [
        "big five",
        "personality",
        "OCEAN",
        "IPIP",
        "extraversion",
        "agreeableness",
        "conscientiousness",
        "neuroticism",
        "openness",
        "intellect",
        "goldberg"
      ],
      "license": "Public domain (IPIP). No restrictions on use. Available at ipip.ori.org."
    },
    {
      "id": "hexaco-60",
      "name": "HEXACO Personality Inventory - 60 Item",
      "shortName": "HEXACO-60",
      "construct": "Six-Factor Personality",
      "category": "Personality",
      "description": "Comprehensive personality assessment measuring six independent personality dimensions: Honesty-Humility, Emotionality, Extraversion, Agreeableness, Conscientiousness, and Openness to Experience. Each dimension is assessed with 10 items using a 5-point Likert scale.",
      "authors": "Ashton, M. C., & Lee, K.",
      "year": 2009,
      "citations": [
        "Ashton, M. C., & Lee, K. (2009). The HEXACO-60: A short measure of the six major dimensions of personality. Journal of Personality Assessment, 91(4), 340-345."
      ],
      "numberOfItems": 60,
      "estimatedMinutes": 15,
      "items": [
        {
          "id": 1,
          "text": "I would be quite bored by a visit to an art gallery",
          "subscale": "Openness to Experience",
          "reverse": true
        },
        {
          "id": 2,
          "text": "I plan ahead and organize things, to avoid scrambling at the last minute",
          "subscale": "Conscientiousness",
          "reverse": false
        },
        {
          "id": 3,
          "text": "I rarely hold a grudge, even against people who have badly wronged me",
          "subscale": "Agreeableness",
          "reverse": false
        },
        {
          "id": 4,
          "text": "I feel reasonably satisfied with myself overall",
          "subscale": "Extraversion",
          "reverse": false
        },
        {
          "id": 5,
          "text": "I would feel afraid if I had to travel in bad weather conditions",
          "subscale": "Emotionality",
          "reverse": false
        },
        {
          "id": 6,
          "text": "If I knew that I could never get caught, I would be willing to steal a million dollars",
          "subscale": "Honesty-Humility",
          "reverse": true
        },
        {
          "id": 7,
          "text": "I would enjoy creating a work of art, such as a novel, a song, or a painting",
          "subscale": "Openness to Experience",
          "reverse": false
        },
        {
          "id": 8,
          "text": "I often push myself very hard when trying to achieve a goal",
          "subscale": "Conscientiousness",
          "reverse": false
        },
        {
          "id": 9,
          "text": "People sometimes tell me that I am too critical of others",
          "subscale": "Agreeableness",
          "reverse": true
        },
        {
          "id": 10,
          "text": "I rarely express my opinions in group meetings",
          "subscale": "Extraversion",
          "reverse": true
        },
        {
          "id": 11,
          "text": "I sometimes can't help worrying about little things",
          "subscale": "Emotionality",
          "reverse": false
        },
        {
          "id": 12,
          "text": "I would never accept a bribe, even if it were very large",
          "subscale": "Honesty-Humility",
          "reverse": false
        },
        {
          "id": 13,
          "text": "I think that paying attention to radical ideas is a waste of time",
          "subscale": "Openness to Experience",
          "reverse": true
        },
        {
          "id": 14,
          "text": "When working on something, I don't pay much attention to small details",
          "subscale": "Conscientiousness",
          "reverse": true
        },
        {
          "id": 15,
          "text": "I tend to be lenient in judging other people",
          "subscale": "Agreeableness",
          "reverse": false
        },
        {
          "id": 16,
          "text": "I prefer jobs that involve active social interaction to those that involve working alone",
          "subscale": "Extraversion",
          "reverse": false
        },
        {
          "id": 17,
          "text": "When I suffer from a painful experience, I need someone to make me feel comfortable",
          "subscale": "Emotionality",
          "reverse": false
        },
        {
          "id": 18,
          "text": "Having a lot of money is not especially important to me",
          "subscale": "Honesty-Humility",
          "reverse": false
        },
        {
          "id": 19,
          "text": "I like people who have unconventional views",
          "subscale": "Openness to Experience",
          "reverse": false
        },
        {
          "id": 20,
          "text": "I make decisions based on the feeling of the moment rather than on careful thought",
          "subscale": "Conscientiousness",
          "reverse": true
        },
        {
          "id": 21,
          "text": "People think of me as someone who has a quick temper",
          "subscale": "Agreeableness",
          "reverse": true
        },
        {
          "id": 22,
          "text": "I feel that I am an unpopular person",
          "subscale": "Extraversion",
          "reverse": true
        },
        {
          "id": 23,
          "text": "I feel like crying when I see other people crying",
          "subscale": "Emotionality",
          "reverse": false
        },
        {
          "id": 24,
          "text": "I think that I am entitled to more respect than the average person is",
          "subscale": "Honesty-Humility",
          "reverse": true
        },
        {
          "id": 25,
          "text": "I find it boring to discuss philosophy",
          "subscale": "Openness to Experience",
          "reverse": true
        },
        {
          "id": 26,
          "text": "I always try to be accurate in my work, even at the expense of time",
          "subscale": "Conscientiousness",
          "reverse": false
        },
        {
          "id": 27,
          "text": "Most people tend to get angry more quickly than I do",
          "subscale": "Agreeableness",
          "reverse": false
        },
        {
          "id": 28,
          "text": "The first thing that I always do in a new place is to make friends",
          "subscale": "Extraversion",
          "reverse": false
        },
        {
          "id": 29,
          "text": "I rarely, if ever, have trouble sleeping due to stress or anxiety",
          "subscale": "Emotionality",
          "reverse": true
        },
        {
          "id": 30,
          "text": "If I want something from someone, I will laugh at that person's worst jokes",
          "subscale": "Honesty-Humility",
          "reverse": true
        },
        {
          "id": 31,
          "text": "I would enjoy seeing an opera or ballet",
          "subscale": "Openness to Experience",
          "reverse": false
        },
        {
          "id": 32,
          "text": "I don't allow my impulses to govern my behavior",
          "subscale": "Conscientiousness",
          "reverse": false
        },
        {
          "id": 33,
          "text": "I find it hard to fully forgive someone who has done something mean to me",
          "subscale": "Agreeableness",
          "reverse": true
        },
        {
          "id": 34,
          "text": "I tend to feel that I am a failure",
          "subscale": "Extraversion",
          "reverse": true
        },
        {
          "id": 35,
          "text": "I can handle difficult situations without needing emotional support from anyone",
          "subscale": "Emotionality",
          "reverse": true
        },
        {
          "id": 36,
          "text": "I wouldn't pretend to like someone just to get that person to do favors for me",
          "subscale": "Honesty-Humility",
          "reverse": false
        },
        {
          "id": 37,
          "text": "I think of myself as a somewhat eccentric person",
          "subscale": "Openness to Experience",
          "reverse": false
        },
        {
          "id": 38,
          "text": "When working, I sometimes have difficulties due to being disorganized",
          "subscale": "Conscientiousness",
          "reverse": true
        },
        {
          "id": 39,
          "text": "Even when people make a lot of mistakes, I rarely say anything negative",
          "subscale": "Agreeableness",
          "reverse": false
        },
        {
          "id": 40,
          "text": "I enjoy having lots of people around to talk with",
          "subscale": "Extraversion",
          "reverse": false
        },
        {
          "id": 41,
          "text": "I remain unemotional even in situations where most people get very sentimental",
          "subscale": "Emotionality",
          "reverse": true
        },
        {
          "id": 42,
          "text": "I'd be tempted to use counterfeit money, if I were sure I could get away with it",
          "subscale": "Honesty-Humility",
          "reverse": true
        },
        {
          "id": 43,
          "text": "Learning about the history and politics of other countries doesn't interest me much",
          "subscale": "Openness to Experience",
          "reverse": true
        },
        {
          "id": 44,
          "text": "I do only the minimum amount of work needed to get by",
          "subscale": "Conscientiousness",
          "reverse": true
        },
        {
          "id": 45,
          "text": "I am usually quite flexible in my opinions when people disagree with me",
          "subscale": "Agreeableness",
          "reverse": false
        },
        {
          "id": 46,
          "text": "I usually feel fairly cheerful",
          "subscale": "Extraversion",
          "reverse": false
        },
        {
          "id": 47,
          "text": "When it comes to physical danger, I am very fearful",
          "subscale": "Emotionality",
          "reverse": false
        },
        {
          "id": 48,
          "text": "I wouldn't use flattery to get a raise or promotion at work, even if I thought it would succeed",
          "subscale": "Honesty-Humility",
          "reverse": false
        },
        {
          "id": 49,
          "text": "I've never really enjoyed looking through an encyclopedia",
          "subscale": "Openness to Experience",
          "reverse": true
        },
        {
          "id": 50,
          "text": "People often joke with me about the messiness of my room or desk",
          "subscale": "Conscientiousness",
          "reverse": true
        },
        {
          "id": 51,
          "text": "People sometimes tell me that I'm too stubborn",
          "subscale": "Agreeableness",
          "reverse": true
        },
        {
          "id": 52,
          "text": "In social situations, I'm usually the one who makes the first move",
          "subscale": "Extraversion",
          "reverse": false
        },
        {
          "id": 53,
          "text": "I feel strong emotions when someone close to me is going away for a long time",
          "subscale": "Emotionality",
          "reverse": false
        },
        {
          "id": 54,
          "text": "I would like to be seen driving around in a very expensive car",
          "subscale": "Honesty-Humility",
          "reverse": true
        },
        {
          "id": 55,
          "text": "If I had the opportunity, I would like to attend a classical music concert",
          "subscale": "Openness to Experience",
          "reverse": false
        },
        {
          "id": 56,
          "text": "When I have a deadline, I often waste time doing other things",
          "subscale": "Conscientiousness",
          "reverse": true
        },
        {
          "id": 57,
          "text": "I generally accept people's faults without complaining about them",
          "subscale": "Agreeableness",
          "reverse": false
        },
        {
          "id": 58,
          "text": "I sometimes feel that I am a worthless person",
          "subscale": "Extraversion",
          "reverse": true
        },
        {
          "id": 59,
          "text": "Even in an emergency I wouldn't feel like panicking",
          "subscale": "Emotionality",
          "reverse": true
        },
        {
          "id": 60,
          "text": "I wouldn't want people to treat me as though I were superior to them",
          "subscale": "Honesty-Humility",
          "reverse": false
        }
      ],
      "responseFormat": {
        "type": "likert",
        "points": 5,
        "labels": {
          "1": "Strongly Disagree",
          "2": "Disagree",
          "3": "Neutral",
          "4": "Agree",
          "5": "Strongly Agree"
        }
      },
      "scoring": {
        "method": "mean",
        "subscales": {
          "Honesty-Humility": {
            "items": [
              6,
              12,
              18,
              24,
              30,
              36,
              42,
              48,
              54,
              60
            ],
            "description": "Genuine fairness, modesty, and resistance to manipulation"
          },
          "Emotionality": {
            "items": [
              5,
              11,
              17,
              23,
              29,
              35,
              41,
              47,
              53,
              59
            ],
            "description": "Tendency to experience fear, anxiety, and emotional sensitivity"
          },
          "Extraversion": {
            "items": [
              4,
              10,
              16,
              22,
              28,
              34,
              40,
              46,
              52,
              58
            ],
            "description": "Social confidence, assertiveness, and active engagement"
          },
          "Agreeableness": {
            "items": [
              3,
              9,
              15,
              21,
              27,
              33,
              39,
              45,
              51,
              57
            ],
            "description": "Forgiveness, tolerance, and compassion toward others"
          },
          "Conscientiousness": {
            "items": [
              2,
              8,
              14,
              20,
              26,
              32,
              38,
              44,
              50,
              56
            ],
            "description": "Organization, discipline, and diligence in task completion"
          },
          "Openness to Experience": {
            "items": [
              1,
              7,
              13,
              19,
              25,
              31,
              37,
              43,
              49,
              55
            ],
            "description": "Appreciation for art, imagination, and intellectual curiosity"
          }
        },
        "overall": {
          "method": "none",
          "description": "Report individual subscale means"
        },
        "interpretation": {
          "ranges": [
            {
              "min": 1,
              "max": 2,
              "label": "Very Low",
              "description": "Significantly below average on this dimension"
            },
            {
              "min": 2.01,
              "max": 2.75,
              "label": "Low",
              "description": "Below average on this dimension"
            },
            {
              "min": 2.76,
              "max": 3.25,
              "label": "Average",
              "description": "Average score on this dimension"
            },
            {
              "min": 3.26,
              "max": 4,
              "label": "High",
              "description": "Above average on this dimension"
            },
            {
              "min": 4.01,
              "max": 5,
              "label": "Very High",
              "description": "Significantly above average on this dimension"
            }
          ]
        }
      },
      "useCases": [
        "Comprehensive personality assessment",
        "Integrity and honesty measurement",
        "Cross-cultural personality research",
        "Team compatibility analysis",
        "Employee selection and placement"
      ],
      "relatedConstructs": [
        "Six-factor personality model",
        "Character strengths",
        "Work behavior prediction",
        "Ethical reasoning"
      ],
      "keywords": [
        "hexaco",
        "personality",
        "honesty",
        "humility",
        "emotionality",
        "extraversion",
        "agreeableness",
        "conscientiousness",
        "openness",
        "six factor",
        "ashton",
        "lee"
      ],
      "license": "Freely available for academic and research use from hexaco.org. Public version."
    }
  ]
};

export function getScaleById(id) {
  return scalesData.scales.find(s => s.id === id) || null;
}

export function findScalesByKeywords(text) {
  const lower = text.toLowerCase();
  return scalesData.scales.filter(s => {
    const searchable = [s.name, s.shortName, s.construct, s.category, s.description, ...(s.keywords || []), ...(s.useCases || [])].join(' ').toLowerCase();
    return lower.split(/\s+/).some(word => word.length > 3 && searchable.includes(word));
  });
}
