import {GridList, GridListTile} from "@material-ui/core";
import collectivesTiles from "../tiles/collectivesTiles";



export default function Collectives() {
    return (
        <GridList cols={3} spacing={45}>
            {collectivesTiles.map((tile) => (
                <GridListTile key={tile.img} cols={tile.cols || 1} style={{height: '32vh'}}>
                    <img src={tile.img} alt={tile.title} />
                </GridListTile>
            ))}
        </GridList>
    )
}