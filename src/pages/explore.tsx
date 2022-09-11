import { NextPage } from "next";

const ExplorePage: NextPage = () => {
    return (
        <div className="h-[2000px]" onClick={() => window.history.back()}>explore</div>
    )
}

export default ExplorePage