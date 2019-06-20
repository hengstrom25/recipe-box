Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
	
	root 'static_pages#home'
	
	match '/recipes/:id', via: [:options], :controller => 'application', :action => "options", :constraints => {:method => 'OPTIONS'}
	match '/recipe/:id', via: [:options], :controller => 'application', :action => "options", :constraints => {:method => 'OPTIONS'}
	match '/recipes', via: [:options], :controller => 'application', :action => "options", :constraints => {:method => 'OPTIONS'}
	
	resources :categories do
		resources :recipes
	end
	
	resources :recipes
	
end
