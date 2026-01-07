---
title: "Or"
description: "the english word 'or'."
pubDate: 2026-01-05
tags: ["linguistics"]
---

## “or” or “or”?

<blockquote>“Later tonight, I’ll read or cook before going to bed.”</blockquote>

Usually, I use the phrase *or* to mean *one or the other, but not both*, as a complement to my frequent usage of *and/or*. As much as I like the latter phrase, *and/or*, it can be cumbersome to throw in a slash every time. Yes, I often use keyboard replacements, but its such a critical junction that there must be a better symbol than the monstrosity *"&or"* I’ve seen before. So imagine my surprise, when online sources tell me the symbol for *and/or* is merely *or*: *or* is grammatically used to mean *one, the other, both*. 

## disambiguation

Seeing this, I was baffled and dumbstruck by my obliviousness; could it be that simple? In programming and logic notation, *or* is used to mean just that: *one, the other, both*, with the logical symbol $\lor$ used to denote this definition. On the other hand, xor, denoted by $\oplus$, is used to mean one, the other, but not both. The former is known as *“inclusive or”*, and the latter as *“exclusive or”* to indicate whether both options can be true or not (inclusive or exclusive). 

## english propositional logic

While the distinction is made clear in logic notation, this syntax is not used conversationally, nor are there convenient shortcuts on traditional keyboards. The grammatical word for exclusive *or* (*strictly one of two*) is *either*. The full trifecta is supposedly:

* Both, And (two of two): $A \land B$
* Or (one, optionally two): $A \lor B$
* Either, Or (strictly one of two): $A \oplus B$
* Neither, Nor (zero of two): ${\neg(A \lor B), \neg A \land \neg B}$

In theory, *either* modifies the meaning of *or* to make it exclusive: *either* serves as the exclusive version of *or*, while *or* (alone) serves as the inclusive[^1]. If there is a proper definition of *either*, its usage is still unsatisfying: it’s clunky and not the way we colloquially use *either/or*. 

[^1]: Frustratingly, despite thorough coverage on the subject, [some sources](https://www.yourdictionary.com/articles/either-neither-guide) assert either to mean one, maybe both: an inclusive either.

### counterexamples

#### Example 1. 

"Would you like soup *or* salad?" $\implies$ A $\oplus$ B

A common side dish offers one soup or one salad, you cannot get both. The supposedly *"inclusive or"* is implicitly exclusive. 

#### Example 2. 

"Do you want an apple *or* a banana?" $\implies {A \oplus B, \neg(A \lor B)}$

When asking for someone’s choice, the speaker is offering two choices—asking for none in response is acceptable, but asking for both (inclusive) is atypical. While this use is mostly *exclusive or*, this question really indicates spectrum of *zero or more*. 


#### Example 3. 

"Do you want thai *or* mexican food for dinner?" $\implies$ A $\oplus$ B

Despite *or* being inclusive, it would be strange to indicate both options together. The supposed correction, "Do you want *either* thai *or* mexican?" is just not common. It can also imply that the options are definitively narrowed to two exclusives, with no third alternative. 

#### Example 4. 

"*Either* is good with me." $\implies$ { A $\land$ B, A $\oplus$ B}

Despite supposedly being exclusive, either indicates universal permission, in context allowing at least one or both. This use of *either* effectively kills the exclusive definition that is supposed to be inherently unique.


#### Example 5. 

"Cream *or* sugar?" $\implies {A \lor B, A \neg B}$

While both *“and”*, *“or”* work interchangeably in this situation, no phrase clarifies the option of neither. 

#### Example 6. 

"Side effects include vomiting *and* death." $\implies {A \lor B, A \neg B}$

As before, this carries warnings of any permutation of side effects. The logical operator, again, does not strictly work here: both are not guaranteed. While both can occur, any combination of zero, one, both can occur. The biggest betrayal here is that *“and”* functions also as an inclusive *or*.

||Example            |Notation |Implied Logic  |Intention         |
|---|---                |---      |---            |---               |
|1|soup or salad      |$\lor$   |$\oplus$       |strictly one      |
|2|apple or banana    |$\lor$   |$\oplus$       |zero, one         |
|3|thai or mexican    |$\lor$   |$\oplus$       |strictly one      |
|4|either is good     |$\oplus$ |$\lor$         |inclusive       |
|5|cream or sugar     |$\lor$   |$\neg$, $\lor$ |zero, one, both   |
|6|vomiting and death |$\land$  |$\lor$, $\neg$ |zero, one, both   |


## or no more

The english phrases often do not line up with grammatical or logical intention due to either neutering of the english language or complexity of the context. An alternative conjunction to indicate 0+ or 1+ would greatly clarify options, especially for examples 2, 3, 5, and 6. 

In the examples given, there are only two alternatives. The problem compounds in lists greater than two items. But let’s not get into more ambiguities of lists (i.e. when is “between” inclusive or exclusive?). Mathematically precise terminology is incredibly helpful for removing ambiguity, but that is not making its way into common parlance anytime soon!

Context clues are a lovely, wonderful thing. Understanding of context clues is a critical skill. But the english language places disproportionate reliance on context for a word as simple as *“or”*. In whatever way *and/or* came to be about, I’m all for it. If it’s too ugly to type, give me the simple phrase *andor* for the inclusive, and let *or* indicate "at least one".
  
.  
.  
. 
   
*Special thanks* to Bella Bah for contributing to this article.