import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
    gender: { type: String, required: true },
    familyType: { type: String, required: true },
    religion: { type: String, required: true },
    primaryCareGiver: { type: [String], default: [], required: true },
    qualification: {
        mother: { type: String, required: true },
        father: { type: String, required: true }
    },
    totalChild: { type: String, default: '' },
    childOrder: { type: String, default: '' },
    youngerSiblings: {
        number: { type: String, required: true },
        ageGroup: { type: String, required: true }
    },
    elderSiblings: {
        number: { type: String, required: true },
        ageGroup: { type: String, required: true }
    },
    helpingStaff: { type: String, default: '' },
    helpingStaffAgeRange: { type: String, default: '' },
    helpingStaffMotherTongue: { type: String, default: '' },
    numberOfFriends: { type: String, default: '' },
    friendsAgeRange: { type: String, default: '' },
    mediaViewingAge: { type: String, default: '' },
    socioeconomicClass: { type: String, required: true },
    weekdays: {
        tv: { type: String, required: true },
        smartphone: { type: String, required: true },
        laptop: { type: String, required: true },
        tablet: { type: String, required: true }
    },
    weekends: {
        tv: { type: String, required: true },
        smartphone: { type: String, required: true },
        laptop: { type: String, required: true },
        tablet: { type: String, required: true }
    },
    weekdaysScreenPurpose: {
        education: { type: String, required: true },
        entertainment: { type: String, required: true },
        playingGames: { type: String, required: true },
        socialConnect: { type: String, required: true },
        meals: { type: String, required: true },
        beforeBed: { type: String, required: true },
        engaging: { type: String, required: true }
    },
    weekendsScreenPurpose: {
        education: { type: String, required: true },
        entertainment: { type: String, required: true },
        playingGames: { type: String, required: true },
        socialConnect: { type: String, required: true },
        meals: { type: String, required: true },
        beforeBed: { type: String, required: true },
        engaging: { type: String, required: true }
    },
    eatBetterWithScreen: { type: String, required: true },
    caretakerScreenTime: { type: String, required: true },
    programsWatched: {
        animatedCartoons: { type: String, required: true },
        nonAnimatedCartoons: { type: String, required: true },
        movieAnimated: { type: String, required: true },
        movieNonAnimated: { type: String, required: true },
        songs: { type: String, required: true },
        rhymes: { type: String, required: true },
        knowledge: { type: String, required: true },
        spiritual: { type: String, required: true },
        serials: { type: String, required: true }
    },
    otherPrograms: { type: String, },
    preferedInput: { type: String, required: true },
    speechAndLangSkills: { type: String, required: true },
    outdoorActivity: { type: String, required: true },
    manageWithScreen: { type: String, required: true },
    enhancedSocialSkills: { type: String, required: true },
    reducedSpeechAndLangDevelopment: { type: String, required: true },
    enhancedCommunication: { type: String, required: true },
    attentionProblem: { type: String, default: '' },
    difficultiesWithScreenTime: { type: [String], default: []},
    awareOfGuidelines: { type: String, default: '' },
    familyGuidelines: { type: String, default: '' },
    restrictScreenTime: { type: String, required: true },
    ownership: { type: String, required: true },
    childHave: { type: String, default: '' }
})
// gender: { type: String },
// familyType: { type: String },
// religion: { type: String },
// primaryCareGiver: { type: [String] },
// qualification: {
//     mother: { type: String },
//     father: { type: String }
// },
// totalChild: { type: String },
// childOrder: { type: String },
// youngerSiblings: {
//     number: { type: String },
//     ageGroup: { type: String }
// },
// elderSiblings: {
//     number: { type: String },
//     ageGroup: { type: String }
// },
// helpingStaff: { type: String },
// helpingStaffAgeRange: { type: String },
// helpingStaffMotherTongue: { type: String },
// numberOfFriends: { type: String },
// friendsAgeRange: { type: String },
// mediaViewingAge: { type: String },
// socioeconomicClass: { type: String },
// weekdays: {
//     tv: { type: String },
//     smartphone: { type: String },
//     laptop: { type: String },
//     tablet: { type: String }
// },
// weekends: {
//     tv: { type: String },
//     smartphone: { type: String },
//     laptop: { type: String },
//     tablet: { type: String }
// },
// weekdaysScreenPurpose: {
//     education: { type: String },
//     entertainment: { type: String },
//     playingGames: { type: String },
//     socialConnect: { type: String },
//     meals: { type: String },
//     beforeBed: { type: String },
//     engaging: { type: String }
// },
// weekendsScreenPurpose: {
//     education: { type: String },
//     entertainment: { type: String },
//     playingGames: { type: String },
//     socialConnect: { type: String },
//     meals: { type: String },
//     beforeBed: { type: String },
//     engaging: { type: String }
// },
// eatBetterWithSreen: { type: String },
// caretakerScreenTime: { type: String },
// programsWatched: {
//     animatedCartoons: { type: String },
//     nonAnimatedCartoons: { type: String },
//     movieAnimated: { type: String },
//     movieNonAnimated: { type: String },
//     songs: { type: String },
//     rhymes: { type: String },
//     knowledge: { type: String },
//     spiritual: { type: String },
//     serials: { type: String }
// },
// otherPrograms: { type: String },
// preferedInput: { type: String },
// speechAndLangSkills: { type: String },
// outdoorActivity: { type: String },
// manageWithScreen: { type: String },
// enhancedCommunication: { type: String },
// reducedSpeechAndLangDevelopment: { type: String },
// enhancedSocialSkills: { type: String },
// attentionProblem: { type: String },
// difficultiesWithScreenTime: { type: String },
// awareOfGuidelines: { type: String },
// familyGuidelines: { type: String },
// restrictScreenTime: { type: String },
// ownership: { type: String },
// childHave: { type: String }
// });

export default mongoose.model("Data", dataSchema)