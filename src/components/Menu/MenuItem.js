import Button from "../UI/Button";
import Card from "../UI/Card";

export default function MenuItem (props) {
    console.log(props);
    return (
        <>
        <Card>
            <li className="flex justify-between">
            <div>
                <h4 className="text-xl mb-1">{props.item.name}</h4>
                <p className="mb-1">{props.item.description}</p>
                <h4 className="text-primary font-semibold">GHC {formatNumber(props.item.price)}</h4>
            </div>
            <div>
                <div className="flex items-center mb-3">
                    <div className="mr-5"><h4>Amount</h4></div>
                    <div>
                        <input type="number" min="0" className="w-14 h-8 border border-gray-300 rounded-lg"/>
                    </div>
                </div>
                <Button className="bg-primary px-3 py-1 text-white w-full">
                    <i className="fas fa-plus"></i> Add
                </Button>
            </div>
        </li>
        </Card>
        <br/>
        </>
    )
}

export const formatNumber = (number) => {
    return (Math.round(number * 100) / 100).toFixed(2);
}