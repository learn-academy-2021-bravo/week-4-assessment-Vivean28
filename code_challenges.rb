# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in an array of words and a letter and returns all the words that contain that particular letter.

# I need to create a method called my_letters 
# that takes in an array of words
# Later, my method needs to return all the words that contain that particular letter.
# I need to use the .inculdes? to look for the  for 't', and 'o'


beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
letters_array = ['a', 'b', 'c', 'd', 'l', 'm', 'n', 'o']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']


# def my_letters array
#     array.map do |value|
#         value.split('')
#     end
# end
# p my_letters beverages_array

def my_letters array,letter
    array.map do |value|
    value.split('') 
        if value.include?(letter)
            p value
        end
    end
end

 my_letters beverages_array, letter_t
# def my_letters(array, letter)
# # get the values out of the array
# # each is looking
#  array.each_with_index do |value, index|
#    one_word = value.split()
#    one_word.each do |value|
#         if value == letter
#        p array[index]
#         end
#     end 
# end
# end
# my_letters(beverages_array, letter_o)



# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

# Create a method that takes in a parameter (string)
# I first need to say string.split('') that way every letter in my index is splited
# I need to assign my splited string that say I can use it to itirate through it 
# And removes all the vowels from the string 
# To remove all vowls, (aeiou)


album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'


# def remove_vowels string
#    my_splited_arra = string.split('')
    
# end
# p remove_vowels album1 



def remove_vowels string
#my_splited_arra = string.split('')
    string.delete "aeiouAEIOU"
end
p remove_vowels album1 
p remove_vowels album2
p remove_vowels album3
 

# def remove_vowels string
#     string.map do |value|

#     end
# end
# array.map do |value|
#     value.split('') 
#         if value.include?(letter)
#             p value
#         end
#     end

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a get_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

class Bike 
    def initialize
        @model = "model"
        @wheels = 2
        @current_speed = 0
    end 

    def get_info
        "The Trek bike has 2 wheels and is going 0 mph."
    end 
end
p new_one = Bike.new


# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed. The brake method should decrease the speed. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster 10 => 10
# Expected output example: my_bike.brake 15 => 0
