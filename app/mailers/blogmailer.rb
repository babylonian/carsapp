class Blogmailer < ActionMailer::Base
  if @user.save
	Blogmailer.register(@user).deliver
  end
end
