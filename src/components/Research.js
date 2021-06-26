import {GridList, GridListTile} from "@material-ui/core";
import researchTiles from "../tiles/researchTiles";



export default function Research() {
    return (
        <GridList cols={3} spacing={45}>
            {researchTiles.map((tile) => (
                <GridListTile key={tile.img} cols={tile.cols || 1} style={{height: '32vh'}}>
                    <img src={tile.img} alt={tile.title} />
                </GridListTile>
            ))}
        </GridList>
    )
}