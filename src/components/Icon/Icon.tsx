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
import { Screen } from '../../types/consts';

export default function Icon({ icon, selected = false }: {
    icon: Screen,
    selected?: boolean,
}) {

    const icons: {
        [key: number]: string[]
    } = {
        0: [foodBright, foodDim, 'food'],
        1: [lightBright, lightDim, 'light'],
        2: [playBright, playDim, 'play'],
        3: [medicineBright, medicineDim, 'medicine'],
        4: [bathBright, bathDim, 'bath'],
        5: [scaleBright, scaleDim, 'scale'],
        6: [disciplineBright, disciplineDim, 'discipline'],
        7: [attentionBright, attentionDim, 'attention'],
    }



    return (
        <img 
            alt={`${icons[icon][2]} icon${selected? ', selected' : ''}`} 
            src={icons[icon][selected? 0 : 1]} 
            className={`icon icon--${icon}`} 
        />
    );
}