<Route
    path="/*/overview"
    render={() => (
        <Overview
            image="../images/~.svg"
            team="~"
            overviewUrl="/*/overview"
            playersUrl="/*/players"
            resultsUrl="/*/results"
        />
    )}
/>
    <Route
        path="/*/players"
        render={() => (
            <PlayerList
                image="../images/~.svg"
                team="~"
                overviewUrl="/*/overview"
                playersUrl="/*/players"
                resultsUrl="/*/results"
                data={this.state.players}
                teamId={59}
            />
        )}
    />
    <Route
        path="/*/results"
        render={() => (
            <Results
                image="../images/~.svg"
                team="~"
                overviewUrl="/*/overview"
                playersUrl="/*/players"
                resultsUrl="/*/results"
            />
        )}
    />