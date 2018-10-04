#include <bits/stdc++.h>
#include <algorithm>

using namespace std;

class Output {

public:
    int actions;
    vector<int> nums;

};

Output turn(int i, int n, int k) {

    vector<int> nums;
    int amount = 0;

    for (int j = i; j <= n; j += 2*k + 1) {

        nums.push_back(j);

        amount += 1;

    }

    if (nums[nums.size() - 1] > (n - k - 1) && nums[0] <= (k + 1)) {

        return {actions: amount, nums: nums};

    } else {

        return {actions: 0, nums: nums};

    }



}

int main() {

    int n, k;

    cin >> n >> k;

    vector<int> is;
    int actions = n;

    if (k > n) {
        k = n;
    }

    if (k == 0) {

        actions = n;

        for (int i = 1; i <= n; i++) {

            is.push_back(i);

        }

    } else if (k == n || k == n - 1) {

        actions = 1;

        is.push_back(1);

    } else if (k == 1 && n % 3 == 0) {

        actions = 0;

        for (int j = 2; j < n; j += 3) {

            is.push_back(j);
            actions += 1;

        }

    } else if (k >= n / 2) {

        actions = 1;

        is.push_back(n - k);

    }

    else {

        for (int i = 1; i < 2*k; ++i) {

            Output newT = turn(i, n, k);

            if (newT.actions < actions || actions == 0) {

                if (newT.actions != 0) {

                    is = newT.nums;
                    actions = newT.actions;

                }

            }

        }

    }


    cout << actions << "\n";
    for (int i = 0; i < is.size(); i++) {

        cout << is[i];

        if (i < is.size() - 1) {
            cout << " ";
        }

    }

    return 0;
}
