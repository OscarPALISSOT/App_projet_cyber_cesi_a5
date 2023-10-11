import {Frisbee} from "../type/frisbee.ts";

interface FrisbeeRowProps {
    frisbee: Frisbee
}

const FrisbeeRow = ({frisbee}: FrisbeeRowProps) => {
    return (
        <>
            <tr>
                <td>{frisbee.ModelName}</td>
                <td>{frisbee.pUHT}</td>
                <td>{frisbee.Gamme}</td>
                <td>{frisbee.Description}</td>
            </tr>
        </>
    )
}

export default FrisbeeRow