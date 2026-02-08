// Ultra-slim scale catalog — just enough for Claude to match user needs to scales.
// Full scale data (items, scoring, etc.) lives in scalesData.js and is injected dynamically.

export const scalesCatalog = `
Burnout & Stress:
  - Copenhagen Burnout Inventory (CBI) [id:cbi] — Burnout (19 items)
  - Perceived Stress Scale (PSS-10) [id:pss-10] — Perceived Stress (10 items)
  - Oldenburg Burnout Inventory (OLBI) [id:olbi] — Burnout (16 items)
  - Brief Resilience Scale (BRS) [id:brs] — Resilience (6 items)

Career & Development:
  - Career Adapt-Abilities Scale - Short Form (CAAS-SF) [id:caas-sf] — Career Adaptability (12 items)
  - Proactive Personality Scale - Short Form (PPS-Short) [id:pps-short] — Proactive Personality (10 items)
  - Core Self-Evaluations Scale (CSES) [id:cses] — Core Self-Evaluations (12 items)
  - Wong and Law Emotional Intelligence Scale (WLEIS) [id:wleis] — Emotional Intelligence (16 items)

Communication & Interpersonal:
  - Personal Report of Communication Apprehension (PRCA-24) [id:prca-24] — Communication Apprehension (24 items)
  - Assertiveness Scale (Short Form) (AS-Short) [id:as-short] — Assertiveness (12 items)
  - Active-Empathic Listening Scale (AELS-9) [id:aels-9] — Active Listening (9 items)
  - Feedback Orientation Scale (FOS-9) [id:fos-9] — Feedback Orientation (9 items)
  - Interpersonal Reactivity Index (Short) (IRI-7) [id:iri-7] — Empathy (7 items)

Coping & Self-Care:
  - Brief COPE (Brief COPE) [id:brief-cope] — Coping Strategies and Problem-Solving (28 items)
  - Cognitive Flexibility Scale (CFS) [id:cfs] — Cognitive Flexibility and Adaptive Thinking (12 items)

Creativity & Innovation:
  - Creative Self-Efficacy Scale (CSES-4) [id:cses-4] — Creative Self-Efficacy (4 items)
  - Innovative Work Behavior Scale (IWB-9) [id:iwb-9] — Innovative Work Behavior (9 items)
  - Creative Personality Scale (CPS-18) [id:cps-18] — Creative Personality (18 items)
  - Openness to Experience (IPIP-10) (OE-10) [id:oe-10] — Openness to Experience (10 items)

Engagement & Satisfaction:
  - Utrecht Work Engagement Scale (UWES-9) [id:uwes-9] — Work Engagement (9 items)
  - Utrecht Work Engagement Scale - 17 (UWES-17) [id:uwes-17] — Work Engagement (17 items)
  - Job Satisfaction Survey (JSS) [id:jss] — Job Satisfaction (36 items)
  - Basic Psychological Needs at Work Scale (BPNW) [id:bpnw] — Psychological Need Satisfaction (12 items)

Leadership:
  - Ethical Leadership Scale (ELS-10) [id:els-10] — Ethical Leadership (10 items)
  - Empowering Leadership Questionnaire (Short) (ELQ-Short) [id:elq-short] — Empowering Leadership (12 items)
  - Abusive Supervision Scale (ASS-15) [id:ass-15] — Abusive Supervision (15 items)
  - Global Transformational Leadership Scale (GTL-7) [id:gtl-7] — Transformational Leadership (7 items)
  - Inclusive Leadership Scale (ILS-6) [id:ils-6] — Inclusive Leadership (6 items)
  - Path-Goal Leadership Questionnaire (PGLQ) [id:pglq] — Leadership Style (20 items)

Leadership & Teams:
  - Leader-Member Exchange Scale (LMX-7) [id:lmx-7] — Leader-Member Relationship Quality (7 items)
  - Psychological Safety Scale (Psychological Safety) [id:psy-safety] — Team Psychological Safety (7 items)
  - Servant Leadership Scale - Short Form (SLS-7) [id:sls-7] — Servant Leadership (7 items)

Mindfulness & Self-Regulation:
  - Mindful Attention Awareness Scale (MAAS) [id:maas] — Trait Mindfulness (15 items)
  - Emotion Regulation Questionnaire (ERQ) [id:erq] — Emotion Regulation Strategies (10 items)
  - Self-Compassion Scale - Short Form (SCS-SF) [id:scs-sf] — Self-Compassion (12 items)

Motivation:
  - Intrinsic Motivation Inventory - Interest/Enjoyment Subscale (IMI-EE) [id:imi-enjoyment] — Intrinsic motivation (7 items)
  - Work Extrinsic and Intrinsic Motivation Scale (WEIMS) [id:weims] — Work motivation (19 items)
  - Achievement Goal Questionnaire (AGQ) [id:agq] — Goal orientation (12 items)
  - Self-Determination Scale (SDS) [id:sds] — Autonomy, competence, and relatedness (24 items)
  - Compound PsyCap Scale (CPC-12R) [id:cpc-12r] — Psychological Capital (12 items)

Organizational Behavior:
  - Organizational Commitment Questionnaire (OCQ-9) [id:ocq-9] — Affective commitment (9 items)
  - Meyer & Allen Organizational Commitment Scale (OCS) [id:ocs-meyer-allen] — Organizational Commitment (18 items)
  - Organizational Justice Scale (Colquitt) (OJ) [id:oj-colquitt] — Procedural, distributive, interactional justice (20 items)
  - Organizational Citizenship Behavior Checklist (OCB-C) [id:ocb-c] — Extra-role behaviors (16 items)
  - Turnover Intention Scale (TIS-6) [id:tis-6] — Intention to leave (6 items)
  - Role Conflict and Role Ambiguity Scale (RC) [id:rc-role] — Job expectations clarity (14 items)
  - Job Embeddedness Scale (Short Form) (JE) [id:je-short] — Attachment to job (12 items)
  - Perceived Organizational Support Scale (POS-8) [id:pos-8] — Organizational support (8 items)
  - Counterproductive Work Behavior Scale (CWB-S) [id:cwb-short] — Harmful work behaviors (12 items)

Personality:
  - Mini-IPIP (Mini-IPIP) [id:mini-ipip] — Big Five Personality Traits (20 items)
  - IPIP Big Five Factor Markers (IPIP-50) [id:ipip-bfm-50] — Big Five Personality Traits (50 items)
  - HEXACO Personality Inventory - 60 Item (HEXACO-60) [id:hexaco-60] — Six-Factor Personality (60 items)
  - Ten Item Personality Inventory (TIPI) [id:tipi] — Big Five Personality (10 items)
  - Big Five Inventory-10 (BFI-10) [id:bfi-10] — Big Five Personality (10 items)
  - Dark Triad Dirty Dozen (Dark Triad DD) [id:dark-triad-dd] — Dark Personality Traits (12 items)
  - Growth Mindset Scale (Growth Mindset) [id:growth-mindset] — Mindset (8 items)
  - Grit Scale - Short Form (Grit-S) [id:grit-s] — Perseverance and Passion (8 items)
  - Narcissistic Personality Inventory-16 (NPI-16) [id:npi-16] — Narcissistic traits (16 items)
  - Self-Monitoring Scale (SMS-13) [id:sms-13] — Self-presentation monitoring (13 items)
  - Need for Cognition Scale (NCS-18) [id:ncs-18] — Tendency to enjoy cognitive effort (18 items)
  - Regulatory Focus Questionnaire (RFQ) [id:rfq] — Promotion vs prevention focus (11 items)
  - Locus of Control Scale (LOCS) [id:locs-short] — Internal vs external locus of control (10 items)
  - Trait Emotional Intelligence Questionnaire (TEIQue-SF) [id:teique-sf] — Emotional intelligence (30 items)

Teams & Collaboration:
  - Group Cohesion Questionnaire (GCQ-6) [id:gq-6] — Team Cohesion (6 items)
  - Intragroup Conflict Scale (ICS-8) [id:ics-8] — Team Conflict (8 items)
  - Team Trust Scale (TTS-6) [id:tts-6] — Team Trust (6 items)
  - Group Potency Scale (GPS-4) [id:gps-4] — Group Potency (4 items)
  - Collective Efficacy Scale (CES-8) [id:ces-8] — Collective Efficacy (8 items)
  - Shared Leadership Questionnaire (SLQ-5) [id:slq-5] — Shared Leadership (5 items)

Trust & Safety:
  - Interpersonal Trust at Work Scale (ITWS) [id:itws] — Trust at Work (20 items)
  - Generalized Trust Scale (GTS) [id:gts] — General Trust (6 items)
  - Workplace Incivility Scale (WIS) [id:wis] — Workplace Incivility (7 items)

Values & Meaning:
  - Portrait Values Questionnaire (PVQ-21) [id:pvq-short] — Personal Values (21 items)
  - Work as Meaning Inventory (WAMI) [id:wami] — Meaning in Work (10 items)
  - Calling and Vocation Questionnaire (CVQ) [id:cvq] — Calling and Vocation (12 items)

Wellbeing & Flourishing:
  - Satisfaction with Life Scale (SWLS) [id:swls] — Life Satisfaction (5 items)
  - Flourishing Scale (FS) [id:flourishing] — Flourishing (8 items)
  - Scale of Positive and Negative Experience (SPANE) [id:spane] — Emotional Well-being (12 items)
  - WHO-5 Well-Being Index (WHO-5) [id:who-5] — Psychological Well-being (5 items)
  - General Self-Efficacy Scale (GSE) [id:gse] — Self-efficacy (10 items)

Wellbeing & Mental Health Screening:
  - Patient Health Questionnaire-9 (PHQ-9) [id:phq-9] — Depression Severity (9 items)
  - Generalized Anxiety Disorder Scale-7 (GAD-7) [id:gad-7] — Anxiety Severity (7 items)
  - Positive and Negative Affect Schedule (PANAS) [id:panas] — Affective States (20 items)
  - Subjective Happiness Scale (SHS) [id:shs] — Happiness (4 items)
  - Warwick-Edinburgh Mental Wellbeing Scale (WEMWBS-14) [id:wemwbs] — Mental Wellbeing (14 items)


Work-Life & Recovery:
  - Work-Family Conflict Scale (WFC) [id:wfc] — Work-Family Conflict (18 items)
  - Recovery Experience Questionnaire (REQ) [id:req] — Recovery from Work (16 items)
`;
