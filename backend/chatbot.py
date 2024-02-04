from chatterbot import ChatBot
from chatterbot.trainers import ListTrainer
from chatterbot.trainers import ChatterBotCorpusTrainer

my_bot = ChatBot(
    name='Barbie', 
    read_only=True,
    logic_adapters=['chatterbot.logic.MathematicalEvaluation',
          'chatterbot.logic.BestMatch'])

small_talk = ['hey barbie',
          'hi!',
          'how are you, barbie?',
          'what\'s your name?',
          'thanks'
          'is there anything else I can assist you with, barbie?'
          'no'
          'congratulations! you are a girl math expert now! if you have more questions or need assistance in the future, feel free to reach out. wishing you a fantastic day ahead'
          'i\'m AI Barbie. ask me a girl math question, please.']

girl_talk_1 = ['short term',
          'Are you up for the financial chic adventure? Find it from Resources. We\'ve included links to relevant stories below to add that extra glam to your analysis and decision-making.']

girl_talk_2 = ['long term',
          'Ready to dive into the stock market runway? How about we explore the latest trends in investments together by clicking on the Stocks buttons?']

girl_talk_3 = ['finance',
          'Of course! We\'re here to sprinkle a bit of financial magic into your life! What exciting goals are you dreaming of? Are you thinking short-term thrills or long-term adventures?']

list_trainer = ListTrainer(my_bot)

for item in (small_talk, girl_talk_1, girl_talk_2, girl_talk_3):
    list_trainer.train(item)

"""
print(my_bot.get_response("hi"))
print(my_bot.get_response("what's your name?"))
print(my_bot.get_response("I need help with short term goal"))
print(my_bot.get_response("I need help with long term goal"))
print(my_bot.get_response("I am not familiar with finance"))
"""

corpus_trainer = ChatterBotCorpusTrainer(my_bot)
corpus_trainer.train('chatterbot.corpus.english')

def get_output(bot_input):
    #while True:
    try:
        bot_response = str(my_bot.get_response(bot_input))
        return {"test": bot_response}

    except (KeyboardInterrupt, EOFError, SystemExit) as e:
        # Log the exception or return an error message
        return {'error': str(e)}
