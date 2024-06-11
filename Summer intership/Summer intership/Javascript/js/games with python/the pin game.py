import random

print("Read Each Word Carefully And find the pattern\nYou Have To Get It Five Times (5) In A Row To Win")
print("The game.......\n Starts.....\n NOW!!!/nBEGIN!!\n")
count = 0

while count < 5:
    number = random.randint(0,2)
    
    if number ==0 :
        num = int(input("OK, I can play the pin game. Can you play the pin game?\n (1) Yes or (2) No"))
        if num ==1:
            print("Correct")
            count +=1
            print(count)
            
        elif num == 2 :
            print("Incorrect \nTry Again")
            count=0
            print(count)
           
    elif number == 1:
         num = int(input("Ok, I can play the pin game. Can you play the pin game?\n (1) Yes or (2) No"))
         if num == 1 :
             print("Incorrect\n Try Again")
             count =0
             print(count)
            
         elif num == 2 :
             print("Correct")
             count+=1
             print(f"you have won {count} time(s) ")
          
    elif number == 2:
         num = int(input("oK, I can play the pin game. Can you play the pin game?\n (1) Yes or (2) No"))
         if num ==1 :
             print("Incorrect \nTry Again")
             count = 0
             print(count)
            
         if num == 2 :
             print("Correct" )
             count+=1
             print(count)
           
print("Congratulations you won ")
    
     
# while correct_count < 5:
#         answer = input(question + " ")
#         total_attempts += 1
        
#         if answer == correct_answer.lower():
#             correct_count += 1
#             print("Correct! You have answered correctly", correct_count, "times in a row.")
#         else:
#             print("Incorrect! Starting over.")
#             correct_count = 0  # Reset correct count if the answer is wrong
    
#     print("Congratulations! You have passed after", total_attempts, "attempts.")

# # Call the function to start the question loop
# ask_question()

