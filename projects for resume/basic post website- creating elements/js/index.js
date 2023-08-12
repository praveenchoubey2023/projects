// Write your code here
const post = (text,content,val)=>{
    const socialCard= document.createElement("div");
    socialCard.setAttribute("class","social-card");
    socialCard.setAttribute("style",`height:${val}px`)
    document.body.prepend(socialCard);
    const postIcon= document.createElement('div');
    postIcon.setAttribute("class","post-icon");
    const postTitle=document.createElement("div");
    postTitle.setAttribute('class',"post-title");
    const postUser=document.createElement('div');
    postUser.setAttribute('class','post-user');
    const postContent=document.createElement("div");
    postContent.setAttribute('class',"post-content");
    socialCard.append(postIcon,postTitle,postUser,postContent);
    postTitle.innerText=text;
    postUser.innerText="Praveen Choubey";
    postContent.innerText=content;
};
post("This is Life",`The life of vital obstacles is a journey.....
    The life of learned barriers is money,,,,
    The life of loved atmosphere is a symphony.!!!!!`,180);
post("Truth....",`गम हजारों  हों  दिल  में 
मुस्कुराहट लेक चले चलो,
दुनिया ना  तब  समझ आई  थी
ना  अब  समझ  आयेगी ,
बस  उसके  रंग  में ढले  चलो .
जो अंत  हुआ  वो बीत गया ,
एक नया  सवेरा  आयेगा 
बेघर  हुए  इस  दिल  के  लिए ,
एक नया बसेरा  आऐगा .`,280);
post("Little - Heart!!",`एक आशियाना अपना भि इन तूफानों मे गढ़ना हैं चहती, 
एक नन्हि सि चिड़िया हर पल दो तिनके ही चढ़ना है चाहती
चुग चुग लाकर इनको हर बूँदों के थपेड़ों से
हर पहर बस उनकों संग सीना है चाहती
लडते पडते हर वार से झगड़ते झगड़ते
दो तिनकों के साहारे उन तूफानों से लडना है चहती
सहते हुए हर दर्षक के तानें
देखते हुए हर मौसम के अफ़साने
बस वक़्त कि मार को सहना है चाहती
एक आशियाना अपना भि इन तूफानों मे गढ़ना हैं चहती`,300);
post("Dear...Jindagi",`अजीब सी दास्तान हैं कम्बखत जिन्दगी भी,
आज सम्हालूँ तो कल दिखे ख़ुशी सी
लम्होन् की रौशनि, और चाहतोँ कि तड़प,
हर दिन जगाती हैं यही बेसबरी ही
रोकने को दो पल काफ़ी नही, चाहते हैं कुछ कहना मुझसे भी,
इन्ही दों दों पल में चलना सिखाती है ये जिन्दगी ही।
सवारने को एक ख्वाब ही है काफ़ी 
बताने को हर बात रह जाति है बाकी,
लम्हों को चलाते चलाते गुंजाईश कल कि थोड़ी दिखा जाति है जिंदगी
इस भागते और संभालते हुए रास्तों मे ठहरना सिखा देती है जिन्दगी
अजीब सी दास्तान हैं कम्बखत जिन्दगी ।

कहीं हँसना कभी मुस्कुराना इन पलों को छूते चले जाना
क्यूंकि हर पल चलना सिखा देती है जिन्दगी ही
गिला नही है इस्सके पैंत्रों से मुझे ज़रा भी
आज किसी के साथ से मुस्कुराना समझा रही है जिन्दगी
रोकूं किसे ये कहाँ मालूम हुआ मुझे भी
सिखा तो काफी कुछ आज भी रही थी जिन्दगी,
समझाऊं कैसे खुद को बस ये नही समझा पायेगी जिन्दगी
क्यूंकि अनुभूति तो आज फिर याद दिला रही थी जिन्दगी ही
अजीब सी दास्तान हैं कम्बखत जिन्दगी भी।`,520);
post("dreamy!!!Love",`कहते हैं प्यार उनके लम्हों का साथ है
जो बार बार मिले तो आज हमारे हाथ हैं
किसको समझाऊँ इन लम्हों कि गाथा
ना मेरे साथ हुए ना किसिको दिखला पाऊँ
लम्हें तो मेरे भी प्यारे हि थे
पर प्यार किसे कहते हैं ये कैसे उनको समझाऊँ
जिस्म से बाँधे जो डोर उसे प्यार कहदूँ
या लम्हों के धागों को गिनते जाऊँ
कम पड़ सकतें हैं शायद अलफ़ाज़ साथ गुज़रें
यादों के सहारे हर साथ बुनता चला जाऊं
बड़े विचित्र हैं ये ख्यालों के धागे
आज यहाँ तो कल वहाँ ले भागे
बांधने के दो कोने जानते हैं अपनें किराएदार
एक असलियत और दूसरा ख़्वाबों का भागीदार 
ख़्वाबों को आज तो पकड़ भी लूँ
पर हकीकत इन ख़्वाबों से दूर ले भागे।`,400);
post("Relations...",`रिश्तों कि बनावट तो देखिए ऐ मुसाफिर
थोड़ा रूकिए कुछ साथ चलिये तो राहगीर
सम्बंध सुलझतें जाते हैं फिर
आज यहाँ ठोकर तो कल वहाँ कठिनाईयां होंगी हाजिर
चलते साथ तो किनारा होगा हि 
विचार बैठके करें तो साहारा मिलेगा सही
हर कठिनाई हाथ थाम चलते 
पर गाँठ अगर लग हि गयी तो सिर्फ़ याद ही रह जाती है हिससे।`,250);
post("Felt!!!",`शब्दों का क्या है, 
आज कुछ तो कल कुछ कह हि देते है
बातों कि भी खामोशि देखि
कल ईशारों से समझ आ जाति थी
और आज कल कुछ बोल हि नहींं पाति है
इतने इतफ़ाक़ परिस्थिती ने दिखाये
कि यादाश्त भी थोडी़ शांत रह जाती है
बीते पल सम्भालने का इज़हाऱ देते है
पर विश्वास भि अब एक नई चेतावनी देना चाहती है
हर घड़ी कुछ यादों को दोहरा रहि है
कुछ लम्हें शायद छूट भि जाये
पर कहानी फिर नयी धुन बना हि देती है.........`,350);
post("Myself!!!!",`You walk on it, and learn from it,
Every journey is an understanding for it,
Admire as much you want
Aspire the most on what you learnt
But each soul is predestined
With the conscience of the powerful humanbeing
Guided by his rules
We lost every emotion like fools
The classification he made
Was to continue his trade
Even in the era of understanding 
We are run by his finding
I ask to each one of his zionist
Is the cloak of a soul its only gist
Or the soal has its own chemist
One cloak defines the whole of its mist
The worst poem written by that lyricist
Whom we follow, for whom every emotion is blind
Only the right and wrong are predefined
Every thought is a curse and every feeling is a bane
And we are bound by the limits of its pain
I can curse the creator, but the destiny is not very kind
Already written , and precustomed without any shame
Their mischief is huge, that's what I Find,
Seeing the loss is where I walk out of his frame......`,590);
post("Dear!!!Jindagi",`बड़े इत्तेफाक़ खेलती है ये ज़िन्दगी
आज कुछ कह देती है इसकी बेखुदी
सोचकर रुक तो जाते है सभी
पर दिल हर किसिका संभाल नहीं सकती ये कभी
सोचता हुँ कुछ समझा दूँ इसे इससे मिलके
सुलझा दूँ इसके दुख मैं सुनके
जानता तो मैं भी हूँ इसकेे सारे किससे
याद बस आ जाते हैं कुछ मेरे हि लम्हें उन इत्तेफाकोंन में बुनके ! हम चाहते तो हैं हर ख़ुशी अपने ही हिससे
धुंदले हो जाते हैं हर गम समय में घुलके
बेखुदी तो देखिए इस कम्बख्त कि 
मुझे हि सुनाना चहती है मेरे किस्से चुन चुनके ।।`,350);
post('Wait.....Infinity',`Sitting by the clock I break every second
Waiting and repenting on their ticks
Persuading and requesting 
To stay and halt for my dreams, but it seems
They are reckoning each travel with similar ink
Neither it blinks nor it sinks
Only end is seen through naked drinks......`,250);
post('Line Of Pain',`How much does it take to draw a line
On a piece of paper its always fine
On the verge of relations its worse than a sour lime
We create we nurture and make relations incline
Soon the barriers will peep in the rhine
And slowly all the waters will be saline....`,250);
post("Trust..&..Reality",`I stay by the hold of trust
Waiting for it to show its thrust
Engulfing the reality is difficult, in its presence
As Trust always releases its essence
But time has started playing its own innocence
Innocent is it but dangerous it's sense
It will soak all the dreamy tears 
And will prick reality through me with spears
Empty handed I will accept the verdict
Because neither yesterday nor today I was capable to predict
The destiny of trust was already engraved
The woods of its grave, depicts each second it braved
These words can't save its death
As now it's already under its final breath.
But still, I stay by hold of my trust
Waiting for it to show its thrust...........`,450);
post("Waiting....with...Trust",`Filled with tears, I wait for one chirm
Trying all the endeavour but they remain firm
Dreams have lost them in veracity
To suffer its brutal audacity 
In whole process they watch with hope
Waiting for the last remnant rope
There comes the ray of light 
Smiling it says, "i was in a tremendous fight".
Seeing no bruises they realised its might.
Brightly this light again rattles
"Smile my friend i won those battles"`,350);
post("Efforts...",`Spaces have come in the bond of eternity
Standing on the curve i am filled with love upto bounty
Still trying to hold the fire in our shanty`,160);
post("Love...Clause",`Love brings beauty of the soul
Trust brings treaty of its goal
Expectations are a nurture to the troll
And patience completes this as whole`,180);
post("Tears....of...Trust",`Each vibration alerts my nerves with hope
Every ring calls for a spontaneous cope
Waiting throughout the day I battle both fights
Cowarding behind the smile for others sight
Lying by the cell phone my soul halts
Carrying the smile I face the daily salts
We both are wounded by the anguish of thoughts
Yours are taught and mine are sought
You stand on your verdict 
I wait for a change, in the way I predict
Miles separated by huge barriers
They stroll around without a carrier
How would the justice be declared
When no one here will start to care.......
The story will keep on encoring
Cause it's not a competition of scoring..`,450);
post("Separation..Reality",`कभी कभी लगता है कितना आसान होता ना
सब लौटा देना,..... आज सजा लेना और कल हटा देना
एकदम सपष्ट हो जाता ज़िंदगी का गाना
ना आज दुखता किसि का इसमें ना हो पाना
ना कल किसि को पड़ता किसि के लिये रोना
क़हीं खोया नहीं होता इस दिल का कोई कोना
बस जब ना चले रिश्ते तो सब लौटा जाना`,250);
post("Unnamed...",`Badi muddat ke baad wahan roshni ka paigam aaya
Jahan mai apne ansuon ka basta tha chod aaya
Aaj khushi ka toh pta milla hai 
Par mai uss pate ko bhi uss baste mein hi bhool aaya
Aab kaise mehsoos karun iss ujale ki tapish
Jab gum the tab bhi aur aaj khushi hai tab bhi
Meri ikshaon ka khat toh khuda bhi kahin chod aaya.`,250);
post("Words...Relations",`शब्दों कि ज़ंजीर बड़ी कठोर होती है
नफरतों और प्यार में भि इनकी पकड़ ज़ोर होति है
आप कहने से पहले सोचते नहींं इनको
पर शायद कुछ के लिए ये रास्तों की मोड़ होति है
आज कई अलफ़ाज़ हमें इस किनारे पर लाए है
लेकिन नराज़गी के इन अल्फाज़ों की महक तो कमज़ोर ही होती है।।`,250);
post("Painful...Faces",`जानता तो मैं भी हूँ और मानता भी हूँ
की चेहरें बदल जाते हैं
हर लहर के झोके कुछ नए बदलाव दिखलाते हैं
जिस जिस चेहरे से दिलासा लेने जाता हूँ
हर नजारें इत्तेफ़ाकन एक से हि धुन सुनाते हैं
कि चेहरे बदल जाते हैं

खोजनें अपनी रुह का हिस्सा निकला हूँ
फिर एक चेहरे की ओड़ में छिपते छिपाते
जोहने किसि परिपक्व धागे के पाटे
कहीं झूमतें ढूंढ़ते मिल जाये मुझे उनमें नये नाते
हर नज़ारे की सीख दोहरा रहा हूँ
पर विश्वास को अपने सीने में दबाए जा रहा हूँ`,380);
post("Revisiting...Past....&Present",`There were moments when words felt like stones
When thoughts could even prick the bones
Almighty held the hand to walk over sadder tones
Each second he herd the worst moans
Then came a knock to build again the condones
Without a sense to hear, what only the soul knows
Made me walk on a circle screeching similar tremors
Trusting my feelings I walked.............
But moments and thoughts again reciprocated their roars
And feelings had to be stitched to land over practical shores!!!!`,350);
post("Pain..Time..Healing...Relations",`लिखने को वक़्त कम पड़ जाये
पूछने से बयान हि ना कर पाये
टूटा वो था जहाँ मरहम भी ना पहुँच पाये
बटोरने में हर टुकड़ा शायद समय हि लग जाये

हम जोड़ते रहे हर घड़ियों को
संभालते रहे हर कड़ियों को 
जोहते जोहते तो भी वक़्त लग हि जाये
शायद उन लम्हों का साथ एक क्षण हँसा पाये

जिस्म कि तलब होगी लोगों कि
हमारी तो दिल में दस्तक देने कि ख्वाहिश थी
खट खटाते हुए भी समय हि कम पड़ जाये
अब तो आंसू भी दिल के घाव ना भर पाये

रिश्तों कि डोर नाजुक हि होती होगी
गांठें लगाऊं तो डोरी छोटी तो होगी 
अब उन गांठों को खोलने में वक़्त हि कम पड़ जाये
उन रिश्तों को सवारने में अब दर्द भी कुछ ना कर पाये

मरहम ढूंढ़ने इस वक़्त कि कमी का
दौड़ते रहे हर छोर, दस्तक करते रहे हर एक मोड़ 

अब मरहम लगाने में भी वक़्त हि लग जाये
और गहरे घाव भरने में समय हि कम पड़ जाये
पर टूटा तो वो था जहाँ मरहम भी ना पहुँच पाये`,620);
post("Brutal......Pain of Trust",`गये थे खोजने आशियाना ख़्वाबों सा
हर साथी इसी पथ पे बेक़ाबु था
थाम लेते हर हात, सोचके अपना सा 
पर जाना तो उन्हे भि उनकी मंज़ील तक ही था 

समझाते चले कई राहगीरों को
कहीं दिल मे कोई मोहब्बत तो हो
झांकते हि कहीं छा गया घना कोहरा सा
क्योंकी जाना तो उन्हे भि उनकी मंज़िल तक हि था

सोचा हाथ पकड़ छोड़ आते हैं उनकी मंज़िल तक
कहिं संभल जाए उनकी धड़कनों की धक-धक 
थामते हि सूना पड़ गया हामार आशियाना 
अब बचा पता केवल उनकी मंज़िल का ही था

संभालते रहे लम्हें मदहोश होके 
ज़रुरत मे उनकी कश्मकश उन्हें ना रोके
आज जताते हि छोड़ दिया हमको ही अनजानों सा 
अब पता पूछते फिरते हैं हम अपनी हि दीवारों का`,500);
post("Words...Trust",`कई बड़े बड़े शब्दों कि गुत्थी नही ज़िंदगी 
छोटे छोटे जज़्बातों में है इसकी शादगि
हिस्सों कि चाहत रखते होंगे बेगाने मुसाफिर 
हमारी तो चंद बातों में होती है ताजगी 

चलते चलते ढूंढती है इसकी बेखुदी
संभाल लीजिये समय पर लम्हों कि बेवफाई
कड़वी होति हैं यहाँ हर तन्हाई
कहीं आप पर शर्मिंदा ना हो जाये जिंदगी`,300);
post("Love & Like",`कभी  तलब  की  परिभाषा सुनि  है 
हासील  करने  कि  चाहत  होती  है
जहां  मदीरा जिस्म  को माँप्ती  है
और आत्मा  को  पहनावे कि आँच पे ताप्ती  है

अब  आरज़ू  कि  कशिश सुनते हैं
दिल  कि  सच्चि  व्याख्या  होति  हैं
शमा और परवाने  कि  गाथा  होती  है 
एक  के जलने  पे  भि  दिल  कि आरज़ू  साझा होति  है
आरज़ू  में बस  साथ  रहने  कि  तड़प ताज़ा होति है

गोधूली बेला और भोर में काली रात का फासला होता है
प्रतिदिन एक को दूसरे का इंतेज़ार कचोटता है
दूर तो रात ने किया होता है
वरना आरज़ू तो दोनो में बेशुमार होता है

सफ़र  साथ  चलके  भी  पाने  की  साज़िश  नहीं  होती 
हर  सफ़र  में आत्मा  प्रेम  के  रंग  है घोलती 
दिल  को धड़कन  का एहसास  रहता  है
क्यूंकि  आरज़ू  में ही  बस  प्यार  ठहरता  है .....`,500);
// const heading = ()=>{
//     const welcome=document.createElement("h1");
//     welcome.setAttribute("class"="welcome");
//     welcome.innerText="Welcome to my World...."
//     document.body.div.prepend(welcome);
// }
// heading();