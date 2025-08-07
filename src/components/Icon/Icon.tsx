import './Icon.scss';
import foodBright from '../../assets/images/icons/food_bright.PNG';
import foodDim from '../../assets/images/icons/food_dim.PNG';
import lightBright from '../../assets/images/icons/light_bright.PNG';
import lightDim from '../../assets/images/icons/light_dim.PNG';
import playBright from '../../assets/images/icons/play_bright.PNG';
import playDim from '../../assets/images/icons/play_dim.PNG';
import medicineBright from '../../assets/images/icons/medicine_bright.PNG';
import medicineDim from '../../assets/images/icons/medicine_dim.PNG';
import bathBright from '../../assets/images/icons/bath_bright.PNG';
import bathDim from '../../assets/images/icons/bath_dim.PNG';
import scaleBright from '../../assets/images/icons/scale_bright.PNG';
import scaleDim from '../../assets/images/icons/scale_dim.PNG';
import disciplineBright from '../../assets/images/icons/discipline_bright.PNG';
import disciplineDim from '../../assets/images/icons/discipline_dim.PNG';
import attentionBright from '../../assets/images/icons/attention_bright.PNG';
import attentionDim from '../../assets/images/icons/attention_dim.PNG';

export default function Icon({ icon, selected = false }: {
    icon: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7,
    selected?: boolean,
}) {

    const icons = {
        0: [foodBright, foodDim],
        1: [lightBright, lightDim],
        2: [playBright, playDim],
        3: [medicineBright, medicineDim],
        4: [bathBright, bathDim],
        5: [scaleBright, scaleDim],
        6: [disciplineBright, disciplineDim],
        7: [attentionBright, attentionDim],
    }



    return (
        // TODO: ADD ALT TEXT
        <img alt="" src={icons[icon][selected? 0 : 1]} className={`icon icon--${icon}`} />
    );
}