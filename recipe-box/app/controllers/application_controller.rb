#class ApplicationController < ActionController::API
class ApplicationController < ActionController::Base
  	
  	def options
		#render :nothing => true
		head :ok
	end

end
