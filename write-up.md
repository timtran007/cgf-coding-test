# My Assumptions and Design Choices

## Assumptions

1. Did not need a back end api to house information for eligibility, since there are only 3 states.
2. In the conditional logic of my function, I assumed that you can make exactly 100% of AMI or less in order to be considered eligible.
3. Assumed that 8 household size matched to the AMI is the max for a family.

## Design Choices
1. I went ahead and added the amiByStates within the function, so that less memory would be used if the funciton was never called.
2. By creating a variable to house the eligible states as objects, we can easily find whether or not a state is referenced in the variable using the in operator within JavaScript.
3. Used select input type so that we don't have to worry about user error when typing out states and selecting a household size.
4. Used create-react-app to quickly spin up a front end and easily add in a form that can capture the 3 different arguments for the function.
