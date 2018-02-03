import IntroductionSlide from './Introduction';
import WhatIsOscarSlide from './WhatIsOscar';
import WhatMakesOscarGoodSlide from './WhatMakesOscarGood';
import WhatOscarBringsSlide from "./WhatOscarBrings";
import OscarVsTgShopSlide from "./OscarVsTgShop";
import ReferencesSlide from "./References";


export default [
    {id: 'introduction', render: IntroductionSlide},
    {id: 'whatIsOscar', render: WhatIsOscarSlide},
    {id: 'whatMakesOscarGood', render: WhatMakesOscarGoodSlide},
    {id: 'whatOscarBrings', render: WhatOscarBringsSlide},
    {id: 'oscarVsTgShop', render: OscarVsTgShopSlide},
    {id: 'references', render: ReferencesSlide},
];
