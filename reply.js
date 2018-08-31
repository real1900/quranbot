var Realm = require('realm');

var map = {};


const SuraSchema = {
  name: 'QSura',
  primaryKey: 'sura_no',
  properties: {
    sura_no: { type: 'int?', default: 0 },
    no_of_verses: { type: 'int?', default: 0 },
    order_of_revelation: { type: 'int?', default: 0 },
    isDeleted: { type: 'bool', default: false },
    is_initialed: { type: 'bool', default: false },
    sura_en: { type: 'string?' },
    sura_ur: { type: 'string?' },
    sura_ur_bing: { type: 'string?' },
    sura_ur_google: { type: 'string?' },
    sura_ar: { type: 'string?' },
    sura_fa: { type: 'string?' },
    sura_ru: { type: 'string?' },
    verses: { type: 'linkingObjects', objectType: 'QVerse', property: 'whichSura' }
  }
};

const VerseSchema = {
  name: 'QVerse',
  primaryKey: 'id',
  properties: {
    arabic_version: { type: 'string?' },
    english_version: { type: 'string?' },
    footnote: { type: 'string?' },
    footnote_urdu: { type: 'string?' },
    footnote_urdu_bing: { type: 'string?' },
    footnote_urdu_google: { type: 'string?' },
    id: { type: 'int?', default: 0 },
    subtitle: { type: 'string?' },
    subtitleIndex: { type: 'int?', default: 0 },
    subtitle2: { type: 'string?' }, // for verse
    subtitle2Index: { type: 'int?', default: 0 },
    subtitle_urdu: { type: 'string?' },
    subtitle_urdu_bing: { type: 'string?' },
    subtitle_urdu_google: { type: 'string?' },
    urdu_version: { type: 'string?' },
    urdu_version_bing: { type: 'string?' },
    urdu_version_google: { type: 'string?' },
    verse_id: { type: 'int?', default: 0 },
    verse_no: { type: 'int?', default: 0 },
    farsi_version: { type: 'string?' },
    russian_version: { type: 'string?' },
    subtitle_farsi: { type: 'string?' },
    subtitle_russian: { type: 'string?' },
    footnote_farsi: { type: 'string?' },
    footnote_russian: { type: 'string?' },
    whichSura: { type: 'QSura?' },
  }
};


const IndexWordsSchema = {
  name: 'QIndexWords',
  primaryKey: 'word_id',
  properties: {
    isDeleted: { type: 'bool', default: false },
    child_id: { type: 'int?', default: 0 },
    has_words: { type: 'bool', default: false },
    is_subword: { type: 'bool', default: false },
    letter: { type: 'string?' },
    parent_id: { type: 'int?', default: 0 },
    word: { type: 'string?' },
    word_id: { type: 'int?', default: 0 },
    appendix: { type: 'QAppendices' },
    parentWord: { type: 'QIndexWords' },
    children: { type: 'linkingObjects', objectType: 'QIndexWords', property: 'parentWord' },
    verses: { type: 'QVerse[]' },
  }
};

const QAppendicesSchema = {
  name: 'QAppendices',
  primaryKey: 'id',
  properties: {
    id: { type: 'int?', default: 0 },
    text: { type: 'string?' },
    title: { type: 'string?' },
    whichWord: { type: 'QIndexWords' },
  }
};



 var getQuranVerses = function(){

  Realm.open({
    path: 'default.realm',
    schema: [SuraSchema, VerseSchema, IndexWordsSchema, QAppendicesSchema]
  }).then(realm => {

    let verses = realm.objects('QVerse');

    verses.forEach(verse => {

      var verseKey = verse.whichSura.sura_no + ":" + verse.verse_no

      var verseValue = ""

      if (verse.subtitle){

        verseValue +=  "\t" + verse.subtitle  + "\n" 
      } 

      verseValue += "[" + verseKey+ "] " + verse.english_version

      if (verse.footnote){
        verseValue +=   "\n\n" + verse.footnote
      } 

      map[verseKey] = "```" + verseValue + "```"
    });

    process.on('unhandledRejection', err => {
      console.log('Unhandled rejection:', err);
    });

  });

  return map;
}


const respmap = getQuranVerses();
module.exports = respmap;