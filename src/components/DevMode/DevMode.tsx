import './DevMode.scss';
import { stages } from '../../types/types';
import { useContext } from 'react';
import { DevModeContext } from '../../utils/context';


export default function DevMode() {
    const { devModeStage, setDevModeStage } = useContext(DevModeContext)

    return (
        <>
        <select 
            name="stage" 
            value={devModeStage}
            onChange={(e) => setDevModeStage(e.target.value as stages)}
            className="dropdown"
        >
            <option value={'egg'}>egg</option>
            <option value={'hatch'}>hatch</option>
            <option value={'baby'}>baby</option>
            <option value={'adult'}>adult</option>
            <option value={'none'}>none</option>
        </select>
        </>
    );
}