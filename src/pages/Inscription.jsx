export function Inscription() {
  return (
    <>
      <body class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4 py-8">
        <div class="max-w-md w-full">
          <div class="text-center mb-8">
            <a href="#" class="inline-block">
              <h1 class="text-3xl font-bold text-gray-900 pacifico">DomusGo</h1>
            </a>
            <p class="text-gray-600 mt-2">Connectez-vous à votre compte</p>
          </div>

          <div class="bg-white rounded-2xl shadow-xl p-8">
            <form class="space-y-6">
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  required
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  placeholder="votre@email.com"
                  type="email"
                />
              </div>

              <div>
                <label
                  for="password"
                  class="block text-sm font-medium text-gray-700 mb-1"
                >
                  Mot de passe
                </label>
                <input
                  id="password"
                  required
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  placeholder="••••••••"
                  type="password"
                />
              </div>

              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <input
                    id="remember"
                    class="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    type="checkbox"
                  />
                  <label for="remember" class="ml-2 text-sm text-gray-600">
                    Se souvenir de moi
                  </label>
                </div>
                <a
                  class="text-sm text-blue-600 hover:text-blue-700 cursor-pointer"
                  href="#"
                >
                  Mot de passe oublié ?
                </a>
              </div>

              <button
                type="submit"
                class="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors whitespace-nowrap cursor-pointer"
              >
                Se connecter
              </button>
            </form>

            <div class="my-6 flex items-center">
              <div class="flex-1 border-t border-gray-300"></div>
              <span class="px-4 text-sm text-gray-500">ou</span>
              <div class="flex-1 border-t border-gray-300"></div>
            </div>

            <div class="space-y-3">
              <button
                type="button"
                class="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer"
              >
                <span class="ri-google-fill text-red-500 text-xl mr-3"></span>
                <span class="text-gray-700 font-medium">
                  Continuer avec Google
                </span>
              </button>
              <button
                type="button"
                class="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer"
              >
                <span class="ri-facebook-fill text-blue-600 text-xl mr-3"></span>
                <span class="text-gray-700 font-medium">
                  Continuer avec Facebook
                </span>
              </button>
            </div>

            <p class="text-center text-sm text-gray-600 mt-6">
              Pas encore de compte ?&nbsp;
              <a
                class="text-blue-600 hover:text-blue-700 font-medium cursor-pointer"
                href="#"
              >
                S'inscrire
              </a>
            </p>
          </div>
        </div>

        <div>
          <div
            id="vapi-widget-floating-button"
            class=" fixed bottom-10 right-5 bg-black px-6 py-4 rounded-full cursor-pointer"
          >
            <div class="flex items-center space-x-2">
              <div class="ml-2 flex flex-col items-start justify-center">
                <span class="text-white text-sm leading-tight">
                  Talk with Us
                </span>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
