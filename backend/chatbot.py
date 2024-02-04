from chatterbot import ChatBot
from chatterbot.trainers import ListTrainer
from chatterbot.trainers import ChatterBotCorpusTrainer

my_bot = ChatBot(
    name='PyBot', 
    read_only=True,
    logic_adapters=['chatterbot.logic.MathematicalEvaluation',
          'chatterbot.logic.BestMatch'])

small_talk = ['hi there!',
          'hi!',
          'how do you do?',
          'how are you?',
          'im cool.',
          'fine, you?',
          'always cool.',
          'im ok',
          'glad to hear that.',
          'im fine',
          'glad to hear that.',
          'i feel awesome',
          'excellent, glad to hear that.',
          'not so good',
          'sorry to hear that.',
          'whats your name?',
          'im pybot. ask me a math question, please.']

math_talk_1 = ['pythagorean theorem',
          'a squared plus b squared equals c squared.']

math_talk_2 = ['law of cosines',
          'c2 = a2 + b*2 - 2 a * b * cos(gamma)']

list_trainer = ListTrainer(my_bot)

for item in (small_talk, math_talk_1, math_talk_2):
    list_trainer.train(item)

print(my_bot.get_response("hi"))
print(my_bot.get_response("i feel awesome today"))
print(my_bot.get_response("what's your name?"))
print(my_bot.get_response("show me the pythagorean theorem"))
print(my_bot.get_response("do you know the law of cosines?"))

corpus_trainer = ChatterBotCorpusTrainer(my_bot)
corpus_trainer.train('chatterbot.corpus.english')