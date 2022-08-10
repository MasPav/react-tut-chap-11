import Button from "./UI/Button";

export default function Header () {
    return (
        <header>
            <nav className="sticky top-0 bg-primary h-20 shadow-lg">
                <div className="px-20 flex justify-between items-center h-full text-white">
                    <div>
                        <a href="/" className="text-3xl">ReactMeals</a>
                    </div>
                    <div>
                        <Button className="bg-white p-3 text-primary"><i className="fa-solid fa-cart-shopping mr-2"></i> Your Cart <span className="ml-2 bg-primary shadow rounded-lg px-5"></span></Button>
                    </div>
                </div>
            </nav>
        </header>
    )
}