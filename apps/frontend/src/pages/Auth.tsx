import { useParams } from 'react-router-dom';

function Auth() {
  const { type } = useParams();
  const isRegister = type === 'register';

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          {isRegister ? 'Register' : 'Log In'}
        </h1>
        <form className="space-y-6">
          {isRegister && (
            <>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-musa-blue focus:ring focus:ring-musa-blue focus:ring-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="chapter" className="block text-sm font-medium text-gray-700">
                  Chapter
                </label>
                <select
                  id="chapter"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-musa-blue focus:ring focus:ring-musa-blue focus:ring-opacity-50"
                >
                  <option>Select your chapter</option>
                  <option>Chapter 1</option>
                  <option>Chapter 2</option>
                  <option>Chapter 3</option>
                  <option>Chapter 4</option>
                  <option>Chapter 5</option>
                  <option>Chapter 6</option>
                </select>
              </div>
            </>
          )}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-musa-blue focus:ring focus:ring-musa-blue focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-musa-blue focus:ring focus:ring-musa-blue focus:ring-opacity-50"
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-musa-blue hover:bg-musa-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-musa-blue"
          >
            {isRegister ? 'Register' : 'Log In'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Auth;