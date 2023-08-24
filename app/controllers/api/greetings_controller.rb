class Api::GreetingsController < ApplicationController
  def random
    greetings = [
      "Hello, friend!",
      "Greetings!",
      "Hi there!",
      "Hey, nice to see you!",
      "Welcome!",
      "Hola!"
    ]
    random_greeting = greetings.sample
    render json: { greeting: random_greeting }
  end
end
