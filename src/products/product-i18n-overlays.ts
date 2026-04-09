import type { ProductI18nOverlay } from './catalog-i18n-types'

/** de, pt, es, ru, az — merged onto base catalog in catalog.ts (en stays inline). */
export const PRODUCT_I18N_OVERLAYS: Record<string, ProductI18nOverlay> = {
  'blue-shine': {
    i18n: {
      de: {
        headline: 'Zellerneuerung & Ausstrahlung',
        description:
          'Blue Shine ist eine intensive Hautrevitalisierungslösung, die gezielte biologische Aktivierung in Dermis und Epidermis unterstützt.',
        ingredients:
          'Mit Hyaluronsäure, Niacinamid, Glutathion, Tranexamsäure und Lachs-DNA unterstützt es die Vitalität der Haut, stärkt die elastische Struktur und mindert feine Linien.',
      },
      pt: {
        headline: 'Renovação celular & luminosidade',
        description:
          'Blue Shine é uma solução intensiva de revitalização cutânea que apoia a ativação biológica nas camadas dérmica e epidérmica.',
        ingredients:
          'Com ácido hialurônico, niacinamida, glutationa, ácido tranexâmico e DNA de salmão, ajuda a aumentar a vitalidade da pele, reforçar a elasticidade e reduzir linhas finas.',
      },
      es: {
        headline: 'Renovación celular y luminosidad',
        description:
          'Blue Shine es una solución intensiva de revitalización cutánea que favorece la activación biológica en las capas dérmica y epidérmica.',
        ingredients:
          'Con ácido hialurónico, niacinamida, glutatión, ácido tranexámico y ADN de salmón, ayuda a aumentar la vitalidad de la piel, reforzar la elasticidad y atenuar líneas finas.',
      },
      ru: {
        headline: 'Клеточное обновление и сияние',
        description:
          'Blue Shine — интенсивное решение для ревитализации кожи, поддерживающее целенаправленную биологическую активацию в дерме и эпидермисе.',
        ingredients:
          'С гиалуроновой кислотой, ниацинамидом, глутатионом, транексамовой кислотой и ДНК лосося способствует повышению жизненности кожи, укреплению упругости и сглаживанию тонких морщин.',
      },
      az: {
        headline: 'Hüceyrə yenilənməsi və parlaqlıq',
        description:
          'Blue Shine dermal və epidermal qatlarında hədəflənmiş bioloji aktivləşməni dəstəkləyən intensiv dəri revitalizasiya həllidir.',
        ingredients:
          'Hyaluron turşusu, niasinamid, qlutation, traneksam turşusu və qızılbalıq DNT kombinasiyası ilə dəri canlılığını artırmağa, elastik quruluğu möhkəmləndirməyə və incə qırış görünüşünü azaltmağa kömək edir.',
      },
    },
    formCard: {
      de: {
        leftTitle: 'NEUE BIOSTIMULATION DER HAUT',
        leftSubtitle: 'Konzentriert, tief & homogene Verteilung',
        rightTitle: 'Blue Shine Anwendung',
        rightSubtitle: 'Wir können das Anwendungsvideo per E-Mail senden.',
        ctaLabel: 'Formular ausfüllen',
      },
      pt: {
        leftTitle: 'NOVA BIOESTIMULAÇÃO DA PELE',
        leftSubtitle: 'Distribuição concentrada, profunda e homogénea',
        rightTitle: 'Aplicação Blue Shine',
        rightSubtitle: 'Podemos enviar o vídeo da aplicação por e-mail.',
        ctaLabel: 'Preencher o formulário',
      },
      es: {
        leftTitle: 'NUEVA BIOESTIMULACIÓN DE LA PIEL',
        leftSubtitle: 'Distribución concentrada, profunda y homogénea',
        rightTitle: 'Aplicación Blue Shine',
        rightSubtitle: 'Podemos enviar el vídeo de la aplicación por correo electrónico.',
        ctaLabel: 'Rellenar el formulario',
      },
      ru: {
        leftTitle: 'НОВАЯ БИОСТИМУЛЯЦИЯ КОЖИ',
        leftSubtitle: 'Концентрированное, глубокое и равномерное распределение',
        rightTitle: 'Применение Blue Shine',
        rightSubtitle: 'Мы можем отправить видео процедуры по электронной почте.',
        ctaLabel: 'Заполнить форму',
      },
      az: {
        leftTitle: 'DƏRİNİN YENİ BİOSTİMULYASİYASI',
        leftSubtitle: 'Konsentrləşdirilmiş, dərin və homogen paylanma',
        rightTitle: 'Blue Shine tətbiqi',
        rightSubtitle: 'Tətbiq videosunu e-poçtla göndərə bilərik.',
        ctaLabel: 'Formu doldurun',
      },
    },
    stats: [
      {
        de: { label: 'Sitzungsdauer', value: '4 Sitzungen im Abstand von 7 Tagen' },
        pt: { label: 'Duração da sessão', value: '4 sessões com intervalos de 7 dias' },
        es: { label: 'Duración de la sesión', value: '4 sesiones con intervalos de 7 días' },
        ru: { label: 'Длительность сеанса', value: '4 сеанса с интервалом 7 дней' },
        az: { label: 'Seans müddəti', value: '7 gün aralıqlı 4 seans' },
      },
      {
        de: { label: 'Verkaufsform', value: '10 ml 5 Ampullen' },
        pt: { label: 'Formato de venda', value: '10 ml 5 frascos' },
        es: { label: 'Formato de venta', value: '10 ml 5 viales' },
        ru: { label: 'Формат продажи', value: '10 мл 5 флаконов' },
        az: { label: 'Satış forması', value: '10 ml 5 flakon' },
      },
      {
        de: { label: 'pH' },
        pt: { label: 'pH' },
        es: { label: 'pH' },
        ru: { label: 'pH' },
        az: { label: 'pH' },
      },
    ],
  },

  'anti-aging-effect': {
    i18n: {
      de: {
        headline: 'Antioxidativer Schutz & Hauterneuerung',
        description:
          'Anti Aging ist eine neue Generation Erneuerungsprotokoll-Lösung, formuliert zur Wiederherstellung von Vitalität und Elastizität der Haut.',
        ingredients:
          'Aminosäuren, Vitamine und Peptidkomplexe reduzieren oxidativen Stress, mildern feine Linien und unterstützen eine glattere Hauttextur.',
      },
      pt: {
        headline: 'Proteção antioxidante & renovação da pele',
        description:
          'Anti Aging é uma solução de protocolo de renovação de nova geração formulada para restaurar a vitalidade e elasticidade da pele.',
        ingredients:
          'Aminoácidos, vitaminas e complexos peptídicos reduzem o stress oxidativo, suavizam linhas finas e ajudam a pele a ganhar textura mais uniforme.',
      },
      es: {
        headline: 'Protección antioxidante y renovación cutánea',
        description:
          'Anti Aging es una solución de protocolo de renovación de nueva generación formulada para restaurar la vitalidad y elasticidad de la piel.',
        ingredients:
          'Aminoácidos, vitaminas y complejos peptídicos reducen el estrés oxidativo, suavizan líneas finas y ayudan a una textura más lisa.',
      },
      ru: {
        headline: 'Антиоксидантная защита и обновление кожи',
        description:
          'Anti Aging — решение нового поколения для восстановления жизненности и эластичности кожи со временем.',
        ingredients:
          'Аминокислоты, витамины и пептидные комплексы снижают оксидативный стресс, смягчают мелкие морщины и способствуют более гладкой текстуре.',
      },
      az: {
        headline: 'Antioksidant qorunma və dəri yenilənməsi',
        description:
          'Anti Aging yeni nəsil yenilənmə protokolu həlli, dərinin zamanla itirdiyi canlılıq və elastikliyini bərpa etmək üçün formulə edilib.',
        ingredients:
          'Amino turşuları, vitaminlər və peptid kompleksləri oksidativ stresi azaldır, incə qırışları yumşaldır və dərinin daha hamar toxuma qazanmasına kömək edir.',
      },
    },
    formCard: {
      de: {
        leftTitle: 'ANTI-AGING ERNEUERUNGSPROTOKOLL',
        leftSubtitle: 'Lebendige & elastische Haut',
        rightTitle: 'Anti Aging Effect Anwendung',
        rightSubtitle: 'Wir können das Anwendungsvideo per E-Mail senden.',
        ctaLabel: 'Formular ausfüllen',
      },
      pt: {
        leftTitle: 'SOLUÇÃO PROTOCOLO ANTI-AGING',
        leftSubtitle: 'Pele vibrante e elástica',
        rightTitle: 'Aplicação Anti Aging Effect',
        rightSubtitle: 'Podemos enviar o vídeo da aplicação por e-mail.',
        ctaLabel: 'Preencher o formulário',
      },
      es: {
        leftTitle: 'SOLUCIÓN PROTOCOLO ANTI-AGING',
        leftSubtitle: 'Piel vibrante y elástica',
        rightTitle: 'Aplicación Anti Aging Effect',
        rightSubtitle: 'Podemos enviar el vídeo por correo electrónico.',
        ctaLabel: 'Rellenar el formulario',
      },
      ru: {
        leftTitle: 'ПРОТОКОЛ ОБНОВЛЕНИЯ ANTI-AGING',
        leftSubtitle: 'Живая и упругая кожа',
        rightTitle: 'Процедура Anti Aging Effect',
        rightSubtitle: 'Мы можем отправить видео по электронной почте.',
        ctaLabel: 'Заполнить форму',
      },
      az: {
        leftTitle: 'YAŞLANMA ƏLEYHİNƏ YENİLƏNMƏ PROTOKOLU',
        leftSubtitle: 'Canlı və elastik dəri',
        rightTitle: 'Anti Aging Effect tətbiqi',
        rightSubtitle: 'Tətbiq videosunu e-poçtla göndərə bilərik.',
        ctaLabel: 'Formu doldurun',
      },
    },
    stats: [
      {
        de: { label: 'Sitzungsdauer', value: '3 Sitzungen im Abstand von 21 Tagen' },
        pt: { label: 'Duração da sessão', value: '3 sessões com intervalos de 21 dias' },
        es: { label: 'Duración de la sesión', value: '3 sesiones con intervalos de 21 días' },
        ru: { label: 'Длительность сеанса', value: '3 сеанса с интервалом 21 день' },
        az: { label: 'Seans müddəti', value: '21 gün aralıqlı 3 seans' },
      },
      {
        de: { label: 'Verkaufsform', value: '10 ml 5 Ampullen' },
        pt: { label: 'Formato de venda', value: '10 ml 5 frascos' },
        es: { label: 'Formato de venta', value: '10 ml 5 viales' },
        ru: { label: 'Формат продажи', value: '10 мл 5 флаконов' },
        az: { label: 'Satış forması', value: '10 ml 5 flakon' },
      },
      { de: { label: 'pH' }, pt: { label: 'pH' }, es: { label: 'pH' }, ru: { label: 'pH' }, az: { label: 'pH' } },
    ],
  },

  'anti-hair-loss': {
    i18n: {
      de: {
        headline: 'Haarausfallkontrolle & Follikelstärkung',
        description:
          'Anti Hair Loss unterstützt die Reduktion von Haarausfall durch Förderung der biologischen Aktivität der Haarwurzeln.',
        ingredients:
          'Mit Biotin, Vitaminen und Aminosäuren nährt es die Follikel und trägt zu kräftigerem Haar und mehr Volumen bei.',
      },
      pt: {
        headline: 'Controlo da queda & fortalecimento dos folículos',
        description:
          'Anti Hair Loss ajuda a reduzir a queda de cabelo ao apoiar a atividade biológica das raízes.',
        ingredients:
          'Com biotina, vitaminas e aminoácidos, aumenta a nutrição dos folículos, contribuindo para fios mais fortes e volume.',
      },
      es: {
        headline: 'Control de la caída y fortalecimiento del folículo',
        description:
          'Anti Hair Loss ayuda a reducir la caída del cabello favoreciendo la actividad biológica de las raíces.',
        ingredients:
          'Con biotina, vitaminas y aminoácidos aumenta la nutrición folicular y contribuye a cabellos más fuertes y volumen.',
      },
      ru: {
        headline: 'Контроль выпадения и укрепление фолликулов',
        description:
          'Anti Hair Loss помогает снизить выпадение волос, поддерживая биологическую активность корней.',
        ingredients:
          'С биотином, витаминами и аминокислотами улучшает питание фолликул, укрепляя волосы и объём.',
      },
      az: {
        headline: 'Saç tökülməsinin nəzarəti və folikul möhkəmləndirməsi',
        description:
          'Anti Hair Loss saç köklərinin bioloji aktivliyini dəstəkləyərək saç tökülməsini azaltmağa kömək edir.',
        ingredients:
          'Biotin, vitaminlər və amino turşuları ilə folikulların qidalanmasını artırır, saç tellərinin möhkəmlənməsinə töhfə verir.',
      },
    },
    formCard: {
      de: {
        leftTitle: 'NEUE BIOSTIMULATION FÜR DIE HAARE',
        leftSubtitle: 'Konzentriert, tief & homogene Verteilung',
        rightTitle: 'Anti Hair Loss Anwendung',
        rightSubtitle: 'Wir können das Anwendungsvideo per E-Mail senden.',
        ctaLabel: 'Formular ausfüllen',
      },
      pt: {
        leftTitle: 'NOVA BIOESTIMULAÇÃO CAPILAR',
        leftSubtitle: 'Distribuição concentrada, profunda e homogénea',
        rightTitle: 'Aplicação Anti Hair Loss',
        rightSubtitle: 'Podemos enviar o vídeo por e-mail.',
        ctaLabel: 'Preencher o formulário',
      },
      es: {
        leftTitle: 'NUEVA BIOESTIMULACIÓN CAPILAR',
        leftSubtitle: 'Distribución concentrada, profunda y homogénea',
        rightTitle: 'Aplicación Anti Hair Loss',
        rightSubtitle: 'Podemos enviar el vídeo por correo electrónico.',
        ctaLabel: 'Rellenar el formulario',
      },
      ru: {
        leftTitle: 'НОВАЯ БИОСТИМУЛЯЦИЯ ВОЛОС',
        leftSubtitle: 'Концентрированное и равномерное распределение',
        rightTitle: 'Процедура Anti Hair Loss',
        rightSubtitle: 'Мы можем отправить видео по электронной почте.',
        ctaLabel: 'Заполнить форму',
      },
      az: {
        leftTitle: 'SAÇ SAĞLIĞININ YENİ BİOSTİMULYASİYASI',
        leftSubtitle: 'Konsentrləşdirilmiş, dərin və homogen paylanma',
        rightTitle: 'Anti Hair Loss tətbiqi',
        rightSubtitle: 'Tətbiq videosunu e-poçtla göndərə bilərik.',
        ctaLabel: 'Formu doldurun',
      },
    },
    stats: [
      {
        de: { label: 'Sitzungsdauer', value: '3–6 Sitzungen im Abstand von 21 Tagen' },
        pt: { label: 'Duração da sessão', value: '3–6 sessões com intervalos de 21 dias' },
        es: { label: 'Duración de la sesión', value: '3–6 sesiones con intervalos de 21 días' },
        ru: { label: 'Длительность сеанса', value: '3–6 сеансов с интервалом 21 день' },
        az: { label: 'Seans müddəti', value: '21 gün aralıqlı 3–6 seans' },
      },
      {
        de: { label: 'Verkaufsform', value: '10 ml 5 Ampullen' },
        pt: { label: 'Formato de venda', value: '10 ml 5 frascos' },
        es: { label: 'Formato de venta', value: '10 ml 5 viales' },
        ru: { label: 'Формат продажи', value: '10 мл 5 флаконов' },
        az: { label: 'Satış forması', value: '10 ml 5 flakon' },
      },
      { de: { label: 'pH' }, pt: { label: 'pH' }, es: { label: 'pH' }, ru: { label: 'pH' }, az: { label: 'pH' } },
    ],
  },

  'eye-shimmer': {
    i18n: {
      de: {
        headline: 'Ausstrahlung & Vitalität der Augenpartie',
        description:
          'Eye Shimmer ist speziell formuliert, um feine Linien um die Augen zu reduzieren und die Festigkeit der Haut zu erhöhen.',
        ingredients:
          'Mit Feuchtigkeitskomplex und Antioxidantien wirkt die Augenpartie frischer, heller und glatter.',
      },
      pt: {
        headline: 'Luminosidade & vitalidade do contorno dos olhos',
        description:
          'Eye Shimmer é formulado para reduzir linhas finas em torno dos olhos e aumentar a firmeza da pele.',
        ingredients:
          'Com complexo hidratante e antioxidantes, ajuda a pele do contorno dos olhos a parecer mais luminosa e suave.',
      },
      es: {
        headline: 'Luminosidad y vitalidad del contorno de ojos',
        description:
          'Eye Shimmer está formulado para reducir líneas finas alrededor de los ojos y aumentar la firmeza.',
        ingredients:
          'Con complejo hidratante y antioxidantes, el contorno luce más fresco y uniforme.',
      },
      ru: {
        headline: 'Сияние и жизненность кожи вокруг глаз',
        description:
          'Eye Shimmer разработан для уменьшения мелких морщин вокруг глаз и повышения упругости кожи.',
        ingredients:
          'Увлажняющий комплекс и антиоксиданты делают зону вокруг глаз свежее и глаже.',
      },
      az: {
        headline: 'Göz ətrafının parlaqlığı və canlılıq effekti',
        description:
          'Eye Shimmer göz ətrafındakı incə xətləri azaltmaq və dəri sıxlığını artırmaq üçün xüsusi formulə edilib.',
        ingredients:
          'Nəmləndirici kompleks və antioksidantlar göz ətrafı dərinin daha parlaq və hamar görünməsinə kömək edir.',
      },
    },
    formCard: {
      de: {
        leftTitle: 'DAS GEHEIMNIS DER AUGENPARTIE-ERNEUERUNG',
        leftSubtitle: 'Sanft, wirksam & natürlich',
        rightTitle: 'Eye Shimmer Anwendung',
        rightSubtitle: 'Wir können das Anwendungsvideo per E-Mail senden.',
        ctaLabel: 'Formular ausfüllen',
      },
      pt: {
        leftTitle: 'O SEGREDO DA RENOVAÇÃO DO CONTORNO DOS OLHOS',
        leftSubtitle: 'Suave, eficaz e natural',
        rightTitle: 'Aplicação Eye Shimmer',
        rightSubtitle: 'Podemos enviar o vídeo por e-mail.',
        ctaLabel: 'Preencher o formulário',
      },
      es: {
        leftTitle: 'EL SECRETO DE LA RENOVACIÓN DEL CONTORNO DE OJOS',
        leftSubtitle: 'Suave, eficaz y natural',
        rightTitle: 'Aplicación Eye Shimmer',
        rightSubtitle: 'Podemos enviar el vídeo por correo electrónico.',
        ctaLabel: 'Rellenar el formulario',
      },
      ru: {
        leftTitle: 'СЕКРЕТ ОБНОВЛЕНИЯ КОЖИ ВОКРУГ ГЛАЗ',
        leftSubtitle: 'Мягко, эффективно и естественно',
        rightTitle: 'Процедура Eye Shimmer',
        rightSubtitle: 'Мы можем отправить видео по электронной почте.',
        ctaLabel: 'Заполнить форму',
      },
      az: {
        leftTitle: 'GÖZ ƏTRAFI YENİLƏNMƏSİNİN SİRRİ',
        leftSubtitle: 'Həssas, effektiv və təbii nəticələr',
        rightTitle: 'Eye Shimmer tətbiqi',
        rightSubtitle: 'Tətbiq videosunu e-poçtla göndərə bilərik.',
        ctaLabel: 'Formu doldurun',
      },
    },
    stats: [
      {
        de: { label: 'Sitzungsdauer', value: '3 Sitzungen im Abstand von 21 Tagen' },
        pt: { label: 'Duração da sessão', value: '3 sessões com intervalos de 21 dias' },
        es: { label: 'Duración de la sesión', value: '3 sesiones con intervalos de 21 días' },
        ru: { label: 'Длительность сеанса', value: '3 сеанса с интервалом 21 день' },
        az: { label: 'Seans müddəti', value: '21 gün aralıqlı 3 seans' },
      },
      {
        de: { label: 'Verkaufsform', value: '5 ml 5 Ampullen' },
        pt: { label: 'Formato de venda', value: '5 ml 5 frascos' },
        es: { label: 'Formato de venta', value: '5 ml 5 viales' },
        ru: { label: 'Формат продажи', value: '5 мл 5 флаконов' },
        az: { label: 'Satış forması', value: '5 ml 5 flakon' },
      },
      { de: { label: 'pH' }, pt: { label: 'pH' }, es: { label: 'pH' }, ru: { label: 'pH' }, az: { label: 'pH' } },
    ],
  },

  'whitening-effect': {
    i18n: {
      de: {
        headline: 'Aufhellung & strahlende Leuchtkraft',
        description:
          'Whitening Effect wirkt gegen Pigmentflecken, Lentigines und Hyperpigmentierung.',
        ingredients:
          'Mit L-Ascorbinsäure und Pflanzenextrakten stellt es die natürliche Helligkeit wieder her und verbessert Teint und Elastizität.',
      },
      pt: {
        headline: 'Clareamento & luminosidade radiante',
        description:
          'Whitening Effect reduz manchas escuras, lentigos e hiperpigmentação.',
        ingredients:
          'Com ácido L-ascórbico e extratos vegetais, restaura o brilho natural da pele.',
      },
      es: {
        headline: 'Aclarado y brillo luminoso',
        description:
          'Whitening Effect reduce manchas oscuras, lentigos e hiperpigmentación.',
        ingredients:
          'Con ácido L-ascórbico y extractos vegetales restaura el brillo natural de la piel.',
      },
      ru: {
        headline: 'Осветление и сияние',
        description:
          'Whitening Effect направлен на уменьшение тёмных пятен, лентиго и гиперпигментации.',
        ingredients:
          'L-аскорбиновая кислота и растительные экстракты восстанавливают естественное сияние кожи.',
      },
      az: {
        headline: 'Dəri açan və parlaq işıltı',
        description:
          'Whitening Effect L-askorbin turşusu və bitki ekstraktları ilə dəri tonunu bərabərləşdirir.',
        ingredients:
          'Melanin istehsalını balanslaşdıran formulası ilə tünd ləkələri yumşaldır və təbii parlaqlığı üzə çıxarır.',
      },
    },
    formCard: {
      de: {
        leftTitle: 'STRAHLENDE HAUT, STRAHLENDER LOOK',
        leftSubtitle: 'Reich, tief & schnelle Ergebnisse',
        rightTitle: 'Whitening Effect Anwendung',
        rightSubtitle: 'Wir können das Anwendungsvideo per E-Mail senden.',
        ctaLabel: 'Formular ausfüllen',
      },
      pt: {
        leftTitle: 'PELE RADIANTE, BRILHO LUMINOSO',
        leftSubtitle: 'Rico, profundo e resultados rápidos',
        rightTitle: 'Aplicação Whitening Effect',
        rightSubtitle: 'Podemos enviar o vídeo por e-mail.',
        ctaLabel: 'Preencher o formulário',
      },
      es: {
        leftTitle: 'PIEL RADIANTE, BRILLO LUMINOSO',
        leftSubtitle: 'Rico, profundo y resultados rápidos',
        rightTitle: 'Aplicación Whitening Effect',
        rightSubtitle: 'Podemos enviar el vídeo por correo electrónico.',
        ctaLabel: 'Rellenar el formulario',
      },
      ru: {
        leftTitle: 'СИЯЮЩАЯ КОЖА, СИЯЮЩИЙ ОБЛИК',
        leftSubtitle: 'Насыщенно, глубоко и быстрый результат',
        rightTitle: 'Процедура Whitening Effect',
        rightSubtitle: 'Мы можем отправить видео по электронной почте.',
        ctaLabel: 'Заполнить форму',
      },
      az: {
        leftTitle: 'IŞILTILI DƏRİ, IŞILTILI GÖRÜNÜŞ',
        leftSubtitle: 'Zəngin, dərin və sürətli nəticə',
        rightTitle: 'Whitening Effect tətbiqi',
        rightSubtitle: 'Tətbiq videosunu e-poçtla göndərə bilərik.',
        ctaLabel: 'Formu doldurun',
      },
    },
    stats: [
      {
        de: { label: 'Sitzungsdauer', value: '3 Sitzungen im Abstand von 21 Tagen' },
        pt: { label: 'Duração da sessão', value: '3 sessões com intervalos de 21 dias' },
        es: { label: 'Duración de la sesión', value: '3 sesiones con intervalos de 21 días' },
        ru: { label: 'Длительность сеанса', value: '3 сеанса с интервалом 21 день' },
        az: { label: 'Seans müddəti', value: '21 gün aralıqlı 3 seans' },
      },
      {
        de: { label: 'Verkaufsform', value: '10 ml 5 Ampullen' },
        pt: { label: 'Formato de venda', value: '10 ml 5 frascos' },
        es: { label: 'Formato de venta', value: '10 ml 5 viales' },
        ru: { label: 'Формат продажи', value: '10 мл 5 флаконов' },
        az: { label: 'Satış forması', value: '10 ml 5 flakon' },
      },
      { de: { label: 'pH' }, pt: { label: 'pH' }, es: { label: 'pH' }, ru: { label: 'pH' }, az: { label: 'pH' } },
    ],
  },

  'pure-dna': {
    i18n: {
      de: {
        headline: 'DNA-unterstützte Hauterneuerung',
        description:
          'Pure DNA unterstützt Erneuerung und Verjüngung der Haut auf zellulärer Ebene.',
        ingredients:
          'Natürliche Nukleotide und Erneuerungsfaktoren steigern die biologische Aktivität und verlangsamen Alterungserscheinungen.',
      },
      pt: {
        headline: 'Renovação cutânea com suporte de DNA',
        description:
          'Pure DNA apoia renovação e rejuvenescimento ao agir no ADN celular.',
        ingredients:
          'Com nucleótidos naturais e fatores de renovação, aumenta a atividade biológica da pele.',
      },
      es: {
        headline: 'Renovación cutánea con soporte de ADN',
        description:
          'Pure DNA apoya la renovación y el rejuvenecimiento actuando sobre el ADN celular.',
        ingredients:
          'Con nucleótidos naturales y factores de renovación aumenta la actividad biológica de la piel.',
      },
      ru: {
        headline: 'Обновление кожи с поддержкой ДНК',
        description:
          'Pure DNA поддерживает обновление и омоложение, воздействуя на клеточную ДНК.',
        ingredients:
          'Натуральные нуклеотиды и факторы обновления повышают биологическую активность кожи.',
      },
      az: {
        headline: 'DNT dəstəkli dəri yenilənməsi',
        description:
          'Pure DNA hüceyrəvi DNT-ni hədəfləyərək dəri yenilənməsi və cavanlaşmasını dəstəkləyir.',
        ingredients:
          'Təbii nukleotidlər və yenilənmə faktorları dərinin bioloji aktivliyini artırır.',
      },
    },
    formCard: {
      de: {
        leftTitle: 'GENETISCHES POTENZIAL DER HAUT',
        leftSubtitle: 'Natürlich, kraftvoll & nachhaltig',
        rightTitle: 'Pure DNA Anwendung',
        rightSubtitle: 'Wir können das Anwendungsvideo per E-Mail senden.',
        ctaLabel: 'Formular ausfüllen',
      },
      pt: {
        leftTitle: 'POTENCIAL GENÉTICO DA PELE',
        leftSubtitle: 'Natural, poderoso e sustentável',
        rightTitle: 'Aplicação Pure DNA',
        rightSubtitle: 'Podemos enviar o vídeo por e-mail.',
        ctaLabel: 'Preencher o formulário',
      },
      es: {
        leftTitle: 'POTENCIAL GENÉTICO DE LA PIEL',
        leftSubtitle: 'Natural, potente y sostenible',
        rightTitle: 'Aplicación Pure DNA',
        rightSubtitle: 'Podemos enviar el vídeo por correo electrónico.',
        ctaLabel: 'Rellenar el formulario',
      },
      ru: {
        leftTitle: 'ГЕНЕТИЧЕСКИЙ ПОТЕНЦИАЛ КОЖИ',
        leftSubtitle: 'Естественно, мощно и устойчиво',
        rightTitle: 'Процедура Pure DNA',
        rightSubtitle: 'Мы можем отправить видео по электронной почте.',
        ctaLabel: 'Заполнить форму',
      },
      az: {
        leftTitle: 'DƏRİNİN GENETİK POTENSİALI',
        leftSubtitle: 'Təbii, güclü və davamlı nəticələr',
        rightTitle: 'Pure DNA tətbiqi',
        rightSubtitle: 'Tətbiq videosunu e-poçtla göndərə bilərik.',
        ctaLabel: 'Formu doldurun',
      },
    },
    stats: [
      {
        de: { label: 'Sitzungsdauer', value: '3 Sitzungen im Abstand von 21 Tagen' },
        pt: { label: 'Duração da sessão', value: '3 sessões com intervalos de 21 dias' },
        es: { label: 'Duración de la sesión', value: '3 sesiones con intervalos de 21 días' },
        ru: { label: 'Длительность сеанса', value: '3 сеанса с интервалом 21 день' },
        az: { label: 'Seans müddəti', value: '21 gün aralıqlı 3 seans' },
      },
      {
        de: { label: 'Verkaufsform', value: '5 ml 5 Ampullen' },
        pt: { label: 'Formato de venda', value: '5 ml 5 frascos' },
        es: { label: 'Formato de venta', value: '5 ml 5 viales' },
        ru: { label: 'Формат продажи', value: '5 мл 5 флаконов' },
        az: { label: 'Satış forması', value: '5 ml 5 flakon' },
      },
      { de: { label: 'pH' }, pt: { label: 'pH' }, es: { label: 'pH' }, ru: { label: 'pH' }, az: { label: 'pH' } },
    ],
  },

  'voluregen-hydrocalcium': {
    i18n: {
      de: {
        headline: 'Volumenaufbau & tiefe Hautauffüllung',
        description:
          'Voluregen Hydrocalcium bietet Volumen und tiefe Füllwirkung durch Kalzium- und Hyaluronsäurekomplex.',
        ingredients:
          'Stellt Elastizität und Strahlen wieder her, mildert Falten und wirkt verjüngend.',
      },
      pt: {
        headline: 'Aumento de volume & preenchimento profundo',
        description:
          'Voluregen Hydrocalcium oferece efeito de volume e preenchimento profundo com complexo de cálcio e ácido hialurônico.',
        ingredients:
          'Restaura elasticidade e luminosidade, suaviza rugas e rejuvenesce o aspeto facial.',
      },
      es: {
        headline: 'Aumento de volumen y relleno profundo',
        description:
          'Voluregen Hydrocalcium aporta volumen y efecto de relleno profundo con complejo de calcio y ácido hialurónico.',
        ingredients:
          'Restaura elasticidad y luminosidad, rellena arrugas y rejuvenece el rostro.',
      },
      ru: {
        headline: 'Увеличение объёма и глубокое заполнение',
        description:
          'Voluregen Hydrocalcium обеспечивает объём и эффект глубокого заполнения за счёт кальция и гиалуроновой кислоты.',
        ingredients:
          'Восстанавливает упругость и сияние, разглаживает морщины и омолаживает облик.',
      },
      az: {
        headline: 'Həcm artımı və dərin dəri doldurulması',
        description:
          'Voluregen Hydrocalcium kalsium və hyaluron turşusu kompleksi ilə dəri həcmini artıran və dərin doldurma effekti verir.',
        ingredients:
          'İtkin dəri elastikliyini və parlaqlığını bərpa edir, qırışları doldurur.',
      },
    },
    formCard: {
      de: {
        leftTitle: 'HAUTVOLUMEN & FÜLLUNGSEFFEKT',
        leftSubtitle: 'Natürlich, strukturiert & jugendlich',
        rightTitle: 'Voluregen Hydrocalcium Anwendung',
        rightSubtitle: 'Wir können das Anwendungsvideo per E-Mail senden.',
        ctaLabel: 'Formular ausfüllen',
      },
      pt: {
        leftTitle: 'AUMENTO DE VOLUME E EFEITO DE PREENCHIMENTO',
        leftSubtitle: 'Natural, estruturado e jovial',
        rightTitle: 'Aplicação Voluregen Hydrocalcium',
        rightSubtitle: 'Podemos enviar o vídeo por e-mail.',
        ctaLabel: 'Preencher o formulário',
      },
      es: {
        leftTitle: 'VOLUMEN CUTÁNEO Y EFECTO RELLENO',
        leftSubtitle: 'Natural, estructurado y juvenil',
        rightTitle: 'Aplicación Voluregen Hydrocalcium',
        rightSubtitle: 'Podemos enviar el vídeo por correo electrónico.',
        ctaLabel: 'Rellenar el formulario',
      },
      ru: {
        leftTitle: 'ОБЪЁМ КОЖИ И ЭФФЕКТ ЗАПОЛНЕНИЯ',
        leftSubtitle: 'Естественный, чёткий и молодой вид',
        rightTitle: 'Процедура Voluregen Hydrocalcium',
        rightSubtitle: 'Мы можем отправить видео по электронной почте.',
        ctaLabel: 'Заполнить форму',
      },
      az: {
        leftTitle: 'DƏRİ HƏCMİ ARTIRMA VƏ DOLĞU EFFEKTİ',
        leftSubtitle: 'Təbii, strukturlaşdırılmış və gənclik görünüşü',
        rightTitle: 'Voluregen Hydrocalcium tətbiqi',
        rightSubtitle: 'Tətbiq videosunu e-poçtla göndərə bilərik.',
        ctaLabel: 'Formu doldurun',
      },
    },
    stats: [
      {
        de: { label: 'Sitzungsdauer', value: '1 Sitzung' },
        pt: { label: 'Duração da sessão', value: '1 sessão' },
        es: { label: 'Duración de la sesión', value: '1 sesión' },
        ru: { label: 'Длительность сеанса', value: '1 сеанс' },
        az: { label: 'Seans müddəti', value: '1 seans' },
      },
      {
        de: { label: 'Verkaufsform', value: '5 ml 1 Ampulle' },
        pt: { label: 'Formato de venda', value: '5 ml 1 frasco' },
        es: { label: 'Formato de venta', value: '5 ml 1 vial' },
        ru: { label: 'Формат продажи', value: '5 мл 1 флакон' },
        az: { label: 'Satış forması', value: '5 ml 1 flakon' },
      },
      { de: { label: 'pH' }, pt: { label: 'pH' }, es: { label: 'pH' }, ru: { label: 'pH' }, az: { label: 'pH' } },
    ],
  },

  'voluregen-biostimulator': {
    i18n: {
      de: {
        headline: 'Biologische Stimulation & Kollagenförderung',
        description:
          'Voluregen Bio Stimulator aktiviert Fibroblasten und stimuliert natürlich Kollagen und Elastin.',
        ingredients:
          'Aktiviert die eigenen Erneuerungsmechanismen der Haut für langanhaltende Verjüngung und Strahlen.',
      },
      pt: {
        headline: 'Estimulação biológica & produção de colagénio',
        description:
          'Voluregen Bio Stimulator estimula colagénio e elastina ao ativar fibroblastos.',
        ingredients:
          'Ativa os mecanismos de renovação da pele para rejuvenescimento duradouro.',
      },
      es: {
        headline: 'Estimulación biológica y colágeno',
        description:
          'Voluregen Bio Stimulator estimula colágeno y elastina activando fibroblastos.',
        ingredients:
          'Activa los mecanismos propios de renovación para rejuvenecimiento duradero.',
      },
      ru: {
        headline: 'Биостимуляция и выработка коллагена',
        description:
          'Voluregen Bio Stimulator стимулирует коллаген и эластин через активацию фибробластов.',
        ingredients:
          'Запускает собственные механизмы обновления кожи для долгого омоложения.',
      },
      az: {
        headline: 'Bioloji stimullaşdırma və kollagen istehsalı',
        description:
          'Voluregen Bio Stimulator fibroblast aktivasyonu ilə kollagen və elastin istehsalını təbii stimullaşdırır.',
        ingredients:
          'Dərinin öz yenilənmə mexanizmlərini işə salır, dərin yaşlanma əlamətlərini aradan qaldırır.',
      },
    },
    formCard: {
      de: {
        leftTitle: 'BIOLOGISCHE STIMULATION & KOLLAGEN',
        leftSubtitle: 'Natürliche Verjüngung & tiefe Erneuerung',
        rightTitle: 'Voluregen Bio Stimulator Anwendung',
        rightSubtitle: 'Wir können das Anwendungsvideo per E-Mail senden.',
        ctaLabel: 'Formular ausfüllen',
      },
      pt: {
        leftTitle: 'ESTIMULAÇÃO BIOLÓGICA E COLAGÉNIO',
        leftSubtitle: 'Rejuvenescimento natural e renovação profunda',
        rightTitle: 'Aplicação Voluregen Bio Stimulator',
        rightSubtitle: 'Podemos enviar o vídeo por e-mail.',
        ctaLabel: 'Preencher o formulário',
      },
      es: {
        leftTitle: 'ESTIMULACIÓN BIOLÓGICA Y COLÁGENO',
        leftSubtitle: 'Rejuvenecimiento natural y renovación profunda',
        rightTitle: 'Aplicación Voluregen Bio Stimulator',
        rightSubtitle: 'Podemos enviar el vídeo por correo electrónico.',
        ctaLabel: 'Rellenar el formulario',
      },
      ru: {
        leftTitle: 'БИОСТИМУЛЯЦИЯ И КОЛЛАГЕН',
        leftSubtitle: 'Естественное омоложение и глубокое обновление',
        rightTitle: 'Процедура Voluregen Bio Stimulator',
        rightSubtitle: 'Мы можем отправить видео по электронной почте.',
        ctaLabel: 'Заполнить форму',
      },
      az: {
        leftTitle: 'BİOLOJİ STİMULLAŞDIRMA VƏ KOLLAGEN',
        leftSubtitle: 'Təbii cavanlaşdırma və dərin dəri yenilənməsi',
        rightTitle: 'Voluregen Bio Stimulator tətbiqi',
        rightSubtitle: 'Tətbiq videosunu e-poçtla göndərə bilərik.',
        ctaLabel: 'Formu doldurun',
      },
    },
    stats: [
      {
        de: { label: 'Sitzungsdauer', value: '2 Sitzungen im Abstand von 21 Tagen' },
        pt: { label: 'Duração da sessão', value: '2 sessões com intervalos de 21 dias' },
        es: { label: 'Duración de la sesión', value: '2 sesiones con intervalos de 21 días' },
        ru: { label: 'Длительность сеанса', value: '2 сеанса с интервалом 21 день' },
        az: { label: 'Seans müddəti', value: '21 gün aralıqlı 2 seans' },
      },
      {
        de: { label: 'Verkaufsform', value: '5 ml 2 Ampullen' },
        pt: { label: 'Formato de venda', value: '5 ml 2 frascos' },
        es: { label: 'Formato de venta', value: '5 ml 2 viales' },
        ru: { label: 'Формат продажи', value: '5 мл 2 флакона' },
        az: { label: 'Satış forması', value: '5 ml 2 flakon' },
      },
      { de: { label: 'pH' }, pt: { label: 'pH' }, es: { label: 'pH' }, ru: { label: 'pH' }, az: { label: 'pH' } },
    ],
  },

  'g-white': {
    i18n: {
      de: {
        headline: 'Intimzone: Aufhellung & ausgleichender Effekt',
        description:
          'G White ist formuliert, um Farbunregelmäßigkeiten und dunkle Stellen im Intimbereich zu mildern.',
        ingredients:
          'Hautfreundliche Inhaltsstoffe gleichen den Ton aus für ein helleres Erscheinungsbild — dermatogynäkologisch sinnvoll.',
      },
      pt: {
        headline: 'Clareamento da zona íntima',
        description:
          'G White foi formulado para irregularidades de cor e manchas escuras na zona genital.',
        ingredients:
          'Componentes adequados à zona sensível uniformizam o tom de forma segura.',
      },
      es: {
        headline: 'Aclarado del área genital',
        description:
          'G White está formulado para irregularidades de color y manchas en la zona genital.',
        ingredients:
          'Componentes aptos para zonas sensibles unifican el tono de forma segura.',
      },
      ru: {
        headline: 'Осветление интимной зоны',
        description:
          'G White разработан для выравнивания тона и тёмных пятен в интимной зоне.',
        ingredients:
          'Подходящие для чувствительных зон компоненты выравнивают тон безопасно.',
      },
      az: {
        headline: 'Genital bölgə açıcılığı və ağardıcı effekt',
        description:
          'G White genital bölgənin rəng qeyri-bərabarlıqları və tünd ləkələri aradan qaldırmaq üçün formulə edilib.',
        ingredients:
          'Həssas bölgəyə uyğun komponentlər dəri tonunu bərabərləşdirir.',
      },
    },
    formCard: {
      de: {
        leftTitle: 'INTIMZONE HELLER',
        leftSubtitle: 'Sicher, wirksam & natürlich',
        rightTitle: 'G White Anwendung',
        rightSubtitle: 'Wir können das Anwendungsvideo per E-Mail senden.',
        ctaLabel: 'Formular ausfüllen',
      },
      pt: {
        leftTitle: 'LUMINOSIDADE ÍNTIMA',
        leftSubtitle: 'Seguro, eficaz e natural',
        rightTitle: 'Aplicação G White',
        rightSubtitle: 'Podemos enviar o vídeo por e-mail.',
        ctaLabel: 'Preencher o formulário',
      },
      es: {
        leftTitle: 'LUMINOSIDAD ÍNTIMA',
        leftSubtitle: 'Seguro, eficaz y natural',
        rightTitle: 'Aplicación G White',
        rightSubtitle: 'Podemos enviar el vídeo por correo electrónico.',
        ctaLabel: 'Rellenar el formulario',
      },
      ru: {
        leftTitle: 'ОСВЕТЛЕНИЕ ИНТИМНОЙ ЗОНЫ',
        leftSubtitle: 'Безопасно, эффективно и естественно',
        rightTitle: 'Процедура G White',
        rightSubtitle: 'Мы можем отправить видео по электронной почте.',
        ctaLabel: 'Заполнить форму',
      },
      az: {
        leftTitle: 'GENİTAL AĞARLIQ',
        leftSubtitle: 'Təhlükəsiz, effektiv və təbii nəticə',
        rightTitle: 'G White tətbiqi',
        rightSubtitle: 'Tətbiq videosunu e-poçtla göndərə bilərik.',
        ctaLabel: 'Formu doldurun',
      },
    },
    stats: [
      {
        de: { label: 'Sitzungsdauer', value: '3–6 Sitzungen im Abstand von 21 Tagen' },
        pt: { label: 'Duração da sessão', value: '3–6 sessões com intervalos de 21 dias' },
        es: { label: 'Duración de la sesión', value: '3–6 sesiones con intervalos de 21 días' },
        ru: { label: 'Длительность сеанса', value: '3–6 сеансов с интервалом 21 день' },
        az: { label: 'Seans müddəti', value: '21 gün aralıqlı 3–6 seans' },
      },
      {
        de: { label: 'Verkaufsform', value: '10 ml 5 Ampullen' },
        pt: { label: 'Formato de venda', value: '10 ml 5 frascos' },
        es: { label: 'Formato de venta', value: '10 ml 5 viales' },
        ru: { label: 'Формат продажи', value: '10 мл 5 флаконов' },
        az: { label: 'Satış forması', value: '10 ml 5 flakon' },
      },
      { de: { label: 'pH' }, pt: { label: 'pH' }, es: { label: 'pH' }, ru: { label: 'pH' }, az: { label: 'pH' } },
    ],
  },

  'h-pause': {
    i18n: {
      de: {
        headline: 'Hormonelle Balance & Komfort nach der Menopause',
        description:
          'H Pause zielt auf Beschwerden im Intimbereich während und nach der Menopause.',
        ingredients:
          'Phytoöstrogene und Erneuerungsfaktoren unterstützen Elastizität und Feuchtigkeit.',
      },
      pt: {
        headline: 'Equilíbrio hormonal & conforto pós-menopausa',
        description:
          'H Pause visa melhorar o desconforto genital durante e após a menopausa.',
        ingredients:
          'Fitoestrogénios e fatores de renovação restauram elasticidade e hidratação.',
      },
      es: {
        headline: 'Equilibrio hormonal y confort posmenopáusico',
        description:
          'H Pause está formulado para mejorar el malestar genital durante y después de la menopausia.',
        ingredients:
          'Fitoestrógenos y factores de renovación restauran elasticidad e hidratación.',
      },
      ru: {
        headline: 'Гормональный баланс и комфорт после менопаузы',
        description:
          'H Pause направлен на улучшение состояния интимной зоны во время и после менопаузы.',
        ingredients:
          'Фитоэстрогены и факторы обновления восстанавливают упругость и увлажнение.',
      },
      az: {
        headline: 'Hormonal balans və menopauzadan sonra rahatlıq',
        description:
          'H Pause menopauza dövründə və sonrasında yaranan genital bölgə problemlərini hədəfləyir.',
        ingredients:
          'Fitoestrogen və yenilənmə faktorları genital bölgənin elastikliyini və nəmliyini bərpa edir.',
      },
    },
    formCard: {
      de: {
        leftTitle: 'NEUES LEBEN NACH DER MENOPAUSE',
        leftSubtitle: 'Beruhigend, unterstützend & wirksam',
        rightTitle: 'H Pause Anwendung',
        rightSubtitle: 'Wir können das Anwendungsvideo per E-Mail senden.',
        ctaLabel: 'Formular ausfüllen',
      },
      pt: {
        leftTitle: 'NOVA VIDA APÓS A MENOPAUSA',
        leftSubtitle: 'Calmante, de apoio e eficaz',
        rightTitle: 'Aplicação H Pause',
        rightSubtitle: 'Podemos enviar o vídeo por e-mail.',
        ctaLabel: 'Preencher o formulário',
      },
      es: {
        leftTitle: 'NUEVA VIDA TRAS LA MENOPAUSIA',
        leftSubtitle: 'Calmante, de apoyo y eficaz',
        rightTitle: 'Aplicación H Pause',
        rightSubtitle: 'Podemos enviar el vídeo por correo electrónico.',
        ctaLabel: 'Rellenar el formulario',
      },
      ru: {
        leftTitle: 'НОВАЯ ЖИЗНЬ ПОСЛЕ МЕНОПАУЗЫ',
        leftSubtitle: 'Успокаивающе, поддерживающе и эффективно',
        rightTitle: 'Процедура H Pause',
        rightSubtitle: 'Мы можем отправить видео по электронной почте.',
        ctaLabel: 'Заполнить форму',
      },
      az: {
        leftTitle: 'MENOPAUZADAN SONRA YENİ HƏYAT',
        leftSubtitle: 'Rahatladıcı, dəstəkləyici və effektiv',
        rightTitle: 'H Pause tətbiqi',
        rightSubtitle: 'Tətbiq videosunu e-poçtla göndərə bilərik.',
        ctaLabel: 'Formu doldurun',
      },
    },
    stats: [
      {
        de: { label: 'Sitzungsdauer', value: '3 Sitzungen im Abstand von 14 Tagen' },
        pt: { label: 'Duração da sessão', value: '3 sessões com intervalos de 14 dias' },
        es: { label: 'Duración de la sesión', value: '3 sesiones con intervalos de 14 días' },
        ru: { label: 'Длительность сеанса', value: '3 сеанса с интервалом 14 дней' },
        az: { label: 'Seans müddəti', value: '14 gün aralıqlı 3 seans' },
      },
      {
        de: { label: 'Verkaufsform', value: '10 ml 3 Ampullen' },
        pt: { label: 'Formato de venda', value: '10 ml 3 frascos' },
        es: { label: 'Formato de venta', value: '10 ml 3 viales' },
        ru: { label: 'Формат продажи', value: '10 мл 3 флакона' },
        az: { label: 'Satış forması', value: '10 ml 3 flakon' },
      },
      { de: { label: 'pH' }, pt: { label: 'pH' }, es: { label: 'pH' }, ru: { label: 'pH' }, az: { label: 'pH' } },
    ],
  },

  rejuvenation: {
    i18n: {
      de: {
        headline: 'Cellulite-Reduktion & Verbesserung der Hautstruktur',
        description:
          'rejuvenation verbessert die Körperhaut, indem es Cellulite sichtbar mildert und die Textur glättet.',
        ingredients:
          'Drainage- und Erneuerungsfaktoren stimulieren die Zellaktivität für strafferes Hautbild.',
      },
      pt: {
        headline: 'Redução de celulite & textura da pele',
        description:
          'rejuvenation melhora a pele corporal ao reduzir celulite e uniformizar a textura.',
        ingredients:
          'Fatores de drenagem e renovação estimulam a atividade celular.',
      },
      es: {
        headline: 'Reducción de celulitis y textura cutánea',
        description:
          'rejuvenation mejora la piel corporal reduciendo la celulitis y alisando la textura.',
        ingredients:
          'Factores de drenaje y renovación estimulan la actividad celular.',
      },
      ru: {
        headline: 'Уменьшение целлюлита и улучшение текстуры',
        description:
          'rejuvenation улучшает кожу тела, уменьшая проявления целлюлита.',
        ingredients:
          'Факторы дренажа и обновления стимулируют клеточную активность.',
      },
      az: {
        headline: 'Sellülit azaltma və dəri toxumasının islahı',
        description:
          'rejuvenation sellülit görünüşünü azaldaraq və dəri toxumasını yaxşılaşdıraraq bədən dərinin keyfiyyətini artırır.',
        ingredients:
          'Drenaj dəstəkli və yenilənmə faktorları hüceyrəvi aktivliyi stimullaşdırır.',
      },
    },
    formCard: {
      de: {
        leftTitle: 'POTENZIAL GEGEN CELLULITE & STRAFFUNG',
        leftSubtitle: 'Intensiv, hochwirksam & sichtbare Ergebnisse',
        rightTitle: 'rejuvenation Anwendung',
        rightSubtitle: 'Wir können das Anwendungsvideo per E-Mail senden.',
        ctaLabel: 'Formular ausfüllen',
      },
      pt: {
        leftTitle: 'POTENCIAL ANTI-CELULITE E FIRMEZA',
        leftSubtitle: 'Intensivo, muito eficaz e resultados visíveis',
        rightTitle: 'Aplicação rejuvenation',
        rightSubtitle: 'Podemos enviar o vídeo por e-mail.',
        ctaLabel: 'Preencher o formulário',
      },
      es: {
        leftTitle: 'POTENCIAL ANTI-CELULITIS Y FIRMEZA',
        leftSubtitle: 'Intensivo, muy eficaz y resultados visibles',
        rightTitle: 'Aplicación rejuvenation',
        rightSubtitle: 'Podemos enviar el vídeo por correo electrónico.',
        ctaLabel: 'Rellenar el formulario',
      },
      ru: {
        leftTitle: 'ПОТЕНЦИАЛ ПРОТИВ ЦЕЛЛЮЛИТА И УПРУГОСТИ',
        leftSubtitle: 'Интенсивно, эффективно и заметный результат',
        rightTitle: 'Процедура rejuvenation',
        rightSubtitle: 'Мы можем отправить видео по электронной почте.',
        ctaLabel: 'Заполнить форму',
      },
      az: {
        leftTitle: 'SELLÜLİT VƏ DƏRİ SIKILAŞDIRMA POTENSİALI',
        leftSubtitle: 'İntensiv, çox effektiv və görünən nəticələr',
        rightTitle: 'rejuvenation tətbiqi',
        rightSubtitle: 'Tətbiq videosunu e-poçtla göndərə bilərik.',
        ctaLabel: 'Formu doldurun',
      },
    },
    stats: [
      {
        de: { label: 'Sitzungsdauer', value: '3 Sitzungen im Abstand von 10 Tagen' },
        pt: { label: 'Duração da sessão', value: '3 sessões com intervalos de 10 dias' },
        es: { label: 'Duración de la sesión', value: '3 sesiones con intervalos de 10 días' },
        ru: { label: 'Длительность сеанса', value: '3 сеанса с интервалом 10 дней' },
        az: { label: 'Seans müddəti', value: '10 gün aralıqlı 3 seans' },
      },
      {
        de: { label: 'Verkaufsform', value: '10 ml 5 Ampullen' },
        pt: { label: 'Formato de venda', value: '10 ml 5 frascos' },
        es: { label: 'Formato de venta', value: '10 ml 5 viales' },
        ru: { label: 'Формат продажи', value: '10 мл 5 флаконов' },
        az: { label: 'Satış forması', value: '10 ml 5 flakon' },
      },
      { de: { label: 'pH' }, pt: { label: 'pH' }, es: { label: 'pH' }, ru: { label: 'pH' }, az: { label: 'pH' } },
    ],
  },

  'liposhape-body': {
    i18n: {
      de: {
        headline: 'Körperkonturierung & lokale Fettreduktion',
        description:
          'Liposhape Body unterstützt die Reduktion lokaler Fettdepots am Körper.',
        ingredients:
          'Lipolyse-fördernde Inhaltsstoffe beschleunigen den Fettabbau und betonen natürliche Konturen.',
      },
      pt: {
        headline: 'Contorno corporal & redução de gordura localizada',
        description:
          'Liposhape Body apoia a redução de gordura localizada no corpo.',
        ingredients:
          'Componentes pró-lipólise aceleram a rutura celular de gordura.',
      },
      es: {
        headline: 'Contorno corporal y grasa localizada',
        description:
          'Liposhape Body apoya la reducción de grasa localizada en el cuerpo.',
        ingredients:
          'Componentes lipolíticos aceleran la ruptura grasa a nivel celular.',
      },
      ru: {
        headline: 'Моделирование тела и локальное снижение жира',
        description:
          'Liposhape Body поддерживает снижение локальных жировых отложений.',
        ingredients:
          'Липолитические компоненты ускоряют распад жира в клетках.',
      },
      az: {
        headline: 'Bədən şəkilləndirmə və lokalizə yağ azaldılması',
        description:
          'Liposhape Body bədəndə istənməyən yağ yığılmalarını hədəfləyərək lokal yağ azaldılmasını dəstəkləyir.',
        ingredients:
          'Lipoliz dəstəkli komponentlər hüceyrəvi yağ parçalanmasını sürətləndirir.',
      },
    },
    formCard: {
      de: {
        leftTitle: 'POTENZIAL KÖRPERKONTURIERUNG',
        leftSubtitle: 'Wirksam, natürlich & sichtbar',
        rightTitle: 'Liposhape Body Anwendung',
        rightSubtitle: 'Wir können das Anwendungsvideo per E-Mail senden.',
        ctaLabel: 'Formular ausfüllen',
      },
      pt: {
        leftTitle: 'POTENCIAL DE CONTORNO CORPORAL',
        leftSubtitle: 'Eficaz, natural e visível',
        rightTitle: 'Aplicação Liposhape Body',
        rightSubtitle: 'Podemos enviar o vídeo por e-mail.',
        ctaLabel: 'Preencher o formulário',
      },
      es: {
        leftTitle: 'POTENCIAL DE CONTORNO CORPORAL',
        leftSubtitle: 'Eficaz, natural y visible',
        rightTitle: 'Aplicación Liposhape Body',
        rightSubtitle: 'Podemos enviar el vídeo por correo electrónico.',
        ctaLabel: 'Rellenar el formulario',
      },
      ru: {
        leftTitle: 'ПОТЕНЦИАЛ КОНТУРИРОВАНИЯ ТЕЛА',
        leftSubtitle: 'Эффективно, естественно и заметно',
        rightTitle: 'Процедура Liposhape Body',
        rightSubtitle: 'Мы можем отправить видео по электронной почте.',
        ctaLabel: 'Заполнить форму',
      },
      az: {
        leftTitle: 'BƏDƏN ŞƏKILLƏNDİRMƏ POTENSİALI',
        leftSubtitle: 'Effektiv, təbii və görünən nəticələr',
        rightTitle: 'Liposhape Body tətbiqi',
        rightSubtitle: 'Tətbiq videosunu e-poçtla göndərə bilərik.',
        ctaLabel: 'Formu doldurun',
      },
    },
    stats: [
      {
        de: { label: 'Sitzungsdauer', value: '1 Sitzung' },
        pt: { label: 'Duração da sessão', value: '1 sessão' },
        es: { label: 'Duración de la sesión', value: '1 sesión' },
        ru: { label: 'Длительность сеанса', value: '1 сеанс' },
        az: { label: 'Seans müddəti', value: '1 seans' },
      },
      {
        de: { label: 'Verkaufsform', value: '10 ml 5 Ampullen' },
        pt: { label: 'Formato de venda', value: '10 ml 5 frascos' },
        es: { label: 'Formato de venta', value: '10 ml 5 viales' },
        ru: { label: 'Формат продажи', value: '10 мл 5 флаконов' },
        az: { label: 'Satış forması', value: '10 ml 5 flakon' },
      },
      { de: { label: 'pH' }, pt: { label: 'pH' }, es: { label: 'pH' }, ru: { label: 'pH' }, az: { label: 'pH' } },
    ],
  },

  'liposhape-face': {
    i18n: {
      de: {
        headline: 'Gesichtskonturierung & Lifting-Effekt',
        description:
          'Liposhape Face definiert Gesichtslinien und verbessert den Bereich unter dem Kinn.',
        ingredients:
          'Lipolyse und straffende Faktoren definieren die Gesichtskontur.',
      },
      pt: {
        headline: 'Contorno facial & efeito lifting',
        description:
          'Liposhape Face define linhas faciais e melhora a zona do queixo.',
        ingredients:
          'Componentes lipolíticos e refirmantes definem o contorno facial.',
      },
      es: {
        headline: 'Contorno facial y efecto lifting',
        description:
          'Liposhape Face define las líneas del rostro y mejora la zona del mentón.',
        ingredients:
          'Componentes lipolíticos y reafirmantes definen el contorno facial.',
      },
      ru: {
        headline: 'Контуринг лица и эффект лифтинга',
        description:
          'Liposhape Face подчёркивает линии лица и зону подбородка.',
        ingredients:
          'Липолитические и укрепляющие компоненты моделируют овал лица.',
      },
      az: {
        headline: 'Üz şəkilləndirmə effekti',
        description:
          'Liposhape Face üz xətlərini müəyyənləşdirərək və çənəaltı bölgəni yaxşılaşdıraraq təbii üz qaldırma effekti verir.',
        ingredients:
          'Lipoliz dəstəkli komponentlər və dəri sıxılaşdırıcı faktorlar üz konturunu müəyyənləşdirir.',
      },
    },
    formCard: {
      de: {
        leftTitle: 'FORM & STRAFFHEIT IM GESICHT',
        leftSubtitle: 'Natürlich & überzeugend',
        rightTitle: 'Liposhape Face Anwendung',
        rightSubtitle: 'Wir können das Anwendungsvideo per E-Mail senden.',
        ctaLabel: 'Formular ausfüllen',
      },
      pt: {
        leftTitle: 'FORMA E FIRMEZA FACIAL',
        leftSubtitle: 'Natural e satisfatório',
        rightTitle: 'Aplicação Liposhape Face',
        rightSubtitle: 'Podemos enviar o vídeo por e-mail.',
        ctaLabel: 'Preencher o formulário',
      },
      es: {
        leftTitle: 'FORMA Y FIRMEZA FACIAL',
        leftSubtitle: 'Natural y satisfactorio',
        rightTitle: 'Aplicación Liposhape Face',
        rightSubtitle: 'Podemos enviar el vídeo por correo electrónico.',
        ctaLabel: 'Rellenar el formulario',
      },
      ru: {
        leftTitle: 'ФОРМА И УПРУГОСТЬ ЛИЦА',
        leftSubtitle: 'Естественно и гармонично',
        rightTitle: 'Процедура Liposhape Face',
        rightSubtitle: 'Мы можем отправить видео по электронной почте.',
        ctaLabel: 'Заполнить форму',
      },
      az: {
        leftTitle: 'ÜZDƏ FORM VƏ ZƏRİFLİK',
        leftSubtitle: 'Təbii və qaneedici',
        rightTitle: 'Liposhape Face tətbiqi',
        rightSubtitle: 'Tətbiq videosunu e-poçtla göndərə bilərik.',
        ctaLabel: 'Formu doldurun',
      },
    },
    stats: [
      {
        de: { label: 'Sitzungsdauer', value: '1 Sitzung' },
        pt: { label: 'Duração da sessão', value: '1 sessão' },
        es: { label: 'Duración de la sesión', value: '1 sesión' },
        ru: { label: 'Длительность сеанса', value: '1 сеанс' },
        az: { label: 'Seans müddəti', value: '1 seans' },
      },
      {
        de: { label: 'Verkaufsform', value: '10 ml 5 Ampullen' },
        pt: { label: 'Formato de venda', value: '10 ml 5 frascos' },
        es: { label: 'Formato de venta', value: '10 ml 5 viales' },
        ru: { label: 'Формат продажи', value: '10 мл 5 флаконов' },
        az: { label: 'Satış forması', value: '10 ml 5 flakon' },
      },
      { de: { label: 'pH' }, pt: { label: 'pH' }, es: { label: 'pH' }, ru: { label: 'pH' }, az: { label: 'pH' } },
    ],
  },
}
