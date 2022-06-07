import Modal from '../end-modal/end-modal'
import React, { useState } from 'react'
import './keyboard.scss'

const Keyboard = (props) => {

    console.log(props.functionToggle);
    console.log(props.toggleModal)
    const words = [ "CIGAR", "REBUT", "SISSY", "HUMPH", "AWAKE", "BLUSH", "FOCAL", "EVADE", "NAVAL", "SERVE", "HEATH", "DWARF", "MODEL", "KARMA", "STINK", "GRADE", "QUIET", "BENCH", "ABATE", "FEIGN", "MAJOR", "DEATH", "FRESH", "CRUST", "STOOL", "COLON", "ABASE", "MARRY", "REACT", "BATTY", "PRIDE", "FLOSS", "HELIX", "CROAK", "STAFF", "PAPER", "UNFED", "WHELP", "TRAWL", "OUTDO", 
    "ADOBE", "CRAZY", "SOWER", "REPAY", "DIGIT", "CRATE", "CLUCK", "SPIKE", "MIMIC", "POUND", "MAXIM", "LINEN", "UNMET", "FLESH", "BOOBY", "FORTH", "FIRST", "STAND", "BELLY", "IVORY", "SEEDY", "PRINT", "YEARN", "DRAIN", "BRIBE", "STOUT", "PANEL", "CRASS", "FLUME", "OFFAL", "AGREE", "ERROR", "SWIRL", "ARGUE", "BLEED", "DELTA", "FLICK", "TOTEM", "WOOER", "FRONT", "SHRUB", "PARRY", "BIOME", "LAPEL", 
    "START", "GREET", "GONER", "GOLEM", "LUSTY", "LOOPY", "ROUND", "AUDIT", "LYING", "GAMMA", "LABOR", "ISLET", "CIVIC", "FORGE", "CORNY", "MOULT", "SALAD", "AGATE", "SPICY", "SPRAY", "ESSAY", "FJORD", "SPEND", "KEBAB", "GUILD", "ABACK", "MOTOR", "ALONE", "HATCH", "HYPER", "THUMB", "DOWRY", "OUGHT", "BELCH", "DUTCH", "PILOT", "TWEED", "COMET", "JAUNT", "ENEMA", "STEED", "ABYSS",
     "GROWL", "FLING", "DOZEN", "BOOZY", "ERODE", "WORLD", "GOUGE", "CLICK", "BRIAR", "GREAT", "ALTAR", "PULPY", "BLURT", "COAST", "DUCHY", "GROIN", "FIXER", "GROUP", "ROGUE", "BADLY", "SMART", "PITHY", "GAUDY", "CHILL", "HERON", "VODKA", "FINER", "SURER", "RADIO", "ROUGE", "PERCH", "RETCH", "WROTE", "CLOCK", "TILDE", "STORE", "PROVE", "BRING", "SOLVE", "CHEAT", "GRIME", "EXULT",
      "USHER", "EPOCH", "TRIAD", "BREAK", "RHINO", "VIRAL", "CONIC", "MASSE", "SONIC", "VITAL", "TRACE", "USING", "PEACH", "CHAMP", "BATON", "BRAKE", "PLUCK", "CRAZE", "GRIPE", "WEARY", "PICKY", "ACUTE", "FERRY", "ASIDE", "TAPIR", "TROLL", "UNIFY", "REBUS", "BOOST", "TRUSS", "SIEGE", "TIGER", "BANAL", "SLUMP", "CRANK", "GORGE", "QUERY", "DRINK", "FAVOR", "ABBEY", "TANGY", "PANIC", 
      "SOLAR", "SHIRE", "PROXY", "POINT", "ROBOT", "PRICK", "WINCE", "CRIMP", "KNOLL", "SUGAR", "WHACK", "MOUNT", "PERKY", "COULD", "WRUNG", "LIGHT", "THOSE", "MOIST", "SHARD", "PLEAT", "ALOFT", "SKILL", "ELDER", "FRAME", "HUMOR", "PAUSE", "ULCER", "ULTRA", "ROBIN", "CYNIC", "AGORA", "AROMA", "CAULK", "SHAKE", "PUPAL", "DODGE", "SWILL", "TACIT", "OTHER", "THORN", "TROVE", "BLOKE", 
      "VIVID", "SPILL", "CHANT", "CHOKE", "RUPEE", "NASTY", "MOURN", "AHEAD", "BRINE", "CLOTH", "HOARD", "SWEET", "MONTH", "LAPSE", "WATCH", "FOCUS", "SMELT", "TEASE", "CATER", "MOVIE", "LYNCH", "SAUTE", "ALLOW", "RENEW", "THEIR", "SLOSH", "PURGE", "CHEST", "DEPOT", "EPOXY", "NYMPH", "FOUND", "SHALL", "HARRY", "STOVE", "LOWLY", "SNOUT", "TROPE", "FEWER", "SHAWL", "NATAL", "FIBRE", 
      "COMMA", "FORAY", "SCARE", "STAIR", "BLACK", "SQUAD", "ROYAL", "CHUNK", "MINCE", "SLAVE", "SHAME", "CHEEK", "AMPLE", "FLAIR", "FOYER", "CARGO", "OXIDE", "PLANT", "OLIVE", "INERT", "ASKEW", "HEIST", "SHOWN", "ZESTY", "HASTY", "TRASH", "FELLA", "LARVA", "FORGO", "STORY", "HAIRY", "TRAIN", "HOMER", "BADGE", "MIDST", "CANNY", "FETUS", "BUTCH", "FARCE", "SLUNG", "TIPSY", "METAL", 
      "YIELD", "DELVE", "BEING", "SCOUR", "GLASS", "GAMER", "SCRAP", "MONEY", "HINGE", "ALBUM", "VOUCH", "ASSET", "TIARA", "CREPT", "BAYOU", "ATOLL", "MANOR", "CREAK", "SHOWY", "PHASE", "FROTH", "DEPTH", "GLOOM", "FLOOD", "TRAIT", "GIRTH", "PIETY", "PAYER", "GOOSE", "FLOAT", "DONOR", "ATONE", "PRIMO", "APRON", "BLOWN", "CACAO", "LOSER", "INPUT", "GLOAT", "AWFUL", "BRINK", "SMITE", "BEADY", 
      "RUSTY", "RETRO", "DROLL", "GAWKY", "HUTCH", "PINTO", "GAILY", "EGRET", "LILAC", "SEVER", "FIELD", "FLUFF", "HYDRO", "FLACK", "AGAPE", "WENCH", "VOICE", "STEAD", "STALK", "BERTH", "MADAM", "NIGHT", "BLAND", "LIVER", "WEDGE", "AUGUR", "ROOMY", "WACKY", "FLOCK", "ANGRY", "BOBBY", "TRITE", "APHID", "TRYST", "MIDGE", "POWER", "ELOPE", "CINCH", "MOTTO", "STOMP", "UPSET", "BLUFF", "CRAMP", 
      "QUART", "COYLY", "YOUTH", "RHYME", "BUGGY", "ALIEN", "SMEAR", "UNFIT", "PATTY", "CLING", "GLEAN", "LABEL", "HUNKY", "KHAKI", "POKER", "GRUEL", "TWICE", "TWANG", "SHRUG", "TREAT", "UNLIT", "WASTE", "MERIT", "WOVEN", "OCTAL", "NEEDY", "CLOWN", "WIDOW", "IRONY", "RUDER", "GAUZE", "CHIEF", "ONSET", "PRIZE", "FUNGI", "CHARM", "GULLY", "INTER", "WHOOP", "TAUNT", "LEERY", "CLASS", "THEME", 
      "LOFTY", "TIBIA", "BOOZE", "ALPHA", "THYME", "ECLAT", "DOUBT", "PARER", "CHUTE", "STICK", "TRICE", "ALIKE", "SOOTH", "RECAP", "SAINT", "LIEGE", "GLORY", "GRATE", "ADMIT", "BRISK", "SOGGY", "USURP", "SCALD", "SCORN", "LEAVE", "TWINE", "STING", "BOUGH", "MARSH", "SLOTH", "DANDY", "VIGOR", "HOWDY", "ENJOY", "VALID", "IONIC", "EQUAL", "UNSET", "FLOOR", "CATCH", "SPADE", "STEIN", "EXIST", 
      "QUIRK", "DENIM", "GROVE", "SPIEL", "MUMMY", "FAULT", "FOGGY", "FLOUT", "CARRY", "SNEAK", "LIBEL", "WALTZ", "APTLY", "PINEY", "INEPT", "ALOUD", "PHOTO", "DREAM", "STALE", "VOMIT", "OMBRE", "FANNY", "UNITE", "SNARL", "BAKER", "THERE", "GLYPH", "POOCH", "HIPPY", "SPELL", "FOLLY", "LOUSE", "GULCH", "VAULT", "GODLY", "THREW", "FLEET", "GRAVE", "INANE", "SHOCK", "CRAVE", "SPITE", "VALVE", 
      "SKIMP", "CLAIM", "RAINY", "MUSTY", "PIQUE", "DADDY", "QUASI", "ARISE", "DONTT", "REPOS", "AGING", "VALET", "OPIUM", "AVERT", "STUCK", "RECUT", "MULCH", "GENRE", "PLUME", "RIFLE", "COUNT", "INCUR", "TOTAL", "WREST", "MOCHA", "DETER", "STUDY", "LOVER", "SAFER", "RIVET", "FUNNY", "SMOKE", "MOUND", "UNDUE", "SEDAN", "PAGAN", "SWINE", "GUILE", "GUSTY", "EQUIP", "TOUGH", "CANOE", "CHAOS", 
      "COVET", "HUMAN", "UDDER", "LUNCH", "BLAST", "STRAY", "MANGA", "MELEE", "LEFTY", "QUICK", "PASTE", "GIVEN", "OCTET", "RISEN", "GROAN", "LEAKY", "GRIND", "CARVE", "LOOSE", "SADLY", "SPILT", "APPLE", "SLACK", "HONEY", "FINAL", "SHEEN", "EERIE", "MINTY", "SLICK", "DERBY", "WHARF", "SPELT", "COACH", "ERUPT", "SINGE", "PRICE", "SPAWN", "FAIRY", "JIFFY", "FILMY", "STACK", "CHOSE", "SLEEP", 
      "ARDOR", "NANNY", "NIECE", "WOOZY", "HANDY", "GRACE", "DITTO", "STANK", "CREAM", "USUAL", "DIODE", "VALOR", "ANGLE", "NINJA", "MUDDY", "CHASE", "REPLY", "PRONE", "SPOIL", "HEART", "SHADE", "DINER", "ARSON", "ONION", "SLEET", "DOWEL", "COUCH", "PALSY", "BOWEL", "SMILE", "EVOKE", "CREEK", "LANCE", "EAGLE", "IDIOT", "SIREN", "BUILT", "EMBED", "AWARD", "DROSS", "ANNUL", "GOODY", "FROWN", 
      "PATIO", "LADEN", "HUMID", "ELITE", "LYMPH", "EDIFY", "MIGHT", "RESET", "VISIT", "GUSTO", "PURSE", "VAPOR", "CROCK", "WRITE", "SUNNY", "LOATH", "CHAFF", "SLIDE", "QUEER", "VENOM", "STAMP", "SORRY", "STILL", "ACORN", "APING", "PUSHY", "TAMER", "HATER", "MANIA", "AWOKE", "BRAWN", "SWIFT", "EXILE", "BIRCH", "LUCKY", "FREER", "RISKY", "GHOST", "PLIER", "LUNAR", "WINCH", "SNARE", "NURSE", 
      "HOUSE", "BORAX", "NICER", "LURCH", "EXALT", "ABOUT", "SAVVY", "TOXIN", "TUNIC", "PRIED", "INLAY", "CHUMP", "LANKY", "CRESS", "EATER", "ELUDE", "CYCLE", "KITTY", "BOULE", "MORON", "TENET", "PLACE", "LOBBY", "PLUSH", "VIGIL", "INDEX", "BLINK", "CLUNG", "QUALM", "CROUP", "CLINK", "JUICY", "STAGE", "DECAY", "NERVE", "FLIER", "SHAFT", "CROOK", "CLEAN", "CHINA", "RIDGE", "VOWEL", "GNOME", 
      "SNUCK", "ICING", "SPINY", "RIGOR", "SNAIL", "FLOWN", "RABID", "PROSE", "THANK", "POPPY", "BUDGE", "FIBER", "MOLDY", "DOWDY", "KNEEL", "TRACK", "CADDY", "QUELL", "DUMPY", "PALER", "SWORE", "REBAR", "SCUBA", "SPLAT", "FLYER", "HORNY", "MASON", "DOING", "OZONE", "AMPLY"]

    let gc = window.localStorage.getItem('GAME_COUNT') || 0;
    let gw = window.localStorage.getItem('GAMES_WON') || 0;
    let cws = window.localStorage.getItem('CURRENT_WIN_STREAK') || 0;
    let mws = window.localStorage.getItem('MAX_WIN_STREAK') || 0;

    let aScore = window.localStorage.getItem('A_SCORE') || 0;
    let bScore = window.localStorage.getItem('B_SCORE') || 0;
    let cScore = window.localStorage.getItem('C_SCORE') || 0;
    let dScore = window.localStorage.getItem('D_SCORE') || 0;
    let eScore = window.localStorage.getItem('E_SCORE') || 0;
    let fScore = window.localStorage.getItem('F_SCORE') || 0;

    const [gameScore, setGameScore] = useState(0);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [currentWinStreak, setCurrentWinStreak] = useState(parseInt(cws));
    const [maxWinStreak, setMaxWinStreak] = useState(parseInt(mws));
    const [gamesWon, setGamesWon] = useState(parseInt(gw))
    const [gameCount, setGameCount] = useState(parseInt(gc));
    const [rowIterator, setRowIterator] = useState(1);
    const [letterIterator, setLetterIterator] = useState(0);
    const [scores, setScores] = useState({a: aScore, b: bScore, c: cScore, d: dScore, e: eScore, f: fScore})



    let word = words[gameCount];
    console.log(word)

    const keyClick = (e) => {
        let currentRow = document.getElementById(rowIterator);
        let letterArr = currentRow.children;
        if(letterIterator < 6) {
            letterArr[letterIterator].innerHTML = e.target.innerHTML;
            setLetterIterator((prev) => prev + + 1);
        }
    }

    const enterClick = () => {
        let answerLetters = [...document.getElementById(rowIterator).children];
        let answer = [];
        answerLetters.forEach(letter => {
            answer.push(letter.innerHTML);
        })
        const wordArr = word.split('');

        if (letterIterator === 5 && answer.join('') === wordArr.join('')) {
            answer.forEach((letter, i) => {
                let key = document.getElementById(letter);
                if (letter === wordArr[i]) {
                    answerLetters[i].classList.add('green');
                    if(!key.classList.contains('green-key')) {
                        key.classList.add('green-key')
                    }
                } else if (letter !== wordArr[i] && wordArr.includes(letter)) {
                    answerLetters[i].classList.add('yellow');
                    if (!key.classList.contains('yellow-key')) {
                        key.classList.add('yellow-key')
                    }
                } else {
                    answerLetters[i].classList.add('gray');
                    if (!key.classList.contains('grey')) {
                        key.classList.add('grey')
                    }
                }
            })
            setLetterIterator(0);

            setGameScore(rowIterator - 1)
            setGameCount((prev) => prev + 1);
            setGamesWon((prev) => prev + 1);
            setCurrentWinStreak((prev) => prev + 1);
            setRowIterator(1);
            setBtnDisabled(false);
            window.localStorage.setItem('GAME_COUNT', JSON.stringify(gameCount + 1));
            window.localStorage.setItem('GAMES_WON', JSON.stringify(gamesWon + 1));
            window.localStorage.setItem('CURRENT_WIN_STREAK', JSON.stringify(currentWinStreak + 1));

            props.functionToggle()

            const key = Object.keys(scores)[rowIterator - 1]
            const value = scores[key];

            setScores({...scores, [key]: value + 1});
            console.log(scores)

            

            if (currentWinStreak + 1 >= maxWinStreak) {
                setMaxWinStreak(currentWinStreak + 1)
            }

            window.localStorage.setItem('MAX_WIN_STREAK', JSON.stringify(maxWinStreak + 1));

        } else if (letterIterator === 5 && answer.join('') !== wordArr.join('') && rowIterator < 6) {
            answer.forEach((letter, i) => {
                let key = document.getElementById(letter);
                if (letter === wordArr[i]) {
                    answerLetters[i].classList.add('green');
                    if(!key.classList.contains('green-key')) {
                        key.classList.add('green-key')
                    }
                } else if (letter !== wordArr[i] && wordArr.includes(letter)) {
                    answerLetters[i].classList.add('yellow');
                    if (!key.classList.contains('yellow-key')) {
                        key.classList.add('yellow-key')
                    }
                } else {
                    answerLetters[i].classList.add('gray');
                    if (!key.classList.contains('grey')) {
                        key.classList.add('grey')
                    }
                }
            })

            setRowIterator((prev) => prev + 1);
            setLetterIterator(0);
            // setGameCount((prev) => prev + 1);
            // window.localStorage.setItem('GAME_COUNT', JSON.stringify(gameCount + 1))
            // window.localStorage.setItem('CURRENT_WIN_STREAK', JSON.stringify(0))
        }else {
            console.log("WRONG")
            console.log(letterIterator, rowIterator)
            setGameCount((prev) => prev + 1);
            setCurrentWinStreak(0)
            window.localStorage.setItem('GAME_COUNT', JSON.stringify(gameCount + 1))
            window.localStorage.setItem('CURRENT_WIN_STREAK', JSON.stringify(0));
            document.getElementById('modal-layer').classList.remove('hide');
        }
    }
  
  return (
    <div className="keyboard-container">
        <div className="keyboard-keys">
            <div className="key-row">
                <button type='button' className="key" id="Q" onClick={(e) => keyClick(e)}>Q</button>
                <button type='button' className="key" id="W" onClick={(e) => keyClick(e)}>W</button>
                <button type='button' className="key" id="E" onClick={(e) => keyClick(e)}>E</button>
                <button type='button' className="key" id="R" onClick={(e) => keyClick(e)}>R</button>
                <button type='button' className="key" id="T" onClick={(e) => keyClick(e)}>T</button>
                <button type='button' className="key" id="Y" onClick={(e) => keyClick(e)}>Y</button>
                <button type='button' className="key" id="U" onClick={(e) => keyClick(e)}>U</button>
                <button type='button' className="key" id="I" onClick={(e) => keyClick(e)}>I</button>
                <button type='button' className="key" id="O" onClick={(e) => keyClick(e)}>O</button>
                <button type='button' className="key" id="P" onClick={(e) => keyClick(e)}>P</button>
            </div>
            <div className="key-row">
                <button type='button' className="key" id="A" onClick={(e) => keyClick(e)}>A</button>
                <button type='button' className="key" id="S" onClick={(e) => keyClick(e)}>S</button>
                <button type='button' className="key" id="D" onClick={(e) => keyClick(e)}>D</button>
                <button type='button' className="key" id="F" onClick={(e) => keyClick(e)}>F</button>
                <button type='button' className="key" id="G" onClick={(e) => keyClick(e)}>G</button>
                <button type='button' className="key" id="H" onClick={(e) => keyClick(e)}>H</button>
                <button type='button' className="key" id="J" onClick={(e) => keyClick(e)}>J</button>
                <button type='button' className="key" id="K" onClick={(e) => keyClick(e)}>K</button>
                <button type='button' className="key" id="L" onClick={(e) => keyClick(e)}>L</button>
            </div>
            <div className="key-row">
                <button type='button' className="key button-large" onClick={(e) => enterClick(e)} id='enter'>Enter</button>
                <button type='button' className="key" id="Z" onClick={(e) => keyClick(e)}>Z</button>
                <button type='button' className="key" id="X" onClick={(e) => keyClick(e)}>X</button>
                <button type='button' className="key" id="C" onClick={(e) => keyClick(e)}>C</button>
                <button type='button' className="key" id="V" onClick={(e) => keyClick(e)}>V</button>
                <button type='button' className="key" id="B" onClick={(e) => keyClick(e)}>B</button>
                <button type='button' className="key" id="N" onClick={(e) => keyClick(e)}>N</button>
                <button type='button' className="key" id="M" onClick={(e) => keyClick(e)}>M</button>
                <button type='button' className="key button-large" id='delete'><i className="fa-solid fa-delete-left"></i></button>
            </div>
        </div>

        { props.toggleModal ? <Modal setBtnDisabled={setBtnDisabled} btnDisabled={btnDisabled} functionToggle ={props.functionToggle} scores={scores} gameCount={gameCount} gamesWon={gamesWon} currentWinStreak={currentWinStreak} maxWinStreak={maxWinStreak} /> : null }
    </div>
  )
}

export default Keyboard