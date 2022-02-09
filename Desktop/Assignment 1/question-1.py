import re

def nameValidator(name):

        if re.match('[A-Za-z]{5,20}\s[A-Za-z]{5,20}', name):
            print("Validation Successful")
        else:
                print("Validation Failed")   
nameValidator("")                