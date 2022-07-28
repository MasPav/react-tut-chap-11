import Card from "../UI/Card";

export default function UsersList(props) {
    return (
        <div>
            {props.users.length < 1 && <h4>No User added</h4>}
            {props.users.length > 0 &&
                <ul>{props.users.map(user =>
                    <Card key={user.id} className="mb-2">
                        <li>
                            <div className="flex justify-between items-center">
                                <div>
                                    <span className="block">{user.username}</span>
                                    <span className="text-gray-500">{user.age} year{user.age !== 1 && 's'} old</span>
                                </div>
                                <div>
                                    <span className="text-red-500 float-right font-bold cursor-pointer" onClick={() => props.onDeleteUser(user.id)}>x</span>
                                </div>
                            </div>
                        </li>
                    </Card>)}
                </ul>}
        </div>
    )
}