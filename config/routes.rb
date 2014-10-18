ProjectMellon::Application.routes.draw do
  root 'welcome#index'
  resources :games, :players, :linear_regression, :optimization
end
