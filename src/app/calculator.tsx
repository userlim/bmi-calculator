'use client'

import { useState, useEffect } from 'react'

type HeightUnit = 'cm' | 'ft'
type WeightUnit = 'kg' | 'lbs'
type Gender = 'male' | 'female' | 'other'
type Language = 'en' | 'es' | 'fr' | 'de' | 'it' | 'pt' | 'ja' | 'zh' | 'ko' | 'ru' | 'ar' | 'hi' | 'bn' | 'pa' | 'te' | 'mr' | 'gu' | 'kn' | 'ml' | 'ta'

interface BMIResult {
  bmi: number
  category: string
  categoryColor: string
  healthyMin: number
  healthyMax: number
  bmiPrime: number
}

interface TextStrings {
  title: string
  height: string
  weight: string
  age: string
  gender: string
  calculate: string
  result: string
  category: string
  healthyRange: string
  bmiPrime: string
  underweight: string
  normal: string
  overweight: string
  obese: string
  male: string
  female: string
  other: string
  disclaimer: string
  reference: string
  bmiChartTitle: string
  categoryInfo: string
}

const translations: Record<Language, TextStrings> = {
  en: {
    title: 'BMI Calculator',
    height: 'Height',
    weight: 'Weight',
    age: 'Age (optional)',
    gender: 'Gender',
    calculate: 'Calculate BMI',
    result: 'Your BMI',
    category: 'Category',
    healthyRange: 'Healthy Weight Range',
    bmiPrime: 'BMI Prime',
    underweight: 'Underweight',
    normal: 'Normal Weight',
    overweight: 'Overweight',
    obese: 'Obese',
    male: 'Male',
    female: 'Female',
    other: 'Other',
    disclaimer:
      'Disclaimer: This calculator is for informational purposes only. Consult a healthcare professional for personalized health advice.',
    reference: 'BMI Categories Reference',
    bmiChartTitle: 'BMI Chart',
    categoryInfo: 'Category Information',
  },
  es: {
    title: 'Calculadora de IMC',
    height: 'Altura',
    weight: 'Peso',
    age: 'Edad (opcional)',
    gender: 'Género',
    calculate: 'Calcular IMC',
    result: 'Tu IMC',
    category: 'Categoría',
    healthyRange: 'Rango de Peso Saludable',
    bmiPrime: 'IMC Prime',
    underweight: 'Bajo peso',
    normal: 'Peso Normal',
    overweight: 'Sobrepeso',
    obese: 'Obeso',
    male: 'Hombre',
    female: 'Mujer',
    other: 'Otro',
    disclaimer:
      'Descargo de responsabilidad: Esta calculadora es solo para fines informativos. Consulte a un profesional de la salud.',
    reference: 'Referencia de Categorías de IMC',
    bmiChartTitle: 'Tabla de IMC',
    categoryInfo: 'Información de Categoría',
  },
  fr: {
    title: 'Calculatrice IMC',
    height: 'Taille',
    weight: 'Poids',
    age: 'Âge (optionnel)',
    gender: 'Sexe',
    calculate: 'Calculer IMC',
    result: 'Votre IMC',
    category: 'Catégorie',
    healthyRange: 'Plage de Poids Sain',
    bmiPrime: 'IMC Prime',
    underweight: 'Insuffisance pondérale',
    normal: 'Poids normal',
    overweight: 'Surpoids',
    obese: 'Obèse',
    male: 'Homme',
    female: 'Femme',
    other: 'Autre',
    disclaimer:
      'Avis de non-responsabilité: Cette calculatrice est à titre informatif uniquement. Consultez un professionnel de la santé.',
    reference: 'Référence des Catégories IMC',
    bmiChartTitle: 'Tableau IMC',
    categoryInfo: 'Information de Catégorie',
  },
  de: {
    title: 'BMI-Rechner',
    height: 'Größe',
    weight: 'Gewicht',
    age: 'Alter (optional)',
    gender: 'Geschlecht',
    calculate: 'BMI berechnen',
    result: 'Ihr BMI',
    category: 'Kategorie',
    healthyRange: 'Gesundes Gewichtsbereich',
    bmiPrime: 'BMI Prime',
    underweight: 'Untergewicht',
    normal: 'Normalgewicht',
    overweight: 'Übergewicht',
    obese: 'Adipositas',
    male: 'Männlich',
    female: 'Weiblich',
    other: 'Sonstiges',
    disclaimer:
      'Haftungsausschluss: Dieser Rechner dient nur zu Informationszwecken. Konsultieren Sie einen Gesundheitsfachmann.',
    reference: 'BMI-Kategorien-Referenz',
    bmiChartTitle: 'BMI-Tabelle',
    categoryInfo: 'Kategorieinformation',
  },
  it: {
    title: 'Calcolatore IMC',
    height: 'Altezza',
    weight: 'Peso',
    age: 'Età (opzionale)',
    gender: 'Genere',
    calculate: 'Calcola IMC',
    result: 'Il tuo IMC',
    category: 'Categoria',
    healthyRange: 'Intervallo di Peso Sano',
    bmiPrime: 'IMC Prime',
    underweight: 'Sottopeso',
    normal: 'Peso Normale',
    overweight: 'Sovrappeso',
    obese: 'Obeso',
    male: 'Maschio',
    female: 'Femmina',
    other: 'Altro',
    disclaimer:
      'Disclaimer: Questo calcolatore è solo a scopo informativo. Consultare un professionista sanitario.',
    reference: 'Riferimento Categorie IMC',
    bmiChartTitle: 'Tabella IMC',
    categoryInfo: 'Informazioni Categoria',
  },
  pt: {
    title: 'Calculadora de IMC',
    height: 'Altura',
    weight: 'Peso',
    age: 'Idade (opcional)',
    gender: 'Gênero',
    calculate: 'Calcular IMC',
    result: 'Seu IMC',
    category: 'Categoria',
    healthyRange: 'Faixa de Peso Saudável',
    bmiPrime: 'IMC Prime',
    underweight: 'Abaixo do peso',
    normal: 'Peso Normal',
    overweight: 'Sobrepeso',
    obese: 'Obeso',
    male: 'Masculino',
    female: 'Feminino',
    other: 'Outro',
    disclaimer:
      'Isenção de responsabilidade: Esta calculadora é apenas para fins informativos. Consulte um profissional de saúde.',
    reference: 'Referência de Categorias de IMC',
    bmiChartTitle: 'Tabela de IMC',
    categoryInfo: 'Informações de Categoria',
  },
  ja: {
    title: 'BMI計算機',
    height: '身長',
    weight: '体重',
    age: '年齢（オプション）',
    gender: '性別',
    calculate: 'BMIを計算',
    result: 'あなたのBMI',
    category: 'カテゴリー',
    healthyRange: '健康的な体重範囲',
    bmiPrime: 'BMIプライム',
    underweight: '低体重',
    normal: '標準体重',
    overweight: '過体重',
    obese: '肥満',
    male: '男性',
    female: '女性',
    other: 'その他',
    disclaimer: '免責事項：この計算機は情報提供のみを目的としています。医療専門家に相談してください。',
    reference: 'BMIカテゴリーリファレンス',
    bmiChartTitle: 'BMIチャート',
    categoryInfo: 'カテゴリー情報',
  },
  zh: {
    title: 'BMI计算器',
    height: '身高',
    weight: '体重',
    age: '年龄（可选）',
    gender: '性别',
    calculate: '计算BMI',
    result: '您的BMI',
    category: '类别',
    healthyRange: '健康体重范围',
    bmiPrime: 'BMI指数',
    underweight: '体重过轻',
    normal: '正常体重',
    overweight: '体重超重',
    obese: '肥胖',
    male: '男性',
    female: '女性',
    other: '其他',
    disclaimer: '免责声明：此计算器仅供参考。请咨询医疗专业人士。',
    reference: 'BMI类别参考',
    bmiChartTitle: 'BMI图表',
    categoryInfo: '类别信息',
  },
  ko: {
    title: 'BMI 계산기',
    height: '신장',
    weight: '체중',
    age: '나이(선택사항)',
    gender: '성별',
    calculate: 'BMI 계산',
    result: '귀하의 BMI',
    category: '범주',
    healthyRange: '건강한 체중 범위',
    bmiPrime: 'BMI 소수',
    underweight: '저체중',
    normal: '정상 체중',
    overweight: '과체중',
    obese: '비만',
    male: '남성',
    female: '여성',
    other: '기타',
    disclaimer: '면책조항: 이 계산기는 정보 제공 목적으로만 사용됩니다. 의료 전문가와 상담하세요.',
    reference: 'BMI 범주 참고',
    bmiChartTitle: 'BMI 차트',
    categoryInfo: '범주 정보',
  },
  ru: {
    title: 'Калькулятор ИМТ',
    height: 'Рост',
    weight: 'Вес',
    age: 'Возраст (необязательно)',
    gender: 'Пол',
    calculate: 'Рассчитать ИМТ',
    result: 'Ваш ИМТ',
    category: 'Категория',
    healthyRange: 'Здоровый диапазон веса',
    bmiPrime: 'ИМТ Простой',
    underweight: 'Недостаточный вес',
    normal: 'Нормальный вес',
    overweight: 'Избыточный вес',
    obese: 'Ожирение',
    male: 'Мужской',
    female: 'Женский',
    other: 'Другое',
    disclaimer:
      'Отказ от ответственности: Этот калькулятор предназначен только для информационных целей. Проконсультируйтесь с медицинским специалистом.',
    reference: 'Справочник по категориям ИМТ',
    bmiChartTitle: 'Таблица ИМТ',
    categoryInfo: 'Информация о категории',
  },
  ar: {
    title: 'حاسبة مؤشر كتلة الجسم',
    height: 'الارتفاع',
    weight: 'الوزن',
    age: 'العمر (اختياري)',
    gender: 'الجنس',
    calculate: 'حساب مؤشر كتلة الجسم',
    result: 'مؤشر كتلة الجسم الخاص بك',
    category: 'فئة',
    healthyRange: 'نطاق الوزن الصحي',
    bmiPrime: 'مؤشر كتلة الجسم الأولي',
    underweight: 'نقص الوزن',
    normal: 'الوزن الطبيعي',
    overweight: 'زيادة الوزن',
    obese: 'السمنة',
    male: 'ذكر',
    female: 'أنثى',
    other: 'آخر',
    disclaimer:
      'إخلاء المسؤولية: هذا الحاسبة لأغراض إعلامية فقط. استشر متخصص صحي.',
    reference: 'مرجع فئات مؤشر كتلة الجسم',
    bmiChartTitle: 'مخطط مؤشر كتلة الجسم',
    categoryInfo: 'معلومات الفئة',
  },
  hi: {
    title: 'बीएमआई कैलकुलेटर',
    height: 'ऊंचाई',
    weight: 'वजन',
    age: 'उम्र (वैकल्पिक)',
    gender: 'लिंग',
    calculate: 'बीएमआई की गणना करें',
    result: 'आपका बीएमआई',
    category: 'श्रेणी',
    healthyRange: 'स्वस्थ वजन सीमा',
    bmiPrime: 'बीएमआई प्राइम',
    underweight: 'कम वजन',
    normal: 'सामान्य वजन',
    overweight: 'अधिक वजन',
    obese: 'मोटा',
    male: 'पुरुष',
    female: 'महिला',
    other: 'अन्य',
    disclaimer:
      'अस्वीकरण: यह कैलकुलेटर केवल सूचनात्मक उद्देश्यों के लिए है। स्वास्थ्य सेवा प्रदाता से परामर्श लें।',
    reference: 'बीएमआई श्रेणी संदर्भ',
    bmiChartTitle: 'बीएमआई चार्ट',
    categoryInfo: 'श्रेणी जानकारी',
  },
  bn: {
    title: 'বিএমআই ক্যালকুলেটর',
    height: 'উচ্চতা',
    weight: 'ওজন',
    age: 'বয়স (ঐচ্ছিক)',
    gender: 'লিঙ্গ',
    calculate: 'বিএমআই গণনা করুন',
    result: 'আপনার বিএমআই',
    category: 'বিভাগ',
    healthyRange: 'স্বাস্থ্যকর ওজনের পরিসীমা',
    bmiPrime: 'বিএমআই প্রাইম',
    underweight: 'কম ওজন',
    normal: 'স্বাভাবিক ওজন',
    overweight: 'অতিরিক্ত ওজন',
    obese: 'স্থূল',
    male: 'পুরুষ',
    female: 'মহিলা',
    other: 'অন্য',
    disclaimer:
      'দাবিত্যাগ: এই ক্যালকুলেটরটি শুধুমাত্র তথ্য প্রদানের উদ্দেশ্যে। স্বাস্থ্যসেবা পেশাদারের সাথে পরামর্শ করুন।',
    reference: 'বিএমআই বিভাগ রেফারেন্স',
    bmiChartTitle: 'বিএমআই চার্ট',
    categoryInfo: 'বিভাগ তথ্য',
  },
  pa: {
    title: 'ਬੀਐਮਆਈ ਕੈਲਕੁਲੇਟਰ',
    height: 'ਕੱਦ',
    weight: 'ਵਜ਼ਨ',
    age: 'ਉਮਰ (ਵਿਕਲਪਿਕ)',
    gender: 'ਲਿੰਗ',
    calculate: 'ਬੀਐਮਆਈ ਦੀ ਗਣਨਾ ਕਰੋ',
    result: 'ਤੁਹਾਡਾ ਬੀਐਮਆਈ',
    category: 'ਸ਼੍ਰੇਣੀ',
    healthyRange: 'ਸਿਹਤਮੰਦ ਭਾਰ ਦੀ ਰੇਂਜ',
    bmiPrime: 'ਬੀਐਮਆਈ ਪ੍ਰਾਈਮ',
    underweight: 'ਘੱਟ ਵਜ਼ਨ',
    normal: 'ਆਮ ਵਜ਼ਨ',
    overweight: 'ਵਧੇ ਭਾਰ ਵਾਲਾ',
    obese: 'ਮੋਟਾ',
    male: 'ਮਰਦ',
    female: 'ਔਰਤ',
    other: 'ਹੋਰ',
    disclaimer:
      'ਦਾਅਵੇ ਦੀ ਅਸਵੀਕ੍ਰਿਤੀ: ਇਹ ਕੈਲਕੁਲੇਟਰ ਸਿਰਫ ਜਾਣਕਾਰੀ ਦੇ ਉਦੇਸ਼ ਲਈ ਹੈ। ਸਾਹਿਤ ਸੇਵਾ ਪੇਸ਼ਾ ਨਾਲ ਸਲਾਹ ਲਓ।',
    reference: 'ਬੀਐਮਆਈ ਸ਼੍ਰੇਣੀ ਸੰਦਰਭ',
    bmiChartTitle: 'ਬੀਐਮਆਈ ਚਾਰਟ',
    categoryInfo: 'ਸ਼੍ਰੇਣੀ ਜਾਣਕਾਰੀ',
  },
  te: {
    title: 'బిఎమ్ఐ కాలిక్యులేటర్',
    height: 'ఎత్తు',
    weight: 'బరువు',
    age: 'వయస్సు (ఐచ్ఛికం)',
    gender: 'లింగం',
    calculate: 'బిఎమ్ఐని లెక్కించండి',
    result: 'మీ బిఎమ్ఐ',
    category: 'వర్గం',
    healthyRange: 'ఆరోగ్యకరమైన బరువు పరిధి',
    bmiPrime: 'బిఎమ్ఐ ప్రైమ్',
    underweight: 'తక్కువ బరువు',
    normal: 'సాధారణ బరువు',
    overweight: 'అధిక బరువు',
    obese: 'స్థూలకాయం',
    male: 'పురుషుడు',
    female: 'స్త్రీ',
    other: 'ఇతర',
    disclaimer:
      'నిరాకరణ: ఈ కాలిక్యులేటర్ సమాచార ప్రయోజనాల కోసం మాత్రమే. ఆరోగ్య సేవా నిపుణుడిని సంప్రదించండి.',
    reference: 'బిఎమ్ఐ వర్గ సూచన',
    bmiChartTitle: 'బిఎమ్ఐ చార్ట్',
    categoryInfo: 'వర్గ సమాచారం',
  },
  mr: {
    title: 'बीएमआই कॅल्क्युलेटर',
    height: 'उंची',
    weight: 'वजन',
    age: 'वय (वैकल्पिक)',
    gender: 'लिंग',
    calculate: 'बीएमआई मोजा',
    result: 'तुमचा बीएमआई',
    category: 'श्रेणी',
    healthyRange: 'निरोगी वजन श्रेणी',
    bmiPrime: 'बीएमआई प्राइम',
    underweight: 'कमी वजन',
    normal: 'सामान्य वजन',
    overweight: 'अधिक वजन',
    obese: 'लठ्ठपणा',
    male: 'पुरुष',
    female: 'महिला',
    other: 'इतर',
    disclaimer:
      'अस्वीकरण: हे कॅल्क्युलेटर केवळ माहितीच्या उद्देशाने आहे. आरोग्य व्यावसायिकांचा सल्ला घ्या.',
    reference: 'बीएमआई श्रेणी संदर्भ',
    bmiChartTitle: 'बीएमआই तक्ता',
    categoryInfo: 'श्रेणी माहिती',
  },
  gu: {
    title: 'બીએમઆઈ કેલ્ક્યુલેટર',
    height: 'ઊંચાઈ',
    weight: 'વજન',
    age: 'ઉમર (વૈકલ્પિક)',
    gender: 'લિંગ',
    calculate: 'બીએમઆઈ ગણતરી કરો',
    result: 'તમારો બીએમઆઈ',
    category: 'કેટેગરી',
    healthyRange: 'આરોગ્યપ્રદ વજન શ્રેણી',
    bmiPrime: 'બીએમઆઈ પ્રાઈમ',
    underweight: 'ઓછું વજન',
    normal: 'સામાન્ય વજન',
    overweight: 'વધુ વજન',
    obese: 'મોટાપો',
    male: 'પુરુષ',
    female: 'મહિલા',
    other: 'અન્ય',
    disclaimer:
      'અસ્વીકરણ: આ કેલ્ક્યુલેટર માત્ર માહિતીને હેતુ માટે છે. આરોગ્ય સેવા પ્રદાતાની સલાહ લો.',
    reference: 'બીએમઆઈ કેટેગરી સંદર્ભ',
    bmiChartTitle: 'બીએમઆઈ ચાર્ટ',
    categoryInfo: 'કેટેગરી માહિતી',
  },
  kn: {
    title: 'ಬಿಎಮ್ಐ ಕ್ಯಾಲ್ಕುಲೇಟರ್',
    height: 'ಎತ್ತರ',
    weight: 'ತೂಕ',
    age: 'ವಯಸ್ಸು (ಐಚ್ಛಿಕ)',
    gender: 'ಲಿಂಗ',
    calculate: 'ಬಿಎಮ್ಐ ಲೆಕ್ಕ ಹಾಕಿ',
    result: 'ನಿಮ್ಮ ಬಿಎಮ್ಐ',
    category: 'ವರ್ಗ',
    healthyRange: 'ಆರೋಗ್ಯಕರ ತೂಕ ಶ್ರೇಣಿ',
    bmiPrime: 'ಬಿಎಮ್ಐ ಪ್ರೈಮ್',
    underweight: 'ಅಲ್ಪ ತೂಕ',
    normal: 'ಸಾಮಾನ್ಯ ತೂಕ',
    overweight: 'ಅಧಿಕ ತೂಕ',
    obese: 'ಮೋಟಾಪನ',
    male: 'ಪುರುಷ',
    female: 'ಮಹಿಳೆ',
    other: 'ಇತರೆ',
    disclaimer:
      'ಅಸ್ವೀಕೃತತೆ: ಈ ಕ್ಯಾಲ್ಕುಲೇಟರ್ ಮಾಹಿತಿ ಸೇವೆಗಾಗಿ ಮಾತ್ರ. ಆರೋಗ್ಯ ವೃತ್ತಿಪರರನ್ನು ಸಂಪರ್ಕಿಸಿ.',
    reference: 'ಬಿಎಮ್ಐ ವರ್ಗ ಉಲ್ಲೇಖ',
    bmiChartTitle: 'ಬಿಎಮ್ಐ ಚಾರ್ಟ್',
    categoryInfo: 'ವರ್ಗ ಮಾಹಿತಿ',
  },
  ml: {
    title: 'ബിഎംআই കാൽക്കുലേറ്റർ',
    height: 'ഉയരം',
    weight: 'ഭാരം',
    age: 'പ്രായം (ഐച്ഛികം)',
    gender: 'ലിംഗം',
    calculate: 'ബിഎംഐ കണക്കാക്കുക',
    result: 'നിങ്ങളുടെ ബിഎംഐ',
    category: 'വിഭാഗം',
    healthyRange: 'ആരോഗ്യകരമായ ഭാരം ശ്രേണി',
    bmiPrime: 'ബിഎംഐ പ്രൈം',
    underweight: 'കുറഞ്ഞ ഭാരം',
    normal: 'സാധാരണ ഭാരം',
    overweight: 'അധിക ഭാരം',
    obese: 'പരിണാമം',
    male: 'പുരുഷൻ',
    female: 'സ്ത്രീ',
    other: 'മറ്റ്',
    disclaimer:
      'നിരസിക്കൽ: ഈ കാൽക്കുലേറ്റർ വിവരങ്ങൾക്കായി മാത്രം. ആരോഗ്യ സേവാ പ്രൊഫഷണലിനെ സമീപിക്കുക.',
    reference: 'ബിഎംഐ വിഭാഗ റഫറൻസ്',
    bmiChartTitle: 'ബിഎംഐ ചാർട്ട്',
    categoryInfo: 'വിഭാഗ വിവരങ്ങൾ',
  },
  ta: {
    title: 'பிএमআই கணினி',
    height: 'உயரம்',
    weight: 'எடை',
    age: 'வயது (விரும்பத்தக்கது)',
    gender: 'பாலினம்',
    calculate: 'பிএமআই கணக்கிட',
    result: 'உங்களது பிஎमআই',
    category: 'பிரிவு',
    healthyRange: 'ஆரோக்கியமான எடை வரம்பு',
    bmiPrime: 'பிএmआई பிரাইம்',
    underweight: 'குறைந்த எடை',
    normal: 'சாதாரண எடை',
    overweight: 'அதிக எடை',
    obese: 'பருமனான',
    male: 'ஆண்',
    female: 'பெண்',
    other: 'பிற',
    disclaimer:
      'மறுப்பு: இந்த கணினி தகவல் நோக்கங்களுக்கு மட்டுமே. சுகாதார பেশாদாரிடம் ஆலோசனை செய்யவும்.',
    reference: 'பிএмআई பிரிவு संदर्भ',
    bmiChartTitle: 'பिएmआई விளக்கப்படம்',
    categoryInfo: 'பிரிவு தகவல்',
  },
}

function FoodCard({ emoji, name, desc, cal }: { emoji: string; name: string; desc: string; cal: string }) {
  return (
    <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
      <span className="text-3xl mt-0.5">{emoji}</span>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-bold text-sm text-text">{name}</span>
          <span className="text-xs px-2 py-0.5 bg-[rgba(var(--accent-rgb),0.12)] text-[var(--accent)] rounded-full font-semibold">{cal}</span>
        </div>
        <p className="text-xs text-text-muted mt-0.5">{desc}</p>
      </div>
    </div>
  )
}

export default function Calculator() {
  const [heightValue, setHeightValue] = useState<string>('170')
  const [heightUnit, setHeightUnit] = useState<HeightUnit>('cm')
  const [weightValue, setWeightValue] = useState<string>('70')
  const [weightUnit, setWeightUnit] = useState<WeightUnit>('kg')
  const [age, setAge] = useState<string>('')
  const [gender, setGender] = useState<Gender>('male')
  const [bmiResult, setBmiResult] = useState<BMIResult | null>(null)
  const [language, setLanguage] = useState<Language>('en')
  const [mounted, setMounted] = useState(false)

  const t = translations[language]

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem('bmiData')
    if (saved) {
      const data = JSON.parse(saved)
      setHeightValue(data.height || '170')
      setHeightUnit(data.heightUnit || 'cm')
      setWeightValue(data.weight || '70')
      setWeightUnit(data.weightUnit || 'kg')
      setAge(data.age || '')
      setGender(data.gender || 'male')
      setLanguage(data.language || 'en')
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem(
        'bmiData',
        JSON.stringify({
          height: heightValue,
          heightUnit,
          weight: weightValue,
          weightUnit,
          age,
          gender,
          language,
        })
      )
    }
  }, [heightValue, heightUnit, weightValue, weightUnit, age, gender, language, mounted])

  const convertHeightToCm = (): number => {
    const val = parseFloat(heightValue)
    return heightUnit === 'cm' ? val : val * 30.48
  }

  const convertWeightToKg = (): number => {
    const val = parseFloat(weightValue)
    return weightUnit === 'kg' ? val : val * 0.453592
  }

  const calculateBMI = () => {
    const height = convertHeightToCm()
    const weight = convertWeightToKg()

    if (height <= 0 || weight <= 0) return

    const bmi = weight / ((height / 100) ** 2)
    const bmiPrime = bmi / 25

    let category = ''
    let categoryColor = ''

    if (bmi < 18.5) {
      category = t.underweight
      categoryColor = '#3b82f6'
    } else if (bmi < 25) {
      category = t.normal
      categoryColor = '#10b981'
    } else if (bmi < 30) {
      category = t.overweight
      categoryColor = '#f97316'
    } else {
      category = t.obese
      categoryColor = '#ef4444'
    }

    const healthyMin = 18.5 * ((height / 100) ** 2)
    const healthyMax = 24.9 * ((height / 100) ** 2)

    setBmiResult({
      bmi: Math.round(bmi * 10) / 10,
      category,
      categoryColor,
      healthyMin: Math.round(healthyMin * 10) / 10,
      healthyMax: Math.round(healthyMax * 10) / 10,
      bmiPrime: Math.round(bmiPrime * 100) / 100,
    })
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-transparent py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Language Selector */}
        <div className="flex justify-end mb-6">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value as Language)}
            className="input px-3 py-2 text-sm w-auto"
          >
            {Object.keys(translations).map((lang) => (
              <option key={lang} value={lang}>
                {lang.toUpperCase()}
              </option>
            ))}
          </select>
        </div>

        <h1 className="hero-title text-center mb-3 animate-fade-up">
          {t.title}
        </h1>
        <p className="hero-subtitle text-center mb-10 animate-fade-up delay-100">
          {t.categoryInfo}
        </p>

        <div className="card max-w-lg mx-auto mb-8 animate-fade-up delay-200">
          {/* Height Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2 text-[var(--text-secondary)] uppercase tracking-wide">
              {t.height}
            </label>
            <div className="flex gap-3">
              <input
                type="number"
                min="50"
                max="300"
                step="0.1"
                value={heightValue}
                onChange={(e) => setHeightValue(e.target.value)}
                className="input flex-1"
                placeholder="170"
              />
              <button
                onClick={() =>
                  setHeightUnit(heightUnit === 'cm' ? 'ft' : 'cm')
                }
                className="btn btn-secondary whitespace-nowrap"
              >
                {heightUnit === 'cm' ? 'cm' : `${t.height} (ft)`}
              </button>
            </div>
            {heightUnit === 'ft' && (
              <p className="text-sm text-text-muted mt-2">
                {convertHeightToCm().toFixed(1)} cm
              </p>
            )}
          </div>

          {/* Weight Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2 text-[var(--text-secondary)] uppercase tracking-wide">
              {t.weight}
            </label>
            <div className="flex gap-3">
              <input
                type="number"
                min="20"
                max="500"
                step="0.1"
                value={weightValue}
                onChange={(e) => setWeightValue(e.target.value)}
                className="input flex-1"
                placeholder="70"
              />
              <button
                onClick={() =>
                  setWeightUnit(weightUnit === 'kg' ? 'lbs' : 'kg')
                }
                className="btn btn-secondary whitespace-nowrap"
              >
                {weightUnit === 'kg' ? 'kg' : 'lbs'}
              </button>
            </div>
            {weightUnit === 'lbs' && (
              <p className="text-sm text-text-muted mt-2">
                {convertWeightToKg().toFixed(1)} kg
              </p>
            )}
          </div>

          {/* Age Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2 text-[var(--text-secondary)] uppercase tracking-wide">
              {t.age}
            </label>
            <input
              type="number"
              min="1"
              max="150"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="input"
              placeholder="25"
            />
          </div>

          {/* Gender Selector */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2 text-[var(--text-secondary)] uppercase tracking-wide">
              {t.gender}
            </label>
            <div className="flex gap-2">
              {(['male', 'female', 'other'] as const).map((g) => (
                <button
                  key={g}
                  onClick={() => setGender(g)}
                  className={`flex-1 py-2.5 rounded-xl text-sm font-medium transition-all ${gender === g ? 'bg-[var(--accent)] text-white shadow-[var(--shadow-glow)]' : 'bg-[rgba(255,255,255,0.03)] text-[var(--text-secondary)] hover:bg-[rgba(255,255,255,0.06)]'}`}
                >
                  {g === 'male' ? t.male : g === 'female' ? t.female : t.other}
                </button>
              ))}
            </div>
          </div>

          {/* Calculate Button */}
          <button
            onClick={calculateBMI}
            className="btn btn-primary btn-lg w-full"
          >
            {t.calculate}
          </button>
        </div>

        {/* Results */}
        {bmiResult && (
          <div className="card max-w-lg mx-auto mb-8 animate-fade-up delay-200">
            <h2 className="text-h2 mb-6 text-[var(--text-primary)] text-center">
              {t.result}
            </h2>

            {/* BMI Value */}
            <div className="text-center mb-6">
              <div
                className="result-value mb-2"
                style={{ color: bmiResult.categoryColor }}
              >
                {bmiResult.bmi}
              </div>
              <div
                className="text-2xl font-bold"
                style={{ color: bmiResult.categoryColor }}
              >
                {bmiResult.category}
              </div>
            </div>

            {/* BMI Scale/Gauge */}
            <div className="mb-6">
              <div className="flex h-4 rounded-full overflow-hidden bg-[rgba(255,255,255,0.04)] gap-0.5">
                <div className="flex-1 bg-blue-500"></div>
                <div className="flex-1 bg-emerald-500"></div>
                <div className="flex-1 bg-orange-500"></div>
                <div className="flex-1 bg-red-500"></div>
              </div>
              <div className="flex justify-between text-xs text-text-muted mt-2">
                <span>&lt;18.5</span>
                <span>18.5-25</span>
                <span>25-30</span>
                <span>&gt;30</span>
              </div>
              <div className="flex justify-between text-xs font-semibold mt-1 text-text">
                <span>{t.underweight}</span>
                <span>{t.normal}</span>
                <span>{t.overweight}</span>
                <span>{t.obese}</span>
              </div>
            </div>

            {/* Healthy Range */}
            <div className="bg-[rgba(var(--accent-rgb),0.08)] rounded-lg p-4 mb-4 border border-[rgba(255,255,255,0.08)]">
              <p className="text-sm text-text-muted mb-2">{t.healthyRange}</p>
              <p className="font-bold text-lg text-text">
                {bmiResult.healthyMin} - {bmiResult.healthyMax} kg
              </p>
            </div>

            {/* BMI Prime */}
            <div className="bg-white/[0.02] rounded-lg p-4 border border-[rgba(255,255,255,0.06)]">
              <p className="text-sm text-text-muted mb-1">{t.bmiPrime}</p>
              <p className="font-bold text-lg text-text">
                {bmiResult.bmiPrime}
              </p>
              <p className="text-xs text-text-muted mt-1">
                (BMI / 25, ratio to normal)
              </p>
            </div>
          </div>
        )}

        {/* Diet & Food Recommendations */}
        {bmiResult && (
          <div className="card max-w-lg mx-auto mb-8 animate-fade-up delay-200">
            <h2 className="text-2xl font-bold mb-4 text-text">
              {language === 'ko' ? '식단 추천' : 'Diet Recommendations'}
            </h2>

            {bmiResult.bmi < 18.5 && (
              <div>
                <div className="bg-blue-500/10 border-l-4 border-blue-400 p-4 rounded mb-4">
                  <p className="font-bold text-blue-800 mb-2">
                    {language === 'ko' ? '체중 증가가 필요합니다' : 'You need to gain weight'}
                  </p>
                  <p className="text-sm text-blue-700">
                    {language === 'ko'
                      ? '건강한 체중 증가를 위해 영양이 풍부한 고칼로리 식단을 추천합니다.'
                      : 'Focus on nutrient-dense, high-calorie foods for healthy weight gain.'}
                  </p>
                </div>
                <div className="space-y-3">
                  <FoodCard emoji="🥜" name={language === 'ko' ? '견과류 & 땅콩버터' : 'Nuts & Nut Butters'} desc={language === 'ko' ? '아몬드, 호두, 캐슈넛 — 건강한 지방과 단백질이 풍부' : 'Almonds, walnuts, cashews — rich in healthy fats & protein'} cal="600+ kcal/100g" />
                  <FoodCard emoji="🥑" name={language === 'ko' ? '아보카도' : 'Avocados'} desc={language === 'ko' ? '건강한 불포화지방과 칼륨이 풍부한 과일' : 'Packed with healthy unsaturated fats and potassium'} cal="160 kcal/100g" />
                  <FoodCard emoji="🍳" name={language === 'ko' ? '계란 & 닭가슴살' : 'Eggs & Chicken Breast'} desc={language === 'ko' ? '고단백 식품으로 근육 생성에 필수' : 'High protein foods essential for muscle building'} cal="155-165 kcal/100g" />
                  <FoodCard emoji="🍚" name={language === 'ko' ? '현미밥 & 고구마' : 'Brown Rice & Sweet Potatoes'} desc={language === 'ko' ? '복합 탄수화물로 에너지 충전, 식이섬유 풍부' : 'Complex carbs for energy, rich in fiber'} cal="110-130 kcal/100g" />
                  <FoodCard emoji="🥛" name={language === 'ko' ? '우유 & 그릭요거트' : 'Milk & Greek Yogurt'} desc={language === 'ko' ? '칼슘과 단백질 보충에 좋은 유제품' : 'Great dairy sources for calcium and protein'} cal="60-100 kcal/100g" />
                  <FoodCard emoji="🫒" name={language === 'ko' ? '올리브오일 & 들기름' : 'Olive Oil & Healthy Oils'} desc={language === 'ko' ? '요리에 추가하면 쉽게 칼로리 증가' : 'Easy way to add calories to any meal'} cal="880 kcal/100ml" />
                </div>
                <div className="mt-4 bg-blue-500/10 rounded-lg p-4">
                  <p className="font-semibold text-sm text-blue-800 mb-2">{language === 'ko' ? '추천 습관' : 'Recommended Habits'}</p>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>{language === 'ko' ? '• 하루 3끼 + 간식 2~3회' : '• Eat 3 meals + 2-3 snacks daily'}</li>
                    <li>{language === 'ko' ? '• 식사 전 물 대신 식사 후에 마시기' : '• Drink water after meals, not before'}</li>
                    <li>{language === 'ko' ? '• 근력 운동으로 건강하게 체중 증가' : '• Combine with strength training for healthy gains'}</li>
                  </ul>
                </div>
              </div>
            )}

            {bmiResult.bmi >= 18.5 && bmiResult.bmi < 25 && (
              <div>
                <div className="bg-green-500/10 border-l-4 border-green-400 p-4 rounded mb-4">
                  <p className="font-bold text-green-800 mb-2">
                    {language === 'ko' ? '정상 체중입니다! 유지하세요' : 'You are at a healthy weight! Keep it up!'}
                  </p>
                  <p className="text-sm text-green-700">
                    {language === 'ko'
                      ? '현재 체중을 유지하기 위한 균형 잡힌 식단을 추천합니다.'
                      : 'Maintain your weight with a balanced, nutritious diet.'}
                  </p>
                </div>
                <div className="space-y-3">
                  <FoodCard emoji="🥗" name={language === 'ko' ? '샐러드 & 채소' : 'Salads & Vegetables'} desc={language === 'ko' ? '다양한 색상의 채소로 비타민과 미네랄 섭취' : 'Colorful veggies for vitamins and minerals'} cal="20-50 kcal/100g" />
                  <FoodCard emoji="🐟" name={language === 'ko' ? '생선 (연어, 고등어)' : 'Fish (Salmon, Mackerel)'} desc={language === 'ko' ? '오메가3 지방산이 풍부한 건강한 단백질원' : 'Rich in omega-3 fatty acids, great protein source'} cal="200-250 kcal/100g" />
                  <FoodCard emoji="🫘" name={language === 'ko' ? '콩류 & 렌틸' : 'Legumes & Lentils'} desc={language === 'ko' ? '식물성 단백질과 식이섬유의 보고' : 'Excellent plant protein and fiber source'} cal="115 kcal/100g" />
                  <FoodCard emoji="🍎" name={language === 'ko' ? '제철 과일' : 'Seasonal Fruits'} desc={language === 'ko' ? '사과, 바나나, 베리류 — 자연의 당분과 비타민' : 'Apples, bananas, berries — natural sugars and vitamins'} cal="50-90 kcal/100g" />
                  <FoodCard emoji="🥩" name={language === 'ko' ? '살코기 (닭, 소 안심)' : 'Lean Meats (Chicken, Beef Tenderloin)'} desc={language === 'ko' ? '필수 아미노산 공급, 근육 유지' : 'Essential amino acids for muscle maintenance'} cal="150-200 kcal/100g" />
                </div>
                <div className="mt-4 bg-green-500/10 rounded-lg p-4">
                  <p className="font-semibold text-sm text-green-800 mb-2">{language === 'ko' ? '유지 습관' : 'Maintenance Habits'}</p>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>{language === 'ko' ? '• 하루 물 8잔 이상 마시기' : '• Drink 8+ glasses of water daily'}</li>
                    <li>{language === 'ko' ? '• 규칙적인 식사 시간 지키기' : '• Maintain regular meal times'}</li>
                    <li>{language === 'ko' ? '• 주 3~5회 운동 (유산소 + 근력)' : '• Exercise 3-5 times per week (cardio + strength)'}</li>
                  </ul>
                </div>
              </div>
            )}

            {bmiResult.bmi >= 25 && bmiResult.bmi < 30 && (
              <div>
                <div className="bg-orange-500/10 border-l-4 border-orange-400 p-4 rounded mb-4">
                  <p className="font-bold text-orange-800 mb-2">
                    {language === 'ko' ? '체중 감량을 권장합니다' : 'Weight loss is recommended'}
                  </p>
                  <p className="text-sm text-orange-700">
                    {language === 'ko'
                      ? '저칼로리 고영양 식단으로 점진적인 체중 감량을 시작하세요.'
                      : 'Start gradual weight loss with low-calorie, nutrient-rich foods.'}
                  </p>
                </div>
                <div className="space-y-3">
                  <FoodCard emoji="🥦" name={language === 'ko' ? '브로콜리 & 시금치' : 'Broccoli & Spinach'} desc={language === 'ko' ? '초저칼로리 + 높은 포만감, 비타민C/K 풍부' : 'Ultra low calorie, high satiety, rich in vitamins C/K'} cal="25-35 kcal/100g" />
                  <FoodCard emoji="🍗" name={language === 'ko' ? '닭가슴살 (껍질 제거)' : 'Skinless Chicken Breast'} desc={language === 'ko' ? '지방 적고 단백질 높은 다이어트 필수 식품' : 'Low fat, high protein — essential for diet'} cal="165 kcal/100g" />
                  <FoodCard emoji="🥒" name={language === 'ko' ? '오이 & 셀러리' : 'Cucumber & Celery'} desc={language === 'ko' ? '수분이 많고 칼로리 거의 없는 간식' : 'High water content, almost zero calories'} cal="10-16 kcal/100g" />
                  <FoodCard emoji="🍄" name={language === 'ko' ? '버섯류' : 'Mushrooms'} desc={language === 'ko' ? '고기 대체 가능, 식이섬유와 비타민D 풍부' : 'Great meat substitute, rich in fiber and vitamin D'} cal="22 kcal/100g" />
                  <FoodCard emoji="🫚" name={language === 'ko' ? '생강차 & 녹차' : 'Ginger Tea & Green Tea'} desc={language === 'ko' ? '신진대사 촉진, 지방 연소 도움' : 'Boosts metabolism, helps fat burning'} cal="0-2 kcal/cup" />
                  <FoodCard emoji="🥚" name={language === 'ko' ? '삶은 계란' : 'Boiled Eggs'} desc={language === 'ko' ? '포만감 높고 단백질 풍부한 간식' : 'High satiety, protein-rich snack'} cal="155 kcal/100g" />
                </div>
                <div className="mt-4 bg-orange-500/10 rounded-lg p-4">
                  <p className="font-semibold text-sm text-orange-800 mb-2">{language === 'ko' ? '감량 습관' : 'Weight Loss Habits'}</p>
                  <ul className="text-sm text-orange-700 space-y-1">
                    <li>{language === 'ko' ? '• 하루 500kcal 적게 먹기 (주 0.5kg 감량)' : '• Eat 500kcal less per day (lose ~0.5kg/week)'}</li>
                    <li>{language === 'ko' ? '• 야식 피하기, 저녁 7시 이후 금식' : '• Avoid late-night eating, fast after 7PM'}</li>
                    <li>{language === 'ko' ? '• 걷기 30분 + 가벼운 근력 운동' : '• 30 min walking + light strength training'}</li>
                    <li>{language === 'ko' ? '• 가공식품, 탄산음료, 과자 줄이기' : '• Reduce processed food, soda, and snacks'}</li>
                  </ul>
                </div>
              </div>
            )}

            {bmiResult.bmi >= 30 && (
              <div>
                <div className="bg-red-500/10 border-l-4 border-red-400 p-4 rounded mb-4">
                  <p className="font-bold text-red-800 mb-2">
                    {language === 'ko' ? '건강 관리가 시급합니다' : 'Immediate health management needed'}
                  </p>
                  <p className="text-sm text-red-700">
                    {language === 'ko'
                      ? '전문의 상담과 함께 식단 조절을 시작하세요. 당뇨, 심혈관 질환 위험이 높아집니다.'
                      : 'Consult a healthcare professional. Risk of diabetes and cardiovascular disease increases.'}
                  </p>
                </div>
                <div className="space-y-3">
                  <FoodCard emoji="🥬" name={language === 'ko' ? '잎채소 (양배추, 케일)' : 'Leafy Greens (Cabbage, Kale)'} desc={language === 'ko' ? '초저칼로리, 항산화 성분 풍부' : 'Ultra low calorie, rich in antioxidants'} cal="25-30 kcal/100g" />
                  <FoodCard emoji="🐟" name={language === 'ko' ? '흰살 생선 (대구, 명태)' : 'White Fish (Cod, Pollock)'} desc={language === 'ko' ? '지방이 거의 없는 고단백 식품' : 'Almost zero fat, high protein'} cal="80-100 kcal/100g" />
                  <FoodCard emoji="🥣" name={language === 'ko' ? '오트밀 & 귀리' : 'Oatmeal & Oats'} desc={language === 'ko' ? '혈당 조절, 콜레스테롤 감소에 도움' : 'Helps regulate blood sugar and lower cholesterol'} cal="68 kcal/100g (cooked)" />
                  <FoodCard emoji="🫐" name={language === 'ko' ? '베리류 (블루베리, 라즈베리)' : 'Berries (Blueberry, Raspberry)'} desc={language === 'ko' ? '저칼로리 + 항산화, 혈당 조절 도움' : 'Low calorie + antioxidants, helps blood sugar'} cal="32-57 kcal/100g" />
                  <FoodCard emoji="🍵" name={language === 'ko' ? '녹차 & 무가당 음료' : 'Green Tea & Unsweetened Drinks'} desc={language === 'ko' ? '설탕 음료 대체, 카테킨이 지방 분해 도움' : 'Replace sugary drinks, catechins help break down fat'} cal="0-2 kcal/cup" />
                  <FoodCard emoji="🥕" name={language === 'ko' ? '당근 & 토마토' : 'Carrots & Tomatoes'} desc={language === 'ko' ? '식이섬유 풍부, 포만감 높은 건강 간식' : 'High fiber, satisfying healthy snack'} cal="18-41 kcal/100g" />
                </div>
                <div className="mt-4 bg-red-500/10 rounded-lg p-4">
                  <p className="font-semibold text-sm text-red-800 mb-2">{language === 'ko' ? '필수 실천 사항' : 'Essential Actions'}</p>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>{language === 'ko' ? '• 전문의 상담 필수 (내과 / 비만클리닉)' : '• Consult a doctor (internal medicine / obesity clinic)'}</li>
                    <li>{language === 'ko' ? '• 설탕, 밀가루, 튀긴 음식 최소화' : '• Minimize sugar, flour, and fried foods'}</li>
                    <li>{language === 'ko' ? '• 매일 30분 이상 걷기부터 시작' : '• Start with 30+ min daily walking'}</li>
                    <li>{language === 'ko' ? '• 음식 일기 쓰기 — 먹는 것 기록하기' : '• Keep a food diary — track what you eat'}</li>
                    <li>{language === 'ko' ? '• 급격한 다이어트 금지, 점진적 감량' : '• No crash diets, lose weight gradually'}</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        )}

        {/* BMI Reference Table */}
        <div className="card max-w-lg mx-auto mb-8 animate-fade-up delay-200">
          <h2 className="text-2xl font-bold mb-4 text-text">{t.reference}</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-card-border">
                  <th className="text-left py-2 font-bold text-text">
                    {t.category}
                  </th>
                  <th className="text-right py-2 font-bold text-text">BMI</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-card-border hover:bg-[rgba(var(--accent-rgb),0.08)]">
                  <td className="py-3 text-text">{t.underweight}</td>
                  <td className="text-right text-text">&lt; 18.5</td>
                </tr>
                <tr className="border-b border-card-border hover:bg-green-500/10">
                  <td className="py-3 text-text">{t.normal}</td>
                  <td className="text-right text-text">18.5 – 24.9</td>
                </tr>
                <tr className="border-b border-card-border hover:bg-orange-500/10">
                  <td className="py-3 text-text">{t.overweight}</td>
                  <td className="text-right text-text">25 – 29.9</td>
                </tr>
                <tr className="hover:bg-red-500/10">
                  <td className="py-3 text-text">{t.obese}</td>
                  <td className="text-right text-text">≥ 30</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-yellow-500/10 border-l-4 border-yellow-400 p-4 rounded max-w-lg mx-auto">
          <p className="text-sm text-yellow-800">{t.disclaimer}</p>
        </div>
      </div>
    </div>
  )
}
