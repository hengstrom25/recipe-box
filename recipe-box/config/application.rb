require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module RecipeBoxApi
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    #config.load_defaults 5.2
	config.api_only = true
	config.action_dispatch.default_headers = {
	'Access-Control-Allow-Origin' => '*',
	'Access-Control-Allow-Headers' => 'content-type',
	'Access-Control-Allow-Methods' => 'GET, POST, HEAD, CONNECT, OPTIONS, PUT, DELETE, PATCH'
	}

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.
  end
end

