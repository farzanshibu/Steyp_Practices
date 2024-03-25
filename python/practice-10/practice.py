import random
# Rock Paper Scissor Game
choices = ["rock", "paper", "scissor"]

# Rules

# 1, rock - paper -> paper win
# 2, rock - scissor -> rock win
# 3, paper - scissor -> scissor win

def winner(player, system):
    if player == "rock" and system == "paper":
        return "system"
    elif player == "rock" and system == "scissor":
        return "player"
    elif player == "paper" and system == "scissor":
        return "system"
    elif player == "paper" and system == "rock":
        return "player"
    elif player == "scissor" and system == "rock":
        return "system"
    elif player == "scissor" and system == "paper":
        return "player"
    else:
        return "tie"


# Tasks

# Player inputs a choice
player = input("Enter a option [rock, paper, scissor] : ").lower()
# System randomly select one
system = random.choice(choices)

print(f"System choice: {system}")
# If both select same option, then its a tie
# If its different then find find winner by the above rules

# If both select the same option, then it's a tie
result = winner(player, system)
if result == "tie":
    print("It's a tie!")
else:
    print(f"{result.capitalize()} wins!")


