Rails.application.routes.draw do
  # get 'static_pages/root'
  namespace :api , defaults: { format: :json } do
    resources :todos, only: %i(show index update destroy create)
  end

  root 'static_pages#root'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
