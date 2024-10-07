import './card-tile.css';
import { ProjectCard } from "../projectCard/ProjectCard";
import {useContext} from "react";
import {DataContext} from "../../dataContext/DataContext";

export const CardTile = ({ view }) => {
    const data = useContext(DataContext);

    return (
        <div className='card-tile__root'>
            {data.map((item) => (
                <ProjectCard key={item.id} item={item} view='tile' />
            ))}
        </div>
    );
};