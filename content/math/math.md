# Mathematics

Here's another zoo, with ~~available~~ stuff for future reference, with most of the "schizo" ~~writings and markings~~ stuff left to be done.


Inline math: $e^{i\pi} + 1 = 0$, $\frac{a}{b}$, $\sqrt{2}$ These can be in between paragraphs 
$\frac{d}{dx}\left(x^n\right) = nx^{n-1}$ About anywhere really, $\quad \sqrt[n]{x}, \quad x^{a+b} = x^a x^b$

## Display equations

$$
\int_0^1 x^2 \, dx = \frac{1}{3}
$$

$$
\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}
$$

## Multiline objects need to be encapsulated

For Matrices and other environments, they need to be surrounded by a \<div\> for them to work properly.
Here's some examples:

### Matrices

<div>
$$
A =
\begin{pmatrix}
1 & 2 \\
3 & 4
\end{pmatrix}
\quad
\det(A) = -2
$$
</div>

<div>
$$
LookAt =
\begin{bmatrix}
R_x & R_y & R_z & 0 \\
U_x & U_y & U_z & 0 \\
D_x & D_y & D_z & 0 \\
0   & 0   & 0   & 1
\end{bmatrix}
*
\begin{bmatrix}
1 & 0 & 0 & -P_x \\
0 & 1 & 0 & -P_y \\
0 & 0 & 1 & -P_z \\
0 & 0 & 0 & 1
\end{bmatrix}
$$
</div>

### Cases

<div>
$$
f(x) =
\begin{cases}
x^2 & \text{if } x \ge 0 \\
-x & \text{if } x < 0
\end{cases}
$$
</div>

### Align environment

<div>
$$
\begin{aligned}
(a+b)^2 &= a^2 + 2ab + b^2 \\
(a+b)^3 &= a^3 + 3a^2b + 3ab^2 + b^3
\end{aligned}
$$
</div>

## Other miscellaneous stuff

### Calculus

$
\lim_{x \to 0} \frac{\sin x}{x} = 1
$

$
\frac{d}{dx} \left( \sin x \right) = \cos x
$$

$
\int e^x \, dx = e^x + C
$

### Vectors and notation

$
\vec{v} = \langle v_1, v_2, v_3 \rangle, \quad \|v\| = \sqrt{v_1^2 + v_2^2 + v_3^2}
$

### Greek letters

$
\alpha, \beta, \gamma, \Gamma, \Delta, \lambda, \omega
$

### Set notation

$
A = \\{ x \in \mathbb{R} \mid x^2 < 2 \\}
$