import {Frisbee} from "../type/frisbee.ts";
import FrisbeeRow from "./FrisbeeRow.tsx";

interface FrisbeeTableProps {
    frisbees: Frisbee[]
}

const FrisbeeTable = ({frisbees}: FrisbeeTableProps) => {
    return (
        <>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">Model name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Gamme</th>
                    <th scope="col">Description</th>
                </tr>
                </thead>
                <tbody>
                {frisbees.map((frisbee, index) => {
                    return (
                        <FrisbeeRow
                            key={index}
                            frisbee={frisbee}
                        />
                    )
                })}
                </tbody>
            </table>
        </>
    )
}

export default FrisbeeTable