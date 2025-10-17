export function Login() {
// style
    return <>
<body class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4 py-8">
    <div class="max-w-md w-full">
        <div class="text-center mb-8">
            <h1 class="text-3xl font-bold text-gray-900 font-pacifico">DomusGo</h1>
            <p class="text-gray-600 mt-2">Créez votre compte</p>
        </div>
        
        <div class="bg-white rounded-2xl shadow-xl p-8">
            <form class="space-y-4">
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label for="firstName" class="block text-sm font-medium text-gray-700 mb-1">Prénom *</label>
                        <input id="firstName" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm" placeholder="Jean" type="text"/>
                    </div>
                    <div>
                        <label for="lastName" class="block text-sm font-medium text-gray-700 mb-1">Nom *</label>
                        <input id="lastName" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm" placeholder="Dupont" type="text"/>
                    </div>
                </div>
                
                <div>
                    <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input id="email" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm" placeholder="jean.dupont@email.com" type="email"/>
                </div>
                
                <div>
                    <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Téléphone *</label>
                    <input id="phone" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm" placeholder="+225 07 12 34 56 78" type="tel"/>
                </div>
                
                <div>
                    <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Mot de passe * (min. 6 caractères)</label>
                    <input id="password" required minlength="6" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm" placeholder="••••••••" type="password"/>
                </div>
                
                <div>
                    <label for="confirmPassword" class="block text-sm font-medium text-gray-700 mb-1">Confirmer le mot de passe *</label>
                    <input id="confirmPassword" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm" placeholder="••••••••" type="password"/>
                </div>
                
                <div class="flex items-start">
                    <input id="terms" class="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500" required type="checkbox"/>
                    <label for="terms" class="ml-2 text-sm text-gray-600">
                        J'accepte les&nbsp;<a class="text-blue-600 hover:text-blue-700 cursor-pointer" href="#">conditions d'utilisation</a>&nbsp;et la&nbsp;<a class="text-blue-600 hover:text-blue-700 cursor-pointer" href="#">politique de confidentialité</a>
                    </label>
                </div>
                
                <button type="submit" class="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors whitespace-nowrap cursor-pointer">
                    Créer mon compte
                </button>
            </form>
            
            <div class="my-6 flex items-center">
                <div class="flex-1 border-t border-gray-300"></div>
                <span class="px-4 text-sm text-gray-500">ou</span>
                <div class="flex-1 border-t border-gray-300"></div>
            </div>
            
            <div class="space-y-3">
                <button type="button" class="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer">
                    <span class="ri-google-fill text-red-500 text-xl mr-3"></span>
                    <span class="text-gray-700 font-medium">S'inscrire avec Google</span>
                </button>
                <button type="button" class="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer">
                    <span class="ri-facebook-fill text-blue-600 text-xl mr-3"></span>
                    <span class="text-gray-700 font-medium">S'inscrire avec Facebook</span>
                </button>
            </div>
            
            <p class="text-center text-sm text-gray-600 mt-6">
                Déjà un compte ?&nbsp;<a class="text-blue-600 hover:text-blue-700 font-medium cursor-pointer" href="#">Se connecter</a>
            </p>
        </div>
    </div>
</body>
      
    </>
}


