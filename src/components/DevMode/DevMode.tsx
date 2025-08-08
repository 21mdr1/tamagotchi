import './DevMode.scss';
import { useContext } from 'react';
import { DevModeContext } from '../../utils/context';
import { Stage } from '../../types/consts';

export default function DevMode() {
    const { devModeStage, setDevModeStage } = useContext(DevModeContext)

    return (
        <>
        <select 
            name="stage" 
            value={devModeStage}
            onChange={(e) => setDevModeStage(Number(e.target.value) as Stage)}
            className="dropdown"
        >
            <option value={Stage.Egg}>egg</option>
            <option value={Stage.Baby}>baby</option>
            <option value={Stage.Child}>child</option>
            <option value={Stage.Teen}>teen</option>
            <option value={Stage.Adult}>adult</option>
            <option value={Stage.None}>none</option>
        </select>
        </>
    );
}