import SavedShows from "../components/SavedShows"


const Account = () => {
  return (
    <>
    <div className="w-full">
        <img className="w-full h-[400px] object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="netflixBG" />
        <div className="bg-black/60 fixed top-0 left-0 h-[550px] w-full">
          <div className="absolute top-[25%] p-4 md:p-8">
            <h1 className="text-3xl md:text-5xl font-bold">MY SHOWS</h1>
          </div>
        </div>
    </div>
            <SavedShows></SavedShows>
    </>
  )
}

export default Account