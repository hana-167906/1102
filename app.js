const { useState: useStateAuth, useEffect: useEffectAuth } = React;

function AuthWrapper() {
    const [user, setUser] = useStateAuth(null);
    const [mode, setMode] = useStateAuth(null);
    const [form, setForm] = useStateAuth({ id: '', pw: '' });

    useEffectAuth(() => {
        const u = localStorage.getItem('currentUser');
        if (u) setUser(u);
    }, []);

    const signup = () => {
        const users = JSON.parse(localStorage.getItem('users') || '{}');
        if (users[form.id]) return;
        users[form.id] = { pw: form.pw };
        localStorage.setItem('users', JSON.stringify(users));
        setMode('login');
    };

    const login = () => {
        const users = JSON.parse(localStorage.getItem('users') || '{}');
        if (!users[form.id] || users[form.id].pw !== form.pw) return;
        localStorage.setItem('currentUser', form.id);
        setUser(form.id);
        setMode(null);
    };

    const logout = () => {
        localStorage.removeItem('currentUser');
        setUser(null);
    };

    return (
        <>
            <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                display: 'flex',
                gap: '8px',
                zIndex: 1000
            }}>
                {user ? (
                    <>
                        <span>{user}</span>
                        <button onClick={logout}>Logout</button>
                    </>
                ) : (
                    <>
                        <button onClick={() => setMode('login')}>Login</button>
                        <button onClick={() => setMode('signup')}>Sign up</button>
                    </>
                )}
            </div>

            {mode && (
                <div style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    background: 'white',
                    padding: '20px',
                    borderRadius: '10px',
                    zIndex: 2000
                }}>
                    <input
                        placeholder="ID"
                        value={form.id}
                        onChange={e => setForm({ ...form, id: e.target.value })}
                    />
                    <br /><br />
                    <input
                        type="password"
                        placeholder="Password"
                        value={form.pw}
                        onChange={e => setForm({ ...form, pw: e.target.value })}
                    />
                    <br /><br />
                    <button onClick={mode === 'login' ? login : signup}>
                        {mode === 'login' ? 'Login' : 'Sign up'}
                    </button>
                    <button onClick={() => setMode(null)}>Close</button>
                </div>
            )}

            <GradeGoalChecker />
        </>
    );
}

const { useState, useEffect } = React;

// Icon Components
const Target = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="6"></circle>
        <circle cx="12" cy="12" r="2"></circle>
    </svg>
);

const TrendingUp = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
        <polyline points="17 6 23 6 23 12"></polyline>
    </svg>
);

const Award = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"></circle>
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
    </svg>
);

const Trash2 = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="3 6 5 6 21 6"></polyline>
        <path d="m19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
        <line x1="10" y1="11" x2="10" y2="17"></line>
        <line x1="14" y1="11" x2="14" y2="17"></line>
    </svg>
);

const Plus = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
);

const CheckCircle = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
);

const Clock = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
);

const Calendar = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
);

const AlertCircle = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="12"></line>
        <line x1="12" y1="16" x2="12.01" y2="16"></line>
    </svg>
);

const Edit2 = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
    </svg>
);

const Save = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
        <polyline points="17 21 17 13 7 13 7 21"></polyline>
        <polyline points="7 3 7 8 15 8"></polyline>
    </svg>
);

const X = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);

function GradeGoalChecker() {
    const [subjects, setSubjects] = useState([]);
    const [newSubject, setNewSubject] = useState({
        name: '',
        goalScore: '',
        targetDate: ''
    });
    const [editingId, setEditingId] = useState(null);
    const [editForm, setEditForm] = useState({});

    useEffect(() => {
        const saved = localStorage.getItem('gradeGoalData');
        if (saved) {
            try {
                setSubjects(JSON.parse(saved));
            } catch (e) {
                console.error('데이터 로드 실패:', e);
            }
        }
    }, []);

    useEffect(() => {
        if (subjects.length >= 0) {
            localStorage.setItem('gradeGoalData', JSON.stringify(subjects));
        }
    }, [subjects]);

    const handleAddSubject = () => {
        if (newSubject.name && newSubject.goalScore && newSubject.targetDate) {
            setSubjects([...subjects, {
                id: Date.now(),
                name: newSubject.name,
                goalScore: parseFloat(newSubject.goalScore),
                targetDate: newSubject.targetDate,
                actualScore: null
            }]);
            setNewSubject({ name: '', goalScore: '', targetDate: '' });
        }
    };

    const handleUpdateScore = (id, actualScore) => {
        setSubjects(subjects.map(subject => 
            subject.id === id 
                ? { ...subject, actualScore: actualScore ? parseFloat(actualScore) : null }
                : subject
        ));
    };

    const handleDelete = (id) => {
        setSubjects(subjects.filter(subject => subject.id !== id));
    };

    const handleEdit = (subject) => {
        setEditingId(subject.id);
        setEditForm({
            name: subject.name,
            goalScore: subject.goalScore,
            targetDate: subject.targetDate
        });
    };

    const handleSaveEdit = (id) => {
        setSubjects(subjects.map(subject =>
            subject.id === id
                ? { ...subject, ...editForm, goalScore: parseFloat(editForm.goalScore) }
                : subject
        ));
        setEditingId(null);
    };

    const handleCancelEdit = () => {
        setEditingId(null);
        setEditForm({});
    };

    const calculateStats = () => {
        const total = subjects.length;
        const completed = subjects.filter(s => s.actualScore !== null);
        const achieved = completed.filter(s => s.actualScore >= s.goalScore).length;
        const achievementRate = completed.length > 0 ? (achieved / completed.length) * 100 : 0;
        
        return {
            total,
            achieved,
            achievementRate: achievementRate.toFixed(0)
        };
    };

    const getDateStatus = (targetDate) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const target = new Date(targetDate);
        target.setHours(0, 0, 0, 0);
        
        if (target < today) {
            return 'past';
        } else if (target.getTime() === today.getTime()) {
            return 'today';
        } else {
            const daysLeft = Math.ceil((target - today) / (1000 * 60 * 60 * 24));
            return { status: 'future', daysLeft };
        }
    };

    const getSubjectStatus = (subject) => {
        const dateStatus = getDateStatus(subject.targetDate);
        
        if (subject.actualScore === null) {
            if (dateStatus === 'past') {
                return { status: 'overdue', message: '점수 입력이 필요합니다!', color: 'red', icon: AlertCircle };
            } else if (dateStatus === 'today') {
                return { status: 'today', message: '오늘이 목표일입니다!', color: 'blue', icon: Calendar };
            } else {
                return { status: 'waiting', message: `D-${dateStatus.daysLeft} 결과 대기 중...`, color: 'gray', icon: Clock };
            }
        }
        
        if (subject.actualScore >= subject.goalScore) {
            return { status: 'success', message: '목표 달성 성공! 🎉', color: 'green', icon: CheckCircle };
        }
        
        const diff = subject.goalScore - subject.actualScore;
        return { status: 'fail', message: `${diff.toFixed(0)}점 부족해요 🥲`, color: 'yellow', icon: Target };
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' });
    };

    const stats = calculateStats();

    return (
        <div className="container">
            <div className="header">
                <h1>🎯 성적 목표 관리 웹사이트</h1>
                <p>목표를 설정하고 시험 후 실제 점수를 입력하여 달성 여부를 확인하세요</p>
            </div>

            <div className="stats-grid">
                <div className="stat-card blue">
                    <div className="stat-content">
                        <div className="stat-info">
                            <p>총 등록 과목 수</p>
                            <p className="stat-value gray">{stats.total}</p>
                        </div>
                        <div className="stat-icon blue">
                            <Target />
                        </div>
                    </div>
                </div>

                <div className="stat-card green">
                    <div className="stat-content">
                        <div className="stat-info">
                            <p>달성 성공 과목</p>
                            <p className="stat-value green">{stats.achieved}</p>
                        </div>
                        <div className="stat-icon green">
                            <Award />
                        </div>
                    </div>
                </div>

                <div className="stat-card purple">
                    <div className="stat-content">
                        <div className="stat-info">
                            <p>평균 달성률</p>
                            <p className="stat-value purple">{stats.achievementRate}%</p>
                        </div>
                        <div className="stat-icon purple">
                            <TrendingUp />
                        </div>
                    </div>
                </div>
            </div>

            <div className="input-card">
                <h2>
                    <Plus />
                    새 과목 등록하기
                </h2>
                <div className="input-form">
                    <div className="form-group">
                        <label>과목명</label>
                        <input
                            type="text"
                            placeholder="예: 수학"
                            value={newSubject.name}
                            onChange={(e) => setNewSubject({...newSubject, name: e.target.value})}
                        />
                    </div>
                    <div className="form-group">
                        <label>목표 점수</label>
                        <input
                            type="number"
                            placeholder="0-100"
                            min="0"
                            max="100"
                            value={newSubject.goalScore}
                            onChange={(e) => setNewSubject({...newSubject, goalScore: e.target.value})}
                        />
                    </div>
                    <div className="form-group">
                        <label>목표 달성일</label>
                        <input
                            type="date"
                            value={newSubject.targetDate}
                            onChange={(e) => setNewSubject({...newSubject, targetDate: e.target.value})}
                        />
                    </div>
                    <div className="form-group">
                        <label>&nbsp;</label>
                        <button onClick={handleAddSubject} className="btn-add">
                            <Plus />
                            추가
                        </button>
                    </div>
                </div>
            </div>

            {subjects.length === 0 ? (
                <div className="empty-state">
                    <div className="empty-icon">
                        <Target />
                    </div>
                    <p>아직 등록된 과목이 없습니다</p>
                    <p>위 폼에서 목표 점수와 달성일을 설정하고 과목을 추가해보세요!</p>
                </div>
            ) : (
                <div className="subjects-grid">
                    {subjects.map((subject) => {
                        const status = getSubjectStatus(subject);
                        const progress = subject.actualScore !== null 
                            ? (subject.actualScore / subject.goalScore) * 100 
                            : 0;
                        const isEditing = editingId === subject.id;
                        const StatusIcon = status.icon;

                        return (
                            <div key={subject.id} className={`subject-card ${status.status}`}>
                                <div className="subject-header">
                                    <div className="subject-info">
                                        {isEditing ? (
                                            <input
                                                type="text"
                                                value={editForm.name}
                                                onChange={(e) => setEditForm({...editForm, name: e.target.value})}
                                            />
                                        ) : (
                                            <h3>{subject.name}</h3>
                                        )}
                                        <div className="subject-date">
                                            <Calendar />
                                            {isEditing ? (
                                                <input
                                                    type="date"
                                                    value={editForm.targetDate}
                                                    onChange={(e) => setEditForm({...editForm, targetDate: e.target.value})}
                                                />
                                            ) : (
                                                <span>{formatDate(subject.targetDate)}</span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="subject-actions">
                                        {isEditing ? (
                                            <>
                                                <button onClick={() => handleSaveEdit(subject.id)} className="btn-icon save">
                                                    <Save />
                                                </button>
                                                <button onClick={handleCancelEdit} className="btn-icon cancel">
                                                    <X />
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                <button onClick={() => handleEdit(subject)} className="btn-icon edit">
                                                    <Edit2 />
                                                </button>
                                                <button onClick={() => handleDelete(subject.id)} className="btn-icon delete">
                                                    <Trash2 />
                                                </button>
                                            </>
                                        )}
                                    </div>
                                </div>

                                <div className="scores">
                                    <div className="score-box goal">
                                        <p>목표 점수</p>
                                        {isEditing ? (
                                            <input
                                                type="number"
                                                min="0"
                                                max="100"
                                                value={editForm.goalScore}
                                                onChange={(e) => setEditForm({...editForm, goalScore: e.target.value})}
                                            />
                                        ) : (
                                            <p>{subject.goalScore}</p>
                                        )}
                                    </div>
                                    <div className={`score-box actual ${status.status}`}>
                                        <p>실제 점수</p>
                                        <p>{subject.actualScore !== null ? subject.actualScore : '-'}</p>
                                    </div>
                                </div>

                                <div className="progress-section">
                                    <div className="progress-header">
                                        <span>진행도</span>
                                        <span>{subject.actualScore !== null ? `${Math.min(progress, 100).toFixed(0)}%` : '0%'}</span>
                                    </div>
                                    <div className="progress-bar">
                                        <div
                                            className={`progress-fill ${status.status}`}
                                            style={{ width: `${Math.min(progress, 100)}%` }}
                                        />
                                    </div>
                                </div>

                                <div className={`status-badge ${status.status}`}>
                                    <StatusIcon />
                                    <span>{status.message}</span>
                                </div>

                                {!isEditing && (
                                    <div className="score-input-section">
                                        <label>실제 시험 점수 입력</label>
                                        <input
                                            type="number"
                                            placeholder="시험 본 후 입력하세요"
                                            min="0"
                                            max="100"
                                            value={subject.actualScore !== null ? subject.actualScore : ''}
                                            onChange={(e) => handleUpdateScore(subject.id, e.target.value)}
                                        />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

ReactDOM.render(<GradeGoalChecker />, document.getElementById('root'));
ReactDOM.render(<AuthWrapper />, document.getElementById('root'));
