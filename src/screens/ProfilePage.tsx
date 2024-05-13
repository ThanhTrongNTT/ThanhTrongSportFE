const ProfilePage = () => {
  return (
    <div className="mb-4 max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-10 bg-white shadow-xl rounded-lg text-gray-900">
      <div className="rounded-t-lg h-32 overflow-hidden">
        <img
          className="object-cover object-top w-full"
          src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          alt="Mountain"
        ></img>
      </div>
      <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
        <img
          className="object-cover object-center h-32"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          alt="Woman looking front"
        ></img>
      </div>
      <div className="text-center mt-2">
        <h2 className="font-semibold">Sarah Smith</h2>
        <p className="text-gray-500">Freelance Web Designer</p>
      </div>
      <form className="px-4 mt-4 border-t">
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col mb-4">
            <label>
              Họ
              <span className="block text-xs font-light text-stone-400">
                First Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Smith"
              className="mt-2 px-4 py-2 shadow rounded"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label>
              Tên
              <span className="block text-xs font-light text-stone-400">
                Last Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Sarah"
              className="mt-2 px-4 py-2 shadow rounded"
            />
          </div>
        </div>
        <div className="flex flex-col mb-4">
          <label>
            Email
            {/* <span className="block text-xs font-light text-stone-400">
              instructions ici lorem ipsum
            </span> */}
          </label>
          <input
            type="email"
            placeholder="SarahSmith@gmail.com"
            className="mt-2 px-4 py-2 shadow rounded"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label>
            Số Điện Thoại
            <span className="block text-xs font-light text-stone-400">
              Phone Numbers
            </span>
          </label>
          <input
            type="text"
            placeholder="+84 *********"
            className="mt-2 px-4 py-2 shadow rounded"
          />
        </div>
        {/* <div className="mt-6 flex gap-6">
          <button
            type="submit"
            className="rounded-full bg-orange-300 py-4 px-10 font-bold text-white shadow hover:bg-blue-500"
          >
            Envoyer
          </button>
          <button
            type="submit"
            className="rounded-full bg-transparent py-4 px-10 font-bold text-stone-400 border border-stone-200 hover:border-orange-300 hover:text-orange-300"
          >
            Réinitialiser
          </button>
        </div> */}
      </form>
      <div className="p-4 border-t mx-8 mt-2">
        <button className="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">
          Follow
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
